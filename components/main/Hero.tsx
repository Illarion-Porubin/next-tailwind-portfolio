import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full '>
        <video
        autoPlay
        muted
        loop
        className='rotate-180 absolute top-[-320px] left-0 z-[1] w-full h-full object-cover'
        id="main"
        >
            <source src='/blackhole.webm' type='video/webm'/>
        </video>
        <HeroContent/>
    </div>
  )
}

export default Hero