

import React, { useEffect, useState } from 'react';
import Card from './Card';
import { getAllData } from '../../redux/action/product.action';
import { useDispatch, useSelector } from 'react-redux';
import {selectFilteredProducts} from '../../redux/slices/product.slice';
import { getAllProducts } from '../../firebase/Firebase'


function DisplayCard() {
    
    // const dispatch = useDispatch();
    // const products = useSelector(selectFilteredProducts);
    // useEffect(() => {
    //     dispatch(getAllData());
    // }, [dispatch]);
    const [products , setProducts]  =useState([])
    useEffect(()=>{
        getData()
    },[])
    async function getData(){
        const response = await getAllProducts()
        console.log(response , 'res')
        setProducts(response)
    }
   
    return (
        <>
            {products?.map((item, index) => {
                const { title, image, id } = item;
                return <Card key={id} title={title} image={image[0]} id={id} />;
            })}
        </>
    );
}

export default DisplayCard;
