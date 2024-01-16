import React from 'react'
import logo from "../../images/macc.png"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllCAt } from '../../redux/slices/product.slice'
import { useSelector } from 'react-redux'
import './Header.css'
import { useNavigate } from 'react-router-dom'
import Button from '../Mycompo/Button'
import { motion } from 'framer-motion'




function Header() {
    const cartProducts = useSelector(getAllCAt)

    const [hide, setHide] = useState(false)
    const responsiveNavbar = () => {
        setHide(h => !h);
    };

    const navigate = useNavigate()
    const handleGoBack=()=>{
        navigate(-1);
    }

    return (
        <>
            <div className='bg-white w-full flex flex-col '>

                <div className='px-2 md:px-6 py-2 flex justify-between w-full'>
                    <div><Button onClick={handleGoBack} name="back" color="#C0C0C0" /></div>
                    <ul className='flex justify-between text-sm text-slate-500'>
                        <Link to={'/'}><li className='mx-5'>Return</li></Link>
                        <Link to={'/help'}><li className='mx-5'>Help</li></Link>
                        <Link to={'/signup'}><li className='mx-5'>Register/Signin</li></Link>
                    </ul>
                </div>
                <hr />
                <div className='px-4 md:px-10 py-1 flex w-full  items-center justify-between'>
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
                    <div className=' lg:hidden' onClick={responsiveNavbar} >{hide? <i className='fa-solid fa-xmark fa-xl text-slate-500'></i>:<i className='fa-solid fa-bars fa-xl text-slate-500'></i> }</div> 




                </div>
                {hide && <motion.div initial={{y : -384}} animate={{y:0}} className=' z-50  h-96 w-screen absolute  mt-[80px] flex   bg-gray-100   '>
                    <ul className='flex flex-col w-full justify-between items-center '>
                        <Link to='/products'><li className='mt-10 transition  ease-in-out  text-slate-400 hover:-translate-y-1 hover:scale-11 hover: duration-300 ...  '>SHOP</li></Link>
                        <hr className='h-[1px] bg-white ' />
                        <Link  to='/products'> <li className='transition  ease-in-out  text-slate-400 hover:-translate-y-1 hover:scale-11 hover: duration-300 ... '>ESSENTAILS</li></Link>
                        <hr className='h-[1px] bg-white ' />
                        <Link  to='/products'><li className='transition  ease-in-out  text-slate-400 hover:-translate-y-1 hover:scale-11 hover: duration-300 ... ' >BEST SELLER</li></Link>
                        <hr className='h-[1px] bg-white ' />
                        <Link to={'/about'}> <li className=' mb-10 transition  ease-in-out  text-slate-400 hover:-translate-y-1 hover:scale-11 hover: duration-300 ...  '>ABOUT US</li></Link>

                    </ul>
                </motion.div>}
               

            </div>
        </>
    )
}

export default Header
