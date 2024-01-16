

import React, { useEffect, useState } from 'react';
import Card from './Card';
import { getAllData } from '../../redux/action/product.action';
import { useDispatch, useSelector } from 'react-redux';
import {selectFilteredProducts} from '../../redux/slices/product.slice';



function DisplayCard() {
    
    const dispatch = useDispatch();
    const products = useSelector(selectFilteredProducts);
    useEffect(() => {
        dispatch(getAllData());
    }, [dispatch]);
  
 
   
    return (
        <>
            {products?.map((item, index) => {
                const { title, images, id } = item;
                return <Card key={id} title={title} image={images[0]} id={id} />;
            })}
        </>
    );
}

export default DisplayCard;
