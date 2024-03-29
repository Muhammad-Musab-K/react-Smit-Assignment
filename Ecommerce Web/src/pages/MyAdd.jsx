import React, { useEffect } from 'react'
import Card from '../Components/Mycompo/Card'
import { getData } from '../Firebase/Firebase';
import { useState } from 'react';

function MyAdd() {
    const [ads, setAds] = useState([])
    useEffect(() => {
        getAds()
    }, [])

    const getAds = async () => {
        const res = await getData()
        console.log('res', res)
        setAds(res)
    }
    return (

        <>
        <div className='flex justify-center'>
            {ads?.map((item, index) => {
                const { product, images , description } = item;
                return <Card title={product} image={images[0]} />;
            })}
            </div>
        </>

    )
}

export default MyAdd
