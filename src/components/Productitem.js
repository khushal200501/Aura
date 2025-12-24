import React from 'react'
import { useCart } from './Cart'
import { Link } from 'react-router-dom'

const ProductItem = ({ product }) => {
  const { addToCart } = useCart()
  return (
    <div className='card h-100 p-3 shadow-sm'>
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}> 
        <img src={product.image} className='card-img-top' alt='...' style={{ height: '200px', objectFit: 'contain' }}/>
        <div className='card-body'>
          <h5 className='card-title'>{product.title.slice(0, 30)}...</h5>
        </div>
      </Link>
      <button className='btn btn-primary' onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  )
}
export default ProductItem
