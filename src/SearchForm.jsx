import React from "react";
import { useGlobalContext } from "./Contexts";

export default function SearchForm() {
  const { setSearchTerm, setSelectedCategory } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
    setSelectedCategory(null);
  };
  return (
    <form className="text-center" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="nature"
        className="border border-black py-2 px-4 text-gray-500 w-[496px]"
      />
      <button
        type="submit"
        className="border border-black bg-red-500 text-white px-4 py-2"
      >
        Search
      </button>
    </form>
  );
}
