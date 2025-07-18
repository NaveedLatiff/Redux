import React from 'react'
import './Navbar.css'
import cart_icon from '../../assets/cart-icon.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    let cartItems=useSelector((store)=>store.cart)
      let totalQuantity=cartItems.map((x)=>{
            return x.quantity
        }).reduce((a,b)=>a+b,0)
    

  return (
    <div className='navbar'>
       <h1 className='logo'><Link to='/'>Shopify</Link></h1> 
       <div className='cart-icon'>
       <Link to='/cart'><img src={cart_icon} /></Link>
       <span>{totalQuantity}</span>
       </div>
    </div>
  )
}

export default Navbar
