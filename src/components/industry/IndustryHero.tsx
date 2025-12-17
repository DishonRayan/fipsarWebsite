import React from 'react'
import heroImage from "../../assets/Industry_hero_bg.png"; // adjust path



const IndustryHero = () => {
  return (
    <>
       <section className="hero-section container mx-auto mt-24  py-16 px-32">
      {/* Background Image */}
      <div
        className="hero-bg "
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Center Content */}
      <div className="hero-content">
        <h1 className='text-[#02A5E6]'>
            {/* Clinical & Medical Ecosystem */}
            At the heart of every<br/> breakthrough in healthcare
        </h1>
        <p>
         We partner with organizations across the Life Sciences ecosystem, from drug <br/>development to healthcare delivery.

        </p>
        {/* <button>Explore More</button> */}
      </div>
    </section>
    </>
  )
}

export default IndustryHero
