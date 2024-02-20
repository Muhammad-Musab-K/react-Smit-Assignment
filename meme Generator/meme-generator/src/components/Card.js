import React from 'react'

function Card({ title, image }) {
  return (
    <div className=' bg-black shadow  flex flex-col w-96 h-96 gap-4 rounded-lg  p-6 '>
      <h1 className='font-semibold text-xl'>{title}</h1>
      <img className='h-3/4 object-contain' src={image} alt="" />
    </div>
  )
}

export default Card
