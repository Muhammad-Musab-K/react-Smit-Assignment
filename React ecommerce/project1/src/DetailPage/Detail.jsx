import React from 'react'
import { useParams } from 'react-router-dom'
import Slider from '../Components/Mycompo/Slider'
import { useState, useEffect } from 'react'
import Button from '../Components/Mycompo/Button'
import Accordian from '../Components/Mycompo/Accordian'
import Second from '../Components/Home/SecondComponent/Second'
import spinner from '../images/spinner.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AddtoCart } from '../redux/slices/product.slice'
import { getSingleAd } from '../firebase/Firebase'

function Detail() {

  const [data, setData] = useState([])
  const [getAde , setGetAde]  = useState([])
  const counter =()=>{
    if(count < 1){
      setCount(1)
    }
    else{
      setCount(count - 1)
    }
  }
  const  [count , setCount] = useState(1)
  const { id } = useParams()
  const getAd = () => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(res => {
        setData(res);
      })
      .catch(error => {

        console.error('Error fetching data:', error);
      });
  };
   const navigate = useNavigate()
  useEffect(() => {
    getAd();
  }, []);
 const dispatch = useDispatch()

 ////////////
 useEffect(()=>{
  getAdver()
 },[])
 async function getAdver(){
  const ad = await getSingleAd(id)
  setGetAde(ad)

 }

  if (Object.keys(data).length === 0) {
    return <div className=''><img className='animate-spin w-4 absolute top-44 right-2/4' src={spinner} alt="" />
    </div>;
  }



  return (
    <>
      <div className='flex flex-col lg:flex-row w-screen overflow-hidden px-10 md:px-20   pt-20'>
        <div className='w-full lg:w-1/2 flex justify-center'>
          {/* <Slider data={data} /> */}
          <Slider data={getAd} />
        </div>
        <div className='w-full mt-4 md:mt-10 lg:mt-0 lg: lg:w-1/2 flex flex-col px-2 lg:px-10'>
          <div className='flex justify-between w-full  '>
            <div className='price text-black text-2xl font-bold uppercase '>{getAde.title}</div>
            <div className='fa-regular fa-heart'></div>
          </div>
          <div className='text-red-600 text-xl font-bold'>$ {getAde.price}</div>
          <div className='mt-2 w-20 h-8 flex justify-evenly items-center rounded-lg shadow'>
            <div onClick={counter}><i className='fa-solid fa-minus'></i></div>
            <div className='px-3 border rounded-lg'>{count}</div>
            <div onClick={()=> setCount(count + 1)}><i className='fa-solid fa-plus'></i></div>
          </div>
          <div><button onClick={()=>dispatch(AddtoCart({id: data.id,qty:count}))} className='w-full h-10 bg-blue-700 text-center text-white mt-4'>ADD TO CART</button></div>
          <div className='mt-4'>
            <Accordian data={getAde.description} name="Description" />
            {/* <Accordian data={data.brand} name="Brand" /> */}
            {/* <Accordian data={data.discountPercentage} name="DiscountPercentage" /> */}
          </div>

        </div>

      </div>
      <div>
        <Second />
      </div>
    </>
  )
}

export default Detail
