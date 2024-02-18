import React from 'react'
import DisplayCard from './DisplayCard'
import Button from './Button'
import { setCategory } from '../../redux/slices/product.slice'
import { useDispatch, useSelector } from 'react-redux'

function selection() {

    const selectedCategory = useSelector((state) => state.product.category);
    const selectList = useSelector((state)=> state.product.list)
    const dispatch = useDispatch()
    
    return (
        <>
            <div className='flex w-4/5 items-center flex-col' >
                <div className='flex justify-around '>
                    <Button color={selectedCategory === 'all' ? 'blue' : '#F3F3F3'} onClick={() => dispatch(setCategory('all'))} name="Everyday Essentials" />
                    <Button color={selectedCategory === 'groceries' ? 'blue' : '#F3F3F3'} onClick={() => dispatch(setCategory('groceries'))} name="Groceries Essentials" />
                    <Button color={selectedCategory === 'skincare' ? 'blue' : '#F3F3F3'} onClick={() => dispatch(setCategory('skincare'))} name="Skin& Health" />
                    <Button color={selectedCategory === 'smartphones' ? 'blue' : '#F3F3F3'} onClick={() => dispatch(setCategory('smartphones'))} name="Electronics tech" />
                </div>
                <div className='flex justify-between w-full px-14 mt-10'>
                    <p>{selectList?.length} Products </p>
                    <select className='border border-black pr-10 py-1' >
                        <option value="" selected disabled hidden>Sort</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                    </select>
                </div>
                <div className='flex flex-wrap justify-center'>
                    <DisplayCard />
                </div>
            </div>


        </>
    )
}

export default selection
