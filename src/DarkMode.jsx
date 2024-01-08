import React from "react";
import { useGlobalContext } from "./context";
import {FaSun, FaRegMoon} from 'react-icons/fa'

export default function DarkMode() {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className="toggle-container max-w-var(--max-width) mx-auto py-4 px-0 flex justify-end">
      <button
        className="dark-toggle bg-transparent border-transparent w-20 h-8 grid place-items-center cursor-pointer"
        onClick={toggleDarkTheme}
      >{isDarkTheme ? (
        <FaSun className="text-yellow-500 text-2xl" />

      ) : (
        <FaRegMoon className="toggle-icon text-violet-700 text-2xl" />
      )}</button>
    </section>
  );
}
