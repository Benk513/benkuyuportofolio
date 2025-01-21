'use client';
import { projects } from '@/data';
import React from 'react';
import { motion } from 'framer-motion';
import {BsArrowUpRight, BsGithub } from 'react-icons/bs';
import Image from 'next/image';
const RecentProjects = () => {
  return (
    <div className='py-20 text-white-200'>
      <h1 className='heading'>
        A small selection of{' '}
        <span
          className=' text-purple
        '
        >
          recent projects
        </span>
      </h1>
      <div className='items-center justify-center p-4 gap-16 space-y-4 lg:space-y-8 mt-10 '>
        {projects.map((project) => (
          <div
            key={project.id}
            className="lg:min-h-[38rem] min-h-[12rem] rounded-[25px] overflow-hidden lg:flex   justify-around items-center
             text-purple  leading-9  relative p-4 bg-gradient-to-r gap-y-4 from-[#030723] to-[#0c0e23] border border-[#2b2c3a] "
          >
            <div className='w-full lg:max-w-[36rem] text-purple flex-col  space-y-3 lg:space-y-6'>
              <h1 className=" text-white  lg:text-3xl font-bold leading-9 space-y-4">Ai Image Saas - Canva Application</h1>
              <h2 className='text-lg lg:text-xl font-semibold'>Decription</h2>
              <p className='leading-relaxed text-[#bec0dd] texl-lg'>
                A REAL Software-as-a-Service app with AI features and a payments
                and credits system using the latest tech
              </p>

              <h2  className='text-xl font-semibold  lg:visible'>Features</h2>
              <ul className='leading-relaxed text-[#bec0dd] texl-lg   lg:visible '>
                <li>AI Image Generation</li>
                <li>AI Image Editing</li>
                <li>AI Image Enhancement</li>
              </ul>

              <h2  className='text-xl font-semibold'>Tech Stack</h2>
              <div className='flex items-center '>
                {project.iconLists.map((icon,index) =>(
                  <div key={icon}
                  className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-12 h-12 flex justify-center items-center'
                  style={{
                    transform:`translateX(-${5 * index * 2}px)`
                  }}>
                    <img src ={icon} alt='ben kuyu skills' className='p-2'/>

                  </div>
                ))}
                <div className='flex gap-4 items-center'>
                  <a href='https://tailwindcss.com/docs/align-items' target='_blank' className='flex items-center gap-2 '><BsGithub className='size-6'/>Source Code</a><a  href='www.google.com'className='flex gap-2 items-center'>Check Demo <BsArrowUpRight/></a>
                </div>
                
                
              </div>


            </div>

            <div className='lg:w-[36rem] w-full mt-5 h-60 lg:h-[518px] relative bg-[#13152c] rounded-[14px] border border-black-300/10 overflow-hidden'>
            <Image  width={587.20} height={475.82} alt='ben kuyu recent project' className="w-[770px] h-[377px] -right-20 top-0 absolute" src="/bg.png" />
            <Image width={587.20} height={475.82} className="lg:w-[587.20px] lg:h-[475.82px] left-[76.28px] top-10 lg:top-[96px] absolute origin-top-left rotate-[2.80deg] rounded-[10px]" src="/work1.png" alt='ben kuyu recent project' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;

// {projects.map((project) =>(
//   <div key={project.id} className='lg:min-h-[32.5rem] h-[25rem] items-center justify-center sm:w-96   bg-white-200'>
//     {project.title}
//   </div>

// ))}
