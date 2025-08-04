// src/components/ProductCard.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="price">${product.price.toFixed(2)}</p>

      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <a href={product.url} target="_blank" rel="noopener noreferrer">

        <button>Buy Now</button>
      </a>
    </div>
  );
}

export default ProductCard;
