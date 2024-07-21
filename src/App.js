import React from 'react'
import { Navbar } from './Components/Navbar'
import { Hero } from './Components/Hero'
import { Features } from './Components/Features'

import Work from './Components/Work'
import Footer from './Components/Footer'

export const App = () => {
  return (
    <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]">

      <Navbar></Navbar>
      <div className='max-w-7xl mx-auto pt-20 px-6'>
      <Hero></Hero>
      <Features></Features>
      <Work></Work>
      <Footer></Footer>
      </div>
     
    
      
      
    </div>
  )
}
export default App