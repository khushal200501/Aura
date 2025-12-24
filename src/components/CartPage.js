import React from 'react'
import { useCart } from './Cart'
import { Link } from 'react-router-dom'

const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart
  } = useCart()

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * (item.quantity || 1)
  }, 0)

  if (cartItems.length === 0) {
    return (
        <div className="container my-5 py-5 text-center">
            <div className="row justify-content-center">
                <div className="col-md-6 card shadow-sm p-5">
                    <div className="mb-4">
                        <i className="bi bi-cart-x text-muted" style={{ fontSize: "5rem" }}></i>
                    </div>
                    <h2 className="fw-bold">Your Cart is Empty</h2>
                    <p className="text-muted mb-4">
                        Looks like you haven't added anything to your Aura yet. 
                        Explore our collection to find something special!
                    </p>
                    <Link to="/" className="btn btn-dark btn-lg px-5">
                        Start Shopping
                    </Link>
                </div>
            </div>
        </div>
    );
}
  return (
    <div className='container my-5'>
      <h2 className='mb-4'>Your Shopping Cart</h2>
      <div className='row'>
        <div className='col-md-8'>
          {cartItems.map((item, index) => (
            <div className='card mb-3 shadow-sm' key={index}>
              <div className='row g-0 align-items-center p-2'>
                <div className='col-md-2'>
                  <img
                    src={item.image}
                    className='img-fluid rounded'
                    alt={item.title}
                    style={{ maxHeight: '80px' }}
                  />
                </div>
                <div className='col-md-7'>
                  <h6 className='card-title mb-0'>{item.title}</h6>
                </div>
                <div className='col-md-3 d-flex align-items-center justify-content-center'>
                  <button
                    className='btn btn-sm btn-outline-secondary'
                    onClick={() => decreaseQuantity(item.id)}>
                    -
                  </button>

                  <span className='mx-3 fw-bold'>{item.quantity || 1}</span>

                  <button
                    className='btn btn-sm btn-outline-secondary'
                    onClick={() => increaseQuantity(item.id)}>
                    +
                  </button>
                </div>
                <div className='col-md-3 text-end'>
                  <p className='fw-bold mb-0'>
                    ${(item.price * (item.quantity || 1)).toFixed(2)}
                  </p>
                </div>
                <div className='col-md-3 text-end'>
                  <button
                    className='btn btn-sm btn-danger'
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='col-md-4'>
          <div className='card p-3 shadow-sm'>
            <h4>Summary</h4>
            <hr />
            <div className='d-flex justify-content-between'>
              <span>Total Items:</span>
              <span>{cartItems.length}</span>
            </div>
            <div className='d-flex justify-content-between fw-bold mt-2'>
              <span>Total Price:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <Link to='/checkout' className='btn btn-dark m-4'>
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
