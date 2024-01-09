import { useState } from "react";
import { useGlobalContext } from "./context";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const buttonColors = [
  "bg-blue-300",
  "bg-green-300",
  "bg-yellow-300",
  "bg-purple-300",
  "bg-pink-300",
];

export default function Category() {
  const { searchTerm, setSearchTerm } = useGlobalContext();
  const categories = ["Nature", "Sports", "Technology", "Animals", "Science", "Travel"];
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [photos, setPhotos] = useState([]);

  const handleClick = async (category) => {
    try {
      const response = await fetch(`${url}&query=${category}`);

      if (!response.ok) {
        throw new Error("Could not retrieve photos");
      }

      const data = await response.json();
      setPhotos(data.results);

      setSelectedCategory(category);
      setSearchTerm("");
    } catch (error) {
      console.error("error fetching photos:", error);
    }
  };

  return (
    <section>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6  gap-2 md:gap-4  mx-auto mt-5 px-6 sm:px-12 md:px-12 lg:px-96">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`border border-gray-300 ${
              selectedCategory === category
                ? "bg-red-300"
                : buttonColors[index % buttonColors.length]
            } text-gray-700 focus:outline-none focus:ring focus:border-blue-300 mb-2 sm:mb-0`}
            onClick={() => handleClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {searchTerm ? null : (
        <div className="col-span-full mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 max-w-var(--max-width) mx-auto my-12 py-8 px-20 m-8">
            {photos.map((photo) => (
              <img
                key={photo.id}
                src={photo.urls.regular}
                alt={photo.alt_description}
                className="img h-40 sm:h-48 object-cover w-full"
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
