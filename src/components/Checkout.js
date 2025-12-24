import React, { useState } from 'react'
import { useCart } from './Cart'
import { Link } from 'react-router-dom'

const Checkout = () => {
  const { cartItems, clearCart } = useCart()
  const [isOrdered, setIsOrdered] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setIsOrdered(true)
    clearCart() 
  }

  if (isOrdered) {
    return (
      <div className='container text-center my-5 py-5'>
        <div className='card shadow p-5'>
          <h1 className='display-4 text-success'>🎉 Success!</h1>
          <p className='lead'>
            Thank you for shopping with The Aura. Your order has been placed.
          </p>
          <Link to='/' className='btn btn-primary mt-3'>
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  if (cartItems.length === 0) {
    return (
      <div className='container text-center my-5'>
        <h3>Your cart is empty. Add items before checking out!</h3>
        <Link to='/' className='btn btn-dark mt-3'>
          View Products
        </Link>
      </div>
    )
  }

  return (
    <div className='container my-5'>
      <h2 className='mb-4'>Checkout Details</h2>
      <div className='row'>
        <div className='col-md-8'>
          <form className='card p-4 shadow-sm' onSubmit={handleSubmit}>
            <div className='row g-3'>
              <div className='col-sm-6'>
                <label className='form-label'>First Name</label>
                <input type='text' className='form-control' required />
              </div>
              <div className='col-sm-6'>
                <label className='form-label'>Last Name</label>
                <input type='text' className='form-control' required />
              </div>
              <div className='col-12'>
                <label className='form-label'>Email</label>
                <input
                  type='email'
                  className='form-control'
                  placeholder='you@example.com'
                  required
                />
              </div>
              <div className='col-12'>
                <label className='form-label'>Shipping Address</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='1234 Main St'
                  required
                />
              </div>
            </div>
            <hr className='my-4' />
            <button className='btn btn-primary btn-lg w-100' type='submit'>
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Checkout
