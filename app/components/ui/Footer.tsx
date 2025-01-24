import React from 'react';
import MagicButton from './MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';

const Footer = () => {
  return (
    <footer
      className='relative my-10 text-white-200 w-full pt-20 h-1/2 '
      id='contact'
    >
      <div className='w-full absolute left-0 bottom-0 h-full  '>
        <img
          src='/footer-grid.svg'
          alt='grid'
          className='w-full h-full opacity-100'
        />
      </div>
      <div className='flex flex-col items-center'>
        <h1 className=' heading lg:max-w-[45vw]'>
          Ready to take <span className='text-purple'>your</span> digital
          presence to the next level?
        </h1>
        <p className=' to-white-200 md:mt-10 my-5 text-center'>
          Reach out to me today and let&apos; discuss how I can help you achieve
          your goals.
        </p>
        <a href='mailto:benkuyutech65@gmail.com'>
          {' '}
          <MagicButton
            title="Let's get in touch"
            position='right'
            icon={<FaLocationArrow />}
          />
        </a>
      </div>
      <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal font-light'>Copyright ©2025 Ben Kuyu</p>
        <div className='flex items-center md:gap-3 gap-6'>
            {socialMedia.map((profile) =>(
                <div key={profile.id} className=' size-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-200 bg-opacity-75 bg-black-200 rounded-full border border-black-300'>
                    <a href={profile.link} target='_blank'><img src={profile.img} alt={profile.id} width={20} height={20}/></a>
                </div>
            ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
