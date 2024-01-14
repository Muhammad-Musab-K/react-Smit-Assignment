

import React, { useState, useEffect } from 'react';
import FbImageLibrary from 'react-fb-image-grid';
import haha from '../images/haha.png';
import love from '../images/love.png';
import angry from '../images/angry.png';
import wow from '../images/wow.png';
import sad from '../images/sad.png';
import like from '../images/like.png';
import care from '../images/care.png';


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

    if (arr.length === 0) {
        return <div class="loader "></div>
    }


    return (
        <>
            <div className='mt-28'>
                {arr.map(data => (
                    <div key={data.id} className='p-4 shadow-md w-[450px] bg-white rounded-xl m-4 mt-'>
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
                            <div className=''>
                                <FbImageLibrary images={data.images} />
                            </div>
                            <hr className=' h-8  w-full text-black my-4' />
                            <div className='flex justify-evenly relative'>
                                <button className='likeButton text-slate-400 text-2xl'><i className='fa-regular fa-thumbs-up text-slate-400 fa-xl mr-1 '></i>Like</button>
                                <div className='reactions  absolute bottom-10 left-10   '>
                                    <ul className='flex justify-center items-center rounded-full w-80 h-16 bg-slate-100 '>
                                        <li className='w-10 h-10 '><img src={like} alt="" /></li>
                                        <li className='w-10 h-10 '><img src={love} alt="" /></li>
                                        <li className='w-10 h-10 '><img src={sad} alt="" /></li>
                                        <li className='w-10 h-10 '><img src={haha} alt="" /></li>
                                        <li className='w-10 h-10 '><img src={care} alt="" /></li>
                                        <li className='w-10 h-10 '><img src={wow} alt="" /></li>
                                        <li className='w-10 h-10 '><img src={angry} alt="" /></li>
                                    </ul>
                                </div>
                                <button className='text-slate-400 text-2xl'><i className='fa-regular fa-comment text-slate-400 fa-xl mr-1 '></i>Comment</button>
                                <button className='text-slate-400 text-2xl'><i className='fa-solid fa-share text-slate-400 fa-xl mr-1 '></i>Share</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default FbPost;