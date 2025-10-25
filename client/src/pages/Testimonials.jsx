import React from 'react'
import carol from '../assets/carol.png'
import shali from '../assets/shali.png'
import lula from '../assets/lula.jpg'
const Testimonials = () => {
  return (
    <div className='bg-[#1B2316] pt-8'>
        <h1 className='text-4xl text-center font-bold text-white mb-25'>Customer Review</h1>
    <div className='w-full  flex flex-wrap justify-center gap-8 p-6'>
        
        <div className='w-[400px] bg-[#272E22] border-2 rounded-4xl border-gray-600'>

      <div className='flex items-center gap-4 mb-5 justify-center pt-8 ' >
        <img className='w-24 h-24 object-cover rounded-full' src={shali} alt="testimonials" />

        <div className='p-3'>
        <h1 className='text-2xl font-bold text-[#C9CAC7]'>Carol Huels</h1>
         <p className="text-yellow-400 text-sm">★★★★★</p>
        </div>
      </div >
      <p className='text-[#C9CAC7] w-[300px] text-center ml-[48px] text-xl text-justify pb-[50px]'>Just got my hands on some absolutely awesome plants, and I couldn’t be happier!!</p>
    </div>
        <div className='w-[400px] bg-[#272E22] border-2 rounded-4xl border-gray-600'>

      <div className='flex items-center gap-4 mb-5 justify-center pt-8 ' >
        <img className='w-24 h-24 object-cover rounded-full' src={lula} alt="testimonials" />

        <div className='p-3'>
        <h1 className='text-2xl font-bold text-[#C9CAC7]'>Carol Huels</h1>
         <p className="text-yellow-400 text-sm">★★★★★</p>
        </div>
      </div >
      <p className='text-[#C9CAC7] w-[300px] text-center ml-[48px] text-xl text-justify pb-[50px]'>Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home!</p>
    </div>
        <div className='w-[400px] bg-[#272E22] border-2 rounded-4xl border-gray-600'>

      <div className='flex items-center gap-4 mb-5 justify-center pt-8 ' >
        <img className='w-24 h-24 object-cover rounded-full' src={carol} alt="testimonials" />

        <div className='p-3'>
        <h1 className='text-2xl font-bold text-[#C9CAC7]'>Carol Huels</h1>
         <p className="text-yellow-400 text-sm">★★★★★</p>
        </div>
      </div >
      <p className='text-[#C9CAC7] w-[300px] text-center ml-[48px] text-xl text-justify pb-[50px]'>It's like bringing a little piece of nature indoors. Definitely worth the investment my plant collection has never looked better!</p>
    </div>
        </div>
        </div>
  )
}

export default Testimonials
