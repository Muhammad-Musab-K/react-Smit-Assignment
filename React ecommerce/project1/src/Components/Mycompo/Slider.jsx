
import React, { useState } from 'react';

function Slider(props) {
    const { image } = props.data;
    const [pic, setPic] = useState(image);

    return (
        <div className='w-full flex  ml-10 justify-center'>
            <div>
                <ul className='h-52 sm:h-60 md:h-72 lg:h-[400px] flex flex-col justify-between'>
                    {/* {images?.map((image, index) => ( */}
                        <div
                            // key={index}
                            onClick={() => setPic(image)}
                            className='bg-slate-100 w-10 h-10 mb-1 md:w-16 md:h-16 lg:h-20 lg:w-20 lg:mb-2  flex px-1 items-center justify-center'>
                            <img className='w-full h-full' src={image} alt={`Image`} />
                        </div>
                    {/* ))} */}
                </ul>
            </div>
            <div className=' h-52 sm:h-60 w-[400px] sm:w-[350px] md:  md:h-72 lg:h-[400px] bg-slate-100 ml-10 flex justify-center items-center px-3 overflow-hidden'>
                <img className='w-full' src={pic} alt='Selected' />
            </div>
        </div>
    );
}

export default Slider;
