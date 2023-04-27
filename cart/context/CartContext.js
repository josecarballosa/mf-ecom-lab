import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [count, setCount] = useState(0);

  const addItem = () => {
    setCount(count + 1);
  };

  const clearCart = () => {
    setCount(0);
  };

  const value = {
    count,
    addItem,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
