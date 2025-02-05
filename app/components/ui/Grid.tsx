import React from 'react'
import { BentoGrid, BentoGridItem } from './BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section className=' py-24 lg:py-40' id="about">
         <BentoGrid className='w-fulll   text-white'>
            {gridItems.map((item,idx) =>(
                <BentoGridItem 
                id={item.id}
                key={idx}
                title={item.title}
                description={item.description}
                className={item.className}
                img={item.img}
                imgClassName={item.imgClassName}
                titleClassName={item.titleClassName}
                spareImg={item.spareImg}
                />
            ))}

        </BentoGrid >
    </section>
  )
}

export default Grid