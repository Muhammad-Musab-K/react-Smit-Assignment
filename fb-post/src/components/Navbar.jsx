import React from 'react'

function Navbar() {
    return (
        <>
            <div className='w-screen h-24 bg-white flex items-center justify-between px-4 fixed top-0 z-50  '>
                <div className='flex'>
                <i className='fa-brands fa-facebook fa-3x text-blue-600 ml-3'></i>
                <div className='w-96 h-16 rounded-full bg-slate-200 ml-5 mt-1 text-3xl flex items-center px-4'>
                    <i className='fa fa-search text-2xl text-gray-500'></i>
                    <input placeholder='Search facebook' className="ml-3 outline-none text-2xl text-gray-500 bg-transparent w-80"  ></input>
                </div>
                </div>
                <div>
                    <ul className='flex w-[500px] justify-between  mt-4'>
                        <li><i className='fa-solid fa-house fa-xl text-gray-400 '></i></li>
                        <li><i className='fa-brands fa-square-youtube fa-xl text-gray-400 '></i></li>
                        <li><i className='fa-solid fa-store fa-xl text-gray-400'></i></li>
                        <li><i className='fa-solid fa-users-between-lines fa-xl text-gray-400 '></i></li>
                        <li><i className='fa-solid fa-gamepad fa-xl text-gray-400 '></i></li>
                    </ul>
                </div>
                <div className='flex '>
                    <div className='w-16 h-16 bg-slate-200 rounded-full mx-2 flex justify-center items-center'>
                        <i className='fa-solid fa-ellipsis m-0 p-0 fa-2xl'></i>
                       
                    </div>
                    <div className='w-16 h-16 bg-slate-200 rounded-full mx-2 flex justify-center items-center'>
                    <i className='fa-brands fa-facebook-messenger fa-xl'></i>
                    </div>
                    <div className='w-16 h-16 bg-slate-200 rounded-full mx-2 flex justify-center items-center'>
                        <i className='fa-solid fa-bell fa-xl'></i>
                    </div>
                    <div className='w-16 h-16 bg-slate-200 rounded-full mx-2 flex justify-center items-center'>
                        <img src="https://scontent.fkhi16-2.fna.fbcdn.net/v/t39.30808-6/394301915_887588979556266_6752452600805519715_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeH8L8BGsWsbStwuRlX17AN3O0wb2mHwab47TBvaYfBpvl98e2VwzgjMXlDhVV1KnbPutH3p6yiKdIRgq3VPc1tn&_nc_ohc=cueJ9QX6sacAX-CN-Et&_nc_ht=scontent.fkhi16-2.fna&oh=00_AfBgRvrCSiI2jrFKsAPZtoSS2ofwWP2iCpaZihkYY09x6w&oe=659B2D0A" className='w-full h-full rounded-full' alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar
