import React from 'react'
import logo from "../../images/macc.png"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='flex w-full justify-center flex-col mt-28 pt-6  '>
        <div className='flex flex-col lg:flex-row justify-evenly w-full'>
          <div className=' flex flex-col sm:flex-row items-center sm:justify-between sm:items-start lg:w-3/5 mx-14'>
           <Link to={'/'}> <div className='logo'><img src={logo} alt="" /></div></Link>
            <div className=''>
              <ul className='flex flex-col items-center sm:items-start leading-9'>
                <Link to={'/'}><li>Home</li></Link>
                <hr className='w-full px-4 h-[3px] text-black sm:hidden' />
                <Link to={'/products'}><li>Collections</li></Link>
                <hr className='w-full px-4 h-[3px] text-black sm:hidden' />
                <Link to={'/products'}><li>Products</li></Link>
                <hr className='w-full px-4 h-[3px] text-black sm:hidden' />
              </ul>
            </div>
            <div className=''>
              <ul className='flex flex-col items-center sm:items-start leading-9'>
                <Link to={'/about'}><li>About</li></Link>
                <hr className='w-full px-4 h-[3px] text-black sm:hidden' />
                <Link to={'/contact'}><li>Contact Us</li></Link>
                <hr className='w-full px-4 h-[1px] text-black sm:hidden' />
                <Link to={'/'}><li>FAQs</li></Link>
                <hr className='w-full px-4 h-[1px] text-black sm:hidden' />
              </ul>
            </div>
          </div>
          <div className='mt-4 lg:mt-0 px-10'>
            <div><p>Be the first to know about our biggest and best sales. We'll never send more than one email a month.</p></div>
            <div className='flex justify-between mt-4'>
              <h2>ENTER YOUR EMAIL</h2>
             <Link to={ "https://www.gmail.com" } target="_blank"><i className='fa-solid fa-envelope'></i></Link> 
            </div>
            <hr className='h-[1px] bg-slate-900 pr-4 my-1' />
            <div className='flex'>
              <ul className='flex'>
                <Link  to={ "https://www.facebook.com" } target="_blank"><li><i className='fa-brands fa-facebook text-blue-700 fa-2x mr-4'></i></li></Link>
                <Link  to={ "https://www.twitter.com" } target="_blank"><li><i className='fa-brands fa-twitter text-blue-700 fa-2x mx-4'></i></li></Link>
                <Link  to={ "https://www.linkedin.com" } target="_blank"><li><i className='fa-brands fa-linkedin text-blue-700 fa-2x mx-4'></i></li></Link>
                <Link  to={ "https://www.instagram.com" } target="_blank"><li><i className='fa-brands fa-instagram text-blue-700 fa-2x mx-4'></i></li></Link>
              </ul>
            </div>
          </div>
        </div>
        <div className='flex justify-center my-16 '>
          <p>All rights are reserved</p>
        </div>
      </div>


    </>
  )
}

export default Footer
