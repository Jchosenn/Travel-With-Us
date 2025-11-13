import React from 'react'
import { Navbar } from '../components/navbar'
import travellers from "../assets/Images/travellers.png"

export const Header = () => {
  return (
    <div>
        <Navbar/>
        <section className='py-15 pt-25 px-7'>
            <h1 className='text-[52px] font-semibold font-urbanist text-center dark:bg-linear-to-b from-black
            via-90% to-[#44D5CD]'><span className='text-[#25A59E] pr-2'>Travel</span>around the world</h1>
        </section>
            <img src={travellers} alt="" className='-mt-22 w-full' />
            <div className='bg-[#25A59E] py-7 px-5 flex flex-col items-center text-center gap-4'>
                <h2 className='text-[16px] font-urbanist border-b pb-3'>Travel around the world to see the beauty of nature easily and safely with Travel.</h2>
                <p className='text-xl font-notch'>We Are The Best Travel Agent</p>
                <p className='pt-3 border-t font-urbanist'>Everyone is young once, but not everyone has traveled the world!</p>
            </div>
    </div>
  )
}
