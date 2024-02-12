import React from 'react'
// import Header from './Components/Header/Header'
// import Footer from './Components/Footer/Footer'

// import { createBrowserRouter, Route, Router } from 'react-router-dom'
import Router from './Config/Config'



function App() {
  return (
    <>
      {/* <BrowserRouter>
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
          <Route path='/addad' element={<MyAdd />} />
        </Routes>
        <Footer />
      </BrowserRouter> */}

      < Router />

    </>
  )
}

export default App



