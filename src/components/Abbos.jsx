import React from 'react'
import Note from '../assets/Frame (5).png'
import Home from '../assets/Frame (8).png'
import Frame from '../assets/Frame (9).png'

function Abbos() {
  return (
    <div>

      <div className='flex items-center justify-center gap-10 mt-15'>

        <img src={Note} alt="" />

        <div className=''>

          <p className='text-white text-xl bg-[#F9A28F] w-17 pl-4 rounded-2xl'>new</p>

          <h1 className='text-5xl font-medium mt-5'>Does Anti-money <br /> Laundering affect <br /> you?</h1>
          <p className='w-80 font-medium text-xl mt-3'>A short, interactive quiz to check if your art business is affected by 5AMLD regulation.</p>

          <button className='border-1 border-[#E1DED9] px-5 py-3 rounded-4xl mt-5 cursor-pointer'>Take the Quiz</button>

        </div>

      </div>

      <div className='mx-10 mb-10'>

        <div className='bg-[#FAF7F3] flex'>

        <img src={Home} alt="" className='ml-6' />

        <div className='ml-14 mt-10'>

          <h1 className='text-4xl font-semibold mb-8'>Art world insight.</h1>

          <p className='w-110'>Receive our newsletter direct to your inbox to follow updates to legislation and the EU art-market's response.</p>

          <input type="text" placeholder='Your email --->' className='placeholder:text-[#00000073] bg-white mt-8 py-3 pr-25 pl-3 rounded-2xl' />

        </div>

        </div>

      </div>

      <div className='mt-15 flex justify-center'>
        <img src={Frame} alt="" />
      </div>
      
    </div>
  )
}

export default Abbos
