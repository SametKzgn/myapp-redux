import React from "react";
import { useEffect, useState } from "react";
import { MdLightMode, MdOutlineNightlight } from "react-icons/md";
import Filter from "../filter/Filter";
import Items from "../items/Items";
import Search from "../search/Search";
function Nav() {
  const [theme, setTheme] = useState("light"); //reducer a at

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark"); //actıon yap
  };

  return (
    <div className="h-screen text-center transition-all duration-500 bg-[#e5e7eb] dark:text-white dark:bg-black ">
      <div className="  flex flex-row py-8 px-5 justify-between items-center">
        <p className=" text-2xl font-bold">Rest Countries</p>
        <button
          className="transition-all duration-400 text-2xl dark:text-white"
          onClick={handleThemeSwitch}
        >
          {theme === "dark" ? <MdLightMode /> : <MdOutlineNightlight />}
        </button>
      </div>
      <hr className="border-[1px] border-gray-300 dark:border-gray-800 " />
      <Search/>
      <Filter/>
      <Items/>
    </div>
  );
}

export default Nav;
