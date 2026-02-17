// import React, { useState } from 'react';
// import l1 from '../assets/logo.png';
// import s1 from '../assets/search.png';
// import c1 from '../assets/cart.png';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="w-full bg-transparent shadow-md py-3 px-5">
//       <div className="flex justify-between items-center flex-wrap md:flex-nowrap">
      
//         <div className="flex items-center gap-2 mb-3 md:mb-0">
//           <img className="w-10 sm:w-12" src={l1} alt="logo_img" />
//           <Link to={'/'} className="text-xl sm:text-2xl font-bold text-gray-400">FloraVision.</Link>
//         </div>

//         <div className="md:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-gray-400 text-2xl focus:outline-none"
//           >
//             {menuOpen ? '✖' : '☰'}
//           </button>
//         </div>

//         <div
//           className={`w-full md:w-auto ${
//             menuOpen ? 'block' : 'hidden'
//           } md:block`}
//         >
//           <ol className="flex flex-col md:flex-row flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base mt-3 md:mt-0">
//             <Link to={'/'} className="cursor-pointer font-bold text-gray-400">Home</Link>
//             <Link to={'/plants'} className="cursor-pointer font-bold text-gray-400">Plants Type</Link>
//             <li className="cursor-pointer font-bold text-gray-400">More</li>
//             <Link to={'/footer'} className="cursor-pointer font-bold text-gray-400">Contact</Link>
//           </ol>
//         </div>

//         {/* Right Section (Search + Cart) */}
//         <div
//           className={`w-full md:w-auto mt-3 md:mt-0 ${
//             menuOpen ? 'block' : 'hidden'
//           } md:block`}
//         >
//           <ol className="flex flex-col md:flex-row justify-center md:justify-end text-sm sm:text-base gap-5 md:gap-7">
//             <li className="text-gray-400 font-bold flex items-center gap-2 justify-center">
//               <img className="w-6" src={s1} alt="search" />
//               <span>Search</span>
//             </li>
//             <li className="text-gray-400 font-bold flex justify-center">
//               <img className="w-6" src={c1} alt="cart" />
//             </li>
//           </ol>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;














import React, { useState, useContext } from "react";
import l1 from "../assets/logo.png";
import s1 from "../assets/search.png";
import c1 from "../assets/cart.png";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const { cartItems } = useContext(CartContext);

  return (
    <div className="w-full bg-transparent shadow-md py-3 px-5">
      <div className="flex justify-between items-center flex-wrap md:flex-nowrap">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img className="w-10" src={l1} alt="logo" />
          <Link to="/" className="text-xl font-bold text-gray-400">
            FloraVision.
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-400 text-2xl"
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Menu */}
        <div
          className={`w-full md:w-auto ${
            menuOpen ? "block" : "hidden"
          } md:block`}
        >
          <div className="flex flex-col md:flex-row gap-6 text-gray-400 font-bold">
            <Link to="/">Home</Link>
            <Link to="/plants">Plants Type</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        {/* Right Section */}
        <div
          className={`w-full md:w-auto mt-3 md:mt-0 ${
            menuOpen ? "block" : "hidden"
          } md:block`}
        >
          <div className="flex items-center gap-6">

            {/* 🔍 Search */}
            <div className="flex items-center gap-2 bg-[#272E22] px-3 py-1 rounded-lg">
              <img className="w-5" src={s1} alt="search" />
              <input
                type="text"
                placeholder="Search plants..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent outline-none text-white w-32"
              />
            </div>

            {/* 🛒 Cart */}
            <Link to="/cart" className="relative">
              <img className="w-6" src={c1} alt="cart" />

              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-xs px-1 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
