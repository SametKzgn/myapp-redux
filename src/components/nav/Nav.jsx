import React from "react";
import { useEffect, useState } from "react";
/* "import { MdLightMode, MdOutlineNightlight } from "react-icons/md";" */
function Nav() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="h-screen bg-white dark:text-white dark:bg-black ">
      <div className="flex flex-row  justify-between">
        <p>Rest Countries</p>
        <button
          className="bg-green-200 p-4 rounded-3xl"
          onClick={handleThemeSwitch}
        >
          dark mode
        </button>
      </div>
    </div>
  );
}

export default Nav;
