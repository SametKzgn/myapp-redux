import React from "react";
import { useEffect, useState } from "react";
import { MdLightMode, MdOutlineNightlight } from "react-icons/md";
import "../../App.css";

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
          <div className="flex flex-row py-5 px-[2rem] gap-5">
            <div className="flex  flex-col items-center gap-3  justify-center">
              <img
                className="w-[100%] rounded-xl "
                src="https://cdn.pixabay.com/photo/2016/10/27/12/55/turkish-flag-1774834_960_720.png"
              />
              <p>Turkey</p>
            </div>
            <div className="grid grid-rows-5 grid-flow-col gap-4  border-slate-500">
              <p className=" border-slate-200 w-[13rem] h-[4rem] rounded-xl  border">
                dfsdfsdfsdfg
              </p>
              <p className="border-slate-200 w-[13rem] h-[4rem] rounded-xl  border">
                dfsdfsdfsdfg
              </p>
              <p className="border-slate-200 w-[13rem] h-[4rem] rounded-xl  border">
                dfsdfsdfsdfg
              </p>
              <p className="border-slate-200 w-[13rem] h-[4rem] rounded-xl  border">
                dfsdfsdfsdfg
              </p>
              <p className="border-slate-200 w-[13rem] h-[4rem] rounded-xl  border">
                dfsdfsdfsdfg
              </p>
              <p className="border-slate-200 w-[13rem] h-[4rem] rounded-xl  border">
                dfsdfsdfsdfg
              </p>
              <p className="border-slate-200 w-[13rem] h-[4rem] rounded-xl  border">
                dfsdfsdfsdfg
              </p>
              <p className="border-slate-200 w-[13rem] h-[4rem] rounded-xl  border">
                dfsdfsdfsdfg
              </p>
              <p className="border-slate-200 w-[13rem] h-[4rem] rounded-xl  border">
                dfsdfsdfsdfg
              </p>
              <p className="border-slate-200 w-[13rem] h-[4rem] rounded-xl  border">
                dfsdfsdfsdfg
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-[1px] mt-10 border-gray-300 dark:border-gray-800 " />

      <div className=" flex flex-col items-center justify-center mt-[5rem]">
        <p className="text-start"> Most Popular Cities in Turkey</p>
        <div className="  bg-white rounded-2xl   w-[34rem] sm:w-[55rem] h-[100%]   ">
          sdfds
        </div>
      </div>
    </div>
  );
}

export default Nav;
