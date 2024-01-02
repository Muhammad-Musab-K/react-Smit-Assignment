import React, { useState, useEffect } from 'react';
import FbImageLibrary from 'react-fb-image-grid';

function FbPost() {
    const [arr, setArr] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => {
                setArr(data.products);
                console.log(data.products); 
            })
            .catch(error => {
                console.error('Error fetching data', error);
            });
    }, []);

    return (
        <>
            {arr.map(data => (
                <div key={data.id} className='p-4 shadow-md w-[450px] bg-white rounded-xl m-4'>
                    <div>
                        <div className='profile flex h-14'>
                            <div className='w-14 h-14 rounded-full border-2 border-black'>
                                <img className='w-14 h-14 rounded-full' src="https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzJfMTY2NzUzNzYxOF8wNDY/screen-2.webp?fakeurl=1&type=.webp" alt="" />
                            </div>
                            <div className='flex flex-col ml-2 mt-1'>
                                <h2 className='text-xl'>{data.title}</h2>
                                <p className='text-base text-gray-600'>{data.category}</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-normal mt-5 mb-5'>{data.description}</p>
                        </div>
                        <div className='border  rounded-xl'>
                            <FbImageLibrary images={data.images} />
                        </div>
                        <hr className=' h-8  w-full text-black my-6' />
                        <div className='flex justify-evenly'>
                            <button>Like</button>
                            <button>Comment</button>
                            <button>Share</button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default FbPost;
