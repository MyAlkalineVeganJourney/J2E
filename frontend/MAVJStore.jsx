import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/PageLayout';
import products from '../data/products';
import { CartContext } from '../context/CartContext';

const MAVJStore = () => {
  const { cartItems } = useContext(CartContext);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });

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

  const handleBuyNow = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      alert('Coming soon!');
    }
  };

  // FEATURED PRODUCTS - NO SEA MOSS
  const featuredProducts = [
    products.find(p => p.name.includes('Walnut Chews')),
    products.find(p => p.name.includes('Sea Moss Bomb')),
    products.find(p => p.name.includes('21 Day Reset')),
    products.find(p => p.name.includes('Castor Oil')),
    products.find(p => p.name.includes('Panadol')),
    products.find(p => p.name.includes('Cookies'))
  ].filter(Boolean);

  // VIOLET SEA MOSS - 8 STRIPE LINKS (4 RAW + 4 GEL)
  const violetSeaMoss = {
    name: 'Violet Sea Moss',
    botanical: 'Gracilaria spp.',
    color: '#9370DB',
    rawImage: '/images/RawMossViolet.jpg',
    gelImage: '/images/GelViolet.jpg',
    benefit: 'Violet vibration activates crown and third eye chakras - enhances spiritual clarity, amplifies intuitive perception, supports thyroid and pineal gland function, promotes deep sleep cycles, and facilitates quantum coherence with higher consciousness.',
    raw: [
      products.find(p => p.name.includes('Violet') && p.name.includes('Raw 2oz')),
      products.find(p => p.name.includes('Violet') && p.name.includes('Raw 4oz')),
      products.find(p => p.name.includes('Violet') && p.name.includes('Raw 8oz')),
      products.find(p => p.name.includes('Violet') && p.name.includes('Raw 16oz'))
    ].filter(Boolean),
    gel: [
      products.find(p => p.name.includes('Violet') && p.name.includes('Gel 4oz')),
      products.find(p => p.name.includes('Violet') && p.name.includes('Gel 8oz')),
      products.find(p => p.name.includes('Violet') && p.name.includes('Gel 16oz')),
      products.find(p => p.name.includes('Violet') && p.name.includes('Gel 32oz'))
    ].filter(Boolean)
  };

  const chelationKit = products.find(p => p.name.includes('21 Day Reset') || p.name.includes('Detox'));
  
  const herbs = [
    products.find(p => p.name.includes('Panadol')),
    products.find(p => p.name.includes('Blue Vervain')),
    products.find(p => p.name.includes('Red Clover')),
    products.find(p => p.name.includes('Soursop'))
  ].filter(Boolean);

  const castorOil = products.find(p => p.name.includes('Castor Oil'));

  const j2eAccommodations = [
    products.find(p => p.name.includes('J2E Enlightenment Pod (one person)')),
    products.find(p => p.name.includes('J2E Frequency Pod (2 Guests')),
    products.find(p => p.name.includes('J2E Resonance Pod (4+ guests')),
    products.find(p => p.name.includes('J2E Vibration Off-Campus Pod')),
    products.find(p => p.name.includes('J2E Deluxe Amplification Pod'))
  ].filter(Boolean);

  const categories = [
    { name: 'Sea Moss', icon: '🌊', color: '#00CED1', link: '/MAVJSeaMoss', image: '/images/SeaMossBanner.jpg', stage: 'FOUNDATION' },
    { name: 'Transformation Kits', icon: '💎', color: '#9400D3', link: '/ProductCatalog#kits', image: '/images/Detox.jpg', stage: 'RESET' },
    { name: 'Sacred Herbs', icon: '🌿', color: '#32CD32', link: '/ProductCatalog#herbs', image: '/images/Panadol.jpg', stage: 'HEALING' },
    { name: 'Life Seeds', icon: '🌱', color: '#FFD700', link: '/ProductCatalog#seeds', image: '/images/SeedsBanner.jpg', stage: 'SOVEREIGNTY' },
    { name: 'Sacred Oils', icon: '��', color: '#FF6B00', link: '/ProductCatalog#oils', image: '/images/CastorOilBanner.jpg', stage: 'INFLAMMATION' },
    { name: 'Alkaline Recipes', icon: '🍽️', color: '#FF69B4', link: '/Recipes', image: '/images/RecipesBanner.png', stage: 'MAINTENANCE' },
    { name: 'Treats', icon: '✨', color: '#FFD700', link: '/ProductCatalog#snacks', image: '/images/WalnutCookies.png', stage: 'CELEBRATION' },
    { name: 'Beverages', icon: '🥤', color: '#4169E1', link: '/ProductCatalog#beverages', image: '/images/TheBomb.jpg', stage: 'VITALITY' },
    { name: 'J2E', icon: '🏝️', color: '#00CED1', link: '/J2EAccommodations', image: '/images/J2EPod.jpeg', stage: 'CONVERGENCE' }
  ];

  return (
    <Layout pageTitle="🛒 MAVJ STORE">
      
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

      {/* 50% OFF BANNER */}
      {showAnnouncement && (
        <div style={{ background: 'linear-gradient(90deg, #FFD700, #FFA500, #FFD700)', padding: 'clamp(20px, 5vw, 30px)', textAlign: 'center', color: '#000', position: 'relative', marginBottom: '40px', borderRadius: '15px', boxShadow: '0 5px 30px rgba(255,215,0,0.6)', maxWidth: '1600px', margin: '0 auto 40px' }}>
          <button onClick={() => setShowAnnouncement(false)} style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.3)', border: 'none', color: '#000', fontSize: 'clamp(1.5rem, 3vw, 1.8rem)', cursor: 'pointer', borderRadius: '50%', width: 'clamp(30px, 5vw, 35px)', height: 'clamp(30px, 5vw, 35px)', fontWeight: 'bold' }}>×</button>
          <h3 style={{ margin: '0 0 10px 0', fontSize: 'clamp(1.2rem, 4vw, 1.8rem)', fontWeight: 'bold' }}>🎉 VOLCANIC MARCH: 50% OFF SEA MOSS! 🎉</h3>
          <p style={{ margin: '5px 0 15px 0', fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}>Join the MAVJ Family!</p>
          <button onClick={() => setShowSubscribeModal(true)} style={{ padding: 'clamp(12px, 3vw, 15px) clamp(20px, 5vw, 30px)', background: '#000', color: '#FFD700', border: '2px solid #FFD700', borderRadius: '10px', fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', fontWeight: 'bold', cursor: 'pointer' }}>Get Code: VOLCANIC20</button>
        </div>
      )}

      {/* SUBSCRIBE MODAL */}
      {showSubscribeModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.95)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ background: '#000', border: '3px solid #FFD700', borderRadius: '20px', padding: 'clamp(20px, 5vw, 40px)', maxWidth: '500px', width: '100%' }}>
            <h2 style={{ color: '#FFD700', marginBottom: '20px', textAlign: 'center', fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>🌟 Join the MAVJ Family!</h2>
            <input type="text" placeholder="Your Name" value={userInfo.name} onChange={(e) => setUserInfo({...userInfo, name: e.target.value})} style={{ width: '100%', padding: '15px', marginBottom: '15px', background: 'rgba(255,255,255,0.1)', border: '2px solid #FFD700', borderRadius: '10px', color: '#FFF', fontSize: '1rem', boxSizing: 'border-box' }} />
            <input type="email" placeholder="Your Email" value={userInfo.email} onChange={(e) => setUserInfo({...userInfo, email: e.target.value})} style={{ width: '100%', padding: '15px', marginBottom: '20px', background: 'rgba(255,255,255,0.1)', border: '2px solid #FFD700', borderRadius: '10px', color: '#FFF', fontSize: '1rem', boxSizing: 'border-box' }} />
            <button onClick={handleSubscribeSubmit} disabled={!userInfo.name || !userInfo.email} style={{ width: '100%', padding: '15px', background: userInfo.name && userInfo.email ? 'linear-gradient(135deg, #FFD700, #FFA500)' : '#666', color: '#000', border: 'none', borderRadius: '10px', fontSize: '1.2rem', fontWeight: 'bold', cursor: userInfo.name && userInfo.email ? 'pointer' : 'not-allowed', marginBottom: '10px' }}>Join & Get Code!</button>
            <button onClick={() => setShowSubscribeModal(false)} style={{ width: '100%', padding: '10px', background: 'transparent', color: '#FFD700', border: '2px solid #FFD700', borderRadius: '10px', cursor: 'pointer' }}>Later</button>
          </div>
        </div>
      )}

      {/* FEATURED PRODUCTS */}
      <div style={{ maxWidth: '1600px', margin: '0 auto 60px', padding: 'clamp(25px, 5vw, 40px)', background: '#000', borderRadius: '20px', border: '3px solid', borderImage: 'linear-gradient(45deg,violet,indigo,blue,green,yellow,orange,red) 1' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', textAlign: 'center', color: '#FFD700', marginBottom: 'clamp(20px, 5vw, 30px)' }}>⚡ Start Your Journey Here</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(180px, 100%), 1fr))', gap: 'clamp(15px, 3vw, 20px)', marginBottom: '30px' }}>
          {featuredProducts.map((product, i) => product && (
            <div key={i} style={{ background: 'rgba(0,0,0,0.7)', borderRadius: '15px', border: '3px solid #00CED1', overflow: 'hidden', boxShadow: '0 5px 20px rgba(0,206,209,0.4)', transition: 'all 0.3s', cursor: 'pointer' }} onClick={() => handleBuyNow(product.url)}>
              <div style={{ height: 'clamp(100px, 22vw, 140px)', backgroundImage: `url(${product.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div style={{ padding: 'clamp(10px, 2.5vw, 15px)', textAlign: 'center' }}>
                <h4 style={{ color: '#FFD700', fontSize: 'clamp(0.85rem, 2.2vw, 1rem)', marginBottom: '4px', lineHeight: '1.2', fontWeight: 'bold', minHeight: '40px' }}>{product.name}</h4>
                <p style={{ color: '#DDD6B8', fontSize: 'clamp(0.7rem, 1.8vw, 0.8rem)', marginBottom: '6px', lineHeight: '1.2' }}>{product.description}</p>
                <div style={{ color: '#00CED1', fontSize: 'clamp(1.1rem, 2.8vw, 1.4rem)', fontWeight: 'bold' }}>${product.price.toFixed(2)}</div>
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
          <h2 style={{ fontSize: 'clamp(1.2rem, 4vw, 2.2rem)', background: 'linear-gradient(135deg, #FFD700, #00CED1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 'bold', lineHeight: '1.3' }}>Your Roadmap to Quantum Coherence from Cellular Confusion</h2>
        </div>
      </div>

      {/* CHAPTER 1: FOUNDATION + VIOLET SEA MOSS */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 80px', padding: '0 20px' }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(0,206,209,0.1), rgba(0,0,0,0.3))', border: '3px solid #00CED1', borderRadius: '20px', padding: 'clamp(30px, 6vw, 50px)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: 0, top: 0, width: '40%', height: '100%', backgroundImage: 'url(/images/SeaMossBanner.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15, zIndex: 0 }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>🌊</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#00CED1', margin: 0 }}>Chapter 1: The Foundation</h2>
            </div>
            
            <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', lineHeight: '1.8', color: '#DDD6B8', marginBottom: '20px' }}>
              Start here. Before anything else, your body needs minerals. Sea Moss provides approximately 95% of the minerals your body needs daily (Holdt & Kraan, 2011; Teas et al., 2004).
            </p>
            
            <div style={{ background: 'rgba(255,215,0,0.1)', padding: 'clamp(20px, 4vw, 30px)', borderRadius: '15px', marginBottom: '25px', border: '2px solid #FFD700' }}>
              <h3 style={{ color: '#FFD700', fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)', marginBottom: '15px' }}>💎 Mineral Deficiency = Disease State</h3>
              <p style={{ color: '#DDD6B8', fontSize: 'clamp(1rem, 2.8vw, 1.2rem)', lineHeight: '1.8', marginBottom: '15px' }}>
                Research by Dr. Alan Goldhamer (TrueNorth Health Center) and Dr. Valter Longo (USC Longevity Institute) confirms: <strong style={{ color: '#FFD700' }}>the absence of ANY mineral puts your body in a disease state.</strong>
              </p>
              <p style={{ color: '#00CED1', fontSize: 'clamp(0.95rem, 2.6vw, 1.1rem)', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '10px' }}>
                "Mineral deficiency disrupts enzymatic processes, hormone production, and cellular communication - creating the foundation for chronic disease." - Dr. Valter Longo, Cell Metabolism, 2014
              </p>
              <p style={{ color: '#888', fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', lineHeight: '1.6', fontStyle: 'italic' }}>
                Additional research: Holdt & Kraan, 2011, Journal of Applied Phycology; Teas et al., 2004, Journal of Medicinal Food; Ramnani et al., 2012, Anaerobe
              </p>
            </div>

            <p style={{ fontSize: 'clamp(1rem, 2.8vw, 1.2rem)', lineHeight: '1.7', color: '#FFD700', fontStyle: 'italic', marginBottom: '25px' }}>
              The absence of ANY mineral in your body results in disease. Sea Moss creates the homeostasis your body requires.
            </p>
            
            {/* VIOLET SEA MOSS CARD - 8 STRIPE LINKS (4 RAW + 4 GEL IN 2 COLUMNS) */}
            <div style={{ background: 'rgba(0,0,0,0.8)', border: `3px solid ${violetSeaMoss.color}`, borderRadius: '20px', overflow: 'hidden', boxShadow: `0 10px 40px ${violetSeaMoss.color}50`, marginBottom: '25px' }}>
              <div style={{ height: '220px', display: 'flex' }}>
                <div style={{ flex: 1, backgroundImage: `url(${violetSeaMoss.rawImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div style={{ flex: 1, backgroundImage: `url(${violetSeaMoss.gelImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              </div>
              <div style={{ padding: 'clamp(20px, 4vw, 30px)' }}>
                <h3 style={{ color: violetSeaMoss.color, fontSize: 'clamp(1.4rem, 3.2vw, 1.7rem)', marginBottom: '8px', fontWeight: 'bold' }}>{violetSeaMoss.name}</h3>
                <p style={{ color: '#888', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', fontStyle: 'italic', marginBottom: '15px' }}>{violetSeaMoss.botanical}</p>
                <p style={{ color: '#DDD6B8', fontSize: 'clamp(0.9rem, 2.2vw, 1rem)', lineHeight: '1.6', marginBottom: '15px' }}>{violetSeaMoss.benefit}</p>
                
                <div style={{ background: 'rgba(0,206,209,0.1)', padding: 'clamp(15px, 3vw, 20px)', borderRadius: '10px', marginBottom: '20px', border: '2px solid #00CED1' }}>
                  <p style={{ color: '#00CED1', fontSize: 'clamp(0.9rem, 2.2vw, 1rem)', lineHeight: '1.7', marginBottom: '10px', fontWeight: 'bold' }}>
                    🌋 Shipped in St. Lucian Volcanic Spring Water
                  </p>
                  <p style={{ color: '#DDD6B8', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', lineHeight: '1.6', marginBottom: '10px' }}>
                    Medicinal-grade substrate-harvested moss prepared with mineral-rich volcanic spring water from the Pitons. Know the difference between rope-grown kitchen-grade and substrate-harvested medicinal moss.
                  </p>
                  <p style={{ color: '#888', fontSize: 'clamp(0.75rem, 1.8vw, 0.85rem)', lineHeight: '1.5', fontStyle: 'italic' }}>
                    Source: Ramnani et al., 2012, Anaerobe; Qin et al., 2020, Marine Drugs
                  </p>
                </div>
                
                {/* 8 STRIPE LINKS - 4 RAW (LEFT) + 4 GEL (RIGHT) IN 2 COLUMNS */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                  {/* LEFT COLUMN: RAW (4 LINKS) */}
                  <div>
                    <h4 style={{ color: '#FFD700', fontSize: 'clamp(1rem, 2.4vw, 1.2rem)', marginBottom: '10px', fontWeight: 'bold' }}>Raw:</h4>
                    <div style={{ display: 'grid', gap: '8px' }}>
                      {violetSeaMoss.raw.map((product, i) => product && (
                        <button key={i} onClick={() => handleBuyNow(product.url)} style={{ padding: '10px', background: `${violetSeaMoss.color}20`, border: `2px solid ${violetSeaMoss.color}`, borderRadius: '8px', color: violetSeaMoss.color, fontSize: 'clamp(0.8rem, 1.9vw, 0.9rem)', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span>{product.name.match(/\d+oz/)?.[0]}</span>
                          <span>${product.price}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT COLUMN: GEL (4 LINKS) */}
                  <div>
                    <h4 style={{ color: '#FFD700', fontSize: 'clamp(1rem, 2.4vw, 1.2rem)', marginBottom: '10px', fontWeight: 'bold' }}>Gel:</h4>
                    <div style={{ display: 'grid', gap: '8px' }}>
                      {violetSeaMoss.gel.map((product, i) => product && (
                        <button key={i} onClick={() => handleBuyNow(product.url)} style={{ padding: '10px', background: `${violetSeaMoss.color}20`, border: `2px solid ${violetSeaMoss.color}`, borderRadius: '8px', color: violetSeaMoss.color, fontSize: 'clamp(0.8rem, 1.9vw, 0.9rem)', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span>{product.name.match(/\d+oz/)?.[0]}</span>
                          <span>${product.price}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <Link to="/MAVJSeaMoss" onClick={() => window.scrollTo(0, 0)} style={{ display: 'block', padding: '14px', background: 'transparent', border: `2px solid ${violetSeaMoss.color}`, borderRadius: '12px', color: violetSeaMoss.color, textAlign: 'center', textDecoration: 'none', fontSize: 'clamp(1rem, 2.4vw, 1.1rem)', fontWeight: 'bold', transition: 'all 0.3s' }}>
                  View All Sea Moss Colors, Sizes & Scientific Details →
                </Link>
              </div>
            </div>

            <div style={{ background: 'rgba(255,107,0,0.1)', padding: 'clamp(20px, 4vw, 30px)', borderRadius: '15px', border: '2px solid #FF6B00', marginTop: '25px' }}>
              <h3 style={{ color: '#FF6B00', fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)', marginBottom: '15px' }}>🪸 Coral Reef Restoration Mission</h3>
              <p style={{ color: '#DDD6B8', fontSize: 'clamp(1rem, 2.8vw, 1.2rem)', lineHeight: '1.8', marginBottom: '10px' }}>
                While harvesting sea moss, our dive team actively restores dying coral reefs. Sea moss and coral have a symbiotic relationship - the moss protects the substrate while encouraging coral growth. We work with both vital coral and ghost coral, replanting with sea moss to restore St. Lucia's volcanic reefs.
              </p>
              <p style={{ color: '#888', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', lineHeight: '1.6', fontStyle: 'italic' }}>
                Source: Caribbean marine biology research studies, 2018-2023
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CHAPTER 2: RESET + CHELATION KIT */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 80px', padding: '0 20px' }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(148,0,211,0.1), rgba(0,0,0,0.3))', border: '3px solid #9400D3', borderRadius: '20px', padding: 'clamp(30px, 6vw, 50px)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: 0, top: 0, width: '40%', height: '100%', backgroundImage: 'url(/images/Detox.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.12, zIndex: 0 }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>💎</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#9400D3', margin: 0 }}>Chapter 2: The Reset</h2>
            </div>
            <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', lineHeight: '1.8', color: '#DDD6B8', marginBottom: '20px' }}>
              The 21-day distilled water reset: Stem cell regeneration in 3 complete cycles. Growth hormone activation. Visceral fat ERADICATED. Mental clarity returns. Chronic pain disappears.
            </p>
            <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', lineHeight: '1.8', color: '#FFD700', marginBottom: '20px', fontWeight: 'bold' }}>
              But you cannot jump directly to a 21-day reset. Your body must be prepared with the 7-7-7 Protocol.
            </p>
            
            <div style={{ background: 'rgba(148,0,211,0.2)', padding: 'clamp(20px, 4vw, 30px)', borderRadius: '15px', marginBottom: '25px' }}>
              <h3 style={{ color: '#FFD700', fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)', marginBottom: '15px' }}>💉 Chelation: Heavy Metal Removal</h3>
              <p style={{ color: '#DDD6B8', fontSize: 'clamp(1rem, 2.8vw, 1.2rem)', lineHeight: '1.8', marginBottom: '15px' }}>
                Disease hides behind heavy metals. When you think you have flushed your system but heavy metals remain, you are still transporting disease. To remove disease and all its remnants, you MUST remove the heavy metals, then replenish.
              </p>
              <p style={{ color: '#00CED1', fontSize: 'clamp(1rem, 2.8vw, 1.2rem)', lineHeight: '1.8', marginBottom: '15px' }}>
                Our Chelation Detox Kit provides Dr. Sebi's all-natural heavy metal removal formula PLUS complete replenishment - everything you need in one kit.
              </p>
              <p style={{ color: '#FFD700', fontSize: 'clamp(0.95rem, 2.6vw, 1.1rem)', lineHeight: '1.7', fontStyle: 'italic' }}>
                Quarterly chelation (every 4 months) - 4 applications per year removes heavy metals as they accumulate. Hand-picked organic herbs, sun-dried, minimal processing from Earth to bag.
              </p>
            </div>
            
            {chelationKit && (
              <div style={{ background: 'rgba(0,0,0,0.7)', borderRadius: '15px', border: '3px solid #9400D3', overflow: 'hidden', boxShadow: '0 5px 20px rgba(148,0,211,0.4)', marginBottom: '25px' }}>
                <div style={{ height: '180px', backgroundImage: `url(${chelationKit.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div style={{ padding: 'clamp(20px, 4vw, 25px)', textAlign: 'center' }}>
                  <h4 style={{ color: '#9400D3', fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', marginBottom: '10px', fontWeight: 'bold' }}>{chelationKit.name}</h4>
                  <p style={{ color: '#DDD6B8', fontSize: 'clamp(0.9rem, 2.2vw, 1rem)', marginBottom: '15px', lineHeight: '1.6' }}>{chelationKit.description}</p>
                  <div style={{ color: '#FFD700', fontSize: 'clamp(1.3rem, 3.2vw, 1.6rem)', fontWeight: 'bold', marginBottom: '15px' }}>${chelationKit.price}</div>
                  <button onClick={() => handleBuyNow(chelationKit.url)} style={{ padding: 'clamp(12px, 3vw, 15px) clamp(20px, 5vw, 30px)', background: 'linear-gradient(135deg, #9400D3, #FFD700)', color: '#000', border: 'none', borderRadius: '50px', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', fontWeight: 'bold', cursor: 'pointer' }}>
                    Get Chelation Kit →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CHAPTER 3: REFEEDING + HERBS */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 80px', padding: '0 20px' }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(50,205,50,0.1), rgba(0,0,0,0.3))', border: '3px solid #32CD32', borderRadius: '20px', padding: 'clamp(30px, 6vw, 50px)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: 0, top: 0, width: '40%', height: '100%', backgroundImage: 'url(/images/Panadol.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.12, zIndex: 0 }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>🌿</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#32CD32', margin: 0 }}>Chapter 3: The Hierarchy of Refeeding</h2>
            </div>
            <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', lineHeight: '1.8', color: '#DDD6B8', marginBottom: '20px' }}>
              After reset, HOW you refeed determines whether visceral fat continues to be removed. Sacred herbs support your body as it adapts to alkaline living. These prepare your cells for the transformation ahead.
            </p>
            
            {herbs.length > 0 && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: 'clamp(15px, 3vw, 20px)', marginTop: '25px' }}>
                {herbs.map((herb, i) => (
                  <div key={i} style={{ background: 'rgba(0,0,0,0.7)', borderRadius: '15px', border: '3px solid #32CD32', overflow: 'hidden', boxShadow: '0 5px 20px rgba(50,205,50,0.4)', cursor: 'pointer' }} onClick={() => handleBuyNow(herb.url)}>
                    <div style={{ height: 'clamp(100px, 20vw, 130px)', backgroundImage: `url(${herb.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    <div style={{ padding: 'clamp(12px, 3vw, 15px)', textAlign: 'center' }}>
                      <h4 style={{ color: '#32CD32', fontSize: 'clamp(0.9rem, 2.2vw, 1.05rem)', marginBottom: '8px', lineHeight: '1.2', fontWeight: 'bold' }}>{herb.name.replace('Organic Wild Hand-Picked 🇱🇨 Herbs - ', '')}</h4>
                      <div style={{ color: '#FFD700', fontSize: 'clamp(1.1rem, 2.8vw, 1.3rem)', fontWeight: 'bold' }}>${herb.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            <Link to="/ProductCatalog#herbs" onClick={() => window.scrollTo(0, 0)} style={{ display: 'inline-block', marginTop: '25px', padding: 'clamp(12px, 3vw, 18px) clamp(25px, 5vw, 40px)', background: 'linear-gradient(135deg, #32CD32, #00FF00)', color: '#000', textDecoration: 'none', borderRadius: '50px', fontSize: 'clamp(1rem, 2.8vw, 1.3rem)', fontWeight: 'bold', boxShadow: '0 5px 20px rgba(50,205,50,0.5)' }}>
              View All Sacred Herbs →
            </Link>
          </div>
        </div>
      </div>

      {/* CHAPTER 4: SOVEREIGNTY + SEEDS */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 80px', padding: '0 20px' }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(255,215,0,0.1), rgba(0,0,0,0.3))', border: '3px solid #FFD700', borderRadius: '20px', padding: 'clamp(30px, 6vw, 50px)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: 0, top: 0, width: '40%', height: '100%', backgroundImage: 'url(/images/SeedsBanner.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.12, zIndex: 0 }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>🌱</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#FFD700', margin: 0 }}>Chapter 4: Plant Your Future</h2>
            </div>
            <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', lineHeight: '1.8', color: '#DDD6B8', marginBottom: '20px' }}>
              While preparing for reset, I planted my garden. True sovereignty begins in the soil.
            </p>
            
            <div style={{ background: 'rgba(255,215,0,0.2)', padding: 'clamp(20px, 4vw, 30px)', borderRadius: '15px', border: '2px solid #FFD700', marginBottom: '25px' }}>
              <h3 style={{ color: '#FFD700', fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)', marginBottom: '15px' }}>🌾 Save Your Seeds - Since 1990</h3>
              <p style={{ color: '#DDD6B8', fontSize: 'clamp(1rem, 2.8vw, 1.2rem)', lineHeight: '1.8', marginBottom: '15px' }}>
                Since 1990 when we were first exposed to seedless fruits, I started warning people: START SAVING YOUR SEEDS. This has been a campaign for My Alkaline Vegan Journey from the very beginning.
              </p>
              <p style={{ color: '#00CED1', fontSize: 'clamp(1rem, 2.8vw, 1.2rem)', lineHeight: '1.8' }}>
                If we are not directly planting seeds from the fruits we consume, we are saving them. Now that we have land, we plant directly - but it is still wise to put some aside. Seeds are sovereignty. Your garden is freedom.
              </p>
            </div>
            
            <Link to="/ProductCatalog#seeds" onClick={() => window.scrollTo(0, 0)} style={{ display: 'inline-block', padding: 'clamp(12px, 3vw, 18px) clamp(25px, 5vw, 40px)', background: 'linear-gradient(135deg, #FFD700, #FFA500)', color: '#000', textDecoration: 'none', borderRadius: '50px', fontSize: 'clamp(1rem, 2.8vw, 1.3rem)', fontWeight: 'bold', boxShadow: '0 5px 20px rgba(255,215,0,0.5)' }}>
              Explore Life Force Seeds →
            </Link>
          </div>
        </div>
      </div>

      {/* CHAPTER 5: OILS + CASTOR OIL */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 80px', padding: '0 20px' }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(255,107,0,0.1), rgba(0,0,0,0.3))', border: '3px solid #FF6B00', borderRadius: '20px', padding: 'clamp(30px, 6vw, 50px)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: 0, top: 0, width: '40%', height: '100%', backgroundImage: 'url(/images/CastorOilBanner.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.12, zIndex: 0 }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>🔥</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#FF6B00', margin: 0 }}>Chapter 5: The Inflammation Buster</h2>
            </div>
            <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', lineHeight: '1.8', color: '#DDD6B8', marginBottom: '20px' }}>
              My ankle and knee were chipped and broken. Castor oil - the inflammation buster - penetrates deeper into the skin than any other oil. Autoimmune diseases stem from inflammation - castor oil attacks it directly.
            </p>
            
            <div style={{ background: 'rgba(255,107,0,0.2)', padding: 'clamp(20px, 4vw, 30px)', borderRadius: '15px', marginBottom: '25px' }}>
              <h3 style={{ color: '#FFD700', fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)', marginBottom: '15px' }}>🌞 Genesis Batch: Sacred Solar-Lunar Process</h3>
              <p style={{ color: '#DDD6B8', fontSize: 'clamp(1rem, 2.8vw, 1.2rem)', lineHeight: '1.8', marginBottom: '15px' }}>
                Castor seeds roasted in St. Lucian sun for 90+ days. Crushed using live electrical coconut in a homemade St. Lucian clay pot - completely holistic, high-vibrational ceremony using all-natural earth-based tools. This Genesis Batch is more expensive than most castor oil - but the process from seed to bottle creates exponential healing energy.
              </p>
              <p style={{ color: '#00CED1', fontSize: 'clamp(1rem, 2.8vw, 1.2rem)', lineHeight: '1.8' }}>
                Sun and moon fermentation charges the oil with both solar life force and lunar regenerative frequencies. Black seed + oregano infusion = ultimate powerhouse combination. 100% pure castor oil - all natural, all from the Earth.
              </p>
            </div>
            
            {castorOil && (
              <div style={{ background: 'rgba(0,0,0,0.7)', borderRadius: '15px', border: '3px solid #FF6B00', overflow: 'hidden', boxShadow: '0 5px 20px rgba(255,107,0,0.4)', marginBottom: '25px' }}>
                <div style={{ height: '180px', backgroundImage: `url(${castorOil.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div style={{ padding: 'clamp(20px, 4vw, 25px)', textAlign: 'center' }}>
                  <h4 style={{ color: '#FF6B00', fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', marginBottom: '10px', fontWeight: 'bold' }}>{castorOil.name}</h4>
                  <p style={{ color: '#DDD6B8', fontSize: 'clamp(0.9rem, 2.2vw, 1rem)', marginBottom: '15px', lineHeight: '1.6' }}>{castorOil.description}</p>
                  <div style={{ color: '#FFD700', fontSize: 'clamp(1.3rem, 3.2vw, 1.6rem)', fontWeight: 'bold', marginBottom: '15px' }}>${castorOil.price}</div>
                  <button onClick={() => handleBuyNow(castorOil.url)} style={{ padding: 'clamp(12px, 3vw, 15px) clamp(20px, 5vw, 30px)', background: 'linear-gradient(135deg, #FF6B00, #FF8C00)', color: '#000', border: 'none', borderRadius: '50px', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', fontWeight: 'bold', cursor: 'pointer' }}>
                    Get Genesis Batch →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CHAPTER 6: MAINTENANCE + FOOD PHOTOS */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 80px', padding: '0 20px' }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(255,105,180,0.1), rgba(0,0,0,0.3))', border: '3px solid #FF69B4', borderRadius: '20px', padding: 'clamp(30px, 6vw, 50px)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: 0, top: 0, width: '40%', height: '100%', backgroundImage: 'url(/images/RecipesBanner.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.12, zIndex: 0 }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>🍽️</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#FF69B4', margin: 0 }}>Chapter 6: Maintenance is 80% Food</h2>
            </div>
            <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', lineHeight: '1.8', color: '#DDD6B8', marginBottom: '20px' }}>
              After reset, 80% of maintenance is food. Playing in our Alkaline Vegan Journey Experimental Kitchen created magic: Walnut Chews, Sesame Stars (inspired by my sister who died of breast cancer in 2010), No-Bake Brownies, Sea Moss Bomb.
            </p>
            <p style={{ fontSize: 'clamp(1rem, 2.8vw, 1.2rem)', lineHeight: '1.7', color: '#00CED1', marginBottom: '25px', fontStyle: 'italic' }}>
              I took ideas from chefs and cooks that were not vegan at all and transitioned them - complete alkaline vegan replications of non-alkaline vegan meals. Just as we transition words in the Positive Word Game, we transition meals.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: 'clamp(15px, 3vw, 20px)', marginBottom: '25px' }}>
              {[
                { img: '/images/KingOysterSalad.jpg', name: 'King Oyster Salad' },
                { img: '/images/MushroomSandwhich.jpg', name: 'Alkaline Sandwich' },
                { img: '/images/SauteedMushroomMixwTomatoes.jpg', name: 'Sautéed Mushrooms' },
                { img: '/images/AVWalnutBrownie.jpg', name: 'Walnut Brownies' },
                { img: '/images/AVChocandWalnutCookies.jpg', name: 'Alkaline Cookies' },
                { img: '/images/SesameStarCandy.jpg', name: 'Sesame Stars' }
              ].map((item, i) => (
                <div key={i} style={{ borderRadius: '15px', overflow: 'hidden', border: '2px solid #FF69B4', boxShadow: '0 5px 20px rgba(255,105,180,0.3)' }}>
                  <img src={item.img} alt={item.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                  <div style={{ padding: '12px', background: '#000', textAlign: 'center' }}>
                    <p style={{ color: '#FF69B4', fontSize: 'clamp(0.9rem, 2.2vw, 1.05rem)', fontWeight: 'bold', margin: 0 }}>{item.name}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Link to="/Recipes" onClick={() => window.scrollTo(0, 0)} style={{ display: 'inline-block', padding: 'clamp(12px, 3vw, 18px) clamp(25px, 5vw, 40px)', background: 'linear-gradient(135deg, #FF69B4, #FFB6C1)', color: '#000', textDecoration: 'none', borderRadius: '50px', fontSize: 'clamp(1rem, 2.8vw, 1.3rem)', fontWeight: 'bold', boxShadow: '0 5px 20px rgba(255,105,180,0.5)' }}>
              Explore All Recipes →
            </Link>
          </div>
        </div>
      </div>

      {/* CHAPTER 7: CONVERGENCE + J2E (TRIPLE PHOTO + ALL 5 ACCOMMODATIONS) */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 80px', padding: '0 20px' }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(0,206,209,0.1), rgba(148,0,211,0.1))', border: '3px solid', borderImage: 'linear-gradient(45deg,violet,indigo,blue,green,yellow,orange,red) 1', borderRadius: '20px', padding: 'clamp(30px, 6vw, 50px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>🏝️</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', background: 'linear-gradient(135deg, #00CED1, #9400D3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', margin: 0 }}>Chapter 7: Convergence</h2>
          </div>
          <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', lineHeight: '1.8', color: '#DDD6B8', marginBottom: '20px' }}>
            Once you have completed your reset, you want to be around people elevated in frequency like yourself. 100K TikTok family. The Smile Game changed lives. Now we converge.
          </p>
          
          {/* J2E CARD WITH TRIPLE PHOTO + ALL 5 ACCOMMODATIONS */}
          <div style={{ background: 'linear-gradient(135deg, rgba(0,206,209,0.2), rgba(148,0,211,0.2))', border: '3px solid', borderImage: 'linear-gradient(45deg,violet,indigo,blue,green,yellow,orange,red) 1', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 50px rgba(0,206,209,0.5)', marginBottom: '25px' }}>
            <div style={{ height: '280px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
              <div style={{ backgroundImage: 'url(/images/J2EPod.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div style={{ backgroundImage: 'url(/images/SeaPods.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div style={{ backgroundImage: 'url(/images/BeachDinner.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            </div>
            <div style={{ padding: 'clamp(30px, 5vw, 40px)' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', background: 'linear-gradient(135deg, #00CED1, #9400D3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '15px', fontWeight: 'bold' }}>Journey 2 Enlightenment</h2>
              <p style={{ fontSize: 'clamp(1.1rem, 2.8vw, 1.3rem)', color: '#DDD6B8', marginBottom: '15px', lineHeight: '1.7' }}>7-Day All-Inclusive Experience | St. Lucia</p>
              <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: '#FFD700', marginBottom: '25px', lineHeight: '1.6', fontWeight: 'bold' }}>
                🌟 Convergence: November 11, 2026 - Everyone physically together on 11/11 🌟
              </p>
              
              <h3 style={{ color: '#FFD700', fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', marginBottom: '20px' }}>Choose Your Accommodation:</h3>
              <div style={{ display: 'grid', gap: '15px', marginBottom: '25px' }}>
                {j2eAccommodations.map((acc, i) => acc && (
                  <button key={i} onClick={() => handleBuyNow(acc.url)} style={{ padding: '18px 25px', background: 'rgba(0,206,209,0.2)', border: '2px solid #00CED1', borderRadius: '12px', color: '#00CED1', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', fontWeight: 'bold', cursor: 'pointer', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'all 0.3s' }}>
                    <span>{acc.name.replace('J2E ', '')}</span>
                    <span style={{ color: '#FFD700' }}>${acc.price}</span>
                  </button>
                ))}
              </div>

              <Link to="/J2EAccommodations" onClick={() => window.scrollTo(0, 0)} style={{ display: 'block', padding: '15px', background: 'linear-gradient(135deg, #00CED1, #9400D3)', color: '#FFF', textAlign: 'center', textDecoration: 'none', borderRadius: '12px', fontSize: 'clamp(1.1rem, 2.8vw, 1.3rem)', fontWeight: 'bold' }}>
                Full Experience Details →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CHOOSE YOUR FREQUENCY */}
      <div style={{ maxWidth: '1600px', margin: '0 auto 80px', padding: '0 20px' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', textAlign: 'center', background: 'linear-gradient(135deg, #FFD700, #FFA500)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 'clamp(30px, 8vw, 50px)', lineHeight: '1.2' }}>🌟 Choose Your Frequency</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 'clamp(20px, 4vw, 30px)' }}>
          {categories.map(cat => (
            <Link key={cat.name} to={cat.link} onClick={() => window.scrollTo(0, 0)} style={{ background: 'rgba(0,0,0,0.6)', borderRadius: '20px', overflow: 'hidden', border: `3px solid ${cat.color}`, textDecoration: 'none', transition: 'all 0.3s', position: 'relative', boxShadow: `0 10px 30px ${cat.color}40`, display: 'block' }}>
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
        <h2 style={{ color: '#9400D3', fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '20px', lineHeight: '1.2' }}>�� Need Personalized Guidance?</h2>
        <p style={{ fontSize: 'clamp(1rem, 3vw, 1.3rem)', marginBottom: '30px', lineHeight: '1.6', color: '#DDD6B8' }}>Book a consultation with Robin for customized protocols aligned with your unique frequency, health history, and transformation goals.</p>
        <Link to="/ContactUs" onClick={() => window.scrollTo(0, 0)} style={{ display: 'inline-block', padding: 'clamp(15px, 4vw, 18px) clamp(30px, 7vw, 45px)', background: 'linear-gradient(135deg, #9400D3, #FFD700)', color: '#000', textDecoration: 'none', borderRadius: '50px', fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', fontWeight: 'bold', boxShadow: '0 8px 25px rgba(148,0,211,0.5)' }}>Schedule Consultation →</Link>
      </div>
    </Layout>
  );
};

export default MAVJStore;
