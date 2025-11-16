import React from 'react'
import { Header } from '../components/header'
import { Destination } from '../components/destination'
import { About } from '../components/about'
import { Experinece } from '../components/experinece'
export const Home = () => {
  return (
    <div className=' dark:bg-black/95 dark:text-white'>
      <Header/>
      <Destination/>
      <About/>
      <Experinece/>
      </div>
  )
}
