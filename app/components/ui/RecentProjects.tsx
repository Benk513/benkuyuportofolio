'use client';
import { projects } from '@/data';
import React from 'react';
import { motion } from 'framer-motion';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import Image from 'next/image';

const RecentProjects = () => {
  return (
    <section
      className='py-20 text-white-200'
      id='projects'
    >
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
            className='lg:min-h-[38rem] min-h-[12rem] rounded-[25px] overflow-hidden lg:flex   justify-around items-center
             text-purple  leading-9  relative p-4 bg-gradient-to-r gap-y-4   from-[#030723] to-[#0c0e23] border border-[#2b2c3a] '
          >
            <div className='w-full lg:max-w-[36rem] text-purple flex-col  space-y-3 lg:space-y-6 pr-4'>
              <h1 className=' text-white  lg:text-3xl font-bold leading-9 space-y-4 text-2xl'>
                {project.title}
              </h1>
              <h2 className='text-lg lg:text-xl font-semibold'>Decription</h2>
              <p className='leading-relaxed text-[#bec0dd] texl-lg'>
                {project.des}
              </p>

              <h2 className='text-xl font-semibold  hidden lg:flex lg:flex-col'>
                Features
              </h2>
              <ul className='leading-relaxed text-[#bec0dd] texl-lg hidden lg:flex lg:flex-col   '>
                {project.features?.map((feature)=>(
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <h2 className='text-xl font-semibold'>Tech Stack</h2>

              <div className='flex flex-col lg:flex space-y-3 pr-4'>


              <div className='flex items-center '>
                {project.iconLists.map((icon, index) => (
                  <div
                  key={icon}
                  className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-12 h-12 flex justify-center items-center'
                  style={{
                    transform: `translateX(-${5 * index * 2}px)`,
                    }}
                  >
                    <img
                      src={icon}
                      alt='ben kuyu skills'
                      className='p-2'
                    />
                  </div>
                ))}
              </div>
              <div>   
                <div className='flex justify-between  gap-4 items-center'>
                  <a href={project.github} target='_blank' className='flex items-center gap-2 hover:opacity-80 duration-300  '><BsGithub className='size-6'/>Source Code</a><a  href={project.link} target='_blank' className='flex gap-2 items-center hover:opacity-80 duration-300'>Check Demo <BsArrowUpRight/></a>
                </div></div>
                </div>

            </div>

            <div className='lg:w-[40rem] w-full mt-5 h-[15rem] lg:h-[30rem] relative bg-[#13152c] rounded-[14px] border border-black-300/10 overflow-hidden'>
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                alt='ben kuyu recent project'
                className=' w-[900px] -right-0 top-0 absolute'
                src='/bg.png'
              />
              <a href={project.link} target='_blank'>

              <Image
                width={1000}
                height={700}
                className='lg:w-[40rem] w-[30rem] h-[17rem] lg:h-[20rem] left-[40.28px] lg:left-[46.28px] top-0 lg:top-[96px] absolute origin-top-left lg:scale-[120%] object-contain  rotate-[2.80deg] rounded-[10px] hover:cursor-pointer lg:hover:scale-125 transition-all duration-500'
                src={project.img}
                
                alt='ben kuyu recent project'
                />
                </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;

// {projects.map((project) =>(
//   <div key={project.id} className='lg:min-h-[32.5rem] h-[25rem] items-center justify-center sm:w-96   bg-white-200'>
//     {project.title}
//   </div>

// ))}
