"use client"
import { cn } from '@/lib/utils';
import { BackgroundGradientAnimation } from './GradientBg';
import { GlobeDemo } from './GridGlobe';
// import Lottie from 'react-lottie';
import { useState } from 'react';
import MagicButton from './MagicButton';
import { IoCopyOutline } from 'react-icons/io5';
import Link from 'next/link';
// import animationData from '@/data/confetti.json'
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ',
        className
      )}
    >{children}</div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {

  const [copied, setCopied] =useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText("benkuyutech65@gmail.com")
    setCopied(true)
    }

  return (
    <div
      className={cn(
        'row-span-1  rounded-3xl overflow-hidden relative group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-transparent dark:border-white/[0.1] bg-white border justify-between flex flex-col space-y-4',
        className
      )}
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor:
          'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,59,68,1) 26%, rgba(93,108,111,1) 100%)',
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className='w-full h-full absolute'>
          {img && (
            <img
              src={img}
              alt={title}
              className={cn(imgClassName, 'object-cover object-center')}
            />
          )}
        </div>
        <div
          className={` absolute right-0 -bottom-5 ${
            id === 5 && 'w-full opacity-80'
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={title}
              className={cn('object-cover object-center', 'w-full h-full')}
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className=' absolute z-50 flex h-10 items-center justify-center text-white font-bold '> </div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
          )}
        >
          <div className=' font-sans font-extralight text-sm lg:text-base z-10 text-[#c1c2d3]'>
            {description}
          </div>
          <div className='font-sans font-bold text-lg lg:text-3xl max-w-96 z-10'>
            {title}
          </div>
       
        {id===2 && <GlobeDemo/>}

        {id===3 && (
          <div className="flex gap-1 lg:gap-5 w-fit -right-3 lg:-right-2 absolute">
            <div className='flex flex-col gap-3 lg:gap-8'>
              {[
                {
                title: 'React.js',                
                href:'https://fr.react.dev/'
              },
                {
                title: 'Next.js',                
                href:'https://nextjs.org/'
              },
                {
                title: 'JavaScript',                
                href:'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
              },
            ].map((item,idx) => (
                <Link href={item.href} target='_blank' key={idx} className='py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opac50* lg:opacity-100 rounded-lg text-center bg-[#10132E]/30 hover:bg-[#262c61] transition-all hover:scale-105 duration-200 hover:cursor-pointer'>{item.title}</Link>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]"/>
              
            </div>
            <div className='flex flex-col gap-3 lg:gap-8'>
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]"/>
              {[
                {
                title: 'MongoDB',                
                href:'https://fr.react.dev/'
              },
                {
                title: 'MySQL',                
                href:'https://nextjs.org/'
              },
                {
                title: 'Node.Js',                
                href:'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
              },
            ].map((item,idx) => (
                <Link href={item.href} target='_blank' key={idx} className='py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opac50* lg:opacity-100 rounded-lg text-center bg-[#10132E]/30 hover:bg-[#262c61] transition-all hover:scale-105 duration-200 hover:cursor-pointer'>{item.title}</Link>
              ))}
              
            </div>
           
            </div>
              
        )}

        {id===6 &&(
          <div className='mt-5 relative'>
            {/* <div className={`absolute -bottom-5 right-0`}>
              <Lottie options={{
                loop:copied,
                autoplay:copied,
                animationData,
                rendererSettings:{
                  preserveAspectRatio: 'xMidYMid slice',
                }
              }}/>
            </div> */}
            <MagicButton 
            title={copied? 'Email copied' :'Copy my email'}
            icon={<IoCopyOutline/>}
            position='left'
            handleClick={handleCopy}
            otherClasses='!bg-[#161a31]'/>
          </div>

        )}
      </div>

       
    </div> </div>
  );
};
