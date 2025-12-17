import React from 'react'
import CoreLifeSciencesSlider from './CoreLifeSciencesSlider'
import { StorySection } from '../Aboutus/StorySection'
import IndustriesSection from './IndustriesSection'
import IndustryHero from './IndustryHero'
import BioPharmaCard from './BioPharmaCard'
import HealthcareEcosystem from './HealthcareEcosystem'

const Industry = () => {
  return (
    <>
    {/* <StorySection/> */}
    {/* <IndustriesSection/> */}
    <IndustryHero/>
      <CoreLifeSciencesSlider/>
      <HealthcareEcosystem/>
      <BioPharmaCard/>
    </>
  )
}

export default Industry
