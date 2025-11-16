import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Images/Travel.svg"
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

export const Footer = () => {
    const Links = [
        {name:"Home",
         path: '/'   
        },
    ]
  return (
    <div className='py-10 px-6 md:px-8 lg:px-15 flex flex-col gap-9 font-urbanist'>
        <div className='space-y-6 md:flex items-center justify-between'>
        <p className='text-[32px] md:text-5xl lg:text-6xl font-semibold'>Get our best offer now!</p>
        <Link
        to='/'
        className='bg-[#25A59E] rounded-md py-3 px-5'
        >
        <button>Click here!</button>
        </Link>
            </div>
        <div className='border-t-gray-600 border-t pt-10 space-y-5'>
            <img src={logo} alt=" Travel Logo" className='w-16' />
            <p>The best travel agent in the world. Contact us immediatly now!</p>
            <div className='flex py-5 flex-col gap-6 md:flex-row md:justify-between'>
                <div className='flex gap-5'>
                <FaInstagram className='w-9 rounded-full p-2 text-[#25A59E] text-2xl bg-[#EAFAF9] h-9'/>
                <FaTwitter className='w-9 rounded-full p-2 text-[#25A59E] text-2xl bg-[#EAFAF9] h-9'/>
                <FaYoutube className='w-9 rounded-full p-2 text-[#25A59E] text-2xl bg-[#EAFAF9] h-9'/>
                </div>
                <div className='flex gap-4 justify-between'>
                <p>Home</p>
                <p>Destination</p>
                <p>Guide</p>
                <p>Contact Us</p>
                </div>
            </div>
        </div>
    </div>
  )
}
