import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'



function Dropdown(props) {
    const {name} = props
    const [show, setShow] = useState(false)

const appear = () => {
    setShow(show => !show)
}
    return (
        <>
            <div className=' relative  w-60 px-4  '>
                <div className='flex justify-between'>
                    <h1 className='text-black text-xl '>{name}</h1><svg onClick={appear} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className=''><hr /></div>
                {show && <motion.div animate={{scale:1}} initial={{scale:0}} className='z-10 w-56 duration-500 shadow p-2 bg-slate-100 '>
                    <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae nostrum illum accusantium deserunt necessitatibus cum pariatur voluptatibus possimus vero vel odio mollitia modi eaque hic consequatur, animi earum est aspernatur?</p>
                </motion.div>}
               
            </div>
        </>
    )
}

export default Dropdown
