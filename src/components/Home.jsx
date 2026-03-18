import React from 'react'
import AboutOverview from './AboutOverview'
import PortfolioSlider from './PortfolioSlider'
import ServicesOverview from './ServicesOverview'
import Hero from './Hero'




function Home() {
   
  return (
    <div className='w-full'>
      
      
     

      {/* Main Content */}
     
        <Hero/>
      
      {/* <AboutOverview /> */}
      <PortfolioSlider />
      <ServicesOverview />

      
    </div>
  )
}

export default Home