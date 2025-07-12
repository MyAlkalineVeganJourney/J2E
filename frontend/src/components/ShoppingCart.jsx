import React, { useContext } from 'react';
import PageLayout from '../components/PageLayout';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <PageLayout title="🛒 Your Shopping Cart">
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/MAVJStore">Continue shopping</Link>!</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <p>{item.name} x {item.quantity}</p>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>

          <h3>Total: ${total.toFixed(2)}</h3>

          <button onClick={clearCart}>Clear Cart</button>

          <Link to="/Checkout">
            <button className="primary-button">Proceed to Checkout</button>
          </Link>

          <Link to="/MAVJStore">
            <button className="secondary-button">Continue Shopping</button>
          </Link>
        </>
      )}
    </PageLayout>
  );
};

export default ShoppingCart;
