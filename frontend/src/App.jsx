import React from 'react'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import "./App.css"
import Login from './components/Login'
import Home from './components/Home'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Register from './components/Register'
import Cartdata from './components/Cart'
import Transaction from './components/Transaction'
import ProductDetails from './components/ProductDetails'
import ProtectedRoute from './components/ProtectedRoute'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/Login' element={<Login/>}/>
       <Route path='/Register' element={<Register/>}/> 
       <Route path='/Cartdata' element={
                              <ProtectedRoute>
                                 <Cartdata/>
                              </ProtectedRoute>
                                 }/>
       <Route path='/Transaction' element={
                                           <ProtectedRoute>
                                          <Transaction/> 
                                        </ProtectedRoute>
                                       }/>
       <Route path='/Productdetails' element={<ProductDetails />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  )
}

export default App