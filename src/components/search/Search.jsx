import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
function Search() {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <p className=" text-2xl  font-medium">
        Get information about the conuntries.
      </p>

      <form class="flex items-center">
        <label for="voice-search" class="sr-only">
          Search
        </label>
        <div class="relative w-full">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <button className="pt-[2.5rem]  text-2xl text-gray-400">
              <AiOutlineSearch />
            </button>
          </div>
          <input
            type="text"
            id="voice-search"
            class="bg-gray-50 border py-[1.2rem]  w-[100%] md:w-[40rem] mt-10
            border-gray-300 text-gray-900 text-sm rounded-[2rem] focus:ring-blue-500 focus:border-blue-500  w-full pl-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            placeholder="Search by country name or region."
          />
        </div>
      </form>
    </div>
  );
}

export default Search;
