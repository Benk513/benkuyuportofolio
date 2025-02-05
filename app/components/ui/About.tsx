'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagicButton from './MagicButton';
import { FaFile } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';
const About = () => {
  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ['start end', 'end end'],
  });

  const text =
    'Hello, I am Ben KUYU, a passionate and detail-oriented Frontend        Developer specializing in React.js Ecosystem. I thrive on building intuitive, responsive, and visually appealing web applications that deliver seamless user experiences. With a strong foundation in modern JavaScript, HTML, and CSS, I bring ideas to life through clean, maintainable, and scalable code.';

  const words = text.split(' ');

  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    wordIndex.on('change', (latest) => setCurrentWord(latest));
  }, [wordIndex]);

  return (
    <section className='py-24 lg:py-40 text-white-100/20 h-auto text-xl lg:text-4xl lg:leading-[4rem] max-w-4xl mx-auto text-center'>
      <div className=' lg:container'>
        <div className='sticky top-20 lg:top-40'>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className=' '
          >
            {words.map((word, wordIndex) => (
              <span
                key={wordIndex}
                className={twMerge(
                  'text-white-100/10 transition duration-500 ',
                  wordIndex < currentWord && 'text-white'
                )}
              >{`${word} `}</span>
            ))}
          </motion.p>
        </div>

        <div
          className='h-[50vh] lg:h-[150vh] my-40'
          ref={scrollTarget}
        >
          {' '}
         
        </div> <a
            href='benKuyuResume.pdf'
            download='benKuyuResume.pdf'
          >
            <MagicButton
              title='Download My Resume'
              position='right'
              icon={<FaFile />}
            />
          </a>
      </div>
    </section>
  );
};

export default About;
