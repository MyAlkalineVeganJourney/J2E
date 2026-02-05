// src/context/CartContext.js
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Initialize cart from localStorage or empty array
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('mavjCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('mavjCart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item to cart
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // Item exists, increment quantity
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // New item, add to cart
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });

    // Show notification (optional - you can implement toast notifications)
    console.log(`Added ${product.name} to cart`);
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems(prevItems => 
      prevItems.filter(item => item.id !== productId)
    );
  };

  // Update item quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Get cart total
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  };

  // Get cart count (total items)
  const getCartCount = () => {
    return cartItems.reduce((count, item) => {
      return count + item.quantity;
    }, 0);
  };

  // Check if item is in cart
  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  // Get item quantity
  const getItemQuantity = (productId) => {
    const item = cartItems.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
    isInCart,
    getItemQuantity
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;