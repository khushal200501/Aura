import { CartProvider } from './components/Cart'
import Navbar from './components/Navbar'
import Product from './components/Product'
import About from './components/About'
import CartPage from './components/CartPage'
import Checkout from './components/Checkout'
import ProductDetail from './components/ProductDetail'
import { ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App () {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <ToastContainer
          position='top-right'
          autoClose={1200}
          hideProgressBar={true}
          theme='light'
          transition={Zoom}
          closeButton={false}
          closeOnClick={true}
        />
        <Routes>
          <Route path='/' element={<Product />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/product/:id' element={<ProductDetail />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
