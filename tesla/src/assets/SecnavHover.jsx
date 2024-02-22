import React from 'react'

const SecnavHover = (props) => {
    const vehicles = [
        {
          title: "Model S",
          imgSrc: "Images/Tesla-Model-S.png",
        },
        {
          title: "Model 3",
          imgSrc: "Images/Tesla-Model-3.png",
        },
        {
          title: "Model X",
          imgSrc: "Images/Tesla-Model_X.png",
        },
        {
          title: "Model Y",
          imgSrc: "Images/Tesla-Model-Y.png",
        },
        {
          title: "Cyber Truck",
          imgSrc: "Images/cybertruck.png",
        },
        {
          title: "Help me Choose ",
          imgSrc: "Images/Tesla-Model-S.png",
        },
      ];
  return (
    <div>
        <div className="w-full text-xl font-medium text-center pt-2 md:hidden">Vehicle</div>
      <div className="absolute md:top-[104px] bg-white w-full md:h-[26rem] text-black z-10 md:grid grid-cols-[70%_auto]   ">
        <div className="bg-white md:flex md:flex-wrap justify-left items-center  md:h-[24rem]  md:border-r-2 border-gray-400">
          
          {
          vehicles.map((vehicle,index) => {
            return(
            <div className="card flex flex-row md:flex-col  items-center justify-around md:justify-center w-[90%]  md:w-1/4 object-fill  text-lg md:p-0 p-4"  key={index} >
              <img src={vehicle.imgSrc} alt="" className="h-auto w-36 md:w-48 drop-shadow-lg" />
              <h2 className="font-medium md:block hidden">{vehicle.title} </h2>
              {/* <br className='md:hidden' /> */}
              <div className="md:text-center text-left flex flex-col md:flex-row items-start md:items-center justify-center">
              <h2 className="font-medium md:hidden block">{vehicle.title} </h2>
              <div className='flex flex-row '>
                <span className="underline px-1 cursor-pointer hover:font-semibold">Learn</span>
                <span className="underline px-1 cursor-pointer hover:font-semibold">Order</span>
                </div>
              </div>
            </div>)
          })
          }

        </div>
<div className="w-full border-b-2 border-gray-400 md:hidden block"></div>
        <div className="bg-white flex flex-col md:left-0 left-8 md:w-[50%] md:h-[19rem] justify-center items-start md:items-center relative">
            <ul className="text-gray-400 font-semibold ">
              <li className="p-4 md:p-1 hover:underline hover:scale-105 cursor-pointer">Inventory</li>
              <li className="p-4 md:p-1 hover:underline hover:scale-105 cursor-pointer">Used Cars</li>
              <li className="p-4 md:p-1 hover:underline hover:scale-105 cursor-pointer">Demo Drive</li>
              <li className="p-4 md:p-1 hover:underline hover:scale-105 cursor-pointer">Trade In</li>
              <li className="p-4 md:p-1 hover:underline hover:scale-105 cursor-pointer">Compare</li>
              <li className="p-4 md:p-1 hover:underline hover:scale-105 cursor-pointer">Help Me Charge</li>
              <li className="p-4 md:p-1 hover:underline hover:scale-105 cursor-pointer">Fleet</li>
              <li className="p-4 md:p-1 hover:underline hover:scale-105 cursor-pointer">Semi</li>
              <li className="p-4 md:p-1 hover:underline hover:scale-105 cursor-pointer">Rodster</li>
            </ul>             
        </div>
          </div>
    </div>
  )
}

export default SecnavHover
