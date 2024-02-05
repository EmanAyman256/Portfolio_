import React from 'react'
import Navbar from './Navbar/Navbar'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Home/Home'
import About from './About/About'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact/Contact'
export default function App() {
 const routers=createBrowserRouter([
  {
    path:"",element:<Layout></Layout>,children:
    [
      {index:true,element:<Home></Home>},
      {path:"home",element:<Home></Home>},
      {path:"about",element:<About></About>},
      {path:"portfolio",element:<Portfolio></Portfolio>},
      {path:"contact",element:<Contact></Contact>},
    ]}])
 
 
 return <>
  <RouterProvider router={routers}></RouterProvider>

</>
}
