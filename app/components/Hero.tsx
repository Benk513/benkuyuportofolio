"use client"
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { motion } from 'framer-motion'
const Hero = () => {
  return (
    <div className='h-[90vh] lg:h-screen pt-36'>
        <div className=' max-w-64 mx-auto'>
            <Spotlight className='-top-10 -left-10 md:-left-10 md:top-0 h-screen' fill='white'/>
            <Spotlight className='top-20 left-20  md:-left-10 lg:-top-20 h-[80vh] w-[80vw] ' fill='purple'/>
            <Spotlight className='top-20 left-40 md:top-28 md:-left-10 lg:top-0 lg:-left-40 h-[80vh] w-[80vw]' fill='blue'/>
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.04] bg-grid-black/[0.03]   flex items-center justify-center absolute top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[50vw] flex flex-col items-center justify-center '>
            <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay:0.4}}

             className=" uppercase tracking-widest text-xs  text-center text-blue-100 max-w-80  dark:text-blue-100">
 Dynamic Web Magic with Next.js                
            </motion.h2>
            <TextGenerateEffect
            className='text-center text-xl lg:text-5xl'
            words='Transforming Concepts into Seamless User Experiences'
            />

            <p className=' text-white text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>Hi, I&apos;m Ben Kuyu, a React Developer based in Tunisia.</p>

            <a href="#projects">
                <MagicButton 
                title="See my work"
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