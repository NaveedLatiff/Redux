import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Cart from './Pages/Cart.jsx'
import Home from './Pages/Home.jsx'

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </>
  )
}

export default App
