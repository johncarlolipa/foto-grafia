import { useState } from "react";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

export default function Category() {
  const categories = ["Nature", "Sports", "Technology", "Animals", "Science"];
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section>
      <div className="grid grid-cols-3 md:grid-cols-5  gap-4 mx-auto mt-5 px-96">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`border border-gray-300 ${
              selectedCategory === category ? "bg-red-300" : "bg-gray-100"
            } text-gray-700 hover:bg-red-200 focus:outline-none focus:ring focus:border-blue-300`}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}
