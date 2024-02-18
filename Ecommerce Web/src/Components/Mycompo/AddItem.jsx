import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectProducts } from '../../redux/slices/product.slice'
import { useDispatch } from 'react-redux'

function AddItem() {
    const dispatch = useDispatch();
    const {id} = useParams();

    
  return (
    <>
      <div className='flex w-screen px-10 shadow'>
        <div className=''>
            
        </div>
        <div>

        </div>
        <div>

        </div>
      </div>
    </>
  )
}

export default AddItem
