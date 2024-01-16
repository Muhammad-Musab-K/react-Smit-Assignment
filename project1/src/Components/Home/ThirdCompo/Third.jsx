import React from 'react'
import Card from '../../Mycompo/Card'
import Bg from "../../../images/Bg.png"
import mask from "../../../images/mask.png"
import pad from "../../../images/pad.png"

function Third() {
    return (
        <>
            <div className='flex mt-10 mb-10 justify-center '>
                <div className='hidden  md:block w-[600px]'><img src={Bg} /></div>
                <div className=' lg:w-[700px] mx-20' >
                    <div className='flex  justify-between px-3 pt-3 '>
                        <div><h1 className='text-slate-500 text-3xl md:text-2xl xl:text-3xl font-bold'><span className='text-red-600'>MACC</span> WEEKLY DISCOUNT</h1></div>
                        <div className=''><button className='w-20 p-2 bg-slate-300 text-xs'>VIEW ALL</button></div>
                    </div>
                    <div className='flex flex-col lg:flex-row'>
                        <div>
                            <Card image={mask} id='6' title="Quality mask" />
                            </div>
                        <div className='md:hidden lg:block'><Card image={pad} id='8' title="Stay free ultra pad" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Third
