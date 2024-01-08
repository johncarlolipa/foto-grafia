import React from "react";
import DarkMode from "./DarkMode";
import SearchForm from "./SearchForm";
import Gallery from "./Gallery";
import Category from "./Category";

export default function App() {
  return (
    <main>
      <DarkMode />
      <SearchForm />
      <Category />
      <Gallery />
    </main>
  );
}
