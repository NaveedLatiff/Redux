import React from 'react'
import './Navbar.css'
import img from '../../assets/cart-icon.svg'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/cart'><img className='cart-icon' src={img}></img></Link>
    </div>
  )
}

export default Navbar
