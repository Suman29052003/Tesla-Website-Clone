import React, { useState } from "react";
import Navbar from "./Navbar";

const DemoDrive = () => {
  const [border, setBorder] = useState("Model S");
  const [pin,setPin] = useState();

  function handlePin(){
    setPin("");
  }

  const[firstName,setFirstName] = useState();
  const[lastName,setLastName] = useState();
  const [email,setEmail] = useState();
  const [phone,setPhone] = useState();
  const [checkbox,setCheckBox] = useState("");
 

  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col justify-center items-center ">
        <div className="heading text-2xl md:text-4xl font-bold flex w-full item-center justify-center relative md:mt-[5rem] mt-[6rem] md:p-10 p-8 text-gray-400">
          <span className="">Schedule a Demo Drive</span>
        </div>
        <div className="flex flex-col md:flex-row  w-[90%] md:w-[55%] items-start  md:justify-around pl-6 md:text-center  md:text-md font-medium ">
          <div className="flex md:flex-col p-3 md:p-0">
            <span className="material-symbols-outlined pr-3">local_taxi</span>
            <span>30 Minute Demo Drive</span>
          </div>
          <div className="flex md:flex-col p-3 md:p-0">
            <span className="material-symbols-outlined pr-3">video_label</span>
            <span>Experience Tesla Technology</span>
          </div>
          <div className="flex md:flex-col p-3 md:p-0">
            <span className="material-symbols-outlined pr-3">electric_bolt</span>
            <span>Learn about Charging and Savings</span>
          </div>
          <div className="flex md:flex-col p-3 md:p-0">
            <span className="material-symbols-outlined pr-3">help</span>
            <span>All your Questions Answered</span>
          </div>
        </div>
        
        <div className="flex flex-col w-[90%] md:w-[55%] items-center p-6  font-medium  ">
          <div className="title text-left w-full text-xl ">
            <span>Select Model</span>
          </div>
          <div className="flex justify-between w-[116%] md:w-full gap-2 mt-4 text-sm md:text-[16px] text-center">
            <div
              className={`${
                border === "Model S"
                  ? "border-[3px] border-blue-400"
                  : "border-2 border-gray-300 text-gray-400"
              }  h-10 rounded-md flex items-center justify-center px-4 cursor-pointer duration-100`}
              onClick={() => setBorder("Model S")}
            >
              Model S
            </div>
            <div
              className={`${
                border === "Model 3"
                  ? "border-[3px] border-blue-400"
                  : "border-2 border-gray-300 text-gray-400"
              }  h-10 rounded-md flex items-center justify-center px-4 cursor-pointer duration-100`}
              onClick={() => setBorder("Model 3")}
            >
              Model 3
            </div>
            <div
              className={`${
                border === "Model X"
                  ? "border-[3px] border-blue-400"
                  : "border-2 border-gray-300 text-gray-400"
              }  h-10 rounded-md flex items-center justify-center px-4 cursor-pointer duration-100`}
              onClick={() => setBorder("Model X")}
            >
              Model X
            </div>
            <div
              className={`${
                border === "Model Y"
                  ? "border-[3px] border-blue-400"
                  : "border-2 border-gray-300 text-gray-400"
              }  h-10 rounded-md flex items-center justify-center px-4 cursor-pointer duration-100`}
              onClick={() => setBorder("Model Y")}
            >
              Model Y
            </div>
          </div>
        </div>
        <div className="w-[80%] md:w-[55%] h-[9rem] md:h-[25rem] bg- m-4 flex items-center justify-center">
          <img
            src={`${
              border === "Model S"
                ? "Images/modelS.jpeg"
                : border === "Model 3"
                ? "Images/model3.jpeg"
                : border === "Model X"
                ? "Images/modelX.jpeg"
                : "Images/modelY.jpeg"
            }`}
            alt=""
            className="rounded-lg"
          />
        </div>
        <div className="location w-[70%] md:w-[55%] flex flex-col py-3 gap-5">
          <span className="text-xl md:text-2xl font-medium">Find Time and Location</span>
          <span className="">
            Input your zip code to search for Tesla showrooms and schedule a
            Demo Drive
          </span>
          <div className="search flex items-center bg-[#f4f4f4] w-[100%] md:w-[50%] p-2 rounded-lg">
            <span class="material-symbols-outlined text-gray-500 p-2">
              search
            </span>
            <input
              placeholder="Enter Zip Code"
              className="border-0 outline-0 bg-transparent pinCode w-[50vw]"
              onChange={(e)=>setPin(e.target.value) }
              value={pin}
            />

            <span class="material-symbols-outlined text-right w-full text-gray-500 focus:text-black cursor-pointer" onClick={handlePin}>close</span>
            
          </div>
          {
              typeof pin ==="number" || pin ===""  ? <span></span>:<span>Enter a valid pin</span>
            }
        </div>
        <div className="contact w-[70%] md:w-[55%]">
          <span className="text-2xl text-left font-semibold py-6 ">Contact Information</span>
            <div className="nameInputs w-full md:flex justify-between py-5">
              <div className="name flex flex-col md:w-[45%] w-[100%]">
                <label htmlFor="firstName" className="my-2 text-lg font-medium text-[#777]">First Name</label>
                <input type="text" className={`bg-[#f4f4f4] p-2 rounded-lg  ${firstName ===""?"border-red-600 border-2":"border-0 outline-0"} focus:outline-none`} onChange={(e)=>setFirstName(e.target.value)}  font-medium  required/>
                {
                  firstName === ""?<span className="text-red-600 text-sm py-2 font-medium">required</span>:<></>
                }
                
              </div>
              <div className="lastName flex flex-col md:w-[45%] w-[100%]">
                <label htmlFor="lastName" className="my-2 text-lg font-medium text-[#777]">Last Name</label>
                <input type="text" className={`bg-[#f4f4f4] p-2 rounded-lg  ${lastName ===""?"border-red-600 border-2":"border-0 outline-0"} focus:outline-none`} onChange={(e)=>setLastName(e.target.value)} quired/>
                {
                  lastName === ""?<span className="text-red-600 text-sm py-2 font-medium">required</span>:<></>
                }
              </div>
           </div>

           <div className="contactInputs w-full md:flex justify-between ">
              <div className="email flex flex-col md:w-[45%] w-[100%]">
                <label htmlFor="email" className="my-2 text-lg font-medium text-[#777]">Email</label>
                <input type="text" className={`bg-[#f4f4f4] p-2 rounded-lg  ${email ===""?"border-red-600 border-2":"border-0 outline-0"} focus:outline-none`} onChange={(e)=>setEmail(e.target.value)}   font-medium  required/>
              {
                
                  email === ""?<span className="text-red-600 text-sm py-2 font-medium">required</span>:<></>
                
              }
              </div>
              <div className="phone flex flex-col md:w-[45%] w-[100%]">
                <label htmlFor="phone" className="my-2 text-lg font-medium text-[#777]">Phone Number</label>
                <input type="text" className={`bg-[#f4f4f4] p-2 rounded-lg  ${phone ===""?"border-red-600 border-2":"border-0 outline-0"} focus:outline-none`} onChange={(e)=>setPhone(e.target.value)}   font-medium  required/>
                {
                  phone === ""?<span className="text-red-600 text-sm py-2 font-medium">required</span>:<></>
                }
              </div>
           </div>
        </div>

        <div className="checkbox w-[75%] md:w-[55%] text-[#777] font-medium text-left flex items-center gap-4 py-5">
        <input type="checkbox" className={`appearance-none h-6 w-6 border ${checkbox === "checked"?"":"border-red-500 border-2"}   checked:bg-gray-600 checked:border-black focus:outline-none   focus:ring-gray-500 cursor-pointer`}  /><span>I’m interested in Solar and Powerwall</span>
        </div>

        <div className="text-justify w-[75%] md:w-[55%] text-sm text-[#777] py-4">
          <p>By clicking "Schedule Demo Drive", I authorize Tesla to contact me about this request as well as with more information about Tesla products, services and regional events via the contact information I provide. I understand calls or texts may use automatic or computer-assisted dialing or pre-recorded messages. Normal message and data rates apply. I can opt out at any time in the Tesla app or by <span className="underline hover:text-black cursor-pointer text-md font-medium">unsubscribing</span>. This is no font-mediumt required for purchase. Drivers must have a valid U.S. driver's license and be 18 years of age or older.</p>
        </div>
      
      <div className="w-[75%] md:w-[55%] flex items-center justify-start py-2">
          <div className="bg-blue-600 w-[50%] h-8 p-1 text-white text-center text-md font-medium rounded-md ">
            <span className="">Schedule Demo Drive</span>
          </div>
      </div>

      <div className="w-[75%] md:w-[55%] text-[#777] py-4 list-none flex flex-col md:flex-row md:gap-4 items-center justify-center gap-2">
        <li className="">Tesla &copy; 2024</li>
        <li className="">Privacy and Legal</li>
        <li className="">Contct</li>
        <li className="">Career</li>
        <li className="">Newsletter</li>
        <li className="">Location</li>
      </div>
            
      </div>
    </>
  );
};

export default DemoDrive;
