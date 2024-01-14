import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function Card(props) {
  const { image, title , id } = props

  const nevigate = useNavigate()
  return (
    <>
       <div onClick={()=> nevigate(`/detail/${id}`)}>
        <div className='sm:w-[250px] sm:h-[300px] lg:h-[400px] bg-slate-100 flex justify-center items-center p-4 lg:p-10 m-2'>
          <img className='w-56' src={image} alt="" />
        </div>
        <div className='mt-2 flex justify-center'><p className='text-lg text-slate-700'>{title}</p></div>
      </div>
      
    </>
  )
}

export default Card
