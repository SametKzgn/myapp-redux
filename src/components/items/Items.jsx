import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom"
import { countryItem } from "../../redux/actions/countryAction";

function Items() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countryItem());
    
}, []);
  
const aaa = useSelector((state)=>state.country.countryTasks)

console.log(aaa)

  return (
    <div className="mt-[6rem] flex flex-col  gap-3 justify-center items-center ">
     
      <div className="bg-white rounded-2xl  w-[34rem] sm:w-[40rem] h-[8rem] flex items-center">
        <Link to="/detail" className="flex items-center  justify-start ml-[2rem] gap-[2.5rem]  dark:text-black">
          <img
            className="w-[7rem] h-[5rem] "
            src="https://cdn.pixabay.com/photo/2016/10/27/12/55/turkish-flag-1774834_960_720.png"/>
          <p>Turkey</p>
          <p>Asia</p>
          <p>84,545,115</p>
          <p>84,545,115</p>
        </Link>
      </div>

      

  
    </div>
  );
}

export default Items;
