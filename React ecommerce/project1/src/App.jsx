import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductsPage from './pages/ProductsPage'
import DetailPage from './DetailPage/Detail'
import AddToCart from './pages/AddToCart'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/products' element={<ProductsPage/>}/>
         <Route path='/detail/:id' element={<DetailPage/>}/>
         <Route path='/addtocart' element={<AddToCart/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </>
  )
}

export default App



