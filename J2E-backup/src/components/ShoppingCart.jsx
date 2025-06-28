import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ShoppingCart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1>🛒 Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Let's Start Shopping!</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <p>{item.name} x {item.quantity}</p>
              <p>${(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
          <button onClick={clearCart}>Clear Cart</button>
          <a href="/checkout"><button>Proceed to Checkout</button></a>
        </>
      )}
    </div>
  );
}

export default ShoppingCart;
