import React from "react";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

export default function Main(props) {
  return (
    <>
      <div className="main relative top-[5rem] md:top-12 h-[100vh] p-4 bg-no-repeat bg-cover bg-center snap-y snap-center" style={{ backgroundImage: `url(${props.imgSrc})` }}>
        <div className="text-white text-center my-4 top-[6rem] font-semibold relative">
          <span className="text-5xl w-full">
            Model <span className="text-[aqua] drop-shadow-xl">{props.model}</span>
          </span>
          <h4 className="text-2xl w-full my-4">Lease starting at $379/mo*</h4>
        </div>

        <div className="w-full  md:mt-[27rem] flex justify-center items-end mt-[50vh]">
          <div className="bg-[#cfcecf] w-60 h-10 m-4 p-4 rounded-md flex items-center justify-center cursor-pointer hover:scale-105">
          <NavLink to ="/custom-order"><span className=" text-[16px] md:text-lg font-semibold">Custom Order</span></NavLink>
          </div>
          <div className="bg-cyan-600 w-60 h-10 m-4 p-4 rounded-md flex items-center justify-center text-white cursor-pointer hover:scale-105">
            <NavLink to = "/demodrive" ><span className="md:text-lg text-[16px] font-semibold">Demo Drive</span></NavLink>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
