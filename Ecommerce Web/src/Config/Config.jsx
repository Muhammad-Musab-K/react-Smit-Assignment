import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Home from '../pages/Home'
import DetailPage from '../DetailPage/Detail'
import ProductsPage from '../pages/ProductsPage'
import AddToCart from '../pages/AddToCart'
import SignIn from '../pages/SignUp'
import SignUp from '../pages/SignIn'
import PostAd from '../pages/PostAd'
import MyAdd from '../pages/MyAdd'
import Layout from '../Components/Layout/Layout'
import ForgotPassword from '../pages/ForgotPassword'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/detail/:id",
        element: <DetailPage />,
      },
      {
        path: "/addtocart",
        element: <AddToCart />,
      },
      {
        path: "/addad",
        element: <MyAdd />,
      },
      {
        path: "/postAd",
        element: <PostAd />,
      },

    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/forgotpass",
    element: <ForgotPassword />,
  },
]);

function Router() {
  return <RouterProvider router={router} />
}

export default Router