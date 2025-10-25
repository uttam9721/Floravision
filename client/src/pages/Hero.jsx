import React from 'react'
import heroImg from '../assets/Hero.png'
import hcart from '../assets/Hcart.png'
import p1 from '../assets/Polygon 2.png'
import a1 from '../assets/Aglaonema.png'
// import Navbar from './../components/Navbar';

const Hero = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div 
        className='w-full h-screen bg-repeat mt-[-73px] bg-cover bg-center'
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* <div className='flex items-center justify-between'>
          <div className='pt-[300px] w-[500px] ml-10'>
            <h1 className='text-6xl text-[#C9CAC7] font-bold'>Earth’s Exhale</h1> 
<p className='text-[#C9CAC7]'>"Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.
Buy Now
Live Demo...</p>
<div className='flex items-center gap-2.5'>
  <button className='text-[#C9CAC7] border px-5 py-2 rounded mt-2'>Buy Now</button>
  <button className='w-10 h-10 text-[#C9CAC7] border px-5 py-2 rounded-full mt-2 ml-2'>
    <img className='w-2 h-2' src={p1} alt="ploy" />
  </button>
  <p className='text-[#C9CAC7]'>Live Demo..</p>

</div>
          </div>
          <div>
            <div className='border w-[300px] border-white justify-center items-center'>
              <img className='w-[260px] mt-[-70px]' src={a1} alt="" />
              <div className='text-center'>
                <h3 className='text-white text-xl font-bold'>Indoor Plant </h3>
                <h1 className='text-white text-xl font-bold'>Aglaonema  plant</h1>
                <button className='text-white text-xl font-bold'>Buy Now</button>
              </div>
            </div>
            
          </div>
        </div> */}
        <div className="w-full  flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20">
  
  {/* Left Section */}
  <div className="w-full  md:w-[500px] text-center md:text-left mb-10 md:mb-0">
    <h1 className="text-5xl md:text-6xl text-[#C9CAC7] font-bold mb-4">Earth’s Exhale</h1> 
    <p className="text-[#C9CAC7] mb-6 leading-relaxed">
      "Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment 
      and its essential role in sustaining life.
    </p>

    <div className="flex items-center justify-center md:justify-start gap-3">
      <button className="text-[#C9CAC7] border border-gray-500 px-6 py-2 rounded-lg hover:bg-[#2E3A24] transition-all duration-200">
        Buy Now
      </button>
      <button className="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-full hover:bg-[#2E3A24] transition-all duration-200">
        <img className="w-3 h-3" src={p1} alt="play" />
      </button>
      <p className="text-[#C9CAC7] text-sm md:text-base">Live Demo...</p>
    </div>
  </div>

  {/* Right Section (Product Card) */}
  <div className="border bg-[#1B2213] border-gray-500 rounded-2xl p-4 flex flex-col items-center shadow-[0_4px_20px_rgba(0,0,0,0.3)] mt-20">
    <img className="w-[260px] -mt-20" src={a1} alt="Aglaonema plant" />
    <div className="text-start mt-2">
      <h3 className="text-white text-lg">Indoor Plant</h3>
      <h1 className="text-white text-xl font-bold mb-2">Aglaonema Plant         > </h1>
      <button className="text-white border border-white px-6 py-2 rounded-lg">
        Buy Now
      </button>
    </div>
  </div>

</div>

        {/* <div>
            <h1>Our Trendy plants</h1>
            <div className='flex text-center items-center border-2 border-[#4F554B] rounded-4xl mx-30'>
                <img className='w-[500px]' src={hcart} alt="" />
                <div className='w-[300px] text-justify'>
                    <h1  className='text-white font-bold'> For Your Desks Decorations</h1>
                    <p className='text-white font-bold'>I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!</p>
                    <h1 className='text-white font-bold'>Rs. 599/-</h1>
                    <button>Explore </button>
                    <button>Cart</button>
                </div>
            </div>
            <div></div>
        </div> */}
      </div>
    </>
  )
}

export default Hero