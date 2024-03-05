import React from 'react'

const Header = () => {
  return (
    <div className='px-4 bg-white flex justify-between justify-center items-center p-2'>
    <div className=''>
        <img src="https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg" alt="" />
    </div>
    <div className='flex font-semibold gap-5'>
        <p>Crypto Taxes</p>
        <p>Free tools</p>
        <p>Resource Center</p>
        <button className='bg-blue-800 rounded-md p-1 text-white'>Get Started</button>
    </div>
    </div>
  )
}

export default Header
