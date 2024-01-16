import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductsPage from './pages/ProductsPage'
import DetailPage from './DetailPage/Detail'
import AddToCart from './pages/AddToCart'
import { CarouselDefault } from './SliderTask/SliderTask'
import SignIn from './pages/SignUp'
import SignUp from './pages/SignIn'
import PostAd from './pages/PostAd'
import MyAdd from './pages/MyAdd'


function App() {
  return (
    <>

    

      <BrowserRouter>
        <Header />
        <Routes>
        <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} /> 
          <Route path='/' element={<Home />} />
          <Route path='/slider' element={<CarouselDefault />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/detail/:id' element={<DetailPage />} />
          <Route path='/addtocart' element={<AddToCart />} />
          <Route path='/postAd' element={<PostAd />} />
          <Route path='/addad' element={<MyAdd/>} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App



