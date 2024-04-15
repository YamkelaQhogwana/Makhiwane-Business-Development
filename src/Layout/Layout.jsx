import React from 'react'
import {Outlet} from 'react-router-dom'
import Gradient from '../Components/Gradient/Gradient'
import Header from '../Components/Header/Header'
import Footer from "../Components/Footer/Footer"
const Layout = () => {
  return (
    <div className='App'>
      <Gradient></Gradient>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Layout
