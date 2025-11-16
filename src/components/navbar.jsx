import React from 'react'
import logo from "../assets/Images/Travel.svg"
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-6 py-6'>
      <Link 
       to="/"
       className='z-999' 
       >
        <img src={logo} alt="Travel with Us Logo" />
      </Link>
        <FaBars className='text-2xl cursor-pointer z-999'/>
    </div>
  )
}
