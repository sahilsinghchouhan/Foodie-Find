import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/Placeorder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'
import Verify from './pages/verify/Verify'
import MyOrders from './pages/myOrders/MyOrders'

const App = () => {

  const[showlogin,setshowLogin] =useState(false)

  return (
    <>
    {
      showlogin?<LoginPopUp setshowLogin={setshowLogin}/>:<></>
    }
 
    <div className='app'>
      <Navbar setshowLogin={setshowLogin}/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path ="/cart" element={<Cart/>}/>
        <Route path ="/order" element={<PlaceOrder/>}/>
        <Route path ="/verify" element={<Verify/>}/>
        <Route path ="/myorders" element={<MyOrders/>}/>
       
      </Routes>
    </div>
    <Footer/>
   
    </>
    
  )
}

export default App