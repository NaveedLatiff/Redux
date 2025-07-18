import React from 'react'
import './CartItem.css'
import { useDispatch, useSelector } from 'react-redux'
import { addQuantity, decreaseQuantity, deleteAll } from '../../store/cartReducer'

const CartItem = () => {
  let dispatch=useDispatch()
  let cartItems=useSelector((store)=>store.cart)
  let totalAmount=cartItems.map((x)=>{
    return x.productPrice*x.quantity
  }).reduce((a,b)=>a+b,0)
  return (
    <div className='cart'>
      <button onClick={()=>{
        dispatch(deleteAll())
      }}>DeleteAll</button>
      
      {cartItems.map(({productId,quantity,productTitle,productPrice,productimage})=>{
       return  <div key={productId} className={`cont-${productId}`}>
        <img className='pro-image' src={productimage} />
        <p className='pro-title'>{productTitle}</p>
        <p className='price'>Price:{productPrice}</p>
        <div className='buttons'><button className='increItem' onClick={()=>{
          dispatch(addQuantity(productId))
        }}>+</button><span>{quantity}</span><button className='decreItem' onClick={()=>{
          dispatch(decreaseQuantity(productId))
        }}>-</button></div>
        <p className='total-price'>TotalPrice:{(productPrice*quantity).toFixed(2)}</p>
        </div>
      })}
      <span>Total Amount:{totalAmount.toFixed(2)}</span>
    </div>
  )
}

export default CartItem
