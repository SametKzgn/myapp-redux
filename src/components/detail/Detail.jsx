import React from "react";
import { useEffect, useState } from "react";
import { MdLightMode, MdOutlineNightlight } from "react-icons/md";

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

      <div className="flex items-center justify-center mt-[5rem]">
        <div className=" bg-white rounded-2xl  w-[34rem] sm:w-[55rem] h-[100%]  ">
          <div className="flex flex-row">

          <div className="flex flex-col items-center justify-center">
            <img
              className="w-[7rem] h-[5rem] "
              src="https://cdn.pixabay.com/photo/2016/10/27/12/55/turkish-flag-1774834_960_720.png"
              />
            <p>turkey</p>
          </div>
          <div className="flex flex-col border-slate-500">
            <input className="border-slate-500" type="text" name="" id="" />
            
            </div>

              </div>

        </div>
      </div>
    </div>
  );
}

export default Nav;
