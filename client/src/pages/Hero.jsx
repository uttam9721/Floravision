import React from 'react'
import heroImg from '../assets/Hero.png'
import hcart from '../assets/Hcart.png'
import p1 from '../assets/Polygon 2.png'
import a1 from '../assets/Aglaonema.png'
import c1 from '../assets/cart.png'
import s1 from '../assets/shali.png'
import d1 from '../assets/Desks.png'

const Hero = () => {
  return (
    <>
      <div 
        className='w-full h-[2100px] bg-repeat mt-[-73px] bg-cover bg-center'
        style={{ backgroundImage: `url(${heroImg})` }}
      >
<div className="w-full  flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20">
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

<div className="border backdrop-blur-sm bg-white/5 border-gray-500 rounded-2xl p-4 flex flex-col items-center shadow-[0_4px_20px_rgba(0,0,0,0.3)] mt-20">
  <img className="w-[260px] -mt-20" src={a1} alt="Aglaonema plant" />
  <div className="text-start mt-2">
    <h3 className="text-white text-lg">Indoor Plant</h3>
    <h1 className="text-white text-xl font-bold mb-2">
      Aglaonema Plant <span className="text-[#9ACD32]">&gt;</span>
    </h1>
    <button className="text-white border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition">
      Buy Now
    </button>
  </div>
</div>
</div>

{/* Review Card */}
<div className="border ml-10 w-[400px] border-gray-400 rounded-2xl mt-6 backdrop-blur-sm bg-white/5">
  <div className="flex gap-3 p-5  items-center">
    <img className="w-16 h-16 rounded-full" src={s1} alt="User" />
    <div>
      <h1 className="text-white text-2xl">Ronnie Hamill</h1>
      <p className="text-yellow-400 text-sm">★★★★★</p>
    </div>
  </div>
  <p className="p-5 text-[#C9CAC7]">
    I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
  </p>
</div>



  <div className='mt-20 gap-[30px]'>
  <h1 className='text-center mb-20 text-white text-2xl font-bold'>Our Trendy plants</h1>

  <div className='flex flex-col sm:flex-col md:flex-row text-center items-center border-2 border-[#4F554B] rounded-4xl mx-5 sm:mx-5 md:mx-30 backdrop-blur-sm bg-white/5 '>
    <img className='w-full sm:w-full md:w-[500px] -mt-10 sm:-mt-5 md:-mt-30' src={hcart} alt="" />

    <div className='w-full sm:w-full md:w-[550px] text-justify p-5'>
      <h1 className='text-white font-bold text-2xl'>For Your Desks Decorations</h1>
      <p className='text-white'>
        I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!
      </p>
      <h1 className='text-white text-2xl font-bold'>Rs. 599/-</h1>
      <div className='flex gap-3 mt-3 items-center'>
        <button className='text-[#C9CAC7] border px-5 py-2 rounded-xl'>Explore</button>
        <button>
          <img className='w-10 sm:w-8' src={c1} alt="" />
        </button>
      </div>
    </div>
  </div>

  <div></div>
</div>

<div className='mt-20 gap-[30px]'>
  <div className='flex flex-col sm:flex-col md:flex-row-reverse text-center items-center border-2 border-[#4F554B] rounded-4xl mx-5 sm:mx-5 md:mx-30 backdrop-blur-sm bg-white/5'>
    <img className='w-full sm:w-full md:w-[500px] -mt-10 sm:-mt-5 md:-mt-30' src={d1} alt="" />

    <div className='w-full sm:w-full md:w-[550px] text-justify p-5'>
      <h1 className='text-white font-bold text-2xl'>For Your Desks Decorations</h1>
      <p className='text-white'>
      The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming
      </p>
      <h1 className='text-white text-2xl font-bold'>Rs. 399/-</h1>
      <div className='flex gap-3 mt-3 items-center'>
        <button className='text-[#C9CAC7] border px-5 py-2 rounded-xl'>Explore</button>
        <button>
          <img className='w-10 sm:w-8' src={c1} alt="" />
        </button>
      </div>
    </div>
  </div>

  <div></div>
</div>

      </div>
    </>
  )
}

export default Hero