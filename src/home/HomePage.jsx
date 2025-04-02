import React from 'react'
import Hero from './Hero'
import Award from './Award'
import Stats from './Stats'
import Pricing from './Pricing'
import Education from './Education'
import SupportPage from '../support/SupportPage'
import OpenAccount from '../OpenAccount'
import ProductPage from '../products/ProductPage'



function HomePage() {
  return (
    <>
    
       <Hero/>
       <Award/>
       <Stats/>
       <Pricing/>
       < ProductPage/>
       <SupportPage/>
       <Education/>
       <OpenAccount/>
      
    </>
  )
}

export default HomePage
