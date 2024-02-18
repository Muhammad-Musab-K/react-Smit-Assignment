import React from 'react'
import AccordionItem from './Dropdown'

function SideBar() {
    const dropdown1 = 'My company'
    const dropdown2 = 'Price'
    const dropdown3 = 'Categories'
    const array1 = ['About Us', 'Privicy Policy', 'Terms and Conditions']
    return (
        <>
            <div className=' md:h-screen sticky top-0  '>
                <div className='mb-6'>
                    <AccordionItem name={dropdown1} options={array1} />
                </div>
                <div className='mb-6'>
                    <AccordionItem name={dropdown2} options={array1} />
                </div>
                <div className='mb-6'>
                    <AccordionItem name={dropdown3} options={array1} />
                </div >
            </div>
        </>
    )
}

export default SideBar
