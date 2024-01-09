import React from "react";
import { useGlobalContext } from "./context";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

export default function Gallery() {
  const { searchTerm } = useGlobalContext();
  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    },
  });

  console.log(response);

  if (response.isLoading) {
    return <LoadingSpinner />;
  }

  if (response.isError) {
    return <div>Error! {response.error.message}</div>;
  }

  const results = response.data.results;

  return (
    <section className="image-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 max-w-var(--max-width) mx-auto my-12 py-8 px-20 m-8">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className="img h-40 sm:h-48 object-cover w-full"
          />
        );
      })}
    </section>
  );
}
