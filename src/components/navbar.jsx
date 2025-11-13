import React from 'react'
import logo from "../assets/Images/Travel.svg"
import { FaBars } from 'react-icons/fa'

export const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-6 py-6'>
        <img src={logo} alt="Travel with Us Logo" />
        <FaBars className='text-2xl cursor-pointer'/>
    </div>
  )
}
