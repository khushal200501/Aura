import React, { createContext, useState, useContext, useEffect } from 'react'
import { toast } from 'react-toastify'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [cartItems, setCartItems] = useState(() => {
  const savedCart = localStorage.getItem('aura_cart')
    return savedCart ? JSON.parse(savedCart) : []
  })

  useEffect(() => {
    localStorage.setItem('aura_cart', JSON.stringify(cartItems))
  }, [cartItems])

  const clearCart = () => {
    setCartItems([])
    toast.error('Cart has been cleared', { toastId: 'clear-cart' })
  }

  const addToCart = product => {
    setCartItems(prevItems => {
      const isItemInCart = prevItems.find(item => item.id === product.id)

      if (isItemInCart) {
        toast.info(`Increased quantity of ${product.title.slice(0, 10)}...`, {
          toastId: `inc-${product.id}`
        })
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        )
      }

      toast.success(`${product.title.slice(0, 15)}... added to cart!`, {
        toastId: `add-${product.id}`
      })
      return [...prevItems, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = indexToRemove => {
    const itemTitle = cartItems[indexToRemove]?.title || 'Item'
    setCartItems(prevItems =>
      prevItems.filter((_, index) => index !== indexToRemove)
    )
    toast.warn(`${itemTitle.slice(0, 15)}... removed`, {
      toastId: 'remove-item'
    })
  }

  const increaseQuantity = id => {
    setCartItems(prevItems =>
      prevItems.map(item => {
        if (item.id === id) {
          toast.info('Quantity updated', { toastId: `qty-${id}` })
          return { ...item, quantity: (item.quantity || 1) + 1 }
        }
        return item
      })
    )
  }

  const decreaseQuantity = id => {
    setCartItems(prevItems =>
      prevItems.map(item => {
        if (item.id === id && item.quantity > 1) {
          toast.info('Quantity updated', { toastId: `qty-${id}` })
          return { ...item, quantity: item.quantity - 1 }
        }
        return item
      })
    )
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        searchTerm,
        setSearchTerm
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
