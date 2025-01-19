import React from 'react'
import { BentoGrid, BentoGridItem } from './BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id="about">
        <BentoGrid className='w-fulll py-20 text-white-100'>
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

        </BentoGrid>
    </section>
  )
}

export default Grid