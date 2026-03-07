import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product, compact = false }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    alert(`✅ ${product.name} added to cart!`);
  };

  const handleBuyNow = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.url) {
      window.open(product.url, '_blank');
    } else {
      alert('Stripe link coming soon!');
    }
  };

  if (compact) {
    return (
      <div style={{
        background: 'rgba(0,0,0,0.7)',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '2px solid #00CED1',
        transition: 'all 0.3s',
        boxShadow: '0 5px 15px rgba(0,206,209,0.3)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,206,209,0.6)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,206,209,0.3)';
      }}
      >
        <div style={{
          height: '150px',
          background: `url(${product.image}) center/cover`
        }}></div>
        
        <div style={{ padding: '15px' }}>
          <h4 style={{
            color: '#FFD700',
            fontSize: '0.95rem',
            marginBottom: '8px',
            minHeight: '40px',
            lineHeight: '1.2'
          }}>
            {product.name}
          </h4>
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '12px'
          }}>
            <span style={{
              color: '#00CED1',
              fontSize: '1.4rem',
              fontWeight: 'bold'
            }}>
              ${product.price.toFixed(2)}
            </span>
            <span style={{
              background: '#FFD700',
              color: '#000',
              padding: '3px 8px',
              borderRadius: '10px',
              fontSize: '0.7rem',
              fontWeight: 'bold'
            }}>
              {product.category}
            </span>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={handleBuyNow}
              style={{
                flex: 1,
                padding: '10px',
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                border: 'none',
                borderRadius: '6px',
                color: '#000',
                fontSize: '0.85rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              Buy Now
            </button>
            
            <button
              onClick={handleAddToCart}
              style={{
                padding: '10px',
                background: 'rgba(0,206,209,0.2)',
                border: '2px solid #00CED1',
                borderRadius: '6px',
                color: '#00CED1',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(0,206,209,0.4)';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(0,206,209,0.2)';
                e.target.style.transform = 'scale(1)';
              }}
            >
              🛒
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      background: 'rgba(0,0,0,0.6)',
      borderRadius: '15px',
      overflow: 'hidden',
      border: '2px solid #00CED1',
      transition: 'all 0.3s',
      boxShadow: '0 5px 20px rgba(0,206,209,0.3)'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-10px)';
      e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,206,209,0.6)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,206,209,0.3)';
    }}
    >
      <div style={{
        height: '250px',
        background: `url(${product.image}) center/cover`,
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          background: '#FFD700',
          color: '#000',
          padding: '5px 12px',
          borderRadius: '15px',
          fontSize: '0.8rem',
          fontWeight: 'bold'
        }}>
          {product.category}
        </div>
      </div>

      <div style={{ padding: '20px' }}>
        <h3 style={{
          color: '#FFD700',
          fontSize: '1.1rem',
          marginBottom: '10px',
          minHeight: '50px',
          lineHeight: '1.3'
        }}>
          {product.name}
        </h3>
        
        <p style={{
          color: '#DDD6B8',
          fontSize: '0.9rem',
          marginBottom: '15px',
          minHeight: '60px',
          lineHeight: '1.5'
        }}>
          {product.description}
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '15px'
        }}>
          <span style={{
            color: '#00CED1',
            fontSize: '1.8rem',
            fontWeight: 'bold'
          }}>
            ${product.price.toFixed(2)}
          </span>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={handleBuyNow}
            style={{
              flex: 1,
              padding: '12px',
              background: 'linear-gradient(135deg, #FFD700, #FFA500)',
              border: 'none',
              borderRadius: '8px',
              color: '#000',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            Buy Now
          </button>
          
          <button
            onClick={handleAddToCart}
            style={{
              padding: '12px 15px',
              background: 'rgba(0,206,209,0.2)',
              border: '2px solid #00CED1',
              borderRadius: '8px',
              color: '#00CED1',
              fontSize: '1.2rem',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(0,206,209,0.4)';
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(0,206,209,0.2)';
              e.target.style.transform = 'scale(1)';
            }}
          >
            🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;