import React from 'react'

const Vehicles = () => {
  return (
    <div className='p-20  grid md:grid-cols-3 w-[100%] py-8 place-content-center'>
        <div className="features  mt-4 md:mt-8 ">
        <span className='text-2xl  font-semibold '>Features and Charging</span>
        <div className="featureLi list-none font text-gray-400">
            <li className='p-2 hover:text-blue-800 cursor-pointer'>Autopilot</li>
            <li className='p-2 hover:text-blue-800 cursor-pointer'>Software Updates</li>
            <li className='p-2 hover:text-blue-800 cursor-pointer'>Upgrades</li>
            <li className='p-2 hover:text-blue-800 cursor-pointer'>Supercharging</li>
            <li className='p-2 hover:text-blue-800 cursor-pointer'>Home charging</li>
            <li className='p-2 hover:text-blue-800 cursor-pointer'>Security Features</li>
        </div>
        </div>

        <div className="service mt-4 md:mt-8">
        <span className='text-2xl font-semibold '>Service and Collision Repair</span>
        <div className="serviceLi list-none text-gray-400">
            <li className='p-2 hover:text-blue-800 cursor-pointer'>Do it yourself Guide</li>
            <li className='p-2'i>Schedule a service Visit</li>
            <li className='p-2 hover:text-blue-800 cursor-pointer'>Find a Collision center</li>
            <li className='p-2 hover:text-blue-800 cursor-pointer'>Roadside assistance</li>
            <li className='p-2 hover:text-blue-800 cursor-pointer'>Vehicle Waranty</li>
            <li className='p-2 hover:text-blue-800 cursor-pointer'>Tire Care and Repair</li>
        </div>
        </div>

        <div className="Account mt-4 md:mt-8 ">
        <span className='text-2xl  font-semibold'>Tesla Account</span>
            <div className="accountLi list-none text-gray-400">
                <li className='p-2 hover:text-blue-800 cursor-pointer'>Add a Vehicle</li>
                <li className='p-2 hover:text-blue-800 cursor-pointer'>Account Support</li>
                <li className='p-2 hover:text-blue-800 cursor-pointer'>Tesla App</li>
                <li className='p-2 hover:text-blue-800 cursor-pointer'>Refer and Earn</li>
                <li className='p-2 hover:text-blue-800 cursor-pointer'>Financing & Leasing</li>
            </div>
        </div>
    </div>
  )
}

export default Vehicles;
