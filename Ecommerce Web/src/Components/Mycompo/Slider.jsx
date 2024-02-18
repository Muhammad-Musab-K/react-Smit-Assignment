
import React, { useState } from 'react';
import { motion } from 'framer-motion';


function Slider(props) {
    const { images } = props.data;
    const [pic, setPic] = useState(images[0]);
    const [rotate , setRotate] = useState(false)

    return (
        <motion.div initial={{scale:0}} animate={{scale:1}} className='w-full flex ml-3 md:ml-10 justify-center'>
            <div>
                <ul className='h-52 sm:h-60 md:h-72 lg:h-[400px] flex flex-col justify-between'>
                    {images?.map((image, index) => (
                        <motion.div
                            key={index}
                            animate={{rotate: rotate ? 360 : 0}}
                            onClick={() =>  {setRotate(!rotate)
                            setPic(image)} }
                            className='bg-slate-100 w-10 h-10 mb-1 md:w-16 md:h-16 lg:h-20 lg:w-20 lg:mb-2  flex px-1 items-center justify-center'>
                            <img className='w-full h-full' src={image} alt={`Image`} />
                        </motion.div>
                    ))}
                </ul>
            </div>
            <div className=' h-52 sm:h-60 w-[400px] sm:w-[350px] md:  md:h-72 lg:h-[400px] bg-slate-100 ml-3 md:ml-10 flex justify-center items-center px-1 md:px-3 overflow-hidden'>
                <img className='w-full' src={pic} alt='Selected' />
            </div>
        </motion.div>
    );
}

export default Slider;
