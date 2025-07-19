import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Pages/Home.jsx'
import Cart from './Pages/Cart.jsx'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </>
  )
}

export default App
