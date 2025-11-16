import React from 'react'
import Customers from "/imageBg/travel-customers.jpg"

export const Experinece = () => {
  return (
    <div className='font-urbanist py-10 px-6 md:px-8 lg:px-15 space-y-6 flex flex-col md:flex-row md:gap-5 lg:gap-7'>
        <div className='space-y-5'>
        <p className='text-4xl lg:text-[50px] font-semibold'><span className='text-[#25A59E]'>Travel</span>, make the trip memorable</p>
        <p className='text-[17px]'>Thousands of our customers always recommend us because of the service we provide. Your trip will be very memorable with the best travel agent, <span className='text-[#25A59E]'>Travel!</span></p>
        <div className='flex gap-8 items-center'>
        <button className='hidden md:block bg-[#25A59E] py-2 px-5 cursor-pointer rounded-md'>
            See More
        </button>
        <button className='hidden md:block border-b cursor-pointer'>
            Discover More
        </button>
        </div>
        </div>
        <img src={Customers} alt="Satisfied Customers" className='rounded-xl lg:rounded-2xl px-2 md:w-[50%] lg:w-[50%]' />
    </div>
  )
}
