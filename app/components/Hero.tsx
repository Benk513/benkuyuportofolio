import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className=' h-screen pb-20 pt-36'>
        <div>
            <Spotlight className='-top-10 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
            <Spotlight className='-top-10 -left-10  md:left-full h-[80vh] w-[80vw] ' fill='purple'/>
            <Spotlight className='-top-10 md:top-28 md:-left-80 left-0 h-[80vh] w-[80vw]' fill='blue'/>
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.04] bg-grid-black/[0.03]   flex items-center justify-center absolute top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[50vw] flex flex-col items-center justify-center '>
            <h2 className=" uppercase tracking-widest text-xs  text-center text-blue-100 max-w-80  dark:text-blue-100">
 Dynamic Web Magic with Next.js                
            </h2>
            <TextGenerateEffect
            className='text-center text-xl lg:text-5xl'
            words='Transforming Concepts into Seamless User Experiences'
            />

            <p className=' text-white text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>Hi, I&apos;m Ben Kuyu, a React Developer based in Tunisia.</p>

            <a href="#about">
                <MagicButton 
                title="Show my work"
                position='right'
                icon={<FaLocationArrow/>}/>
            </a>
        </div>
      </div>
       
    </div>
    </div>
  )
}

export default Hero