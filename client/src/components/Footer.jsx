
import React from "react";
const Footer=()=> {
  return (
    <footer className="bg-[#141A11] text-gray-200 px-8 py-12 md:px-20">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-4xl">🌿</span>
            <h1 className="text-2xl font-semibold">FloraVision.</h1>
          </div>
          <p className="text-sm leading-relaxed text-gray-300 mb-6">
            "From lush indoor greens to vibrant outdoor blooms, our plants are crafted 
            to thrive and elevate your living environment."
          </p>
          <div className="flex space-x-6 font-semibold text-white">
            <a href="#">FB</a>
            <a href="#">TW</a>
            <a href="#">LI</a>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4 underline">Quick Link’s</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:underline underline">Home</a></li>
            <li><a href="#" className="hover:underline underline">Type’s Of plant’s</a></li>
            <li><a href="#" className="hover:underline underline">Contact</a></li>
            <li><a href="#" className="hover:underline underline">Privacy</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">For Every Update.</h2>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-3 bg-transparent border border-gray-500 rounded-l-md text-sm outline-none placeholder-gray-400"
            />
            <button className="bg-white text-black px-5 py-3 rounded-r-md font-semibold hover:bg-gray-200 overflow-hidden ">
              SUBSCRIBE
            </button>
          </div>
          <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-gray-400 font-bold">
        <p>FloraVision © all right reserve</p>
      </div>
        </div>
      </div>

      
    </footer>
  );
}

export default Footer;