import { useSelect } from '@material-tailwind/react'
import React, { useState } from 'react'
import { removeProduct } from '../../redux/slices/product.slice'
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'


function Cart({ data }) {

    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(0)
    const count = () => {
        if (quantity < 1) {
            setQuantity(0)
        }
        else {
            setQuantity(quantity - 1)
        }
    }

    console.log(data, 'Checking')
    return (
        <motion.div initial={{scale:0}} animate={{scale:1}}  className='flex p-1 rounded-lg shadow m-1 relative'>
            <div >
                <img className='h-28  rounded-lg ' src={data.thumbnail} alt="" />
            </div>
            <div className=''>
                <h1 className='p-2 text-xl'>{data.title}</h1>
            </div>
            <div className='absolute right-3'><i onClick={()=>{dispatch(removeProduct(data.id))}} className='fa-solid fa-trash text-red-600'></i> </div>
        </motion.div>
    )
}

export default Cart
