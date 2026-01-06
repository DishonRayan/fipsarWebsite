// import React from 'react'
import WhatWeSolve from './WhatWeSolve'
import CtaSection from './CtaSection'
import NewwhyChoose from './NewwhyChoose'
import Newwhoweare from './Newwhoweare'
import NewHeroSection from './NewHeroSection'
import { NewResultyou } from './NewResultyou'

const Home = () => {
  return (
    <>
      {/* <Hero/> */}
      <NewHeroSection/>
      {/* <WhoWeAre/> */}
      <Newwhoweare/>
      <WhatWeSolve/>
      {/* <WhyChooseUs/> */}
      <NewwhyChoose/>
      {/* <ResultsSection/> */}
      <NewResultyou/>
      <CtaSection/>
    </>
  )
}

export default Home
