import React from "react";
import { useEffect, useState } from "react";
import { MdLightMode, MdOutlineNightlight } from "react-icons/md";
import Filter from "../filter/Filter";
import Items from "../items/Items";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {countryItem} from '../../redux/actions/countryAction'

function Nav() {
  const [search,setSearch]=useState('');

  const [theme, setTheme] = useState("light"); //reducer a at
  const dispatch = useDispatch();
  const tasks = useSelector((state)=>state.country.countryTasks)

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

    useEffect(() => {
      dispatch(countryItem());
      
  }, []);

  return (
    <div className="h-[100%] text-center transition-all duration-500 bg-[#e5e7eb] dark:text-white dark:bg-black ">
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

      <div className="flex flex-col justify-center items-center mt-10">
      <p className=" text-2xl  font-medium">
        Get information about the conuntries.
      </p>

      <form className="flex items-center">
        <label htmlFor="voice-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <button className="pt-[2.5rem]  text-2xl text-gray-400">
              <AiOutlineSearch />
            </button>
          </div>
          <input
            type="text"
            id="voice-search"
            className="bg-gray-50 border py-[1.2rem]  w-[100%] md:w-[40rem] mt-10
            border-gray-300 text-gray-900 text-sm rounded-[2rem] focus:ring-blue-500 focus:border-blue-500  w-full pl-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            placeholder="Search by country name or region."
            onChange={(e)=> setSearch(e.target.value)}
          />
        </div>
      </form>
    </div>  
    
    


      <Filter/>
      
<div className="flex flex-col gap-4 mt-5">
  
  {
    tasks.filter((task)=>{
      return search.toLocaleLowerCase()===''? task:task.name.common.toLocaleLowerCase().includes(search);
    }).map((task,i)=>(
      <Items {...task} key={i}/>
    ))
  }
  {
  tasks.map((task , i) => (
    <Items {...task} key={i}/>// ... amacı butun degerlerı bır arada getırmesı yanı ulke adı sehfı vs bunları tek tek yazmak zorundak kalırdın
  ))
}
</div>

    </div>
  );
}

export default Nav;
