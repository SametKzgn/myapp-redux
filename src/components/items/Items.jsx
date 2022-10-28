import React from "react";
import { Link } from "react-router-dom";

function Items(props) {
  return (
    <div className="flex flex-col   justify-center items-center ">
      <div className="bg-white rounded-2xl gap-2  w-[34rem] sm:w-[40rem] h-[8rem] flex items-center">
        <Link
          to="/detail"
          className="flex items-center  justify-start ml-[2rem] gap-[2.5rem]  dark:text-black"
        >
          <img className="w-[7rem] h-[5rem] " src={props.flags.png} />
          <b>{props.name.common}</b>  
          <div className="grid grid-rows-2 grid-flow-col gap-1">
            <p className="text-slate-300 text-xs"> region</p>
            <p >{props.continents}</p>
            <p className="text-slate-300 text-xs"> Are km</p>
            <p>{props.population}</p>
            <p className="text-slate-300 text-xs">population</p>
            <p>{props.area}</p>
          
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Items;
