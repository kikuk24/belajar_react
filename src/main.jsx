import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RegisterPage from './page/register'
import LoginPage from './page/login'
import ErrorPage from './page/404'
import ProductPage from './page/product'
import ProfilePage from './page/profile'
import DetailProduct from './page/detailProduct'
const router = createBrowserRouter([
  {
  path: "/",
  element:<div>Page</div>,
  errorElement:<ErrorPage/>
  },
  {
  path: "/login",
  element:<LoginPage/>
  },
  {
    path: "/register",
    element:<RegisterPage/>
  },
  {
    path: "/products",
    element:<ProductPage/>
  },
  {
    path: "/profile",
    element:<ProfilePage/>
  },
  {
    path: "/product/:id",
    element:<DetailProduct/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)  
