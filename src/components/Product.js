import React, { useState, useEffect } from 'react'
import Productitem from './Productitem'
import { useCart } from './Cart' 

const Product = () => {
  const { searchTerm, setSearchTerm } = useCart()

  const [activeCategory, setActiveCategory] = useState('all')
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setFilteredProducts(data)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    let tempProducts = products

    if (activeCategory !== 'all') {
      tempProducts = tempProducts.filter(
        item => item.category === activeCategory
      )
    }

    if (searchTerm.trim() !== '') {
      tempProducts = tempProducts.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredProducts(tempProducts)
  }, [products, activeCategory, searchTerm])

  const onCategoryClick = cat => {
    setActiveCategory(cat)
  }

  if (loading) {
    return (
      <div className='d-flex justify-content-center align-items-center' style={{ height: '50vh' }}>
        <div className="text-center">
          <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Loading...</span>
          </div>
          <h4 className="mt-3 text-secondary">Loading Aura Collection...</h4>
        </div>
      </div>
    )
  }

  return (
    <div className='container my-2'>
      <h1 className='text-center mb-4'>Our Collection</h1>

      <div className='d-flex justify-content-center gap-2 mb-5 flex-wrap'>
        <button
          className={`btn ${
            activeCategory === 'all' ? 'btn-dark' : 'btn-outline-dark'
          }`}
          onClick={() => onCategoryClick('all')}
        >
          All
        </button>
        <button
          className={`btn ${
            activeCategory === "men's clothing"
              ? 'btn-dark'
              : 'btn-outline-dark'
          }`}
          onClick={() => onCategoryClick("men's clothing")}
        >
          Men's
        </button>
        <button
          className={`btn ${
            activeCategory === "women's clothing"
              ? 'btn-dark'
              : 'btn-outline-dark'
          }`}
          onClick={() => onCategoryClick("women's clothing")}
        >
          Women's
        </button>
        <button
          className={`btn ${
            activeCategory === 'jewelery' ? 'btn-dark' : 'btn-outline-dark'
          }`}
          onClick={() => onCategoryClick('jewelery')}
        >
          Jewelry
        </button>
        <button
          className={`btn ${
            activeCategory === 'electronics' ? 'btn-dark' : 'btn-outline-dark'
          }`}
          onClick={() => onCategoryClick('electronics')}
        >
          Electronics
        </button>
      </div>

      <div className='row g-4'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(item => (
            <div className='col-md-3' key={item.id}>
              <Productitem product={item} />
            </div>
          ))
        ) : (
          <div className="text-center my-5 py-5">
        <h3 className="text-muted">No results found for "{searchTerm}"</h3>
        <p>Try checking your spelling or searching for something else.</p>
        <button 
            className="btn btn-outline-primary mt-2" 
            onClick={() => setSearchTerm('')}
        >
            Clear Search
        </button>
    </div>
        )}
      </div>
    </div>
  )
}

export default Product
