// import React from 'react'
// import card from '../assets/card.png'
// const Crausel = () => {
//   return (
//     <div className='bg-[#272D22]  pb-[80px] '>
//         <h1 className='text-center text-2xl font-bold text-white'>Our Best o2</h1>
//       <div className='flex justify-start text-center items-center w-[1024px] border-2 m-auto rounded-4xl border-gray-600'>
//         <img className='w-[500px] ml-[-30px]  mt-[-100px]' src={card} alt="" />
//         <div className='w-[400px] text-justify'>
//             <h1 className='text-white'>We Have Small And Best O2 Plants Collection’s</h1>
//             <p className='text-white'>Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.</p>
//             <p className='text-white'>Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.</p>
//             <div>
//                 <button className='text-white border px-3 mt-3'>Explore</button>

//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Crausel





import React from 'react'
import card from '../assets/card.png'

const Crausel = () => {
  return (
    <div className="bg-[#1B2316] p-20">
      <h1 className="text-center text-2xl  font-bold text-white mb-20">Our Best o2</h1>
      <div className="flex flex-col bg-[#272E22] md:flex-row justify-start items-center text-center 
         w-full max-w-[924px] mx-auto border-2 border-gray-600 
         rounded-4xl  md:px-8 py-6 md:py-8">
        <img
          className="w-[250px] sm:w-[350px] md:w-[500px] md:ml-[-50px] md:mt-[-100px] mb-6 md:mb-0"
          src={card}
          alt=""
        />
        <div className="w-full md:w-[400px] text-justify px-3">
          <h1 className="text-[#C9CBC8] text-lg md:text-xl  font-bold mb-2">
            We Have Small And Best O2 Plants Collection’s
          </h1>
          <p className="text-[#C9CBC8] font-bold text-sm md:text-base mb-2">
            Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.
          </p>
          <p className="text-[#C9CBC8] font-bold text-sm md:text-base">
            Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
          </p>
          <div className='flex items-center justify-between'>
            <button className="rounded border-gray-400 border px-5 py-2 cursor-pointer text-[#C9CBC8]">
              Explore
            </button>
            <div>
              <h3 className='text-[#C9CBC8]  font-bold'>{" < 01/04 > "}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Crausel;
