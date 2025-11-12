import React from 'react'
import logo from "../assets/Images/Travel.svg"
import { FaBars } from 'react-icons/fa'

export const Navbar = () => {
  return (
    <div className='flex items-center justify-around py-4'>
        <img src={logo} alt="Travel with Us Logo" />
        <FaBars className=''/>
    </div>
  )
}
