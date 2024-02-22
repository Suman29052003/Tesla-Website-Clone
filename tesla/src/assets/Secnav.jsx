import React from "react";
import { NavLink } from "react-router-dom";
import model3 from "../../public/Images/Tesla-Model-3-black.png"
import modelS from "../../public/Images/modelS.jpeg"
import modelX from "../../public/Images/modelX.jpeg"
import modelY from "../../public/Images/modelY.jpeg"
// import Larte from "../../public/Images/2015Larte.jpeg"
// import model3 from "../../public/Images/model3.jpeg"
// import model3 from "../../public/Images/model3.jpeg"
// import model3 from "../../public/Images/model3.jpeg"

export default function Secnav() {
  function reload(){
    window.location.reload();
  }
  return (
    <>
      {/* <div className=" flex justify-between w-full h-10 items-center fixed bg-transparent top-28 md:top-16 z-10"> */}
      <div className=" flex justify-between w-full h-10 items-center fixed bg-white top-28 md:top-16 z-10 ">
        <div className="logo p-2 md:p-8 cursor-pointer" onClick={reload}>
          <img
            className="h-auto w-28 inverte"
            src="https://th.bing.com/th/id/R.bedcbf54411c491c8369b0185c8a5a48?rik=lZj2jPylg5FXiw&pid=ImgRaw&r=0"
            alt=""
          />
        </div>
        <div className="links w-[60%] md:flex md:items-center md:justify-center md:gap-8 text-black md:font-semibold md:text-lg hidden">
          <span className="cursor-pointer">Vehicles</span>
          <span className="cursor-pointer">Energy</span>
          <span className="cursor-pointer">Charging</span>
          <span className="cursor-pointer">Disocver</span>
          <span className="cursor-pointer">Shop</span>
        </div>
        <div className="icons md:mr-8 md:w-[6%] md:flex md:items-center md:justify-center md:gap-3 text-black hidden">
          <NavLink to="/help"><span className="material-symbols-outlined cursor-pointer">help</span></NavLink>
          <span className="material-symbols-outlined cursor-pointer">
            language
          </span>
          <span className="material-symbols-outlined cursor-pointer">
            account_circle
          </span>
        </div>
        <div className="menuButton invert p-4 md:hidden">
          <NavLink to ="/menu"><span className="material-symbols-outlined">menu</span></NavLink>
        </div>
      </div>
      <div className="absolute top-[104px] bg-white w-full h-[17rem] text-black z-10 grid grid-cols-[70%_auto]  ">


        <div className="bg-red-400 flex flex-wrap">
        <div className="card flex flex-col items-center justify-center w-1/4">
            <img src={model3} alt="" className="h-32 w-auto"/>
            <h2>Model 3</h2>
            <div className=""><span>Learn</span><span>Order</span></div>
          </div>

          

        </div>


        <div className="bg-gray-400">

        </div>


      </div>
    </>
  );
}
