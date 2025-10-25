import React, { useState } from 'react';
import l1 from '../assets/logo.png';
import s1 from '../assets/search.png';
import c1 from '../assets/cart.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-transparent shadow-md py-3 px-5">
      <div className="flex justify-between items-center flex-wrap md:flex-nowrap">
      
        <div className="flex items-center gap-2 mb-3 md:mb-0">
          <img className="w-10 sm:w-12" src={l1} alt="logo_img" />
          <p className="text-xl sm:text-2xl font-bold text-gray-400">FloraVision.</p>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-400 text-2xl focus:outline-none"
          >
            {menuOpen ? '✖' : '☰'}
          </button>
        </div>
        <div
          className={`w-full md:w-auto ${
            menuOpen ? 'block' : 'hidden'
          } md:block`}
        >
          <ol className="flex flex-col md:flex-row flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base mt-3 md:mt-0">
            <li className="cursor-pointer font-bold text-gray-400">Home</li>
            <li className="cursor-pointer font-bold text-gray-400">Plants Type</li>
            <li className="cursor-pointer font-bold text-gray-400">More</li>
            <li className="cursor-pointer font-bold text-gray-400">Contact</li>
          </ol>
        </div>

        {/* Right Section (Search + Cart) */}
        <div
          className={`w-full md:w-auto mt-3 md:mt-0 ${
            menuOpen ? 'block' : 'hidden'
          } md:block`}
        >
          <ol className="flex flex-col md:flex-row justify-center md:justify-end text-sm sm:text-base gap-5 md:gap-7">
            <li className="text-gray-400 font-bold flex items-center gap-2 justify-center">
              <img className="w-6" src={s1} alt="search" />
              <span>Search</span>
            </li>
            <li className="text-gray-400 font-bold flex justify-center">
              <img className="w-6" src={c1} alt="cart" />
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
