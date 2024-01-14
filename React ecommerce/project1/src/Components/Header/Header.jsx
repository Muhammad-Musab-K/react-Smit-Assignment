import React from 'react'
import logo from "../../images/macc.png"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllCAt } from '../../redux/slices/product.slice'
import { useSelector } from 'react-redux'




function Header() {
    const cartProducts = useSelector(getAllCAt)

    const [hide, setHide] = useState(false)
    const responsiveNavbar = () => {
        setHide(h => !h);
    };


    return (
        <>
            <div className='bg-white w-full flex flex-col '>

                <div className='px-6 py-2 flex justify-end w-full'>
                    <ul className='flex justify-between text-sm text-slate-500'>
                        <Link to={'/'}><li className='mx-5'>Return</li></Link>
                        <Link to={'/help'}><li className='mx-5'>Help</li></Link>
                        <Link to={'/signup'}><li className='mx-5'>Register/Signin</li></Link>
                    </ul>
                </div>
                <hr />
                <div className='px-10 py-1 flex w-full  items-center justify-between'>
                    <div className='flex '>
                        <i className='fa-solid fa-magnifying-glass fa-lg mt-3 mr-2   text-slate-400'></i>
                        <input
                            className='w-52 h-7 outline-none border border-slate-100 '
                            type="search here"
                            placeholder='Search'
                        />
                    </div>
                    <div className='hidden  lg:flex '>
                        <ul className='flex justify-between items-center'>
                            <Link to={'/products'}> <li className='mx-6 xl:mx-12 text-sm lg:text-normal  text-slate-400'>SHOP</li></Link>
                            <li className='mx-6 xl:mx-12 text-sm lg:text-normal  text-slate-400'>ESSENTAILS</li>
                            <Link to={'/'}><li className='logo  w-28 mb-10'><img src={logo} /></li></Link>
                            <li className='mx-6 xl:mx-12 text-sm lg:text-normal  text-slate-400'>BEST SELLER</li>
                            <li className='mx-6 xl:mx-12 text-sm lg:text-normal  text-slate-400'>ABOUT US</li>
                        </ul>
                    </div>
                    <div className='hidden  lg:flex'>
                        <ul className='flex'>
                            <li className='mx-4'><i class="fa-regular fa-user text fa-xl text-slate-400"></i></li>
                            <li className='mx-4'><i class="fa-regular fa-bell text fa-xl text-slate-400"></i></li>
                            <Link to={'/addtocart'}><li className='mx-4 relative'><div className="absolute flex justify-center items-center w-[15px] h-[16xpx] rounded-xl bg-red-700 right-0 top-0 text-white text-[9px]" >{cartProducts.length}</div><i class="fa-solid fa-bag-shopping text fa-xl text-slate-400"></i></li></Link>
                        </ul>
                    </div>
                    <div className=' lg:hidden' onClick={responsiveNavbar} ><i className='fa-solid fa-bars fa-xl text-slate-500'></i></div>




                </div>
                {hide && <div className=' z-50 slide-in-bck-center absolute mt-[70px] flex  border-2  bg-gray-900 border-black  h-96 '>
                    <ul className='flex flex-col w-full justify-between items-center '>
                        <Link to='/products'><li className='mx-12 text-slate-400 mt-6'>SHOP</li></Link>
                        <hr className='h-[1px] bg-white w-screen ' />
                        <li className='mx-12 text-slate-400 my-1'>ESSENTAILS</li>
                        <hr className='h-[1px] bg-white w-screen ' />
                        <li className='mx-12 text-slate-400 my-1' >BEST SELLER</li>
                        <hr className='h-[1px] bg-white w-screen ' />
                        <Link to={'/about'}> <li className='mx-12 text-slate-400 mb-6'>ABOUT US</li></Link>

                    </ul>
                </div>}

            </div>
        </>
    )
}

export default Header
