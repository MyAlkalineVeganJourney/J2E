import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/PageLayout';
import products from '../data/products';
import { CartContext } from '../context/CartContext';

const MAVJStore = () => {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: '', email: '', youtube: false, tiktok: false });
  const { cartItems, addToCart } = useContext(CartContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    {
      id: 'seamoss',
      name: 'Sea Moss',
      icon: '🌊',
      tagline: 'Foundation of Life',
      story: 'Begin with substrate-harvested sea moss. Rich in essential minerals - contains approximately 95% of the minerals your body needs daily (scientifically researched from Caribbean marine biology studies). Daily use creates homeostasis - the balanced state your body needs before deeper transformation.',
      description: 'Hand-harvested from St. Lucian volcanic substrate',
      link: '/MAVJSeaMoss',
      image: '/images/SeaMossBanner.jpg',
      color: '#00CED1',
      stage: 'FOUNDATION'
    },
    {
      id: 'herbs',
      name: 'Sacred Herbs',
      icon: '🌿',
      tagline: 'Nature\'s Farm-acy',
      story: 'Wild-crafted volcanic herbs support your body as it adapts to alkaline living. These ancient plants prepare your cells for the reset ahead.',
      description: 'Wild-crafted volcanic medicinal herbs',
      link: '/Herbs',
      image: '/images/Panadol.jpg',
      color: '#32CD32',
      stage: 'PREPARATION'
    },
    {
      id: 'seeds',
      name: 'Life Force Seeds',
      icon: '🌱',
      tagline: 'Plant Your Future',
      story: 'Heirloom seeds carry ancestral wisdom. Grow your own alkaline foods - true sovereignty begins in the soil.',
      description: 'Organic non-GMO heirloom varieties',
      link: '/Seeds',
      image: '/images/SeedsBanner.jpg',
      color: '#FFD700',
      stage: 'PREPARATION'
    },
    {
      id: 'oils',
      name: 'Sacred Oils',
      icon: '🔥',
      tagline: 'Solar-Lunar Alchemy',
      story: 'Castor oil and infusions charged by St. Lucian sun and moon cycles. External application supports internal transformation.',
      description: 'Frequency-charged healing oils',
      link: '/Oils',
      image: '/images/CastorOilBanner.jpg',
      color: '#FF6B00',
      stage: 'PREPARATION'
    },
    {
      id: 'kits',
      name: 'Transformation Kits',
      icon: '💎',
      tagline: '777 Protocol',
      story: 'Progressive cleansing: 7 days smoothies, 7 days teas, 7 days water. Your body practices the reset in safe increments.',
      description: 'Complete detox protocols',
      link: '/MAVJDetox',
      image: '/images/Detox.jpg',
      color: '#9400D3',
      stage: 'DETOXIFICATION'
    },
    {
      id: 'recipes',
      name: 'Alkaline Recipes',
      icon: '🍽️',
      tagline: 'Maintenance Mastery',
      story: 'After the reset, 80% of maintenance is food. Learn to prepare alkaline meals that sustain your elevated frequency.',
      description: 'Video recipes using volcanic ingredients',
      link: '/Recipes',
      image: '/images/RecipesBanner.png',
      color: '#FF69B4',
      stage: 'MAINTENANCE'
    },
    {
      id: 'snacks',
      name: 'Celebration Treats',
      icon: '✨',
      tagline: 'Alkaline Indulgence',
      story: 'Walnut chews, cookies, sesame stars - alkaline treats for celebration. You\'ve done the work, enjoy the rewards.',
      description: 'Alkaline cookies, brownies & candy',
      link: '/AVSnacks',
      image: '/images/WalnutCookies.png',
      color: '#FFD700',
      stage: 'CELEBRATION'
    },
    {
      id: 'beverages',
      name: 'Living Beverages',
      icon: '🥤',
      tagline: 'Fermented Energy',
      story: 'Probiotic ginger bug beverages. Living cultures support your microbiome after reset.',
      description: 'Sea moss bombs & gut cleanse',
      link: '/AVDrinks',
      image: '/images/TheBomb.jpg',
      color: '#4169E1',
      stage: 'CELEBRATION'
    },
    {
      id: 'merchandise',
      name: 'MAVJ Gear',
      icon: '👕',
      tagline: 'Wear Your Frequency',
      story: 'Hats, mugs, apparel infused with MAVJ mission. Represent the alkaline lifestyle.',
      description: 'Apparel & tools via Printify',
      link: '/Merchandise',
      image: '/images/MAVJLogo.jpg',
      color: '#FFD700',
      stage: 'COMMUNITY'
    },
    {
      id: 'j2e',
      name: 'Journey 2 Enlightenment',
      icon: '🏝️',
      tagline: 'Converge & Amplify',
      story: 'The ultimate goal: converge with others who\'ve completed the reset. Match frequencies. Amplify resonance. Experience St. Lucia together. Nov 10-14, 2026.',
      description: '5 days 4 nights • $3,000-$3,800/person',
      link: '/J2EAccommodations',
      image: '/images/J2EPod.jpeg',
      color: '#00CED1',
      stage: 'ULTIMATE'
    }
  ];

  const featuredProducts = [
    products.find(p => p.name.includes('21 Day Reset')),
    products.find(p => p.name.includes('Castor Oil')),
    products.find(p => p.name.includes('Walnut Chews')),
    products.find(p => p.name.includes('Panadol')),
    products.find(p => p.name.includes('Sea Moss Bomb'))
  ].filter(Boolean);

  const handleSubscribeSubmit = () => {
    console.log('New family member:', userInfo);
    localStorage.setItem('mavj_family_member', JSON.stringify(userInfo));
    setShowSubscribeModal(false);
    setShowAnnouncement(false);
  };

  const handleBuyNow = (product) => {
    if (product.url) {
      window.open(product.url, '_blank');
    } else {
      alert('Stripe link coming soon for this product!');
    }
  };

  const handleAddToCart = (product) => {
    const productWithId = { ...product, id: product.name };
    addToCart(productWithId);
    alert(`✅ ${product.name} added to cart!`);
  };

  return (
    <Layout pageTitle="🛒 MAVJ STORE">
      
      {/* STORE BREADCRUMB NAVIGATION WITH LARGE CART BUTTON */}
      <div style={{
        maxWidth: '1600px',
        margin: '0 auto 20px',
        padding: '0 20px',
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        fontSize: '0.9rem',
        color: '#FFD700'
      }}>
        <Link to="/" onClick={() => window.scrollTo(0, 0)} style={{ color: '#FFD700', textDecoration: 'none' }}>
          🏠 Home
        </Link>
        <span>→</span>
        <span style={{ color: '#FFF', fontWeight: 'bold', fontSize: '1.2rem' }}>Store Home</span>
        
        <Link to="/ShoppingCart" onClick={() => window.scrollTo(0, 0)} style={{
          marginLeft: 'auto',
          padding: '15px 30px',
          background: 'linear-gradient(135deg, #00CED1, #0080FF)',
          color: '#000',
          textDecoration: 'none',
          borderRadius: '50px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontSize: '1.3rem',
          fontWeight: 'bold',
          border: '3px solid #FFD700',
          boxShadow: '0 5px 25px rgba(0,206,209,0.6)',
          transition: 'all 0.3s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 10px 35px rgba(0,206,209,0.9)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 5px 25px rgba(0,206,209,0.6)';
        }}>
          <span style={{ fontSize: '2rem' }}>🛒</span>
          <span>Cart ({cartItems.length})</span>
        </Link>
      </div>

      {/* ANNOUNCEMENT BANNER WITH SUBSCRIPTION */}
      {showAnnouncement && (
        <div style={{
          background: 'linear-gradient(90deg, #FFD700, #FFA500, #FFD700)',
          padding: '30px',
          textAlign: 'center',
          color: '#000',
          position: 'relative',
          marginBottom: '40px',
          borderRadius: '15px',
          boxShadow: '0 5px 30px rgba(255,215,0,0.6)',
          maxWidth: '1600px',
          margin: '0 auto 40px'
        }}>
          <button 
            onClick={() => setShowAnnouncement(false)}
            style={{
              position: 'absolute',
              top: '10px',
              right: '20px',
              background: 'rgba(0,0,0,0.3)',
              border: 'none',
              color: '#000',
              fontSize: '1.8rem',
              cursor: 'pointer',
              borderRadius: '50%',
              width: '35px',
              height: '35px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold'
            }}
          >
            ×
          </button>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '1.8rem', fontWeight: 'bold' }}>
            🎉 VOLCANIC MARCH SPECIAL: 50% OFF ALL SEA MOSS! 🎉
          </h3>
          <p style={{ margin: '5px 0 15px 0', fontSize: '1.2rem' }}>
            Join the MAVJ Family to unlock your discount!
          </p>
          <button
            onClick={() => setShowSubscribeModal(true)}
            style={{
              padding: '15px 30px',
              background: '#000',
              color: '#FFD700',
              border: '2px solid #FFD700',
              borderRadius: '10px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          >
            Subscribe & Get Code: VOLCANIC20
          </button>
          <p style={{ margin: '10px 0 0 0', fontSize: '0.9rem', fontStyle: 'italic' }}>
            ⚡ Subscribe to YouTube & TikTok • Join the Family • Free shipping over $200
          </p>
        </div>
      )}

      {/* SUBSCRIPTION MODAL */}
      {showSubscribeModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.9)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            background: '#000',
            border: '3px solid #FFD700',
            borderRadius: '20px',
            padding: '40px',
            maxWidth: '500px',
            width: '100%'
          }}>
            <h2 style={{ color: '#FFD700', marginBottom: '20px', textAlign: 'center' }}>
              🌟 Join the MAVJ Family!
            </h2>
            <p style={{ color: '#DDD6B8', marginBottom: '20px', textAlign: 'center' }}>
              Subscribe to our channels and become part of our growing alkaline community!
            </p>
            
            <input
              type="text"
              placeholder="Your Name"
              value={userInfo.name}
              onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
              style={{
                width: '100%',
                padding: '15px',
                marginBottom: '15px',
                background: 'rgba(255,255,255,0.1)',
                border: '2px solid #FFD700',
                borderRadius: '10px',
                color: '#FFF',
                fontSize: '1rem'
              }}
            />
            
            <input
              type="email"
              placeholder="Your Email"
              value={userInfo.email}
              onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
              style={{
                width: '100%',
                padding: '15px',
                marginBottom: '20px',
                background: 'rgba(255,255,255,0.1)',
                border: '2px solid #FFD700',
                borderRadius: '10px',
                color: '#FFF',
                fontSize: '1rem'
              }}
            />
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={userInfo.youtube}
                  onChange={(e) => setUserInfo({...userInfo, youtube: e.target.checked})}
                />
                <span style={{ color: '#DDD6B8' }}>I subscribed to MAVJ on YouTube</span>
              </label>
              
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={userInfo.tiktok}
                  onChange={(e) => setUserInfo({...userInfo, tiktok: e.target.checked})}
                />
                <span style={{ color: '#DDD6B8' }}>I follow MAVJ on TikTok</span>
              </label>
            </div>
            
            <button
              onClick={handleSubscribeSubmit}
              disabled={!userInfo.name || !userInfo.email}
              style={{
                width: '100%',
                padding: '15px',
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                color: '#000',
                border: 'none',
                borderRadius: '10px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                cursor: userInfo.name && userInfo.email ? 'pointer' : 'not-allowed',
                opacity: userInfo.name && userInfo.email ? 1 : 0.5,
                marginBottom: '10px'
              }}
            >
              Join the Family & Get Discount Code!
            </button>
            
            <button
              onClick={() => setShowSubscribeModal(false)}
              style={{
                width: '100%',
                padding: '10px',
                background: 'transparent',
                color: '#FFD700',
                border: '2px solid #FFD700',
                borderRadius: '10px',
                cursor: 'pointer'
              }}
            >
              Maybe Later
            </button>
          </div>
        </div>
      )}

      {/* VIDEO INTRO */}
      <div style={{
        maxWidth: '1600px',
        margin: '0 auto 40px',
        padding: '0 20px'
      }}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          style={{
            width: '100%',
            maxHeight: '300px',
            borderRadius: '20px',
            objectFit: 'cover',
            border: '3px solid #FFD700',
            boxShadow: '0 10px 40px rgba(255,215,0,0.4)'
          }}
        >
          <source src="/images/AreYouReadytoLearnAbout?.mp4" type="video/mp4" />
        </video>
      </div>

      {/* FEATURED PRODUCTS - 5 NON-SEA MOSS ITEMS */}
      <div style={{
        maxWidth: '1600px',
        margin: '0 auto 60px',
        padding: '0 20px'
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          textAlign: 'center',
          color: '#FFD700',
          marginBottom: '30px'
        }}>
          ⚡ Featured Products
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '25px'
        }}>
          {featuredProducts.map((product, i) => product && (
            <div key={i} style={{
              background: 'rgba(0,0,0,0.7)',
              borderRadius: '15px',
              border: '3px solid #FFD700',
              overflow: 'hidden',
              boxShadow: '0 5px 20px rgba(255,215,0,0.4)',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(255,215,0,0.7)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(255,215,0,0.4)';
            }}
            >
              <div style={{
                height: '200px',
                background: `url(${product.image}) center/cover`,
                backgroundPosition: 'center center'
              }}></div>
              
              <div style={{ padding: '20px' }}>
                <h3 style={{
                  color: '#FFD700',
                  fontSize: '1.05rem',
                  marginBottom: '10px',
                  minHeight: '55px',
                  lineHeight: '1.3'
                }}>
                  {product.name}
                </h3>
                
                <p style={{
                  color: '#DDD6B8',
                  fontSize: '0.9rem',
                  marginBottom: '15px',
                  minHeight: '40px',
                  lineHeight: '1.4'
                }}>
                  {product.description}
                </p>

                <div style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: '#FFD700',
                  marginBottom: '15px'
                }}>
                  ${product.price.toFixed(2)}
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => handleBuyNow(product)}
                    style={{
                      flex: 1,
                      padding: '15px',
                      background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                      border: 'none',
                      borderRadius: '10px',
                      color: '#000',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  >
                    BUY NOW
                  </button>
                  
                  <button
                    onClick={() => handleAddToCart(product)}
                    style={{
                      padding: '15px',
                      background: 'rgba(0,206,209,0.2)',
                      border: '2px solid #00CED1',
                      borderRadius: '10px',
                      color: '#00CED1',
                      fontSize: '1.3rem',
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
          ))}
        </div>
      </div>

      {/* HERO SECTION - MATCHING FONT/COLOR FOR BOTH LINES */}
      <div style={{
        position: 'relative',
        padding: '80px 20px',
        marginBottom: '40px',
        borderRadius: '20px',
        overflow: 'hidden',
        maxWidth: '1600px',
        margin: '0 auto 40px',
        background: '#000'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/images/SpectrumSeaMossfullRaw.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
          zIndex: 1
        }}></div>
        
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 6vw, 4.5rem)',
            background: 'linear-gradient(135deg, #FFD700, #00CED1, #FF69B4, #9400D3)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '25px',
            fontWeight: 'bold'
          }}>
            This is More Than a Store
          </h1>
          
          <h2 style={{
            fontSize: 'clamp(2rem, 6vw, 4.5rem)',
            background: 'linear-gradient(135deg, #FFD700, #00CED1, #FF69B4, #9400D3)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '25px',
            fontWeight: 'bold'
          }}>
            Your Roadmap from Cellular Confusion to Quantum Coherence
          </h2>
          
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            color: '#DDD6B8',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.8'
          }}>
            Every product is a milestone. Every protocol is preparation. The ultimate destination? 
            A 21-day distilled water reset that reverses disease, removes pain, and restores your 
            body's innate healing intelligence.
          </p>
        </div>
      </div>

      {/* SEA MOSS PHOTO GALLERY */}
      <div style={{
        maxWidth: '1600px',
        margin: '0 auto 60px',
        padding: '0 20px'
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          textAlign: 'center',
          color: '#FFD700',
          marginBottom: '30px'
        }}>
          🌊 Our Substrate-Harvested Sea Moss
        </h2>
        <p style={{
          textAlign: 'center',
          fontSize: '1.2rem',
          color: '#DDD6B8',
          maxWidth: '900px',
          margin: '0 auto 30px',
          lineHeight: '1.8'
        }}>
          Hand-harvested from St. Lucian volcanic reefs. Contains approximately 95% of the minerals 
          your body needs daily. Prepared with volcanic spring water from the Pitons.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}>
          {[
            { img: '/images/SpectrumSeaMossfullRaw.jpg', name: 'Spectrum Sea Moss (Raw)' },
            { img: '/images/SeaMossGelSpoon.jpg', name: 'Sea Moss Gel' },
            { img: '/images/RawSpectrumMoss.png', name: 'Raw Spectrum Moss' },
            { img: '/images/GoldSMG.png', name: 'Gold Sea Moss Gel' },
            { img: '/images/VioletRawMossHarvest.jpg', name: 'Violet Raw Sea Moss' },
            { img: '/images/RawMossViolet.jpg', name: 'Violet Raw Moss' }
          ].map((item, i) => (
            <Link to="/MAVJSeaMoss" onClick={() => window.scrollTo(0, 0)} key={i} style={{ textDecoration: 'none' }}>
              <div style={{
                borderRadius: '15px',
                overflow: 'hidden',
                border: '2px solid #00CED1',
                boxShadow: '0 5px 20px rgba(0,206,209,0.3)',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <img src={item.img} alt={item.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '15px', background: '#000', textAlign: 'center' }}>
                  <p style={{ color: '#00CED1', fontSize: '1.1rem', fontWeight: 'bold', margin: 0 }}>{item.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <Link to="/MAVJSeaMoss" onClick={() => window.scrollTo(0, 0)} style={{
            display: 'inline-block',
            padding: '15px 40px',
            background: 'linear-gradient(135deg, #00CED1, #0080FF)',
            color: '#000',
            textDecoration: 'none',
            borderRadius: '50px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            boxShadow: '0 5px 20px rgba(0,206,209,0.5)'
          }}>
            Shop All Sea Moss Products →
          </Link>
        </div>
      </div>

      {/* SCIENTIFIC CITATIONS */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto 60px',
        padding: '40px',
        background: 'rgba(148,0,211,0.1)',
        borderRadius: '20px',
        border: '3px solid rgba(148,0,211,0.3)'
      }}>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
          textAlign: 'center',
          color: '#9400D3',
          marginBottom: '30px'
        }}>
          📚 Scientifically Researched Information
        </h2>
        <p style={{
          fontSize: '1.1rem',
          lineHeight: '2',
          color: '#DDD6B8',
          textAlign: 'center',
          marginBottom: '30px'
        }}>
          All claims about mineral content and health benefits are based on peer-reviewed scientific research 
          from Caribbean marine biology studies and published academic literature.
        </p>
        <div style={{ fontSize: '1rem', color: '#DDD6B8', lineHeight: '1.8' }}>
          <p><strong style={{ color: '#FFD700' }}>Key Research Sources:</strong></p>
          <ul style={{ marginTop: '15px' }}>
            <li>Holdt & Kraan (2011) - <em>Journal of Applied Phycology</em>: Mineral composition of Gracilaria species</li>
            <li>Teas et al. (2004) - <em>Journal of Medicinal Food</em>: Iodine content of Caribbean seaweeds</li>
            <li>Ramnani et al. (2012) - <em>Anaerobe</em>: Prebiotic potential of sea moss polysaccharides</li>
            <li>Qin et al. (2020) - <em>Marine Drugs</em>: Sulfated polysaccharides bioactivity studies</li>
          </ul>
          <p style={{ marginTop: '20px', fontStyle: 'italic', color: '#FFD700' }}>
            Visit our <Link to="/MAVJSeaMoss" onClick={() => window.scrollTo(0, 0)} style={{ color: '#00CED1', textDecoration: 'underline' }}>Sea Moss page</Link> for complete research citations and detailed biochemical information.
          </p>
        </div>
      </div>

      {/* THE ULTIMATE GOAL - 777 KIT & TRANSFORMATION KITS */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto 60px',
        padding: '40px',
        background: 'linear-gradient(135deg, rgba(148,0,211,0.15), rgba(0,206,209,0.15))',
        borderRadius: '20px',
        border: '3px solid',
        borderImage: 'linear-gradient(45deg,violet,indigo,blue,green,yellow,orange,red) 1'
      }}>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #9400D3, #00CED1)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '30px'
        }}>
          💧 The Ultimate Goal: 21-Day Cellular Reset
        </h2>
        
        <p style={{ marginBottom: '25px', fontSize: '1.25rem', color: '#FFD700', textAlign: 'center' }}>
          Everything we offer guides you toward ONE transformational milestone: 
          the 21-day distilled water reset.
        </p>

        <div style={{
          background: 'rgba(148,0,211,0.1)',
          padding: '30px',
          borderRadius: '15px',
          marginBottom: '30px',
          border: '2px solid #9400D3'
        }}>
          <h3 style={{ color: '#9400D3', fontSize: '2rem', marginBottom: '20px', textAlign: 'center' }}>
            777 Detox Protocol Kit
          </h3>
          <p style={{ color: '#DDD6B8', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
            <strong style={{ color: '#FFD700' }}>7 Days Fresh-Squeezed Unsweetened Juices</strong> with Sea Moss Gel<br/>
            <strong style={{ color: '#FFD700' }}>7 Days Alkaline Herbal Teas</strong> (35 different herbs included)<br/>
            <strong style={{ color: '#FFD700' }}>7 Days Distilled Water Only</strong> - Complete cellular reset
          </p>
          <p style={{ color: '#00CED1', fontSize: '1.1rem', lineHeight: '1.8' }}>
            This kit includes chelation herbs combined with Sea Moss that naturally remove heavy metals 
            from the body, preparing you for the ultimate 21-day water reset.
          </p>
        </div>

        <h3 style={{ color: '#FFD700', fontSize: '1.8rem', marginBottom: '20px', textAlign: 'center' }}>
          Additional Transformation Kits Available:
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '25px',
          marginTop: '30px'
        }}>
          <div style={{ 
            padding: '25px', 
            background: 'rgba(255,215,0,0.1)', 
            borderRadius: '15px', 
            border: '2px solid rgba(255,215,0,0.3)'
          }}>
            <h4 style={{ color: '#FFD700', marginBottom: '15px', fontSize: '1.3rem' }}>💉 Diabetes Support Kit</h4>
            <p style={{ color: '#DDD6B8' }}>Specialized herbs and protocols to support blood sugar regulation and pancreatic function.</p>
          </div>
          
          <div style={{ 
            padding: '25px', 
            background: 'rgba(0,206,209,0.1)', 
            borderRadius: '15px', 
            border: '2px solid rgba(0,206,209,0.3)'
          }}>
            <h4 style={{ color: '#00CED1', marginBottom: '15px', fontSize: '1.3rem' }}>❤️ High Blood Pressure Kit</h4>
            <p style={{ color: '#DDD6B8' }}>Heart-supportive herbs and minerals to normalize blood pressure naturally.</p>
          </div>
          
          <div style={{ 
            padding: '25px', 
            background: 'rgba(148,0,211,0.1)', 
            borderRadius: '15px', 
            border: '2px solid rgba(148,0,211,0.3)'
          }}>
            <h4 style={{ color: '#9400D3', marginBottom: '15px', fontSize: '1.3rem' }}>🛡️ Autoimmune Support Kit</h4>
            <p style={{ color: '#DDD6B8' }}>Anti-inflammatory herbs and immune-modulating protocols for autoimmune conditions.</p>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/MAVJDetox" onClick={() => window.scrollTo(0, 0)} style={{
            display: 'inline-block',
            padding: '18px 45px',
            background: 'linear-gradient(135deg, #9400D3, #00CED1)',
            color: '#000',
            textDecoration: 'none',
            borderRadius: '50px',
            fontSize: '1.3rem',
            fontWeight: 'bold',
            boxShadow: '0 8px 25px rgba(148,0,211,0.5)'
          }}>
            Explore All Transformation Kits →
          </Link>
        </div>
      </div>

      {/* CHOOSE YOUR FREQUENCY */}
      <div style={{
        maxWidth: '1600px',
        margin: '0 auto',
        padding: '0 20px 60px'
      }}>
        <h2 style={{
          fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #FFD700, #FFA500)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '20px'
        }}>
          🌟 Choose Your Frequency
        </h2>
        <p style={{
          textAlign: 'center',
          fontSize: '1.2rem',
          color: '#DDD6B8',
          maxWidth: '900px',
          margin: '0 auto 20px',
          lineHeight: '1.8'
        }}>
          Follow the journey from foundation to ultimate convergence. Each stage prepares you for the next.
        </p>
        <p style={{
          textAlign: 'center',
          fontSize: '1.1rem',
          marginBottom: '50px'
        }}>
          <a href="#product-cards" style={{
            color: '#00CED1',
            textDecoration: 'underline',
            fontWeight: 'bold'
          }}>
            Click here to view all products with prices →
          </a>
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '30px'
        }}>
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={cat.link}
              onClick={() => window.scrollTo(0, 0)}
              style={{
                background: 'rgba(0,0,0,0.6)',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '3px solid',
                borderColor: cat.color,
                textDecoration: 'none',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative',
                boxShadow: `0 10px 30px ${cat.color}40`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                e.currentTarget.style.boxShadow = `0 20px 50px ${cat.color}80`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = `0 10px 30px ${cat.color}40`;
              }}
            >
              <div style={{
                position: 'absolute',
                top: '15px',
                left: '15px',
                background: cat.color,
                color: '#000',
                padding: '8px 15px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: 'bold',
                zIndex: 2,
                boxShadow: `0 4px 15px ${cat.color}60`
              }}>
                {cat.stage}
              </div>

              <div style={{
                height: '250px',
                background: `url(${cat.image}) center/cover`,
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.95), transparent)',
                  padding: '40px 20px 20px'
                }}>
                  <h3 style={{
                    color: '#FFF',
                    fontSize: '1.8rem',
                    marginBottom: '5px',
                    textShadow: '0 2px 10px rgba(0,0,0,0.8)'
                  }}>
                    {cat.name}
                  </h3>
                  <p style={{
                    color: '#FFD700',
                    fontSize: '1.1rem',
                    fontStyle: 'italic',
                    textShadow: '0 2px 10px rgba(0,0,0,0.8)'
                  }}>
                    {cat.tagline}
                  </p>
                </div>
              </div>

              <div style={{ padding: '25px' }}>
                <p style={{
                  color: '#DDD6B8',
                  fontSize: '1rem',
                  lineHeight: '1.7',
                  marginBottom: '15px',
                  minHeight: '80px'
                }}>
                  {cat.story}
                </p>
                
                <p style={{
                  color: cat.color,
                  fontSize: '0.95rem',
                  marginBottom: '20px',
                  fontStyle: 'italic'
                }}>
                  {cat.description}
                </p>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '15px 20px',
                  background: `linear-gradient(90deg, ${cat.color}20, transparent)`,
                  borderRadius: '10px',
                  border: `2px solid ${cat.color}40`
                }}>
                  <span style={{
                    color: cat.color,
                    fontSize: '1.2rem',
                    fontWeight: 'bold'
                  }}>
                    Explore {cat.icon}
                  </span>
                  <span style={{
                    color: cat.color,
                    fontSize: '1.5rem'
                  }}>
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* PRODUCT CARDS SECTION */}
      <div id="product-cards" style={{
        maxWidth: '1600px',
        margin: '0 auto 60px',
        padding: '0 20px'
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          textAlign: 'center',
          color: '#FFD700',
          marginBottom: '30px'
        }}>
          🛒 All Products - Shop Now
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '25px'
        }}>
          {products.map((product, i) => (
            <div key={i} style={{
              background: 'rgba(0,0,0,0.7)',
              borderRadius: '15px',
              border: '3px solid #00CED1',
              overflow: 'hidden',
              boxShadow: '0 5px 20px rgba(0,206,209,0.4)',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,206,209,0.7)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,206,209,0.4)';
            }}
            >
              <div style={{
                height: '200px',
                background: `url(${product.image}) center/cover`,
                backgroundPosition: 'center center'
              }}></div>
              
              <div style={{ padding: '20px' }}>
                <div style={{
                  background: '#FFD700',
                  color: '#000',
                  padding: '5px 10px',
                  borderRadius: '10px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  display: 'inline-block',
                  marginBottom: '10px'
                }}>
                  {product.category}
                </div>

                <h3 style={{
                  color: '#FFD700',
                  fontSize: '1.05rem',
                  marginBottom: '10px',
                  minHeight: '55px',
                  lineHeight: '1.3'
                }}>
                  {product.name}
                </h3>
                
                <p style={{
                  color: '#DDD6B8',
                  fontSize: '0.9rem',
                  marginBottom: '15px',
                  minHeight: '40px',
                  lineHeight: '1.4'
                }}>
                  {product.description}
                </p>

                <div style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: '#00CED1',
                  marginBottom: '15px'
                }}>
                  ${product.price.toFixed(2)}
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => handleBuyNow(product)}
                    style={{
                      flex: 1,
                      padding: '15px',
                      background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                      border: 'none',
                      borderRadius: '10px',
                      color: '#000',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  >
                    BUY NOW
                  </button>
                  
                  <button
                    onClick={() => handleAddToCart(product)}
                    style={{
                      padding: '15px',
                      background: 'rgba(0,206,209,0.2)',
                      border: '2px solid #00CED1',
                      borderRadius: '10px',
                      color: '#00CED1',
                      fontSize: '1.3rem',
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
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              padding: '15px 40px',
              background: 'linear-gradient(135deg, #FFD700, #FFA500)',
              border: 'none',
              borderRadius: '50px',
              color: '#000',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            ↑ Back to Top
          </button>
        </div>
      </div>

      {/* CORAL RESTORATION */}
      <div style={{
        maxWidth: '1200px',
        margin: '60px auto',
        padding: '40px',
        background: 'url(/images/Coral.jpeg) center/cover',
        borderRadius: '20px',
        position: 'relative',
        border: '3px solid',
        borderImage: 'linear-gradient(45deg,violet,indigo,blue,green,yellow,orange,red) 1'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(0,0,0,0.9), rgba(0,206,209,0.3))',
          borderRadius: '18px'
        }}></div>
        
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            color: '#00CED1',
            marginBottom: '25px',
            textAlign: 'center'
          }}>
            🪸 Coral Reef Restoration Mission
          </h2>
          
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '2',
            color: '#DDD6B8',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto 20px'
          }}>
            While harvesting sea moss, our dive team actively restores dying coral reefs. 
            Sea moss and coral have a symbiotic relationship—the moss protects the substrate while 
            encouraging coral growth. Every jar you purchase supports sustainable reef restoration 
            in St. Lucia's volcanic waters.
          </p>
          
          <p style={{
            fontSize: '0.95rem',
            color: '#FFD700',
            textAlign: 'center',
            fontStyle: 'italic'
          }}>
            ✅ Supported by Caribbean marine biology research studies
          </p>
        </div>
      </div>

      {/* FOOD GALLERY */}
      <div style={{
        maxWidth: '1600px',
        margin: '0 auto 60px',
        padding: '0 20px'
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          textAlign: 'center',
          color: '#FFD700',
          marginBottom: '15px'
        }}>
          🍽️ Alkaline Lifestyle: Food is Medicine
        </h2>
        <p style={{
          textAlign: 'center',
          fontSize: '1.1rem',
          color: '#DDD6B8',
          marginBottom: '30px',
          fontStyle: 'italic'
        }}>
          Recipe inspiration from our alkaline kitchen (not for sale - for inspiration!)
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}>
          {[
            { img: '/images/KingOysterSalad.jpg', name: 'King Oyster Salad' },
            { img: '/images/MushroomSandwhich.jpg', name: 'Alkaline Sandwich' },
            { img: '/images/SauteedMushroomMixwTomatoes.jpg', name: 'Sautéed Mushrooms' },
            { img: '/images/AVWalnutBrownie.jpg', name: 'Walnut Brownies' },
            { img: '/images/AVChocandWalnutCookies.jpg', name: 'Alkaline Cookies' },
            { img: '/images/SesameStarCandy.jpg', name: 'Sesame Stars' }
          ].map((item, i) => (
            <Link to="/Recipes" key={i} onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none' }}>
              <div style={{
                borderRadius: '15px',
                overflow: 'hidden',
                border: '2px solid #FF69B4',
                boxShadow: '0 5px 20px rgba(255,105,180,0.3)',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <img src={item.img} alt={item.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '15px', background: '#000', textAlign: 'center' }}>
                  <p style={{ color: '#FF69B4', fontSize: '1.1rem', fontWeight: 'bold', margin: 0 }}>{item.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <Link to="/Recipes" onClick={() => window.scrollTo(0, 0)} style={{
            display: 'inline-block',
            padding: '15px 40px',
            background: 'linear-gradient(135deg, #FF69B4, #FF1493)',
            color: '#000',
            textDecoration: 'none',
            borderRadius: '50px',
            fontSize: '1.2rem',
            fontWeight: 'bold'
          }}>
            View All Recipes →
          </Link>
        </div>
      </div>

      {/* DR SEBI GUIDE */}
      <div style={{
        maxWidth: '1600px',
        margin: '0 auto 50px',
        padding: '0 20px',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          color: '#FFD700',
          marginBottom: '20px'
        }}>
          ✅ Dr. Sebi Approved Nutrition
        </h2>
        <img 
          src="/images/DrSebisNutritionalGuide.jpg" 
          alt="Dr. Sebi Nutritional Guide"
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '15px',
            border: '3px solid #FFD700',
            boxShadow: '0 10px 40px rgba(255,215,0,0.6)'
          }}
        />
        <p style={{
          marginTop: '15px',
          fontSize: '1.1rem',
          color: '#FFD700',
          fontStyle: 'italic'
        }}>
          All products align with Dr. Sebi's approved nutritional guide
        </p>
      </div>

      {/* CONSULTATION */}
      <div style={{
        maxWidth: '1000px',
        margin: '60px auto',
        padding: '40px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(148,0,211,0.1), rgba(255,215,0,0.1))',
        borderRadius: '20px',
        border: '3px solid',
        borderImage: 'linear-gradient(45deg,violet,indigo,blue,green,yellow,orange,red) 1'
      }}>
        <h2 style={{ color: '#9400D3', fontSize: '2.5rem', marginBottom: '20px' }}>
          💬 Need Personalized Guidance?
        </h2>
        <p style={{ fontSize: '1.3rem', marginBottom: '30px', lineHeight: '1.8', color: '#DDD6B8' }}>
          Book a consultation with Robin for customized protocols aligned with your unique 
          frequency, health history, and transformation goals.
        </p>
        <Link 
          to="/ContactUs"
          onClick={() => window.scrollTo(0, 0)}
          style={{
            display: 'inline-block',
            padding: '18px 45px',
            background: 'linear-gradient(135deg, #9400D3, #FFD700)',
            color: '#000',
            textDecoration: 'none',
            borderRadius: '50px',
            fontSize: '1.3rem',
            fontWeight: 'bold',
            boxShadow: '0 8px 25px rgba(148,0,211,0.5)',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 12px 35px rgba(148,0,211,0.7)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 8px 25px rgba(148,0,211,0.5)';
          }}
        >
          Schedule Consultation →
        </Link>
      </div>
    </Layout>
  );
};

export default MAVJStore;