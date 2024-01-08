import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const savedTheme = localStorage.getItem("theme");
  const [isDarkTheme, setIsDarkTheme] = useState(savedTheme === "dark");
  const [searchTerm, setSearchTerm] = useState("nature");

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    const body = document.querySelector("body");
    body.classList.toggle("dark", newDarkTheme);

    localStorage.setItem("theme", newDarkTheme ? "dark" : "light");
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.toggle("dark", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
