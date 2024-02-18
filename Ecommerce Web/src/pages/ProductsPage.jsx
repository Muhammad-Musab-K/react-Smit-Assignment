import React from 'react'
import Selection from '../Components/Mycompo/selection'
import SideBar from '../Components/Mycompo/SideBar'
import Cover from '../Components/Mycompo/Cover'


function ProductsPage() {
    
    return (
        <>
            <div className='overflow-x-hidden'>
                <Cover />
                <div className=' flex flex-col-reverse justify-center items-center md:justify-start  md:items-start md:flex-row'>
                    <div>
                        <SideBar />
                    </div>
                    <Selection />
                </div>
            </div>

        </>

    )
}

export default ProductsPage
