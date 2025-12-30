import React from 'react'
import Hero from './Hero'
import WhoWeAre from './WhoWeAre'
import WhatWeSolve from './WhatWeSolve'
import WhyChooseUs from './WhyChooseUs'
import ResultsSection from './ResultsSection'
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
