import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/PageLayout';
import products from '../data/products';
import { CartContext } from '../context/CartContext';

const MAVJStore = () => {
  const { cartItems } = useContext(CartContext);
  const { t } = useLanguage();
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
      alert('TRANSLATE');
    }
  };

  const handleBuyNow = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      alert('TRANSLATE');
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

  // ALL 4 SEA MOSS COLORS - EACH WITH 6 STRIPE LINKS (4 RAW + 2 GEL)
  const seaMossColors = [
    {
      name: 'TRANSLATE',
      botanical: 'Gracilaria spp.',
      color: '#9370DB',
      rawImage: '/images/RawMossViolet.jpg',
      gelImage: '/images/GelViolet.jpg',
      benefit: 'TRANSLATE',
      raw: [
        products.find(p => p.id === 'violet-raw-2oz'),
        products.find(p => p.id === 'violet-raw-4oz'),
        products.find(p => p.id === 'violet-raw-8oz'),
        products.find(p => p.id === 'violet-raw-16oz')
      ].filter(Boolean),
      gel: [
        products.find(p => p.id === 'violet-gel-16oz'),
        products.find(p => p.id === 'violet-gel-32oz')
      ].filter(Boolean)
    },
    {
      name: 'TRANSLATE',
      botanical: 'Gracilaria spp.',
      color: '#FFD700',
      rawImage: '/images/RawMossGold.jpg',
      gelImage: '/images/GelGold.jpg',
      benefit: 'TRANSLATE',
      raw: [
        products.find(p => p.id === 'gold-raw-2oz'),
        products.find(p => p.id === 'gold-raw-4oz'),
        products.find(p => p.id === 'gold-raw-8oz'),
        products.find(p => p.id === 'gold-raw-16oz')
      ].filter(Boolean),
      gel: [
        products.find(p => p.id === 'gold-gel-16oz'),
        products.find(p => p.id === 'gold-gel-32oz')
      ].filter(Boolean)
    },
    {
      name: 'TRANSLATE',
      botanical: 'Gracilaria spp.',
      color: '#00FA9A',
      rawImage: '/images/RawMossJade.jpg',
      gelImage: '/images/GelJade.jpg',
      benefit: 'TRANSLATE',
      raw: [
        products.find(p => p.id === 'jade-raw-2oz'),
        products.find(p => p.id === 'jade-raw-4oz'),
        products.find(p => p.id === 'jade-raw-8oz'),
        products.find(p => p.id === 'jade-raw-16oz')
      ].filter(Boolean),
      gel: [
        products.find(p => p.id === 'jade-gel-16oz'),
        products.find(p => p.id === 'jade-gel-32oz')
      ].filter(Boolean)
    },
    {
      name: 'TRANSLATE',
      botanical: 'TRANSLATE',
      color: '#00CED1',
      rawImage: '/images/SpectrumSeaMossfullRaw.jpg',
      gelImage: '/images/GelSpectrum.jpg',
      benefit: 'TRANSLATE',
      raw: [
        products.find(p => p.id === 'spectrum-raw-2oz'),
        products.find(p => p.id === 'spectrum-raw-4oz'),
        products.find(p => p.id === 'spectrum-raw-8oz'),
        products.find(p => p.id === 'spectrum-raw-16oz')
      ].filter(Boolean),
      gel: [
        products.find(p => p.id === 'spectrum-gel-16oz'),
        products.find(p => p.id === 'spectrum-gel-32oz')
      ].filter(Boolean)
    }
  ];

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
    { name: 'TRANSLATE', icon: '🌊', color: '#00CED1', link: '/MAVJSeaMoss', image: '/images/SeaMossBanner.jpg', stage: 'TRANSLATE' },
    { name: 'TRANSLATE', icon: '💎', color: '#9400D3', link: '/ProductCatalog#kits', image: '/images/Detox.jpg', stage: 'TRANSLATE' },
    { name: 'TRANSLATE', icon: '🌿', color: '#32CD32', link: '/ProductCatalog#herbs', image: '/images/Panadol.jpg', stage: 'TRANSLATE' },
    { name: 'TRANSLATE', icon: '🌱', color: '#FFD700', link: '/ProductCatalog#seeds', image: '/images/SeedsBanner.jpg', stage: 'TRANSLATE' },
    { name: 'TRANSLATE', icon: '🔥', color: '#FF6B00', link: '/ProductCatalog#oils', image: '/images/CastorOilBanner.jpg', stage: 'TRANSLATE' },
    { name: 'TRANSLATE', icon: '🍽️', color: '#FF69B4', link: '/Recipes', image: '/images/RecipesBanner.png', stage: 'TRANSLATE' },
    { name: 'TRANSLATE', icon: '✨', color: '#FFD700', link: '/ProductCatalog#snacks', image: '/images/WalnutCookies.png', stage: 'TRANSLATE' },
    { name: 'TRANSLATE', icon: '🥤', color: '#4169E1', link: '/ProductCatalog#beverages', image: '/images/TheBomb.jpg', stage: 'TRANSLATE' },
    { name: 'TRANSLATE', icon: '🏝️', color: '#00CED1', link: '/J2EAccommodations', image: '/images/J2EPod.jpeg', stage: 'TRANSLATE' }
  ];

  const foodPhotos = [
    { img: '/images/KingOysterSalad.jpg', name: 'TRANSLATE' },
    { img: '/images/MushroomSandwhich.jpg', name: 'TRANSLATE' },
    { img: '/images/SauteedMushroomMixwTomatoes.jpg', name: 'TRANSLATE' },
    { img: '/images/AVWalnutBrownie.jpg', name: 'TRANSLATE' },
    { img: '/images/AVChocandWalnutCookies.jpg', name: 'TRANSLATE' },
    { img: '/images/SesameStarCandy.jpg', name: 'TRANSLATE' }
  ];

  return (
    <Layout pageTitle={'TRANSLATE'}>
      
      {/* BREADCRUMB + CART */}
      <div style={{ maxWidth: '1600px', margin: '0 auto 20px', padding: '0 20px', display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center', fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', color: '#FFD700' }}>
        <Link to="/" onClick={() => window.scrollTo(0, 0)} style={{ color: '#FFD700', textDecoration: 'none' }}>🏠 {'TRANSLATE'}</Link>
        <span>→</span>
        <span style={{ color: '#FFF', fontWeight: 'bold', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)' }}>{'TRANSLATE'}</span>
        <Link to="/ShoppingCart" onClick={() => window.scrollTo(0, 0)} style={{ marginLeft: 'auto', padding: 'clamp(10px, 3vw, 15px) clamp(20px, 5vw, 30px)', background: 'linear-gradient(135deg, #00CED1, #0080FF)', color: '#000', textDecoration: 'none', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', fontWeight: 'bold', border: '3px solid #FFD700', boxShadow: '0 5px 25px rgba(0,206,209,0.6)' }}>
          <span style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>🛒</span>
          <span>{'TRANSLATE'} ({cartItems.length})</span>
        </Link>
      </div>

      {/* 50% OFF BANNER */}
      {showAnnouncement && (
        <div style={{ background: 'linear-gradient(90deg, #FFD700, #FFA500, #FFD700)', padding: 'clamp(20px, 5vw, 30px)', textAlign: 'center', color: '#000', position: 'relative', marginBottom: '40px', borderRadius: '15px', boxShadow: '0 5px 30px rgba(255,215,0,0.6)', maxWidth: '1600px', margin: '0 auto 40px' }}>
          <button onClick={() => setShowAnnouncement(false)} style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.3)', border: 'none', color: '#000', fontSize: 'clamp(1.5rem, 3vw, 1.8rem)', cursor: 'pointer', borderRadius: '50%', width: 'clamp(30px, 5vw, 35px)', height: 'clamp(30px, 5vw, 35px)', fontWeight: 'bold' }}>×</button>
          <h3 style={{ margin: '0 0 10px 0', fontSize: 'clamp(1.2rem, 4vw, 1.8rem)', fontWeight: 'bold' }}>{'TRANSLATE'}</h3>
          <p style={{ margin: '5px 0 15px 0', fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}>{'TRANSLATE'}</p>
          <button onClick={() => setShowSubscribeModal(true)} style={{ padding: 'clamp(12px, 3vw, 15px) clamp(20px, 5vw, 30px)', background: '#000', color: '#FFD700', border: '2px solid #FFD700', borderRadius: '10px', fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', fontWeight: 'bold', cursor: 'pointer' }}>{'TRANSLATE'}</button>
        </div>
      )}

      {/* SUBSCRIBE MODAL */}
      {showSubscribeModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.95)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ background: '#000', border: '3px solid #FFD700', borderRadius: '20px', padding: 'clamp(20px, 5vw, 40px)', maxWidth: '500px', width: '100%' }}>
            <h2 style={{ color: '#FFD700', marginBottom: '20px', textAlign: 'center', fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>{'TRANSLATE'}</h2>
            <input type="text" placeholder={'TRANSLATE'} value={userInfo.name} onChange={(e) => setUserInfo({...userInfo, name: e.target.value})} style={{ width: '100%', padding: '15px', marginBottom: '15px', background: 'rgba(255,255,255,0.1)', border: '2px solid #FFD700', borderRadius: '10px', color: '#FFF', fontSize: '1rem', boxSizing: 'border-box' }} />
            <input type="email" placeholder={'TRANSLATE'} value={userInfo.email} onChange={(e) => setUserInfo({...userInfo, email: e.target.value})} style={{ width: '100%', padding: '15px', marginBottom: '20px', background: 'rgba(255,255,255,0.1)', border: '2px solid #FFD700', borderRadius: '10px', color: '#FFF', fontSize: '1rem', boxSizing: 'border-box' }} />
            <button onClick={handleSubscribeSubmit} disabled={!userInfo.name || !userInfo.email} style={{ width: '100%', padding: '15px', background: userInfo.name && userInfo.email ? 'linear-gradient(135deg, #FFD700, #FFA500)' : '#666', color: '#000', border: 'none', borderRadius: '10px', fontSize: '1.2rem', fontWeight: 'bold', cursor: userInfo.name && userInfo.email ? 'pointer' : 'not-allowed', marginBottom: '10px' }}>{'TRANSLATE'}</button>
            <button onClick={() => setShowSubscribeModal(false)} style={{ width: '100%', padding: '10px', background: 'transparent', color: '#FFD700', border: '2px solid #FFD700', borderRadius: '10px', cursor: 'pointer' }}>{'TRANSLATE'}</button>
          </div>
        </div>
      )}

      {/* FEATURED PRODUCTS */}
      <div style={{ maxWidth: '1600px', margin: '0 auto 60px', padding: 'clamp(25px, 5vw, 40px)', background: '#000', borderRadius: '20px', border: '3px solid', borderImage: 'linear-gradient(45deg,violet,indigo,blue,green,yellow,orange,red) 1' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', textAlign: 'center', color: '#FFD700', marginBottom: 'clamp(20px, 5vw, 30px)' }}>{'TRANSLATE'}</h2>
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
          <p style={{ color: '#000', fontSize: 'clamp(1rem, 3vw, 1.3rem)', fontWeight: 'bold', margin: 0 }}>{'TRANSLATE'}</p>
        </Link>
      </div>

      {/* HERO SECTION */}
      <div style={{ position: 'relative', padding: 'clamp(40px, 10vw, 80px) 20px', marginBottom: '60px', borderRadius: '20px', overflow: 'hidden', maxWidth: '1600px', margin: '0 auto 60px', background: '#000' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url(/images/SpectrumSeaMossfullRaw.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.25, zIndex: 1 }}></div>
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(1.8rem, 6vw, 4rem)', background: 'linear-gradient(135deg, #FFD700, #00CED1, #FF69B4, #9400D3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '20px', fontWeight: 'bold', lineHeight: '1.2' }}>{'TRANSLATE'}</h1>
          <h2 style={{ fontSize: 'clamp(1.2rem, 4vw, 2.2rem)', background: 'linear-gradient(135deg, #FFD700, #00CED1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 'bold', lineHeight: '1.3' }}>{'TRANSLATE'}</h2>
        </div>
      </div>

      {/* CHAPTER 1: FOUNDATION - ALL 4 SEA MOSS COLORS */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 80px', padding: '0 20px' }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(0,206,209,0.1), rgba(0,0,0,0.3))', border: '3px solid #00CED1', borderRadius: '20px', padding: 'clamp(30px, 6vw, 50px)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: 0, top: 0, width: '40%', height: '100%', backgroundImage: 'url(/images/SeaMossBanner.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15, zIndex: 0 }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>🌊</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#00CED1', margin: 0 }}>{'TRANSLATE'}</h2>
            </div>
            
            <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', lineHeight: '1.8', color: '#DDD6B8', marginBottom: '20px' }}>
              {'TRANSLATE'}
            </p>
            
            <div style={{ background: 'rgba(255,215,0,0.1)', padding: 'clamp(20px, 4vw, 30px)', borderRadius: '15px', marginBottom: '25px', border: '2px solid #FFD700' }}>
              <h3 style={{ color: '#FFD700', fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)', marginBottom: '15px' }}>{'TRANSLATE'}</h3>
              <p style={{ color: '#DDD6B8', fontSize: 'clamp(1rem, 2.8vw, 1.2rem)', lineHeight: '1.8', marginBottom: '15px' }}>
                {'TRANSLATE'}
              </p>
              <p style={{ color: '#00CED1', fontSize: 'clamp(0.95rem, 2.6vw, 1.1rem)', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '10px' }}>
                {'TRANSLATE'}
              </p>
              <p style={{ color: '#888', fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', lineHeight: '1.6', fontStyle: 'italic' }}>
                {'TRANSLATE'}
              </p>
            </div>

            <p style={{ fontSize: 'clamp(1rem, 2.8vw, 1.2rem)', lineHeight: '1.7', color: '#FFD700', fontStyle: 'italic', marginBottom: '25px' }}>
              {'TRANSLATE'}
            </p>
            
            {/* ALL 4 SEA MOSS COLOR CARDS - 6 STRIPE LINKS EACH */}
            {seaMossColors.map((moss, idx) => (
              <div key={idx} style={{ background: 'rgba(0,0,0,0.8)', border: `3px solid ${moss.color}`, borderRadius: '20px', overflow: 'hidden', boxShadow: `0 10px 40px ${moss.color}50`, marginBottom: '25px' }}>
                <div style={{ height: '220px', display: 'flex' }}>
                  <div style={{ flex: 1, backgroundImage: `url(${moss.rawImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                  <div style={{ flex: 1, backgroundImage: `url(${moss.gelImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                </div>
                <div style={{ padding: 'clamp(20px, 4vw, 30px)' }}>
                  <h3 style={{ color: moss.color, fontSize: 'clamp(1.4rem, 3.2vw, 1.7rem)', marginBottom: '8px', fontWeight: 'bold' }}>{moss.name}</h3>
                  <p style={{ color: '#888', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', fontStyle: 'italic', marginBottom: '15px' }}>{moss.botanical}</p>
                  <p style={{ color: '#DDD6B8', fontSize: 'clamp(0.9rem, 2.2vw, 1rem)', lineHeight: '1.6', marginBottom: '15px' }}>{moss.benefit}</p>
                  
                  <div style={{ background: 'rgba(0,206,209,0.1)', padding: 'clamp(15px, 3vw, 20px)', borderRadius: '10px', marginBottom: '20px', border: '2px solid #00CED1' }}>
                    <p style={{ color: '#00CED1', fontSize: 'clamp(0.9rem, 2.2vw, 1rem)', lineHeight: '1.7', marginBottom: '10px', fontWeight: 'bold' }}>
                      {'TRANSLATE'}
                    </p>
                    <p style={{ color: '#DDD6B8', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', lineHeight: '1.6', marginBottom: '10px' }}>
                      {'TRANSLATE'}
                    </p>
                    <p style={{ color: '#888', fontSize: 'clamp(0.75rem, 1.8vw, 0.85rem)', lineHeight: '1.5', fontStyle: 'italic' }}>
                      {'TRANSLATE'}
                    </p>
                  </div>
                  
                  {/* 6 STRIPE LINKS - 4 RAW (LEFT) + 2 GEL (RIGHT) SYMMETRICALLY */}
                  <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '15px', marginBottom: '20px' }}>
                    {/* LEFT COLUMN: RAW (4 LINKS) */}
                    <div>
                      <h4 style={{ color: '#FFD700', fontSize: 'clamp(1rem, 2.4vw, 1.2rem)', marginBottom: '10px', fontWeight: 'bold' }}>{'TRANSLATE'}:</h4>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                        {moss.raw.map((product, i) => product && (
                          <button key={i} onClick={() => handleBuyNow(product.url)} style={{ padding: '10px 8px', background: `${moss.color}20`, border: `2px solid ${moss.color}`, borderRadius: '8px', color: moss.color, fontSize: 'clamp(0.75rem, 1.8vw, 0.85rem)', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s', textAlign: 'center' }}>
                            <div>{product.name.match(/\d+oz/)?.[0]}</div>
                            <div style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', marginTop: '4px' }}>${product.price}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* RIGHT COLUMN: GEL (2 LINKS) */}
                    <div>
                      <h4 style={{ color: '#FFD700', fontSize: 'clamp(1rem, 2.4vw, 1.2rem)', marginBottom: '10px', fontWeight: 'bold' }}>{'TRANSLATE'}:</h4>
                      <div style={{ display: 'grid', gap: '8px' }}>
                        {moss.gel.map((product, i) => product && (
                          <button key={i} onClick={() => handleBuyNow(product.url)} style={{ padding: '10px 8px', background: `${moss.color}20`, border: `2px solid ${moss.color}`, borderRadius: '8px', color: moss.color, fontSize: 'clamp(0.75rem, 1.8vw, 0.85rem)', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s', textAlign: 'center' }}>
                            <div>{product.name.match(/\d+oz/)?.[0]}</div>
                            <div style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', marginTop: '4px' }}>${product.price}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link to="/MAVJSeaMoss" onClick={() => window.scrollTo(0, 0)} style={{ display: 'block', padding: '14px', background: 'transparent', border: `2px solid ${moss.color}`, borderRadius: '12px', color: moss.color, textAlign: 'center', textDecoration: 'none', fontSize: 'clamp(1rem, 2.4vw, 1.1rem)', fontWeight: 'bold', transition: 'all 0.3s' }}>
                    {'TRANSLATE'}
                  </Link>
                </div>
              </div>
            ))}

            <div style={{ background: 'rgba(255,107,0,0.1)', padding: 'clamp(20px, 4vw, 30px)', borderRadius: '15px', border: '2px solid #FF6B00', marginTop: '25px' }}>
              <h3 style={{ color: '#FF6B00', fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)', marginBottom: '15px' }}>{'TRANSLATE'}</h3>
              <p style={{ color: '#DDD6B8', fontSize: 'clamp(1rem, 2.8vw, 1.2rem)', lineHeight: '1.8', marginBottom: '10px' }}>
                {'TRANSLATE'}
              </p>
              <p style={{ color: '#888', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', lineHeight: '1.6', fontStyle: 'italic' }}>
                {'TRANSLATE'}
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
              <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#9400D3', margin: 0 }}>{'TRANSLATE'}</h2>
            </div>
            <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', lineHeight: '1.8', color: '#DDD6B8', marginBottom: '20px' }}>
              {'TRANSLATE'}
            </p>
            <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', lineHeight: '1.8', color: '#FFD700', marginBottom: '20px', fontWeight: 'bold' }}>
              {'TRANSLATE'}
            </p>
            
            <div style={{ background: 'rgba(148,0,211,0.2)', padding: 'clamp(20px, 4vw, 30px)', borderRadius: '15px', marginBottom: '25px' }}>
              <h3 style={{ color: '#FFD700', fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)', marginBottom: '15px' }}>{'TRANSLATE'}</h3>
              <p style={{ color: '#DDD6B8', fontSize: 'clamp(1rem, 2.8vw, 1.2rem)', lineHeight: '1.8', marginBottom: '15px' }}>
                {'TRANSLATE'}
              </p>
              <p style={{ color: '#00CED1', fontSize: 'clamp(1rem, 2.8vw, 1.2rem)', lineHeight: '1.8', marginBottom: '15px' }}>
                {'TRANSLATE'}
              </p>
              <p style={{ color: '#FFD700', fontSize: 'clamp(0.95rem, 2.6vw, 1.1rem)', lineHeight: '1.7', fontStyle: 'italic' }}>
                {'TRANSLATE'}
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
                    {'TRANSLATE'}
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
              <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#32CD32', margin: 0 }}>{'TRANSLATE'}</h2>
            </div>
            <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', lineHeight: '1.8', color: '#DDD6B8', marginBottom: '20px' }}>
              {'TRANSLATE'}
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
              {'TRANSLATE'}
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
              <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#FFD700', margin: 0 }}>{'TRANSLATE'}</h2>
            </div>
            <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', lineHeight: '1.8', color: '#DDD6B8', marginBottom: '20px' }}>
              {'TRANSLATE'}
            </p>
            
            <div style={{ background: 'rgba(255,215,0,0.2)', padding: 'clamp(20px, 4vw, 30px)', borderRadius: '15px', border: '2px solid #FFD700', marginBottom: '25px' }}>
              <h3 style={{ color: '#FFD700', fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)', marginBottom: '15px' }}>{'TRANSLATE'}</h3>
              <p style={{ color: '#DDD6B8', fontSize: 'clamp(1rem, 2.8vw, 1.2rem)', lineHeight: '1.8', marginBottom: '15px' }}>
                {'TRANSLATE'}
              </p>
              <p style={{ color: '#00CED1', fontSize: 'clamp(1rem, 2.8vw, 1.2rem)', lineHeight: '1.8' }}>
                {'TRANSLATE'}
              </p>
            </div>
            
            <Link to="/ProductCatalog#seeds" onClick={() => window.scrollTo(0, 0)} style={{ display: 'inline-block', padding: 'clamp(12px, 3vw, 18px) clamp(25px, 5vw, 40px)', background: 'linear-gradient(135deg, #FFD700, #FFA500)', color: '#000', textDecoration: 'none', borderRadius: '50px', fontSize: 'clamp(1rem, 2.8vw, 1.3rem)', fontWeight: 'bold', boxShadow: '0 5px 20px rgba(255,215,0,0.5)' }}>
              {'TRANSLATE'}
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
              <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#FF6B00', margin: 0 }}>{'TRANSLATE'}</h2>
            </div>
            <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', lineHeight: '1.8', color: '#DDD6B8', marginBottom: '20px' }}>
              {'TRANSLATE'}
            </p>
            
            <div style={{ background: 'rgba(255,107,0,0.2)', padding: 'clamp(20px, 4vw, 30px)', borderRadius: '15px', marginBottom: '25px' }}>
              <h3 style={{ color: '#FFD700', fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)', marginBottom: '15px' }}>{'TRANSLATE'}</h3>
              <p style={{ color: '#DDD6B8', fontSize: 'clamp(1rem, 2.8vw, 1.2rem)', lineHeight: '1.8', marginBottom: '15px' }}>
                {'TRANSLATE'}
              </p>
              <p style={{ color: '#00CED1', fontSize: 'clamp(1rem, 2.8vw, 1.2rem)', lineHeight: '1.8' }}>
                {'TRANSLATE'}
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
                    {'TRANSLATE'}
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
              <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: '#FF69B4', margin: 0 }}>{'TRANSLATE'}</h2>
            </div>
            <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', lineHeight: '1.8', color: '#DDD6B8', marginBottom: '20px' }}>
              {'TRANSLATE'}
            </p>
            <p style={{ fontSize: 'clamp(1rem, 2.8vw, 1.2rem)', lineHeight: '1.7', color: '#00CED1', marginBottom: '25px', fontStyle: 'italic' }}>
              {'TRANSLATE'}
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: 'clamp(15px, 3vw, 20px)', marginBottom: '25px' }}>
              {foodPhotos.map((item, i) => (
                <div key={i} style={{ borderRadius: '15px', overflow: 'hidden', border: '2px solid #FF69B4', boxShadow: '0 5px 20px rgba(255,105,180,0.3)' }}>
                  <img src={item.img} alt={item.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                  <div style={{ padding: '12px', background: '#000', textAlign: 'center' }}>
                    <p style={{ color: '#FF69B4', fontSize: 'clamp(0.9rem, 2.2vw, 1.05rem)', fontWeight: 'bold', margin: 0 }}>{item.name}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Link to="/Recipes" onClick={() => window.scrollTo(0, 0)} style={{ display: 'inline-block', padding: 'clamp(12px, 3vw, 18px) clamp(25px, 5vw, 40px)', background: 'linear-gradient(135deg, #FF69B4, #FFB6C1)', color: '#000', textDecoration: 'none', borderRadius: '50px', fontSize: 'clamp(1rem, 2.8vw, 1.3rem)', fontWeight: 'bold', boxShadow: '0 5px 20px rgba(255,105,180,0.5)' }}>
              {'TRANSLATE'}
            </Link>
          </div>
        </div>
      </div>

      {/* CHAPTER 7: CONVERGENCE + J2E (TRIPLE PHOTO + ALL 5 ACCOMMODATIONS) */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 80px', padding: '0 20px' }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(0,206,209,0.1), rgba(148,0,211,0.1))', border: '3px solid', borderImage: 'linear-gradient(45deg,violet,indigo,blue,green,yellow,orange,red) 1', borderRadius: '20px', padding: 'clamp(30px, 6vw, 50px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>🏝️</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', background: 'linear-gradient(135deg, #00CED1, #9400D3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', margin: 0 }}>{'TRANSLATE'}</h2>
          </div>
          <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', lineHeight: '1.8', color: '#DDD6B8', marginBottom: '20px' }}>
            {'TRANSLATE'}
          </p>
          
          {/* J2E CARD WITH TRIPLE PHOTO + ALL 5 ACCOMMODATIONS */}
          <div style={{ background: 'linear-gradient(135deg, rgba(0,206,209,0.2), rgba(148,0,211,0.2))', border: '3px solid', borderImage: 'linear-gradient(45deg,violet,indigo,blue,green,yellow,orange,red) 1', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 50px rgba(0,206,209,0.5)', marginBottom: '25px' }}>
            <div style={{ height: '280px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
              <div style={{ backgroundImage: 'url(/images/J2EPod.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div style={{ backgroundImage: 'url(/images/SeaPods.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div style={{ backgroundImage: 'url(/images/BeachDinner.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            </div>
            <div style={{ padding: 'clamp(30px, 5vw, 40px)' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', background: 'linear-gradient(135deg, #00CED1, #9400D3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '15px', fontWeight: 'bold' }}>{'TRANSLATE'}</h2>
              <p style={{ fontSize: 'clamp(1.1rem, 2.8vw, 1.3rem)', color: '#DDD6B8', marginBottom: '15px', lineHeight: '1.7' }}>{'TRANSLATE'}</p>
              <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: '#FFD700', marginBottom: '25px', lineHeight: '1.6', fontWeight: 'bold' }}>
                {'TRANSLATE'}
              </p>
              
              <h3 style={{ color: '#FFD700', fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', marginBottom: '20px' }}>{'TRANSLATE'}</h3>
              <div style={{ display: 'grid', gap: '15px', marginBottom: '25px' }}>
                {j2eAccommodations.map((acc, i) => acc && (
                  <button key={i} onClick={() => handleBuyNow(acc.url)} style={{ padding: '18px 25px', background: 'rgba(0,206,209,0.2)', border: '2px solid #00CED1', borderRadius: '12px', color: '#00CED1', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', fontWeight: 'bold', cursor: 'pointer', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'all 0.3s' }}>
                    <span>{acc.name.replace('J2E ', '')}</span>
                    <span style={{ color: '#FFD700' }}>${acc.price}</span>
                  </button>
                ))}
              </div>

              <Link to="/J2EAccommodations" onClick={() => window.scrollTo(0, 0)} style={{ display: 'block', padding: '15px', background: 'linear-gradient(135deg, #00CED1, #9400D3)', color: '#FFF', textAlign: 'center', textDecoration: 'none', borderRadius: '12px', fontSize: 'clamp(1.1rem, 2.8vw, 1.3rem)', fontWeight: 'bold' }}>
                {'TRANSLATE'}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CHOOSE YOUR FREQUENCY */}
      <div style={{ maxWidth: '1600px', margin: '0 auto 80px', padding: '0 20px' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', textAlign: 'center', background: 'linear-gradient(135deg, #FFD700, #FFA500)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 'clamp(30px, 8vw, 50px)', lineHeight: '1.2' }}>{'TRANSLATE'}</h2>
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
                  <span style={{ color: cat.color, fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', fontWeight: 'bold' }}>{'TRANSLATE'}</span>
                  <span style={{ color: cat.color, fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' }}>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CONSULTATION CTA */}
      <div style={{ maxWidth: '1000px', margin: '60px auto', padding: 'clamp(30px, 6vw, 40px)', textAlign: 'center', background: 'linear-gradient(135deg, rgba(148,0,211,0.1), rgba(255,215,0,0.1))', borderRadius: '20px', border: '3px solid', borderImage: 'linear-gradient(45deg,violet,indigo,blue,green,yellow,orange,red) 1' }}>
        <h2 style={{ color: '#9400D3', fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '20px', lineHeight: '1.2' }}>{'TRANSLATE'}</h2>
        <p style={{ fontSize: 'clamp(1rem, 3vw, 1.3rem)', marginBottom: '30px', lineHeight: '1.6', color: '#DDD6B8' }}>{'TRANSLATE'}</p>
        <Link to="/ContactUs" onClick={() => window.scrollTo(0, 0)} style={{ display: 'inline-block', padding: 'clamp(15px, 4vw, 18px) clamp(30px, 7vw, 45px)', background: 'linear-gradient(135deg, #9400D3, #FFD700)', color: '#000', textDecoration: 'none', borderRadius: '50px', fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', fontWeight: 'bold', boxShadow: '0 8px 25px rgba(148,0,211,0.5)' }}>{'TRANSLATE'}</Link>
      </div>
    </Layout>
  );
};

export default MAVJStore;