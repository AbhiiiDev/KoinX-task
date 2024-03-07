import React, { useState } from 'react'

const Header = () => {

    const [isMobileMenu,setisMobileMenu]=useState(false);



  return (
    <div className='px-4 bg-white flex justify-between items-center p-1 shadow-md'>
    <div className='ml-3'>
        <img src="https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg" alt="" />
    </div>
    <div className='md:hidden relative'>
  <button onClick={()=>setisMobileMenu(!isMobileMenu)}> <img className='h-5 w-5 cursor-pointer' src="https://static-00.iconduck.com/assets.00/hamburger-menu-icon-2048x1536-6qrrvtw1.png" alt="" />
  </button> 
  
    {/* hamburger menu */}
    {isMobileMenu && (
                    <div className="absolute top-full  right-0 w-[110px] bg-white shadow-md p-2 mt-1 rounded-md max-w-xs">
                        <ul className='flex flex-col gap-3 cursor-pointer'>
                            <li className='hover:bg-gray-100'>Crypto Taxes</li>
                            <li  className='hover:bg-gray-100'>Free tools</li>
                            <li  className='hover:bg-gray-100'>Resource Center</li>
                        </ul>
                    </div>
                )}
  </div>



    <div className='hidden md:flex font-semibold gap-6 mr-5 text-lg'>
        <p>Crypto Taxes</p>
        <p>Free tools</p>
        <p>Resource Center</p>
        <button className='bg-blue-800 rounded-md p-1 text-white'>Get Started</button>
    </div>
    </div>
  )
}

export default Header
