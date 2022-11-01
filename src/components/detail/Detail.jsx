import React, {useEffect, useState} from "react";
import {MdLightMode, MdOutlineNightlight} from "react-icons/md";
import {Link, useParams} from "react-router-dom";
import {countryItem, getCountry, getNeighbour} from "../../redux/actions/countryAction";
import {getPopular} from "../../redux/actions/countryAction";
import {useDispatch, useSelector} from "react-redux";

function Nav() {
    const dispatch = useDispatch();
    const [theme, setTheme] = useState("light");
    const {name} = useParams();
    const {countryTask} = useSelector(state => state.country);
    const {popularTask} = useSelector(state => state.country);
    const {neighbourItemTask} = useSelector(state => state.country);

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

    useEffect(() => {
        dispatch(getCountry(name))
        dispatch(getPopular(name))
        dispatch(countryItem(name))//buraya popüler şehirler için bir tane daha dispatch çağıracaksın
        dispatch(getNeighbour(name))

        return () => { //component ekrandan kalkacağı zaman çalışacak olan alan
            dispatch({type: 'CLEAR'}) //dispatch ile state'i temizliyor
        }
    }, [name])

    return (
        <div
            className="h-screen text-center transition-all h-[100%] duration-500 bg-[#e5e7eb] dark:text-white  dark:bg-black ">
            <div className="  flex flex-row py-8 px-5 justify-between items-center">
                <Link to='/' className=" text-2xl font-bold">Rest Countries</Link>
                <button
                    className="transition-all duration-400 text-2xl dark:text-white"
                    onClick={handleThemeSwitch}
                >
                    {theme === "dark" ? <MdLightMode/> : <MdOutlineNightlight/>}
                </button>
            </div>
            <hr className="border-[1px] border-gray-300 dark:border-gray-800 "/>

            <div className="flex items-center justify-center mt-[5rem]">
                <div className=" bg-white rounded-2xl  w-[34rem] sm:w-[55rem] h-[100%]  ">
                    <div className="flex flex-row py-5 px-[2rem] gap-5">
                        <div className="flex  flex-col items-center gap-3  justify-center">
                            <img
                                className="w-[100%] rounded-xl "
                                src={countryTask?.flags?.png}
                            />
                            <p className="font-bold dark:text-black">{countryTask?.name?.common}</p>
                        </div>
                        <div className="grid dark:text-black grid-rows-5 grid-flow-col gap-4  border-slate-500">

                            <div className=" border-slate-200 w-[13rem] h-[4rem] rounded-xl  border">
                                <p className=" font-bold text-[#797f8c] mt-[4px] ">NATIVE NAME</p>
                                <p className="font-bold">
                                    {countryTask?.name?.common}
                                </p>

                            </div>
                            <div className="font-bold border-slate-200 w-[13rem] h-[4rem] rounded-xl  border">
                                <p className="text-[#797f8c] mt-[4px] ">CAPITAL</p>
                                {countryTask?.capital}
                            </div>
                            <div className="font-bold border-slate-200 w-[13rem] h-[4rem] rounded-xl  border">
                                <p className="text-[#797f8c] mt-[4px] ">AREA KM²</p>
                                {countryTask?.area}
                            </div>
                            <div className="font-bold border-slate-200 w-[13rem] h-[4rem] rounded-xl  border">
                                <p className="text-[#797f8c] mt-[4px] ">CALLING CODE</p>
                                {countryTask?.idd?.root}
                            </div>
                            <div className="font-bold border-slate-200 w-[13rem] h-[4rem] rounded-xl  border">
                                <p className="text-[#797f8c] mt-[4px] ">CURRENCY</p>
                                {countryTask?.currencies?.TRY?.name}
                            </div>
                            <div className="font-bold border-slate-200 w-[13rem] h-[4rem] rounded-xl  border">
                                <p className="text-[#797f8c] mt-[4px] ">NATIVE NAME</p>
                                {countryTask?.name?.common}
                            </div>
                            <div className="font-bold border-slate-200 w-[13rem] h-[4rem] rounded-xl  border">
                                <p className="text-[#797f8c] mt-[4px] ">REGION</p>
                                {countryTask?.region}
                            </div>
                            <div className="font-bold border-slate-200 w-[13rem] h-[4rem] rounded-xl  border">
                                <p className="text-[#797f8c] mt-[4px] ">POPULATION</p>
                                {countryTask?.population}
                            </div>
                            <div className="font-bold border-slate-200 w-[13rem] h-[4rem] rounded-xl  border">
                                <p className="text-[#797f8c] mt-[4px] ">GINI</p>
                                {countryTask?.tld}
                            </div>
                            <div className="font-bold border-slate-200 w-[13rem] h-[4rem] rounded-xl  border">
                                <p className="text-gray-400 mt-[4px] ">TLD</p>
                                {countryTask?.tld}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-[1px] mt-10 border-gray-300 dark:border-gray-800 "/>

            <div className=" flex flex-col items-center justify-center mt-[5rem]">

                <p className=" font-semibold text-2xl mb-3">Most Popular Cities in  {countryTask?.name?.common}</p>
                <div
                    className="grid dark:text-black grid-rows-3 grid-flow-col gap-4 py-4 px-4  bg-white rounded-2xl   w-[34rem] sm:w-[55rem] h-[100%]   ">
                    {popularTask?.map(popularTask => (
                        <div
                            className="flex items-center gap-5 border-slate-200 w-[20rem] h-[100%] rounded-xl border-2slate-200 w-[20rem] h-[100%] rounded-xl border-2">
                            <img className="rounded-full w-20  h-20"
                                 src={popularTask?.images[0].medium} alt=""/>

                            <div className="flex flex-col">
                                <p>
                                    <p>{popularTask?.id}</p>
                                </p>

                                <p className="text-[9px] w-fit  rounded-[2px] bg-[#e5e7eb]">SCORE:{popularTask?.score}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <hr className="border-[1px] mt-10 border-gray-300 dark:border-gray-800 "/>

            <div className=" flex flex-col items-center justify-center mt-[5rem]">

                <p className=" font-semibold text-2xl mb-3">Neighbour Countries of {countryTask?.name?.common}</p>
                <div className="grid dark:text-black grid-rows-3 grid-flow-col gap-4 py-4 px-4  bg-white rounded-2xl   w-[34rem] sm:w-[55rem] h-[100%]   ">
                    {neighbourItemTask?.map(borders => (
                    <div
                        className="flex items-center gap-5 border-slate-200 w-[20rem] h-[100%] rounded-xl border-2slate-200 w-[20rem] h-[100%] rounded-xl border-2">
                        <img className="rounded-full w-20  h-20"
                             src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f6/60/caption.jpg?w=700&h=500&s=1"
                             alt=""/>

                        <div className="flex flex-col items-start">



                            <p>sdfsd</p>
                            <div className="flex flex-row gap-1">
                                <div className="text-[9px] w-14 flex flex-row gap-1  rounded-[2px] bg-[#38bdf8]">

                                    <p className="text-white text-[8px]">REGION</p>
                                    <p>Asia</p>
                                </div>
                                <div className="text-[9px] w-20  flex flex-row gap-1  rounded-[2px] bg-[#60a5fa]">
                                    <p className="text-white text-[8px]">POPULATION</p>
                                    <p>Asia</p>
                                </div>
                                <div className="text-[9px] w-16  flex flex-row gap-1  rounded-[2px] bg-[#828df9]">
                                    <p className="text-white text-[8px]">AREA KM</p>
                                    <p> {neighbourItemTask?.area}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    ))}
                </div>

            </div>

        </div>);
}

export default Nav;
