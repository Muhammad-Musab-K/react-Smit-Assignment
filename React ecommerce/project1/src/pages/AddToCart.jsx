import React from 'react'
import Cart from '../Components/Mycompo/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCAt } from '../redux/slices/product.slice'


function AddToCart() {
  const cartItem = useSelector(getAllCAt)
  console.log(cartItem, "cartItem")

  if(!cartItem.length){
    return (
      <div  className='mt-6 text-center text-xl'>No Item</div>
    )
  }
  return (
    <>
      <div className='w-full px-20'>
        {cartItem?.map((item) =>
          <Cart data={item} />)}
      </div>
    </>
  )
}

export default AddToCart
