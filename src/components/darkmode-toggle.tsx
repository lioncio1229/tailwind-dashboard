"use client";

import { Sun, Moon } from "lucide-react";

export default function DarkmodeToggle() {
  return (
    <button
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-700 transition-colors duration-200"
      onClick={() => {
        const html = document.querySelector("html");
        if (html) {
          html.classList.toggle("dark");
          localStorage.setItem(
            "theme",
            html.classList.contains("dark") ? "dark" : "light"
          );
        }
      }}
    >
      <Sun className="hidden dark:block" size={20} />
      <Moon className="block dark:hidden" size={20} />
    </button>
  );
}
