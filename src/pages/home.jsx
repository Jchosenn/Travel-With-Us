import React from 'react'
import { Header } from './header'
import { Destination } from './destination'
import { About } from './about'

export const Home = () => {
  return (
    <div className=' dark:bg-black/95 dark:text-white'>
      <Header/>
      <Destination/>
      <About/>
      </div>
  )
}
