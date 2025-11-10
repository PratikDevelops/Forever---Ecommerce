import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Login from './pages/Login'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SeachBar'
import ThankYouPage from './pages/ThankYou'
import { Toaster } from "react-hot-toast";


const App = () => {
  return (
    <div>
      <Navbar/>
      <SearchBar/>
      <Toaster position="top-center" />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/login" element={<Login />} />

        <Route path='/place-order' element={<PlaceOrder/>}/>
        <Route path='/myorders' element={<Orders/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App