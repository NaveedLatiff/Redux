import React from 'react'
import './CartItem.css'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, decreaseQuantity,deleteAll } from '../../Store/cartSlice.js'

const CartItem = () => {
  let dispatch=useDispatch()
  let cartItems=useSelector((store)=>store.cart)
  let totalAmount=cartItems.map((x)=>{
    return x.price*x.quantity
  }).reduce((a,b)=>a+b,0)
 
  return (
    <>
    <div className='cart'>
      <button onClick={()=>{
        dispatch(deleteAll())
      }}>DeleteAll</button>
      </div>
      {cartItems.map(({id,title,image,price,quantity})=>{
        return  <div key={id} className={`cont-${id}`}>
        <img className='pro-image' src={image} />
        <p className='pro-title'>{title}</p>
        <p className='price'>Price:{price}</p>
        <div className='buttons'><button className='increItem' onClick={()=>{
          dispatch(addItem({id,title,price,image,quantity:1}))
        }}>+</button><span>{quantity}</span><button className='decreItem' onClick={()=>{
          dispatch(decreaseQuantity({id}))
        }}>-</button></div>
        <p className='total-price'>TotalPrice:{(price*quantity).toFixed(2)}</p>
        </div>
      })}
      <span>Total Amount:{totalAmount.toFixed(2)}</span>
          </>
    )
  }

export default CartItem
