import React from 'react'
import Card from '../../Mycompo/Card'
import Bg from "../../../images/Bgt.png"
import mask from "../../../images/mask.png"
import perfume from "../../../images/perfume.png"
import { Link } from 'react-router-dom'


function Fourth() {
    return (
        <>
          <div className='flex mt-10 mb-10 justify-center '>
              
                <div className=' lg:w-[700px] mx-20' >
                    <div className='flex  justify-between px-3 pt-3 '>
                        <div><h1 className='text-slate-500 text-3xl md:text-2xl xl:text-3xl font-bold'><span className='text-red-600'>MACC</span> WEEKLY DISCOUNT</h1></div>
                        <div className=''><Link to={'/products'} ><button className='w-20 p-2 bg-slate-300 text-xs'>VIEW ALL</button></Link></div>
                    </div>
                    <div className='flex flex-col lg:flex-row'>
                        <div>
                            <Card image={mask} id='4' title="Quality mask" />
                            </div>
                        <div className='md:hidden lg:block'><Card image={perfume} id='2' title="Stay free ultra pad" />
                        </div>
                    </div>
                </div>
                <div className='hidden  md:block w-[600px]'><img src={Bg} /></div>
            </div>
        </>
    )
}

export default Fourth
