import React from 'react'
import card from '../assets/card.png'
import Bag from '../assets/bag.png'
import A1 from '../assets/Aglaonema.png'
import P1 from '../assets/Plantain.png'
import c1 from '../assets/cactus.png'
import s1 from '../assets/swiss.png'
const Cart = () => {
  return (
    <div className='bg-[#1B2316]'>
    <h1 className='text-center text-2xl font-bold text-white p-18'>Our Top Selling plants</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center py-10  gap-y-38'>
      
      <div className='w-[350px]  bg-[#272E22]  border-2 border-[#4F554B] rounded-4xl items-center justify-center px-8'>
        {/* <div> */}
          <img  className='mt-[-100px]' src={card} alt="" />
        {/* </div> */}
        <div className=' justify-center text-start ml-3.5 '>
          <h1 className='text-white text-2xl'>Aglaonema plant</h1>
          <p  className='text-white'>The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care</p>
          <div className='flex gap-25 mb-3'>
          <h1 className='text-white text-2xl'>Rs. 300/-</h1>
          <div className='w-[27px]'>
            <img src={Bag} alt="" />
          </div>
          </div>
        </div>
      </div>
     
      <div className='w-[350px] bg-[#272E22]  border-2 border-[#4F554B] rounded-4xl items-center justify-center px-8'>
        {/* <div> */}
          <img  className='mt-[-100px]' src={P1} alt="" />
        {/* </div> */}
        <div className=' justify-center text-start ml-3.5 '>
          <h1 className='text-white text-2xl'>Aglaonema plant</h1>
          <p  className='text-white'>The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care</p>
          <div className='flex gap-25 mb-3'>
          <h1 className='text-white text-2xl'>Rs. 300/-</h1>
          <div className='w-[27px]'>
            <img src={Bag} alt="" />
          </div>
          </div>
        </div>
      </div>
      <div className='w-[350px] bg-[#272E22]  border-2 border-[#4F554B] rounded-4xl items-center justify-center px-8'>
        {/* <div> */}
          <img  className='mt-[-100px]' src={c1} alt="" />
        {/* </div> */}
        <div className=' justify-center text-start ml-3.5 '>
          <h1 className='text-white text-2xl'>Aglaonema plant</h1>
          <p  className='text-white'>The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care</p>
          <div className='flex gap-25 mb-3'>
          <h1 className='text-white text-2xl'>Rs. 300/-</h1>
          <div className='w-[27px]'>
            <img src={Bag} alt="" />
          </div>
          </div>
        </div>
      </div>
      <div className='w-[350px] bg-[#272E22]  border-2 border-[#4F554B] rounded-4xl items-center justify-center px-8'>
        {/* <div> */}
          <img  className='mt-[-100px]' src={card} alt="" />
        {/* </div> */}
        <div className=' justify-center text-start ml-3.5 '>
          <h1 className='text-white text-2xl'>Aglaonema plant</h1>
          <p  className='text-white'>The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care</p>
          <div className='flex gap-25 mb-3'>
          <h1 className='text-white text-2xl'>Rs. 300/-</h1>
          <div className='w-[27px]'>
            <img src={Bag} alt="" />
          </div>
          </div>
        </div>
      </div>
      <div className='w-[350px] bg-[#272E22]  border-2 border-[#4F554B] rounded-4xl items-center justify-center px-8'>
        {/* <div> */}
          <img  className='mt-[-100px]' src={s1} alt="" />
        {/* </div> */}
        <div className=' justify-center text-start ml-3.5 '>
          <h1 className='text-white text-2xl'>Aglaonema plant</h1>
          <p  className='text-white'>The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care</p>
          <div className='flex gap-25 mb-3'>
          <h1 className='text-white text-2xl'>Rs. 300/-</h1>
          <div className='w-[27px]'>
            <img src={Bag} alt="" />
          </div>
          </div>
        </div>
      </div>
      <div className='w-[350px] bg-[#272E22]  border-2 border-[#4F554B] rounded-4xl items-center justify-center px-8'>
        {/* <div> */}
          <img  className='mt-[-100px]' src={card} alt="" />
        {/* </div> */}
        <div className=' justify-center text-start ml-3.5 '>
          <h1 className='text-white text-2xl'>Aglaonema plant</h1>
          <p  className='text-white'>The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care</p>
          <div className='flex gap-25 mb-3'>
          <h1 className='text-white text-2xl'>Rs. 300/-</h1>
          <div className='w-[27px]'>
            <img src={Bag} alt="" />
          </div>
          </div>
        </div>
      </div>
    
    </div>
    </div>
  )
}

export default Cart
