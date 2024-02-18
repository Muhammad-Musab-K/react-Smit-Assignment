import React, { useEffect } from 'react'
import First from '../Components/Home/FirstComponent/First'
import Second from '../Components/Home/SecondComponent/Second'
import Third from '../Components/Home/ThirdCompo/Third'
import Fourth from '../Components/Home/FourthCompo/Fourth'


const Home = () => {

    return (
        <div className='overflow-x-hidden'>
            <First />
            <Second />
            <Third />
            <Fourth />
        </div>
    )
}

export default Home
