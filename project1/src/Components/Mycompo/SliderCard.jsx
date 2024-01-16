import React from 'react'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

import { useInView } from 'framer-motion'
import { useRef } from 'react'

function SliderCard({img}) {
     
    const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    console.log("Element is in view: ", isInView)
  }, [isInView])

    return (
        <>
            <div className='flex justify-around h-screen bg-gray-200'>
                <div className=''>
                    <div className='flex flex-col justify-center w-60 h-full'>
                        <h1 className='text-4xl mb-3 font-bold'>Lorem, ipsum </h1>
                        <p className='text-lg'> Lorem, ipsum dolor.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, eaque.</p>
                        <button className='border-2 border-black px-6 py-3'>BHT HARD</button>
                    </div>
                </div>
                <div  className='h-4/5'>
                    <motion.img 
                    ref={ref} 
                    transition={{type:"tween" , duration:0.5 , delay:0.2}}
                    animate={{rotate:isInView?-8:2 } } 
                    className='w-full h-full' src={img} alt="" />
                </div>
            </div>
        </>
    )
}

export default SliderCard
