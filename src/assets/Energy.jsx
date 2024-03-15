import React from 'react'

const Energy = () => {
  return (
    <div className='p-20  grid md:grid-cols-3 w-[100%] py-8'>
        <div className="features  mt-4 md:mt-8">
        <span className='text-2xl  font-semibold '>Powerwall</span>
        <div className="featureLi list-none font text-gray-400 ">
            <li className='p-2 hover:text-blue-800 cursor-pointer'>How powerwall works</li>
            <li className='p-2 hover:text-blue-800 cursor-pointer'>System design</li>
            <li className='p-2 hover:text-blue-800 cursor-pointer'>Prepre for Installation</li>
            <li className='p-2 hover:text-blue-800 cursor-pointer'>Tesla App for Energy</li>
            <li className='p-2 hover:text-blue-800 cursor-pointer'>Get Help and Schedule Service</li>
            <li className='p-2 hover:text-blue-800 cursor-pointer'>Documents</li>
        </div>
        </div>

        <div className="service mt-4 md:mt-8">
        <span className='text-2xl font-semibold '>Solar Roof</span>
        <div className="serviceLi list-none text-gray-400">
            <li className='p-2 hover:text-blue-800 cursor-pointer'>Why solar roof</li>
            <li className='p-2 hover:text-blue-800 cursor-pointer'>Installation overview</li>
            <li className='p-2 hover:text-blue-800 cursor-pointer'>Troubleshooting your system</li>
            <li className='p-2 hover:text-blue-800 cursor-pointer'>Frequently Asked Questions</li>
            <li className='p-2 hover:text-blue-800 cursor-pointer'>Monitoring</li>
        </div>
        </div>

        <div className="Account mt-4 md:mt-8 ">
        <span className='text-2xl  font-semibold'>Solar Panels</span>
            <div className="accountLi list-none text-gray-400">
                <li className='p-2 hover:text-blue-800 cursor-pointer'>Why Tesla Solar</li>
                <li className='p-2 hover:text-blue-800 cursor-pointer'>Solar panel sizing and design</li>
                <li className='p-2 hover:text-blue-800 cursor-pointer'>Tuen on your system</li>
                <li className='p-2 hover:text-blue-800 cursor-pointer'>Billing</li>
                <li className='p-2 hover:text-blue-800 cursor-pointer'>Troubleshooting your system</li>
                <li className='p-2 hover:text-blue-800 cursor-pointer'>Transfering Owership of your solar system</li>
            </div>
        </div>
    </div>
  )
}

export default Energy
