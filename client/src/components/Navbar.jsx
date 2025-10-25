import React from 'react'
import l1 from '../assets/logo.png'
import s1 from '../assets/search.png'
import c1 from '../assets/cart.png'

const Navbar = () => {
  return (
    <div className="w-full bg-transparent shadow-md py-3 px-5">
      <div className="flex justify-between items-center flex-wrap md:flex-nowrap">
        
        {/* Logo */}
        <div className="flex items-center gap-2 mb-3 md:mb-0">
          <img className="w-10 sm:w-12" src={l1} alt="logo_img" />
          <p className="text-xl sm:text-2xl font-bold text-gray-400">FloraVision.</p>
        </div>

        {/* Center Navigation */}
        <div className="w-full md:w-auto">
          <ol className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base">
            <li className="cursor-pointer font-bold text-gray-400">Home</li>
            <li className="cursor-pointer font-bold text-gray-400">Plants Type</li>
            <li className="cursor-pointer font-bold text-gray-400">More</li>
            <li className="cursor-pointer font-bold text-gray-400">Contact</li>
          </ol>
        </div>

        
        <div className="w-full md:w-auto mt-3 md:mt-0">
          <ol className="flex justify-center md:justify-end  text-sm sm:text-base gap-7">
            <li className="text-gray-400 font-bold">
              <img className='w-6' src={s1} alt="" />
            </li>
            <li className="text-gray-400 font-bold">
              <img className='w-6' src={c1} alt="" />
            </li>
            <li className="text-gray-400 font-bold">Search</li>
          </ol>
        </div>

      </div>
    </div>
  )
}

export default Navbar
