import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'


function Card(props) {
  const { image, title, id  } = props

  const nevigate = useNavigate()
  return (
    <>
      <motion.div whileHover={{scale:1.05}} onClick={() => nevigate(`/detail/${id}`)}>
        <div className='overflow-hidden w-[150px] h-[200px] md:w-[250] md:h-[300] lg:h-[300px] lg:w-[300px] bg-slate-100 flex flex-col justify-between items-center p-4 lg:p-10 m-2'>
          <img className='w-48 h-[150px] md:w-56 md:h-[150px]' src={image} alt="" />
          <div className='mt-2 flex justify-center'><p className='text-lg text-slate-700'>{title}</p></div>
        </div>

      </motion.div>

    </>
  )
}

export default Card
