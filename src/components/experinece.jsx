import React from 'react'
import Customers from "/imageBg/travel-customers.jpg"

export const Experinece = () => {
  return (
    <div className='font-urbanist py-10 px-6 space-y-6'>
        <p className='text-4xl font-semibold'><span className='text-[#25A59E]'>Travel</span>, make the trip memorable</p>
        <p className='text-[17px]'>Thousands of our customers always recommend us because of the service we provide. Your trip will be very memorable with the best travel agent, <span className='text-[#25A59E]'>Travel!</span></p>
        <img src={Customers} alt="Satisfied Customers" className='rounded-xl px-2' />
    </div>
  )
}
