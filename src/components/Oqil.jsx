import React from 'react'
import Img from '../assets/Rectangle (4).png'
import Info from '../assets/Rectangle (5).png'
import Rec from '../assets/Rectangle (6).png'
import Hi from '../assets/Rectangle (7).png'

function Oqil() {
  return (
    <div className='flex justify-center items-center flex-col bg-gradient-to-b from-[#F9EEE3] via-[#F9EEE3] to-[#ffffff] pt-15 pb-15'>

      <div className='flex gap-5'>

        <div className='bg-[#FFFAF2] border-1 border-[#DDDDDD] w-95 h-120 flex justify-center items-center flex-col rounded-2xl'>

            <img src={Img} alt="" />

            

                <h1 className='text-3xl font-medium pt-3'>For Art Dealers</h1>

                <p className='pt-5'>Galleries and independent art dealers</p>

                <button className='mt-9 border-1 border-[#DDDDDD] py-3 px-5 rounded-3xl cursor-pointer'>Learn More</button>

            

        </div>

        <div className='bg-[#FFFAF2] border-1 border-[#DDDDDD] w-95 h-120 flex justify-center items-center flex-col rounded-2xl'>

            <img src={Info} alt="" />

            

                <h1 className='text-3xl font-medium pt-3'>For Advisors</h1>

                <p className='pt-5'>Advisors, agents and consultants</p>

                <button className='mt-9 border-1 border-[#DDDDDD] py-3 px-5 rounded-3xl cursor-pointer'>Learn More</button>

            

        </div>
      
    </div>

    <div className='flex gap-5 mt-5'>

        <div className='bg-[#FFFAF2] border-1 border-[#DDDDDD] w-95 h-120 flex justify-center items-center flex-col rounded-2xl'>

            <img src={Rec} alt="" />

            

                <h1 className='text-3xl font-medium pt-3'>For Auctioneers</h1>

                <p className='pt-5'>Online and offline auctioneers</p>

                <button className='mt-9 border-1 border-[#DDDDDD] py-3 px-5 rounded-3xl cursor-pointer'>Learn More</button>

            

        </div>

        <div className='bg-[#FFFAF2] border-1 border-[#DDDDDD] w-95 h-120 flex justify-center items-center flex-col rounded-2xl'>

            <img src={Hi} alt="" />

            

                <h1 className='text-3xl font-medium pt-3 text-center'>For Buyers & <br /> Collectors</h1>

                <p className='pt-5 text-center'>Receiving Invoices, making card payments and sending your ID and address documents</p>

                <button className='mt-9 border-1 border-[#DDDDDD] py-3 px-5 rounded-3xl cursor-pointer'>Learn More</button>

            

        </div>
      
    </div>

    </div>
  )
}

export default Oqil
