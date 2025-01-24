import React from 'react'
import { ScrollingStack } from './ScrollingStack'
import { stacks } from '@/data'


    

const Stack = () => {
  return (
    <div className='mx-auto max-w-2xl py-20'>

        <ScrollingStack  items={stacks}/>
    </div>
    
   

   
  )
}

export default Stack
