import React from 'react'
import image from "../../../images/cover.png"
import { Link } from 'react-router-dom'

function First() {
  return (
    <>
      <div className=' flex w-screen bg-slate-100 pb-12 ' >
         <div className='flex  flex-col w-screen sm:w-1/2 p-10'>
             <h1 className='text-blue-900 font-bold text-3xl md:text-5xl md:leading-[70px]'>PROVIDING SERVICES AT YOUR DOOR</h1>
             <p className='text-sm md:text-base text-slate-500'> <span className='text-lg font-semibold'>MACC Essentials</span> has an important role in making supplies and services available to customers and their patients during this critical time. This includes services from various domains. Our aim is to aid you. As much we can.</p>
             <div>
           <Link to={'/products'}><button className='w-24 md:w-32 p-2 mt-6 md:mt-10 xl:mt-14 bg-red-600 text-white text-xs md:text-sm font-semibold'>LEARN MORE</button></Link> 
         </div>
         </div>
         <div className='hidden sm:flex justify-center w-1/2 pt-10 '>
            <img className='w-64 h-64 md:w-96 md:h-96 ml-10' src={image} />
         </div>
         
      </div>
    </>
  )
}

export default First
