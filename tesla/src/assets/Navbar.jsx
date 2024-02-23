import React, { useEffect, useState } from 'react'

export default function Navbar() {

  const text =["Eligible buyers now receive $7,500 off the purchase price of new 2024 Model Y and Model X Dual Motor. Applied at time of delivery.",
              "Be among the first to get behind the wheel of our brand new Model 3."]

  const [currentIndex,setCurrentIndex] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrentIndex((prevIndex)=>(prevIndex+1) % text.length)
        },8000) ;

  },[])

  return (
    <div>
      <div className="nav w-full bg-gradient-to-b from-[#2a3a65] to-black h-28 md:h-16 p-2  md:flex items-center justify-around fixed top-0 z-10  ">
          <div className="text-white font-bold md:text-xl text-xs">
            <span>$7,500 Federal Tax Credit</span>
          </div>
          <div className="text-white text-justify text-xs my-1 md:text-sm font-bold   ">
            <span className="">{text[currentIndex]}</span>
          </div>
          <div className="text-white underline text-xs md:text-lg my-1 font-bold">
            <span className='cursor-pointer'>See Details</span>
          </div>
      </div>
    </div>

    
  )
}
