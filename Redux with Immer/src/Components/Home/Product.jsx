import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Product.css'
import { addItem } from '../../Store/cartSlice'

const Product = () => {
  let dispatch=useDispatch()
  let products=useSelector((state)=>state.products)
  return (
    <div className='products-cont'>
      {products.map(({id,title,description,image,price,rating})=>{
        return <div key={id} className='prod-cont'>
          <img className='image' src={image} />
          <p className='title'>{title}</p>
          <p className='desc'>{description}</p>
          <p className='price'>Price:${price}</p>
          <button className='addBtn' onClick={()=>{
              dispatch(addItem(id,title,image,price))
              
          }}>Add To Cart</button>
          <p className='rating'>Rating: {rating.rate} out of 5</p>
        </div>
      })}
    </div>
  )
}

export default Product
