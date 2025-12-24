import React from 'react'
import { useCart } from './Cart'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { cartItems, clearCart, searchTerm, setSearchTerm } = useCart()
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <a className='navbar-brand'>The Aura</a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link active' aria-current='page' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-link '
                  to='/about'
                  tabindex='-1'
                  aria-disabled='true'
                >
                  About Us
                </Link>
              </li>
            </ul>
            <form className='d-flex me-3' onSubmit={e => e.preventDefault()}>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search products...'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)} 
              />
            </form>
            {cartItems.length > 0 && (
              <button className='btn btn-danger m-1' onClick={clearCart}>
                Clear Cart
              </button>
            )}
            <Link to='/cart' className='btn btn-outline-dark'>
              Cart ({cartItems.length})
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar
