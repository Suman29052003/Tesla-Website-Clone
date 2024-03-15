import React, { useState } from "react";
import Navbar from "./Navbar";
import Vehicles from "./Vehicles";
import Energy from "./Energy";
import { NavLink } from "react-router-dom";
const Help = () => {
  const [vehicle, setVehicle] = useState("vehicle");
  const [active, setActive] = useState(false);
  return (
    <>
      <Navbar />
      <div className="help ">
        <div
          className="searchSection w-full h-[21rem] bg-cover bg-no-repeat bg-center flex justify-center items-center text-xl "
          style={{ backgroundImage: "url(Images/helpSectionBG.jpg)" }}
        >
          <div className="search w-[90%] md:w-[30%] h-12 bg-white flex items-center justify-start p-3 gap-2 rounded-lg relative top-[13rem] md:top-0 ">
            <span className="material-symbols-outlined invert bg-gray-500 rounded-full p-1 ">
              search
            </span>
            <input
              type="text"
              placeholder="search support"
              className="border-0 outline-0 bg-transparent"
            />
          </div>
        </div>
        <div className="trending relative top-20 md:top-2 md:p-24 p-20">
          <span className="text-3xl text-black font-semibold">
            Trending Toics
          </span>
          <div className="trendingLi grid md:flex list-none gap-6 md:gap-12 py-8 text-lg flex-wrap">
            <li className="hover:underline hover:text-blue-800 cursor-pointer">
              Add a Vehicle
            </li>
            <li className="hover:underline hover:text-blue-800 cursor-pointer">
              Supercharging credit
            </li>
            <li className="hover:underline hover:text-blue-800 cursor-pointer">
              Leasing
            </li>
            <li className="hover:underline hover:text-blue-800 cursor-pointer">
              IRA clean vehicle
            </li>
            <li className="hover:underline hover:text-blue-800 cursor-pointer">
              Cost of Solar
            </li>
            <li className="hover:underline hover:text-blue-800 cursor-pointer">
              Troubleshoot Solar
            </li>
          </div>
        </div>
        <div className="vehiclesAndEnergy m-auto w-full text-center">
          <span
            className="vehicles p-8 text-3xl font-semibold md:px-48 cursor-pointer"
            onClick={() => setVehicle("vehicle")}
          >
            Vehicle
          </span>
          <span
            className=" energy p-8 text-3xl font-semibold md:px-48 cursor-pointer"
            onClick={() => setVehicle("energy")}
          >
            Energy
          </span>
        </div>
        <div className="underline w-[80%] h-[1px] bg-[#b1a9a975] m-auto my-2"></div>

        {vehicle === "vehicle" ? <Vehicles /> : <Energy />}

        <div className="w-[100%] flex flex-col items-center justify-center">
          <div className="flex flex-col  md:grid md:grid-cols-2 w-[60%] gap-8 text-justify justify-center items-center">
            <div>
              <img
                src="https://www.tesla.com/sites/default/files/images/support/new_design/video_walkthrough_md.jpg?10202021"
                srcset="https://www.tesla.com/sites/default/files/images/support/new_design/video_walkthrough_md.jpg?10202021, https://www.tesla.com/sites/default/files/images/support/new_design/video_walkthrough_md@2x.jpg?10202021 2x"
                alt="video walk through"
              />
            </div>
            <div className="">
              <span className="p-2 text-lg font-bold">Video Guides</span>
              <p className="p-2">
                View tutorials and videos designed to educate you on the basics
                of your vehicle and energy products.
              </p>
              <span className="p-2 text-sm underline text-blue-400">
                View Video Guides
              </span>
              <p className="p-2">
                Explore interactive videos designed to give you a more in-depth
                look at your vehicle and its features.
              </p>
              <span className="p-2 text-sm underline text-blue-400">
                Explore Interactive Videos
              </span>
            </div>
          </div>
          <div className="flex flex-col  md:grid md:grid-cols-2 w-[60%] gap-8 text-justify justify-center  mt-4">
            <div className="flex flex-col items-end">
              <span className="p-2 text-lg font-bold">Getting Started</span>
              <p className="p-2 text-right">
                Learn about your Tesla ownership experience – including
                designing and taking delivery of your vehicle.
              </p>
              <span className="p-2 text-sm ">Ordering a new Vehicle</span>
              <span className="p-2">Orering a used vehicle</span>
              <span className="p-2">Prepare for delivery day</span>
              <span className="p-2">Taking Delivery</span>
              <span className="p-2">After Taking Delivery</span>
              <span className="p-2">Find US</span>
            </div>
            <div>
              <img
                src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/getting_started_Asset.jpg"
                srcset="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/getting_started_Asset.jpg"
                alt="video walk through"
              />
            </div>
          </div>
        </div>

        <div className="contact w-full h-[40vh] bg-[#f4f4f4] flex flex-col items-center justify-center mt-4">
          <span className=" text-lg md:text-3xl font-semibold p-2">
            Can’t find what you are looking for?
          </span>
          <p className="w-[95%] md:w-[60%] text-center p-2">
            You can now get answers to questions about your vehicle, account and
            more in the Tesla app. Select ‘Need More Help’ which can be found
            within the 'Help' menu under your profile.
          </p>
          <span className="p-4 text-center">
            If you still can't find what you're looking for, contact customer
            support directly.
          </span>
          <div className="btn bg-white w-36 h-10 border-2 flex items-center justify-center rounded-md cursor-pointer">
            <button>Contact Us</button>
          </div>
        </div>

        <div className="footer w-full bg-[#393c41] h-[50vh] flex text-white list-none md:flex-row flex-col justify-center text-left">
          <div className=" w-[70%] md:h-[47vh] h-[8vh] text-center p-8 md:border-r-2 md:border-b-2">
            <a href="#">
              <span>
                Your closet store and service center is Dubai Sheikh Zay ...
              </span>
            </a>
            <span className="ml-8">Hatta Supercharger</span>
          </div>
          <div className="md:w-[30%] h-[47vh] md:grid md:grid-cols-2 md:grid-rows-2 md:border-b-2 flex justify-center items-center w-[100%]">
            <div className=" m-auto ">
              <li>Model S</li>
              <li>Model 3</li>
              <li>Model X</li>
              <li>Model Y</li>
              <li>Cybertruck</li>
            </div>
            <div className=" m-auto">
              <li>Order a Tesla</li>
              <li>Incentivies</li>
              <li>Test drive events</li>
              <li>Accessories</li>
            </div>
            <div className=" m-auto">
              <li>About</li>
              <li>Careers</li>
              <li>Get</li>
              <li>Newsletter</li>
              <li>Contact</li>
            </div>
          </div>
        </div>
        <div className="bg-[#393c41] text-white space-x-1 h-12 flex items-center justify-around py-6">
          <span >Tesla &copy; 2024 |  Clone Website Made by - Suman</span>
        </div>
      </div>
    </>
  );
};

export default Help;
