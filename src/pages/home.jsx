import React from 'react'
import { Header } from '../components/header'
import { Destination } from '../components/destination'
import { About } from '../components/about'
import { Experinece } from '../components/experinece'
import { Footer } from '../components/footer'
export const Home = () => {
  return (
    <div className=' dark:bg-[#0A0F14] dark:text-white'>
      <Header/>
      <Destination/>
      <About/>
      <Experinece/>
      <Footer/>
      </div>
  )
}
