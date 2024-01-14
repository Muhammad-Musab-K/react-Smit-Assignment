import React from 'react'
import Card from '../../Mycompo/Card'
import mask from '../../../images/mask.png'
import perfume from '../../../images/perfume.png'
import pad from '../../../images/pad.png'

function Second() {
  return (
    <>
      <div className='flex flex-col w-screen justify-center items-center p-6'>
        <div>
            <h1 className='mb-4 text-blue-950 text-3xl font-bold'><span className='text-red-500'>NEW</span> PRODUCTS</h1>
        </div>
        <div className='flex flex-col md:flex-row'>
            <Card image={mask} title="Quality mask" />
            <Card image={perfume} title="Body perfume" />
            <Card image={pad} title="Stay free ultra pad" />
        </div>
       
      </div>
    </>
  )
}

export default Second
