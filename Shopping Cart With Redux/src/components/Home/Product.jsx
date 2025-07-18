import React from 'react'
import './Product.css'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../store/cartReducer.js'
import { store } from '../../store/index.js'

const Product = () => {
  let dispatch=useDispatch()
  let products = useSelector(state => state.products)
  return (
    <>
      {products.map(({ id, title, description, image, rating, price }) => {
        return <div className={`cont-${id}`} key={id}>
          <img className='img' src={image} />
          <h3 className='title'>{title}</h3>
          <p className='desc'>{description}</p>
          <p className='price'>${price}</p>
          <button className='addBtn' onClick={() => {
            dispatch(addItem(id,title,image,price))
            console.log(store.getState())
          }} >Add to Cart</button>
          <p className='rating'>Rating:{rating.rate}</p>
        </div>
      })}
    </>
  )
}


export default Product
