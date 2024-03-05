import React, { useState } from 'react'

const Header = () => {

    const [isMobileMenu,setisMobileMenu]=useState(false);



  return (
    <div className='px-4 bg-white flex justify-between items-center p-1 shadow-md'>
    <div className='ml-3'>
        <img src="https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg" alt="" />
    </div>
    <div className='md:hidden'>
  <button onClick={()=>setisMobileMenu(!isMobileMenu)}> <img className='h-5 w-5 cursor-pointer' src="https://static-00.iconduck.com/assets.00/hamburger-menu-icon-2048x1536-6qrrvtw1.png" alt="" />
  </button> 
  </div>

    {/* hamburger menu */}
 <div className='hidden'>


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
