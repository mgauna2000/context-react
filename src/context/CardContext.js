import React from 'react'
import { createContext, useState } from 'react'

const CartContext = createContext()

const CartProvider = ({children}) => {

    const [cartListItems, setCartListItems] = useState([])

    const addProductToCart = (product) => {
      console.log("se agrego el producto: ", product)
      setCartListItems(cartListItems => [...cartListItems, product])
    }

    const data = {
        cartListItems,
        addProductToCart
    }

  return (
    <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContext
export { CartProvider }