import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SecnavHover from "./SecnavHover";



export default function Secnav() {
  function reload() {
    window.location.reload();
  }

  const [onMouse,setOnMouse] = useState(false);
  const [dropDownVisible,setDropDownVisible] = useState(false);
  
  return (
    <>
      {/* <div className=" flex justify-between w-full h-10 items-center fixed bg-transparent top-28 md:top-16 z-10"> */}
      <div className={` flex justify-between w-full h-10 items-center fixed ${onMouse===true?"bg-white":"bg-transparent"} top-28 md:top-16 z-10 `}>
        <div className="logo p-2 md:p-8 cursor-pointer" onClick={reload}>
          <img
            className={`h-auto w-28 ${onMouse==true?"":"invert"}`}
            src="https://th.bing.com/th/id/R.bedcbf54411c491c8369b0185c8a5a48?rik=lZj2jPylg5FXiw&pid=ImgRaw&r=0"
            alt=""
          />
        </div>
        <div className={`links w-[60%] md:flex md:items-center md:justify-center md:gap-8 ${onMouse===true?"text-black":"text-white"} md:font-semibold md:text-lg hidden`}>
          <span className="cursor-pointer " onMouseEnter={()=>{setOnMouse(true);setDropDownVisible(true)}} onMouseLeave={()=>{setOnMouse(false);setDropDownVisible(false)}}>Vehicles</span>
          <span className="cursor-pointer">Energy</span>
          <span className="cursor-pointer">Charging</span>
          <span className="cursor-pointer">Disocver</span>
          <span className="cursor-pointer">Shop</span>
        </div>
        <div className={`icons md:mr-8 md:w-[6%] md:flex md:items-center md:justify-center md:gap-3 ${onMouse===true?"text-black":"text-white"} hidden`}>
          <NavLink to="/help">
            <span className="material-symbols-outlined cursor-pointer">
              help
            </span>
          </NavLink>
          <span className="material-symbols-outlined cursor-pointer">
            language
          </span>
          <span className="material-symbols-outlined cursor-pointer">
            account_circle
          </span>
        </div>
        <div className="menuButton invert p-4 md:hidden">
          <NavLink to="/menu">
            <span className="material-symbols-outlined">menu</span>
          </NavLink>
        </div>
      </div>


          {
            dropDownVisible && (
      <SecnavHover/>
          )}

    </>
  );
}


