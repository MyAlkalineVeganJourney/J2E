import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from '../components/PageLayout';
import products from '../data/products';
import { CartContext } from '../context/CartContext';

const MAVJStore = () => {
  const { t } = useTranslation();
  const { cartItems, addToCart } = useContext(CartContext);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: '', email: '', youtube: false, tiktok: false });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubscribeSubmit = () => {
    if (userInfo.name && userInfo.email) {
      localStorage.setItem('mavj_family_member', JSON.stringify(userInfo));
      setShowSubscribeModal(false);
      setShowAnnouncement(false);
      alert('✅ Welcome to the MAVJ Family! Your discount code: VOLCANIC20');
    }
  };

  const handleBuyNow = (product) => {
    if (product && product.url) {
      const link = document.createElement('a');
      link.href = product.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.click();
    }
  };

  const handleAddToCart = (product) => {
    if (product) {
      const productWithId = { ...product, id: product.name || 'product' };
      addToCart(productWithId);
      alert(`✅ ${product.name} added to cart!`);
    }
  };

  const chelationProduct = products.find(p => p.name && (p.name.toLowerCase().includes('chelation') || p.name.toLowerCase().includes('tea kit')));
  const castorProduct = products.find(p => p.name && p.name.toLowerCase().includes('castor'));
  const walnutProduct = products.find(p => p.name && p.name.toLowerCase().includes('walnut'));

  const featuredProducts = [
    {
      name: 'Sea Moss Foundation',
      subtitle: 'Raw & Gel',
      image: '/images/RawMossViolet.jpg',
      image2: '/images/GelConsistency.jpg',
      description: 'Start here - 95% of minerals your body needs daily',
      link: '/ProductCatalog',
      type: 'internal'
    },
    {
      name: 'Journey 2 Enlightenment',
      subtitle: '5 Days 4 Nights All-Inclusive',
      image: '/images/J2EPod.jpeg',
      image2: '/images/BeachDinner.png',
      description: 'St. Lucia experience - convergence on 11/11/26',
      link: '/ProductCatalog',
      type: 'internal'
    },
    chelationProduct ? {
      name: chelationProduct.name,
      image: chelationProduct.image || '/images/Detox.jpg',
      description: 'Heavy metal removal - 4 applications per year',
      price: chelationProduct.price,
      url: chelationProduct.url,
      type: 'stripe'
    } : null,
    castorProduct ? {
      name: castorProduct.name,
      image: castorProduct.image || '/images/CastorOil.jpg',
      description: 'The inflammation buster - penetrates deepest',
      price: castorProduct.price,
      link: '/ProductCatalog',
      type: 'internal'
    } : null,
    walnutProduct ? {
      name: walnutProduct.name,
      image: walnutProduct.image || '/images/WalnutCookies.png',
      description: 'Alkaline celebration treats',
      price: walnutProduct.price,
      url: walnutProduct.url,
      type: 'stripe'
    } : null,
    {
      name: 'Life Force Seeds',
      image: '/images/SeedsBanner.jpg',
      description: 'Plant your sovereignty',
      priceRange: '$8-$75',
      link: '/ProductCatalog',
      type: 'internal'
    }
  ].filter(Boolean);

  const categories = [
    { id: 'seamoss', name: 'Sea Moss', icon: '🌊', color: '#00CED1', link: '/ProductCatalog', image: '/images/SeaMossBanner.jpg', stage: 'FOUNDATION' },
    { id: 'kits', name: 'Transformation Kits', icon: '💎', color: '#9400D3', link: '/ProductCatalog', image: '/images/Detox.jpg', stage: 'RESET' },
    { id: 'herbs', name: 'Sacred Herbs', icon: '🌿', color: '#32CD32', link: '/ProductCatalog', image: '/images/Panadol.jpg', stage: 'HEALING' },
    { id: 'seeds', name: 'Life Seeds', icon: '🌱', color: '#FFD700', link: '/ProductCatalog', image: '/images/SeedsBanner.jpg', stage: 'SOVEREIGNTY' },
    { id: 'oils', name: 'Sacred Oils', icon: '🔥', color: '#FF6B00', link: '/ProductCatalog', image: '/images/CastorOilBanner.jpg', stage: 'INFLAMMATION' },
    { id: 'recipes', name: 'Alkaline Recipes', icon: '🍽️', color: '#FF69B4', link: '/Recipes', image: '/images/RecipesBanner.png', stage: 'MAINTENANCE' },
    { id: 'snacks', name: 'Treats', icon: '✨', color: '#FFD700', link: '/ProductCatalog', image: '/images/WalnutCookies.png', stage: 'CELEBRATION' },
    { id: 'beverages', name: 'Beverages', icon: '🥤', color: '#4169E1', link: '/ProductCatalog', image: '/images/TheBomb.jpg', stage: 'VITALITY' },
    { id: 'merchandise', name: 'MAVJ Gear', icon: '👕', color: '#FFD700', link: '/Merchandise', image: '/images/MAVJLogo.jpg', stage: 'COMMUNITY' },
    { id: 'j2e', name: 'J2E', icon: '🏝️', color: '#00CED1', link: '/ProductCatalog', image: '/images/J2EPod.jpeg', stage: 'CONVERGENCE' }
  ];

  return (
    <Layout pageTitle="🛒 MAVJ Store - Your Journey Roadmap">
      
      {/* BREADCRUMB + CART */}
      <div style={{ maxWidth: '1600px', margin: '0 auto 20px', padding: '0 20px', display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center', fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', color: '#FFD700' }}>
        <Link to="/" onClick={() => window.scrollTo(0, 0)} style={{ color: '#FFD700', textDecoration: 'none' }}>🏠 Home</Link>
        <span>→</span>
        <span style={{ color: '#FFF', fontWeight: 'bold', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)' }}>Store Home</span>
        <Link to="/ShoppingCart" onClick={() => window.scrollTo(0, 0)} style={{ marginLeft: 'auto', padding: 'clamp(10px, 3vw, 15px) clamp(20px, 5vw, 30px)', background: 'linear-gradient(135deg, #00CED1, #0080FF)', color: '#000', textDecoration: 'none', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', fontWeight: 'bold', border: '3px solid #FFD700', boxShadow: '0 5px 25px rgba(0,206,209,0.6)' }}>
          <span style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>🛒</span>
          <span>Cart ({cartItems.length})</span>
        </Link>
      </div>

      {/* ANNOUNCEMENT */}
      {showAnnouncement && (
        <div style={{ background: 'linear-gradient(90deg, #FFD700, #FFA500, #FFD700)', padding: 'clamp(20px, 5vw, 30px)', textAlign: 'center', color: '#000', position: 'relative', marginBottom: '40px', borderRadius: '15px', boxShadow: '0 5px 30px rgba(255,215,0,0.6)', maxWidth: '1600px', margin: '0 auto 40px' }}>
          <button onClick={() => setShowAnnouncement(false)} style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.3)', border: 'none', color: '#000', fontSize: 'clamp(1.5rem, 3vw, 1.8rem)', cursor: 'pointer', borderRadius: '50%', width: 'clamp(30px, 5vw, 35px)', height: 'clamp(30px, 5vw, 35px)', fontWeight: 'bold' }}>×</button>
          <h3 style={{ margin: '0 0 10px 0', fontSize: 'clamp(1.2rem, 4vw, 1.8rem)', fontWeight: 'bold' }}>🎉 VOLCANIC MARCH SPECIAL: 50% OFF SEA MOSS! 🎉</h3>
          <p style={{ margin: '5px 0 15px 0', fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}>Join the MAVJ Family for exclusive discounts!</p>
          <button onClick={() => setShowSubscribeModal(true)} style={{ padding: 'clamp(12px, 3vw, 15px) clamp(20px, 5vw, 30px)', background: '#000', color: '#FFD700', border: '2px solid #FFD700', borderRadius: '10px', fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', fontWeight: 'bold', cursor: 'pointer' }}>Subscribe & Get Code: VOLCANIC20</button>
        </div>
      )}

      {/* SUBSCRIBE MODAL */}
      {showSubscribeModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.95)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ background: '#000', border: '3px solid #FFD700', borderRadius: '20px', padding: 'clamp(20px, 5vw, 40px)', maxWidth: '500px', width: '100%', maxHeight: '90vh', overflowY: 'auto' }}>
            <h2 style={{ color: '#FFD700', marginBottom: '20px', textAlign: 'center', fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>🌟 Join the MAVJ Family!</h2>
            <input type="text" placeholder="Your Name" value={userInfo.name} onChange={(e) => setUserInfo({...userInfo, name: e.target.value})} style={{ width: '100%', padding: '15px', marginBottom: '15px', background: 'rgba(255,255,255,0.1)', border: '2px solid #FFD700', borderRadius: '10px', color: '#FFF', fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', boxSizing: 'border-box' }} />
            <input type="email" placeholder="Your Email" value={userInfo.email} onChange={(e) => setUserInfo({...userInfo, email: e.target.value})} style={{ width: '100%', padding: '15px', marginBottom: '20px', background: 'rgba(255,255,255,0.1)', border: '2px solid #FFD700', borderRadius: '10px', color: '#FFF', fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', boxSizing: 'border-box' }} />
            <button onClick={handleSubscribeSubmit} disabled={!userInfo.name || !userInfo.email} style={{ width: '100%', padding: '15px', background: userInfo.name && userInfo.email ? 'linear-gradient(135deg, #FFD700, #FFA500)' : '#666', color: '#000', border: 'none', borderRadius: '10px', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', fontWeight: 'bold', cursor: userInfo.name && userInfo.email ? 'pointer' : 'not-allowed', marginBottom: '10px' }}>Join & Get Discount Code!</button>
            <button onClick={() => setShowSubscribeModal(false)} style={{ width: '100%', padding: '10px', background: 'transparent', color: '#FFD700', border: '2px solid #FFD700', borderRadius: '10px', cursor: 'pointer', fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>Maybe Later</button>
          </div>
        </div>
      )}

      {/* FEATURED PRODUCTS CONTAINER */}
      <div style={{ maxWidth: '1600px', margin: '0 auto 60px', padding: 'clamp(25px, 5vw, 40px)', background: '#000', borderRadius: '20px', border: '3px solid', borderImage: 'linear-gradient(45deg,violet,indigo,blue,green,yellow,orange,red) 1' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', textAlign: 'center', color: '#FFD700', marginBottom: 'clamp(20px, 5vw, 30px)' }}>⚡ Start Your Journey Here</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(180px, 100%), 1fr))', gap: 'clamp(15px, 3vw, 20px)', marginBottom: '30px' }}>
          {featuredProducts.map((item, i) => (
            <div key={i} style={{ background: 'rgba(0,0,0,0.7)', borderRadius: '15px', border: '3px solid #00CED1', overflow: 'hidden', boxShadow: '0 5px 20px rgba(0,206,209,0.4)', transition: 'all 0.3s', cursor: 'pointer' }} onClick={() => item.type === 'stripe' ? handleBuyNow(item) : (window.location.href = item.link)}>
              <div style={{ height: 'clamp(100px, 22vw, 140px)', display: 'flex' }}>
                {item.image2 ? (
                  <>
                    <div style={{ flex: 1, backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    <div style={{ flex: 1, backgroundImage: `url(${item.image2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                  </>
                ) : (
                  <div style={{ flex: 1, backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                )}
              </div>
              <div style={{ padding: 'clamp(10px, 2.5vw, 15px)', textAlign: 'center' }}>
                <h4 style={{ color: '#FFD700', fontSize: 'clamp(0.85rem, 2.2vw, 1rem)', marginBottom: '4px', lineHeight: '1.2', fontWeight: 'bold' }}>{item.name}</h4>
                {item.subtitle && <p style={{ color: '#00CED1', fontSize: 'clamp(0.75rem, 1.8vw, 0.85rem)', marginBottom: '6px', lineHeight: '1.2', fontStyle: 'italic' }}>{item.subtitle}</p>}
                {item.description && <p style={{ color: '#DDD6B8', fontSize: 'clamp(0.7rem, 1.8vw, 0.8rem)', marginBottom: '6px', lineHeight: '1.2' }}>{item.description}</p>}
                {item.price && <div style={{ color: '#00CED1', fontSize: 'clamp(1.1rem, 2.8vw, 1.4rem)', fontWeight: 'bold' }}>${item.price.toFixed(2)}</div>}
                {item.priceRange && <div style={{ color: '#00CED1', fontSize: 'clamp(1.1rem, 2.8vw, 1.4rem)', fontWeight: 'bold' }}>{item.priceRange}</div>}
              </div>
            </div>
          ))}
        </div>
        <Link to="/ProductCatalog" onClick={() => window.scrollTo(0, 0)} style={{ display: 'block', textAlign: 'center', padding: 'clamp(15px, 4vw, 20px)', background: 'linear-gradient(135deg, #FFD700, #FFA500)', borderRadius: '15px', textDecoration: 'none' }}>
          <p style={{ color: '#000', fontSize: 'clamp(1rem, 3vw, 1.3rem)', fontWeight: 'bold', margin: 0 }}>🛒 VIEW COMPLETE PRODUCT CATALOG →</p>
        </Link>
      </div>

      {/* HERO SECTION */}
      <div style={{ position: 'relative', padding: 'clamp(40px, 10vw, 80px) 20px', marginBottom: '60px', borderRadius: '20px', overflow: 'hidden', maxWidth: '1600px', margin: '0 auto 60px', background: '#000' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url(/images/SpectrumSeaMossfullRaw.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.25, zIndex: 1 }}></div>
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(1.8rem, 6vw, 4rem)', background: 'linear-gradient(135deg, #FFD700, #00CED1, #FF69B4, #9400D3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '20px', fontWeight: 'bold', lineHeight: '1.2' }}>This is More Than a Store</h1>
          <h2 style={{ fontSize: 'clamp(1.2rem, 4vw, 2.2rem)', background: 'linear-gradient(135deg, #FFD700, #00CED1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 'bold', lineHeight: '1.3' }}>Your Complete Roadmap from Cellular Confusion to Quantum Coherence</h2>
        </div>
      </div>

      {/* CHAPTER 1: FOUNDATION */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 80px', padding: '0 20px' }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(0,206,209,0.1), rgba(0,0,0,0.3))', border: '3px solid #00CED1', borderRadius: '20px', padding: 'clamp(30px, 6vw, 50px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
            <span style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>🌊</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#00CED1', margin: 0 }}>Chapter 1: The Foundation</h2>
          </div>
          <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', lineHeight: '1.8', color: '#DDD6B8', marginBottom: '20px' }}>
            Start here. Before anything else, your body needs minerals.
          </p>
          <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', lineHeight: '1.8', color: '#DDD6B8', marginBottom: '20px' }}>
            Sea Moss was the very first thing I bought outside of myself. It provides approximately 95% of the minerals your body needs daily. Stay on Sea Moss until you reset - it creates the homeostasis your body requires.
          </p>
          <p style={{ fontSize: 'clamp(1rem, 2.8vw, 1.2rem)', lineHeight: '1.7', color: '#FFD700', fontStyle: 'italic', marginBottom: '25px' }}>
            The absence of ANY mineral in your body results in disease.
          </p>
          <Link to="/ProductCatalog" onClick={() => window.scrollTo(0, 0)} style={{ display: 'inline-block', padding: 'clamp(12px, 3vw, 18px) clamp(25px, 5vw, 40px)', background: 'linear-gradient(135deg, #00CED1, #0080FF)', color: '#000', textDecoration: 'none', borderRadius: '50px', fontSize: 'clamp(1rem, 2.8vw, 1.3rem)', fontWeight: 'bold', boxShadow: '0 5px 20px rgba(0,206,209,0.5)' }}>Explore Sea Moss →</Link>
        </div>
      </div>

      {/* CHAPTER 2: THE RESET */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 80px', padding: '0 20px' }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(148,0,211,0.1), rgba(0,0,0,0.3))', border: '3px solid #9400D3', borderRadius: '20px', padding: 'clamp(30px, 6vw, 50px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
            <span style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>💎</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#9400D3', margin: 0 }}>Chapter 2: The Reset - Your Ultimate Goal</h2>
          </div>
          <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', lineHeight: '1.8', color: '#DDD6B8', marginBottom: '20px' }}>
            The 21-day distilled water reset: This is where everything changes.
          </p>
          <div style={{ background: 'rgba(148,0,211,0.2)', padding: 'clamp(20px, 4vw, 30px)', borderRadius: '15px', marginBottom: '25px' }}>
            <h3 style={{ color: '#FFD700', fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)', marginBottom: '15px' }}>What Happens During Reset:</h3>
            <ul style={{ color: '#DDD6B8', fontSize: 'clamp(1rem, 2.8vw, 1.2rem)', lineHeight: '1.9', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '10px' }}>Stem cell regeneration occurs in 3 complete cycles (every 7 days = 21 days total)</li>
              <li style={{ marginBottom: '10px' }}>Growth hormone activation throughout the body</li>
              <li style={{ marginBottom: '10px' }}>Visceral fat is not just reduced - it is ERADICATED</li>
              <li style={{ marginBottom: '10px' }}>Mental clarity returns as brain fog dissolves</li>
              <li style={{ marginBottom: '10px' }}>Chronic pain disappears as inflammation is eliminated</li>
              <li style={{ marginBottom: '10px' }}>Disease hides behind heavy metals - 40-day reset with chelation provides solid removal proof</li>
            </ul>
          </div>
          <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', lineHeight: '1.8', color: '#FFD700', marginBottom: '20px', fontWeight: 'bold' }}>
            But you cannot jump directly to a 21-day reset. Your body must be prepared.
          </p>
          <div style={{ background: 'rgba(255,215,0,0.1)', padding: 'clamp(20px, 4vw, 30px)', borderRadius: '15px', marginBottom: '25px', border: '2px solid #FFD700' }}>
            <h3 style={{ color: '#FFD700', fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)', marginBottom: '15px' }}>The 7-7-7 Day Detox Kit Prepares Your Body:</h3>
            <div style={{ color: '#DDD6B8', fontSize: 'clamp(1rem, 2.8vw, 1.2rem)', lineHeight: '1.9' }}>
              <p style={{ marginBottom: '15px' }}><strong style={{ color: '#00CED1' }}>Days 1-7:</strong> Fresh juices with Sea Moss gel - floods your body with minerals and enzymes</p>
              <p style={{ marginBottom: '15px' }}><strong style={{ color: '#00CED1' }}>Days 8-14:</strong> Unsweetened herbal teas (35 sacred herbs included) - gentle cleansing begins</p>
              <p style={{ marginBottom: '15px' }}><strong style={{ color: '#00CED1' }}>Days 15-21:</strong> Distilled water only - your body enters deep cellular reset</p>
            </div>
          </div>
          <p style={{ fontSize: 'clamp(1rem, 2.8vw, 1.2rem)', lineHeight: '1.7', color: '#DDD6B8', marginBottom: '25px' }}>
            This kit gets you mentally and physically ready for the full 21-day reset. It includes everything you need.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
            <Link to="/ProductCatalog" onClick={() => window.scrollTo(0, 0)} style={{ padding: 'clamp(12px, 3vw, 18px) clamp(25px, 5vw, 40px)', background: 'linear-gradient(135deg, #9400D3, #FFD700)', color: '#000', textDecoration: 'none', borderRadius: '50px', fontSize: 'clamp(1rem, 2.8vw, 1.3rem)', fontWeight: 'bold', boxShadow: '0 5px 20px rgba(148,0,211,0.5)' }}>Get 7-7-7 Kit →</Link>
            <Link to="/ProductCatalog" onClick={() => window.scrollTo(0, 0)} style={{ padding: 'clamp(12px, 3vw, 18px) clamp(25px, 5vw, 40px)', background: 'rgba(255,215,0,0.2)', color: '#FFD700', textDecoration: 'none', borderRadius: '50px', fontSize: 'clamp(1rem, 2.8vw, 1.3rem)', fontWeight: 'bold', border: '2px solid #FFD700' }}>View All Kits →</Link>
          </div>
        </div>
      </div>

      {/* CHAPTER 3: BREAKING THE RESET */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 80px', padding: '0 20px' }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(50,205,50,0.1), rgba(0,0,0,0.3))', border: '3px solid #32CD32', borderRadius: '20px', padding: 'clamp(30px, 6vw, 50px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
            <span style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>🌿</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#32CD32', margin: 0 }}>Chapter 3: The Hierarchy of Refeeding</h2>
          </div>
          <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', lineHeight: '1.8', color: '#DDD6B8', marginBottom: '20px' }}>
            After your reset, HOW you refeed determines whether visceral fat continues to be removed. Follow this exact order:
          </p>
          <div style={{ background: 'rgba(50,205,50,0.2)', padding: 'clamp(20px, 4vw, 30px)', borderRadius: '15px', marginBottom: '25px' }}>
            <ol style={{ color: '#DDD6B8', fontSize: 'clamp(1rem, 2.8vw, 1.2rem)', lineHeight: '1.9', paddingLeft: '25px' }}>
              <li style={{ marginBottom: '15px' }}><strong style={{ color: '#FFD700' }}>Chelation Tea</strong> - Breaks down remaining heavy metals in your system. This is the FIRST thing to consume after reset.</li>
              <li style={{ marginBottom: '15px' }}><strong style={{ color: '#FFD700' }}>Unsweetened herbal teas</strong> - Gentle reawakening of your digestive system</li>
              <li style={{ marginBottom: '15px' }}><strong style={{ color: '#FFD700' }}>Seeded fruit juices ONLY</strong> - No GMO seedless fruits. Add Sea Moss gel to every juice.</li>
              <li style={{ marginBottom: '15px' }}><strong style={{ color: '#FFD700' }}>Whole alkaline fruits</strong> - Fruits that have seeds - no genetically modified seedless anything</li>
              <li style={{ marginBottom: '15px' }}><strong style={{ color: '#FFD700' }}>Alkaline vegetables</strong> - Following Dr. Sebi's nutritional guide (onions, lettuces, etc.)</li>
              <li style={{ marginBottom: '15px' }}><strong style={{ color: '#FFD700' }}>Prepared alkaline foods</strong> - Sautéed mushrooms, cooked quinoa, chickpeas, etc.</li>
            </ol>
          </div>
          <div style={{ background: 'rgba(255,215,0,0.1)', padding: 'clamp(20px, 4vw, 30px)', borderRadius: '15px', marginBottom: '25px', border: '2px solid #FFD700' }}>
            <h3 style={{ color: '#FFD700', fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)', marginBottom: '15px' }}>The 35-Day Detox Kit</h3>
            <p style={{ color: '#DDD6B8', fontSize: 'clamp(1rem, 2.8vw, 1.2rem)', lineHeight: '1.8' }}>
              Includes EVERYTHING needed for breaking your reset properly. The chelation tea, the herbal teas, Sea Moss, and all herbs required for complete replenishment. This ensures you refeed correctly and visceral fat continues to be eliminated even after reset.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
            <Link to="/ProductCatalog" onClick={() => window.scrollTo(0, 0)} style={{ padding: 'clamp(12px, 3vw, 18px) clamp(25px, 5vw, 40px)', background: 'linear-gradient(135deg, #32CD32, #00FF00)', color: '#000', textDecoration: 'none', borderRadius: '50px', fontSize: 'clamp(1rem, 2.8vw, 1.3rem)', fontWeight: 'bold', boxShadow: '0 5px 20px rgba(50,205,50,0.5)' }}>Get 35-Day Kit →</Link>
            <Link to="/ProductCatalog" onClick={() => window.scrollTo(0, 0)} style={{ padding: 'clamp(12px, 3vw, 18px) clamp(25px, 5vw, 40px)', background: 'rgba(50,205,50,0.2)', color: '#32CD32', textDecoration: 'none', borderRadius: '50px', fontSize: 'clamp(1rem, 2.8vw, 1.3rem)', fontWeight: 'bold', border: '2px solid #32CD32' }}>Chelation Tea →</Link>
          </div>
        </div>
      </div>

      {/* CHAPTER 4: SOVEREIGNTY */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 80px', padding: '0 20px' }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(255,215,0,0.1), rgba(0,0,0,0.3))', border: '3px solid #FFD700', borderRadius: '20px', padding: 'clamp(30px, 6vw, 50px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
            <span style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>🌱</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#FFD700', margin: 0 }}>Chapter 4: Plant Your Future - True Sovereignty</h2>
          </div>
          <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', lineHeight: '1.8', color: '#DDD6B8', marginBottom: '20px' }}>
            While preparing for your reset, I planted my garden. True sovereignty begins in the soil.
          </p>
          <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', lineHeight: '1.8', color: '#DDD6B8', marginBottom: '20px' }}>
            Start shopping for your seeds NOW. Plant while you prepare. Non-perishable staples like chickpeas, quinoa, and hemp seeds - store these now. Your body will need them after reset.
          </p>
          <p style={{ fontSize: 'clamp(1rem, 2.8vw, 1.2rem)', lineHeight: '1.7', color: '#FFD700', fontStyle: 'italic', marginBottom: '25px' }}>
            Seeds are sovereignty. Your garden is freedom.
          </p>
          <Link to="/ProductCatalog" onClick={() => window.scrollTo(0, 0)} style={{ display: 'inline-block', padding: 'clamp(12px, 3vw, 18px) clamp(25px, 5vw, 40px)', background: 'linear-gradient(135deg, #FFD700, #FFA500)', color: '#000', textDecoration: 'none', borderRadius: '50px', fontSize: 'clamp(1rem, 2.8vw, 1.3rem)', fontWeight: 'bold', boxShadow: '0 5px 20px rgba(255,215,0,0.5)' }}>Explore Seeds →</Link>
        </div>
      </div>

      {/* CHAPTER 5: OILS FOR INFLAMMATION */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 80px', padding: '0 20px' }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(255,107,0,0.1), rgba(0,0,0,0.3))', border: '3px solid #FF6B00', borderRadius: '20px', padding: 'clamp(30px, 6vw, 50px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
            <span style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>🔥</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#FF6B00', margin: 0 }}>Chapter 5: The Inflammation Buster</h2>
          </div>
          <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', lineHeight: '1.8', color: '#DDD6B8', marginBottom: '20px' }}>
            My ankle and knee were chipped and broken. Castor oil - the inflammation buster - penetrates deeper into the skin than any other oil.
          </p>
          <div style={{ background: 'rgba(255,107,0,0.2)', padding: 'clamp(20px, 4vw, 30px)', borderRadius: '15px', marginBottom: '25px' }}>
            <h3 style={{ color: '#FFD700', fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)', marginBottom: '15px' }}>Why Castor Oil is Legendary:</h3>
            <ul style={{ color: '#DDD6B8', fontSize: 'clamp(1rem, 2.8vw, 1.2rem)', lineHeight: '1.9', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '10px' }}>Reduces inflammation so effectively you heal exponentially faster</li>
              <li style={{ marginBottom: '10px' }}>Penetrates deeper than any other oil - reaches inflammation at its source</li>
              <li style={{ marginBottom: '10px' }}>Cayenne pepper for backaches and topical pain</li>
              <li style={{ marginBottom: '10px' }}>Autoimmune diseases stem from inflammation - castor oil attacks it directly</li>
              <li style={{ marginBottom: '10px' }}>Sun and moon fermentation (Genesis Batch: 90+ days) creates exponential healing energy</li>
              <li style={{ marginBottom: '10px' }}>Black seed + oregano infusion = ultimate powerhouse combination</li>
            </ul>
          </div>
          <Link to="/ProductCatalog" onClick={() => window.scrollTo(0, 0)} style={{ display: 'inline-block', padding: 'clamp(12px, 3vw, 18px) clamp(25px, 5vw, 40px)', background: 'linear-gradient(135deg, #FF6B00, #FF8C00)', color: '#000', textDecoration: 'none', borderRadius: '50px', fontSize: 'clamp(1rem, 2.8vw, 1.3rem)', fontWeight: 'bold', boxShadow: '0 5px 20px rgba(255,107,0,0.5)' }}>Explore Sacred Oils →</Link>
        </div>
      </div>

      {/* CHAPTER 6: MAINTENANCE */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 80px', padding: '0 20px' }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(255,105,180,0.1), rgba(0,0,0,0.3))', border: '3px solid #FF69B4', borderRadius: '20px', padding: 'clamp(30px, 6vw, 50px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
            <span style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>🍽️</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#FF69B4', margin: 0 }}>Chapter 6: Maintenance is 80% Food</h2>
          </div>
          <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', lineHeight: '1.8', color: '#DDD6B8', marginBottom: '20px' }}>
            After the reset, 80% of maintenance is food. Learn alkaline cooking that sustains your elevated frequency.
          </p>
          <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', lineHeight: '1.8', color: '#DDD6B8', marginBottom: '20px' }}>
            Playing in the kitchen created magic: Walnut Chews, Sesame Stars (inspired by my sister who died of breast cancer in 2010), No-Bake Brownies made from dates, chickpea mushroom walnut burgers, Sea Moss Bomb.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
            <Link to="/Recipes" onClick={() => window.scrollTo(0, 0)} style={{ padding: 'clamp(12px, 3vw, 18px) clamp(25px, 5vw, 40px)', background: 'linear-gradient(135deg, #FF69B4, #FFB6C1)', color: '#000', textDecoration: 'none', borderRadius: '50px', fontSize: 'clamp(1rem, 2.8vw, 1.3rem)', fontWeight: 'bold', boxShadow: '0 5px 20px rgba(255,105,180,0.5)' }}>Explore Recipes →</Link>
            <Link to="/ProductCatalog" onClick={() => window.scrollTo(0, 0)} style={{ padding: 'clamp(12px, 3vw, 18px) clamp(25px, 5vw, 40px)', background: 'rgba(255,105,180,0.2)', color: '#FF69B4', textDecoration: 'none', borderRadius: '50px', fontSize: 'clamp(1rem, 2.8vw, 1.3rem)', fontWeight: 'bold', border: '2px solid #FF69B4' }}>Get Celebration Treats →</Link>
          </div>
        </div>
      </div>

      {/* CHAPTER 7: CONVERGENCE */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 80px', padding: '0 20px' }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(0,206,209,0.1), rgba(148,0,211,0.1))', border: '3px solid', borderImage: 'linear-gradient(45deg,violet,indigo,blue,green,yellow,orange,red) 1', borderRadius: '20px', padding: 'clamp(30px, 6vw, 50px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
            <span style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>🏝️</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', background: 'linear-gradient(135deg, #00CED1, #9400D3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', margin: 0 }}>Chapter 7: Convergence - Match Frequencies</h2>
          </div>
          <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', lineHeight: '1.8', color: '#DDD6B8', marginBottom: '20px' }}>
            Once you've completed your reset, you want to be around people elevated in frequency like yourself.
          </p>
          <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', lineHeight: '1.8', color: '#DDD6B8', marginBottom: '20px' }}>
            100K TikTok family. The Smile Game changed lives. Now we converge.
          </p>
          <div style={{ background: 'rgba(148,0,211,0.2)', padding: 'clamp(20px, 4vw, 30px)', borderRadius: '15px', marginBottom: '25px' }}>
            <h3 style={{ color: '#FFD700', fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)', marginBottom: '15px' }}>The Convergence - November 11, 2026</h3>
            <p style={{ color: '#DDD6B8', fontSize: 'clamp(1rem, 2.8vw, 1.2rem)', lineHeight: '1.8', marginBottom: '15px' }}>
              Everyone physically together in St. Lucia on 11/11. The ultimate frequency alignment.
            </p>
            <h3 style={{ color: '#FFD700', fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)', marginBottom: '15px', marginTop: '20px' }}>Journey 2 Enlightenment - Year-Round</h3>
            <p style={{ color: '#DDD6B8', fontSize: 'clamp(1rem, 2.8vw, 1.2rem)', lineHeight: '1.8' }}>
              Come anytime. 5 days, 4 nights all-inclusive. Experience the farm, the volcanic beach, the healing water. This environment elevates frequency naturally.
            </p>
          </div>
          <Link to="/ProductCatalog" onClick={() => window.scrollTo(0, 0)} style={{ display: 'inline-block', padding: 'clamp(12px, 3vw, 18px) clamp(25px, 5vw, 40px)', background: 'linear-gradient(135deg, #00CED1, #9400D3)', color: '#FFF', textDecoration: 'none', borderRadius: '50px', fontSize: 'clamp(1rem, 2.8vw, 1.3rem)', fontWeight: 'bold', boxShadow: '0 5px 20px rgba(0,206,209,0.5)' }}>Explore J2E Experiences →</Link>
        </div>
      </div>

      {/* CHOOSE YOUR FREQUENCY */}
      <div style={{ maxWidth: '1600px', margin: '0 auto 80px', padding: '0 20px' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', textAlign: 'center', background: 'linear-gradient(135deg, #FFD700, #FFA500)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 'clamp(30px, 8vw, 50px)', lineHeight: '1.2' }}>🌟 Choose Your Frequency</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 'clamp(20px, 4vw, 30px)' }}>
          {categories.map(cat => (
            <Link key={cat.id} to={cat.link} onClick={() => window.scrollTo(0, 0)} style={{ background: 'rgba(0,0,0,0.6)', borderRadius: '20px', overflow: 'hidden', border: `3px solid ${cat.color}`, textDecoration: 'none', transition: 'all 0.3s', position: 'relative', boxShadow: `0 10px 30px ${cat.color}40`, display: 'block' }}>
              <div style={{ position: 'absolute', top: '15px', left: '15px', background: cat.color, color: '#000', padding: '8px 15px', borderRadius: '20px', fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', fontWeight: 'bold', zIndex: 2 }}>{cat.stage}</div>
              <div style={{ height: 'clamp(180px, 35vw, 250px)', background: `url(${cat.image}) center/cover`, position: 'relative' }}>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.95), transparent)', padding: 'clamp(30px, 6vw, 40px) 20px 20px' }}>
                  <h3 style={{ color: '#FFF', fontSize: 'clamp(1.2rem, 3.5vw, 1.8rem)', marginBottom: '5px', lineHeight: '1.2', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span>{cat.icon}</span>
                    <span>{cat.name}</span>
                  </h3>
                </div>
              </div>
              <div style={{ padding: 'clamp(15px, 4vw, 25px)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', background: `linear-gradient(90deg, ${cat.color}20, transparent)`, borderRadius: '10px', border: `2px solid ${cat.color}40` }}>
                  <span style={{ color: cat.color, fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', fontWeight: 'bold' }}>Explore</span>
                  <span style={{ color: cat.color, fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' }}>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CONSULTATION CTA */}
      <div style={{ maxWidth: '1000px', margin: '60px auto', padding: 'clamp(30px, 6vw, 40px)', textAlign: 'center', background: 'linear-gradient(135deg, rgba(148,0,211,0.1), rgba(255,215,0,0.1))', borderRadius: '20px', border: '3px solid', borderImage: 'linear-gradient(45deg,violet,indigo,blue,green,yellow,orange,red) 1' }}>
        <h2 style={{ color: '#9400D3', fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '20px', lineHeight: '1.2' }}>💬 Need Personalized Guidance?</h2>
        <p style={{ fontSize: 'clamp(1rem, 3vw, 1.3rem)', marginBottom: '30px', lineHeight: '1.6', color: '#DDD6B8' }}>Book a consultation with Robin for customized protocols aligned with your unique frequency, health history, and transformation goals.</p>
        <Link to="/ContactUs" onClick={() => window.scrollTo(0, 0)} style={{ display: 'inline-block', padding: 'clamp(15px, 4vw, 18px) clamp(30px, 7vw, 45px)', background: 'linear-gradient(135deg, #9400D3, #FFD700)', color: '#000', textDecoration: 'none', borderRadius: '50px', fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', fontWeight: 'bold', boxShadow: '0 8px 25px rgba(148,0,211,0.5)' }}>Schedule Consultation →</Link>
      </div>
    </Layout>
  );
};

export default MAVJStore;