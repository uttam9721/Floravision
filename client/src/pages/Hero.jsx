import React from 'react'
import heroImg from '../assets/Hero.png'
import hcart from '../assets/Hcart.png'
// import Navbar from './../components/Navbar';

const Hero = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div 
        className='w-full h-screen bg-repeat mt-[-73px] bg-cover bg-center'
        style={{ backgroundImage: `url(${heroImg})` }}
      > <br /><br /><br /> <br /><br /><br /> 
        <div>
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
        </div>
      </div>
    </>
  )
}

export default Hero