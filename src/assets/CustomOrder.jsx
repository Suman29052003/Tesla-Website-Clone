import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
const CustomOrder = () => {
  const [active, setActive] = useState("Purchase");
  const [border, setBorder] = useState("Rear");
  const [paint,setPaint] = useState ("black")
  return (
    <>
      <Navbar />
      <div className=" w-full  relative top-[130px] md:top-[80px] flex flex-col items-center justify-center">
      
        <div className="img w-[70%] h-[10vh] flex items-center justify-center mt-[8rem] md:p-[5rem] mb-[4rem] transition ease-in-out duration-1000">
            {
                paint === "black"?(<img src="Images/Tesla-Model-3-black.png" alt="" />): 
                paint === "white"?(<img src="Images/Tesla-Model-3-white.png"/>):
                paint === "blue"?(<img src="Images/Tesla-Model-3-blue.png" alt=""/>) : 
                <img src="Images/Tesla-Model-3-red.png"></img>
            }
          
        </div>
        <div className="text-2xl w-full text-center relative top-4 p-2 font-semibold">Paint</div>
        <div className="paint md:w-[30%] flex items-center justify-around p-2 mt-5 w-[90%] ">
            <div className="black bg-black h-[50px] w-[50px] rounded-full border-black border-2 cursor-pointer" onClick={()=>setPaint('black')}>

            </div>
            <div className="white bg-white h-[50px] w-[50px] rounded-full border-black border-2 cursor-pointer" onClick={()=>setPaint('white')}>

            </div>
            <div className="red bg-red-500 h-[50px] w-[50px] rounded-full border-black border-2 cursor-pointer" onClick={()=>setPaint('red')}>

            </div>
            <div className="blue bg-blue-500 h-[50px] w-[50px] rounded-full border-black border-2 cursor-pointer" onClick={()=>setPaint('blue')}>

            </div>
        </div>
        <div className="txt flex flex-col w-full items-center justify-center  ">
          <span className="text-4xl font-semibold p-2">Model Y</span>
          <span className="p-2 text-lg">Est Delivery : Feb - Mar 2024</span>
          <span className="flex items-center p-2 gap-2 text-lg ">
            <span className="material-symbols-outlined text-blue-500">
              error
            </span>
            <span className="hover:underline">Enter Delivery Zip Code</span>
          </span>
        </div>
        <div className="p-4 w-[80%] bg-[#ddd] m-auto h-14 rounded-md flex items-center justify-between md:w-[40%]">
          <div
            className={` p-3 rounded-md w-[40%] text-center ${
              active === "Purchase" ? "bg-white" : ""
            } `}
            onClick={() => setActive("Purchase")}
          >
            <span className="font-medium cursor-pointer">Purchase Pricing</span>
          </div>
          <div
            className={` p-3 rounded-md w-[40%] text-center ${
              active === "Savings" ? "bg-white" : ""
            }`}
            onClick={() => setActive("Savings")}
          >
            <span className="font-medium cursor-pointer ">Probable Savings*</span>
          </div>
        </div>
        <div className="flex w-[95%] item-center justify-evenly p-4">
          <div className="range flex flex-col text-center">
            <span className="text-2xl font-semibold">270 mi</span>
            <span>Range (EPA est.) </span>
          </div>
          <div className="top-speed flex flex-col text-center">
            <span className="text-2xl font-semibold">125 mph</span>
            <span>Top Speed</span>
          </div>
          <div className="mph flex flex-col text-center">
            <span className="text-2xl font-semibold">5.8 sec</span>
            <span>0 - 60 mph</span>
          </div>
        </div>
        <div className="px-8 md:w-[80%] w-full">
            <div className="pb-5 text-xl font-medium">Rear-Wheel-Drive</div>
            <div className={`${border === "Rear"? 'border-blue-400':"text-gray-400"} border-2 flex p-2 text-lg font-medium justify-between rounded-md`} onClick={()=>setBorder('Rear')} >
                <span className="">Model 3</span>
                {
                    active === "Purchase"?<span>$38,990*</span>:<span>$35,990*</span>
                }
            </div>
        </div>
        <div className="px-8 pt-6 md:w-[80%] w-full" >
            <div className="pb-5 text-xl font-medium">Dual Motor All Wheel Drive</div>
            <div className={`${border === "All"?"border-blue-400":"text-gray-400"} border-2 flex p-2 text-lg font-medium justify-between rounded-md`}  onClick={()=>setBorder('All')}>
                <span className="">Model 3 Long Range</span>
                {
                    active === "Purchase"?<span>$47,490*</span>:<span>$44,490*</span>
                }
                
            </div>
        </div>
        <div className="text-sm text-center p-8 text-gray-400 w-[100%] flex flex-col items-center justify-center">
            {
                active === "Purchase"?<p>All Prices are shown without incentives or est. 3 year Gas</p>:<p>*Prices above include potential incentives and 3 year Gas</p>
            }
            
            <span>Savings of $3000 <span>See Details</span></span>
        </div>
        
      </div>
    </>
  );
};

export default CustomOrder;
