import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageLayout from '../components/PageLayout';

const AlignWithUs = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('family');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [donationAmount, setDonationAmount] = useState('');
  const [volunteerForm, setVolunteerForm] = useState({ name: '', email: '', skills: '', availability: '' });
  const [workshopForm, setWorkshopForm] = useState({ name: '', email: '', workshop: '' });
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);
  const [workshopSubmitted, setWorkshopSubmitted] = useState(false);

  // ============================================
  // COMPLETE AFFILIATE GIFTS DATABASE
  // ============================================
  const giftItems = [
    { icon: '🤿', name: 'Dive Tanks (Aluminum 80cu ft)', price: '$279', link: 'https://amzn.to/4r6gcPD', category: 'dive' },
    { icon: '🦺', name: 'BC Jacket + Regulator Combo', price: '$829', link: 'https://amzn.to/4r6gcPD', category: 'dive' },
    { icon: '🏊', name: 'Fins/Mask/Snorkel Set', price: '$130', link: 'https://amzn.to/4l3fXDF', category: 'dive' },
    { icon: '⚖️', name: 'Weight Belt + Weights', price: '$69', link: 'https://amzn.to/46wgFDB', category: 'dive' },
    { icon: '🕸️', name: 'Mesh Harvest Bags', price: '$30', link: 'https://amzn.to/4rICvfG', category: 'dive' },
    { icon: '🔦', name: 'Dive Flashlight', price: '$45', link: 'https://amzn.to/4cU82qd', category: 'dive' },
    { icon: '📟', name: 'Dive Computer', price: '$299', link: 'https://amzn.to/4rlWrnH', category: 'dive' },
    { icon: '🤿', name: 'Underwater Camera', price: '$199', link: 'https://amzn.to/40AbwH3', category: 'dive' },
    { icon: '📱', name: 'Waterproof Phone Case', price: '$30', link: 'https://amzn.to/4rN6XVS', category: 'dive' },
    { icon: '🥫', name: 'Commercial Vacuum Sealer', price: '$189', link: 'https://amzn.to/4sk9aYT', category: 'production' },
    { icon: '🏺', name: 'Glass Mason Jars', price: '$35', link: 'https://amzn.to/3OCKNXO', category: 'production' },
    { icon: '🏷️', name: 'Waterproof Labels', price: '$25', link: 'https://amzn.to/3N4FtvP', category: 'production' },
    { icon: '⚖️', name: 'Digital Scale', price: '$22', link: 'https://amzn.to/4ckf9Io', category: 'production' },
    { icon: '🔌', name: 'Voltage Transformer', price: '$89', link: 'https://amzn.to/4b4XodY', category: 'electrical' },
    { icon: '☀️', name: 'Solar Generator', price: '$999', link: 'https://amzn.to/3OE9SBC', category: 'electrical' },
    { icon: '🔋', name: 'Solar Panels', price: '$169', link: 'https://amzn.to/3NapKeC', category: 'electrical' },
    { icon: '🔧', name: 'Cordless Drill Kit', price: '$79', link: 'https://amzn.to/4b0ZJXh', category: 'tools' },
    { icon: '🍄', name: 'Lions Mane Grow Kit', price: '$35', link: 'https://amzn.to/4bgbaeI', category: 'mushroom' },
    { icon: '🌾', name: 'Quinoa (Bulk)', price: '$18', link: 'https://amzn.to/4aHIM57', category: 'food' },
    { icon: '👕', name: 'Lightweight Hoodie', price: '$39', link: 'https://amzn.to/4cUHaGD', category: 'clothing' }
  ];

  const categories = {
    dive: { name: '🌊 Dive Equipment', color: '#06b6d4', items: giftItems.filter(i => i.category === 'dive') },
    production: { name: '�� Production', color: '#10b981', items: giftItems.filter(i => i.category === 'production') },
    electrical: { name: '⚡ Electrical & Solar', color: '#f59e0b', items: giftItems.filter(i => i.category === 'electrical') },
    tools: { name: '🔨 Tools', color: '#ef4444', items: giftItems.filter(i => i.category === 'tools') },
    mushroom: { name: '�� Mushroom', color: '#8b5cf6', items: giftItems.filter(i => i.category === 'mushroom') },
    food: { name: '🌱 Food', color: '#10b981', items: giftItems.filter(i => i.category === 'food') },
    clothing: { name: '👕 Clothing', color: '#ec4899', items: giftItems.filter(i => i.category === 'clothing') }
  };

  // ============================================
  // FAMILY ID SYSTEM
  // ============================================
  const generateFamilyId = () => {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `MAVJ-${timestamp}-${random}`;
  };

  const [familyForm, setFamilyForm] = useState({ name: '', email: '', phone: '', experience: '', familyId: null });

  const handleFamilySubmit = (e) => {
    e.preventDefault();
    const newFamilyId = generateFamilyId();
    setFamilyForm({ ...familyForm, familyId: newFamilyId });
    setFormSubmitted(true);
    localStorage.setItem('mavj_family_member', JSON.stringify({ ...familyForm, familyId: newFamilyId, dateJoined: new Date().toISOString() }));
  };

  // ============================================
  // DONATION HANDLERS
  // ============================================
  const handleDonation = (amount) => {
    // This would integrate with Stripe
    window.open(`https://buy.stripe.com/test_donation?amount=${amount}`, '_blank');
  };

  // ============================================
  // VOLUNTEER HANDLER
  // ============================================
  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    setVolunteerSubmitted(true);
    // Save to localStorage for now - integrate with backend later
    localStorage.setItem('mavj_volunteer', JSON.stringify(volunteerForm));
  };

  // ============================================
  // WORKSHOP HANDLER
  // ============================================
  const handleWorkshopSubmit = (e) => {
    e.preventDefault();
    setWorkshopSubmitted(true);
    localStorage.setItem('mavj_workshop', JSON.stringify(workshopForm));
  };

  // ============================================
  // SPONSORSHIP TIERS
  // ============================================
  const sponsorshipTiers = [
    { level: 'Family Member', amount: 'Any Amount', icon: '💎', color: '#8b5cf6', link: '#donate', benefits: ['Personal Family ID', 'Newsletter', '10% Discount'] },
    { level: 'Frequency Guardian', amount: '$500+ / year', icon: '🛡️', color: '#6366f1', link: '#donate', benefits: ['Family Member benefits', 'Guardian Webinars', 'Name on Honor Roll', '20% Discount'] },
    { level: 'Resonance Patron', amount: '$2,500+ / year', icon: '🌟', color: '#f59e0b', link: '#donate', benefits: ['Guardian benefits', '1-on-1 Consultation', 'Free 5-Day J2E Stay', 'Sponsorship Wall'] },
    { level: 'Ascension Circle', amount: '$10,000+ / year', icon: '👑', color: '#FFD700', link: '#donate', benefits: ['Patron benefits', 'Founding Circle', 'Co-create Initiatives', 'Lifetime Retreat Access'] }
  ];

  // ============================================
  // RESET STORY
  // ============================================
  const resetStory = {
    title: "GODSPACE",
    subtitle: "A realm beyond euphoria, beyond bliss.",
    fullText: `There is a space I reached during the 40-day reset that has no name in any language I know. I call it GODSPACE—one word, no hyphen, no separation. It's not a place you can arrive at through substances or shortcuts. It arrives when the body is completely cleared, when every channel is open, when frequency flows without obstruction.

This is what the reset does. It doesn't just heal your body—it clears the path for GODSPACE to reveal itself. You don't chase it. You prepare yourself, and it meets you there.

In GODSPACE, there is no fear. No ego. No time. There is only the knowing that you are part of something infinitely larger than yourself. It's not euphoria—euphoria is still within the realm of emotion. GODSPACE is beyond emotion. It is pure awareness. Pure presence. Pure connection.

I cannot teach you how to get there. But I can show you the path. The reset. The cleansing. The frequency alignment. Everything we do—every product, every protocol, every page—is preparation for GODSPACE.`
  };

  return (
    <PageLayout pageTitle={t('align.pageTitle', '🤝 ALIGN WITH US - BECOME FAMILY')}>
      
      {/* ===== HERO SECTION ===== */}
      <div style={{
        position: 'relative',
        background: '#0a0a1a',
        backgroundImage: `
          radial-gradient(white, rgba(255,255,255,0.2) 2px, transparent 2px),
          radial-gradient(white, rgba(255,255,255,0.15) 1px, transparent 1px),
          linear-gradient(135deg, #0f172a 0%, #1e293b 100%)
        `,
        backgroundSize: '50px 50px, 30px 30px, 100% 100%',
        backgroundPosition: '0 0, 20px 30px, 0 0',
        padding: '80px 40px',
        margin: '0 20px 40px',
        borderRadius: '20px',
        border: '3px solid #FFD700',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/images/VibrationalIntelligenceBanner.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.12,
          zIndex: 1
        }}></div>
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#FFD700', marginBottom: '20px' }}>🤝 Align With Us</h1>
          <p style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: '#FFFFFF', maxWidth: '900px', margin: '0 auto', lineHeight: '1.6' }}>
            {t('align.subtitle', 'Resonate with the frequency. Become family. Elevate together.')}
          </p>
        </div>
      </div>

      {/* ===== GODSPACE STORY ===== */}
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto 60px',
        padding: '40px',
        background: 'linear-gradient(135deg, #0f172a, #1e293b)',
        borderRadius: '20px',
        border: '3px solid #8b5cf6'
      }}>
        <div style={{ fontSize: '4rem', textAlign: 'center', marginBottom: '20px', letterSpacing: '8px', fontWeight: 'bold', background: 'linear-gradient(135deg, #FFD700, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          {resetStory.title}
        </div>
        <p style={{ color: '#FFD700', textAlign: 'center', fontSize: '1.2rem', marginBottom: '25px', fontStyle: 'italic' }}>{resetStory.subtitle}</p>
        <div style={{ color: '#DDD6B8', lineHeight: '1.9', fontSize: '1.05rem', whiteSpace: 'pre-wrap' }}>{resetStory.fullText}</div>
      </div>

      {/* ===== TAB NAVIGATION ===== */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 40px', padding: '0 20px', display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {[
          { id: 'family', label: '👨‍👩‍👧‍👦 Become Family', color: '#8b5cf6' },
          { id: 'donate', label: '🙏 Donate', color: '#10b981' },
          { id: 'sponsor', label: '🤝 Sponsor', color: '#6366f1' },
          { id: 'volunteer', label: '🤲 Volunteer', color: '#ec4899' },
          { id: 'workshop', label: '🧘 Workshops', color: '#f59e0b' },
          { id: 'gifts', label: '🎁 Resonance Portal', color: '#00d4ff' }
        ].map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
            padding: '12px 28px',
            background: activeTab === tab.id ? tab.color : 'transparent',
            border: `2px solid ${tab.color}`,
            color: activeTab === tab.id ? '#000' : tab.color,
            borderRadius: '40px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}>{tab.label}</button>
        ))}
      </div>

      {/* ===== FAMILY SECTION ===== */}
      {activeTab === 'family' && (
        <div style={{ maxWidth: '600px', margin: '0 auto 60px', padding: '0 20px' }}>
          <div style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(0,0,0,0.6))', borderRadius: '20px', padding: '40px', border: '2px solid #8b5cf6', textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>💎</div>
            <h2 style={{ color: '#FFD700', fontSize: '2rem', marginBottom: '15px' }}>Become a MAVJ Family Member</h2>
            <p style={{ color: '#DDD6B8', fontSize: '1.1rem', marginBottom: '30px' }}>Join our family. Get your unique Family ID. No payment required—just your commitment to elevate.</p>
            {!formSubmitted ? (
              <form onSubmit={handleFamilySubmit} style={{ textAlign: 'left' }}>
                <input type="text" placeholder="Your Name" value={familyForm.name} onChange={(e) => setFamilyForm({...familyForm, name: e.target.value})} style={inputStyle} required />
                <input type="email" placeholder="Email Address" value={familyForm.email} onChange={(e) => setFamilyForm({...familyForm, email: e.target.value})} style={inputStyle} required />
                <input type="tel" placeholder="Phone Number (optional)" value={familyForm.phone} onChange={(e) => setFamilyForm({...familyForm, phone: e.target.value})} style={inputStyle} />
                <textarea placeholder="What brought you here? What are you seeking?" rows="3" value={familyForm.experience} onChange={(e) => setFamilyForm({...familyForm, experience: e.target.value})} style={{...inputStyle, resize: 'vertical' }} />
                <button type="submit" style={buttonStyle}>Claim My Family ID →</button>
              </form>
            ) : (
              <div style={{ background: 'rgba(139,92,246,0.2)', padding: '30px', borderRadius: '15px', border: '2px solid #8b5cf6' }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🎉</div>
                <h3 style={{ color: '#FFD700', fontSize: '1.5rem', marginBottom: '10px' }}>Welcome to the Family!</h3>
                <p style={{ color: '#DDD6B8', fontSize: '1.2rem', marginBottom: '15px' }}>Your Family ID: <strong style={{ color: '#FFD700' }}>{familyForm.familyId}</strong></p>
                <p style={{ color: '#DDD6B8' }}>Check your email for your welcome gift.</p>
                <Link to="/" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 25px', background: '#8b5cf6', color: '#000', textDecoration: 'none', borderRadius: '30px', fontWeight: 'bold' }}>Return Home</Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ===== DONATE SECTION - WITH ACTUAL DONATION BUTTONS ===== */}
      {activeTab === 'donate' && (
        <div style={{ maxWidth: '800px', margin: '0 auto 60px', padding: '0 20px' }}>
          <div style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(0,0,0,0.6))', borderRadius: '20px', padding: '40px', border: '2px solid #10b981', textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🙏</div>
            <h2 style={{ color: '#FFD700', fontSize: '2rem', marginBottom: '20px' }}>Support the Mission</h2>
            <p style={{ color: '#DDD6B8', marginBottom: '30px' }}>Every contribution helps elevate global frequency. Choose an amount below:</p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center', marginBottom: '30px' }}>
              {[25, 50, 100, 250, 500, 1000, 2500, 5000, 10000].map(amount => (
                <button key={amount} onClick={() => handleDonation(amount)} style={{
                  padding: '12px 24px',
                  background: 'rgba(16,185,129,0.2)',
                  border: `2px solid #10b981`,
                  color: '#10b981',
                  borderRadius: '40px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}>${amount.toLocaleString()}</button>
              ))}
            </div>
            
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => handleDonation(0)} style={{
                padding: '15px 40px',
                background: '#10b981',
                border: 'none',
                color: '#000',
                borderRadius: '50px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>Custom Amount</button>
              <a href="https://buy.stripe.com/test_donation_link" target="_blank" rel="noreferrer" style={{
                display: 'inline-block',
                padding: '15px 40px',
                background: 'transparent',
                border: '2px solid #10b981',
                color: '#10b981',
                borderRadius: '50px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                textDecoration: 'none'
              }}>Donate via Stripe →</a>
            </div>
          </div>
        </div>
      )}

      {/* ===== SPONSOR SECTION ===== */}
      {activeTab === 'sponsor' && (
        <div style={{ maxWidth: '1200px', margin: '0 auto 60px', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ color: '#FFD700', fontSize: '2rem' }}>Sponsorship Tiers</h2>
            <p style={{ color: '#DDD6B8' }}>Choose the level that resonates with your frequency. Click to sponsor.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', justifyContent: 'center' }}>
            {sponsorshipTiers.map(tier => (
              <div key={tier.level} style={{ background: 'rgba(0,0,0,0.6)', borderRadius: '20px', padding: '25px', border: `2px solid ${tier.color}`, transition: 'all 0.3s', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{tier.icon}</div>
                <h3 style={{ color: tier.color, fontSize: '1.5rem', marginBottom: '5px' }}>{tier.level}</h3>
                <p style={{ color: '#FFD700', fontWeight: 'bold', marginBottom: '20px' }}>{tier.amount}</p>
                <ul style={{ textAlign: 'left', color: '#DDD6B8', listStyle: 'none', padding: 0, marginBottom: '20px' }}>
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: tier.color }}>✓</span><span>{benefit}</span></li>
                  ))}
                </ul>
                <button onClick={() => handleDonation(parseInt(tier.amount) || 500)} style={{
                  width: '100%',
                  padding: '12px',
                  background: tier.color,
                  border: 'none',
                  color: '#000',
                  borderRadius: '30px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}>Sponsor Now →</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ===== VOLUNTEER SECTION ===== */}
      {activeTab === 'volunteer' && (
        <div style={{ maxWidth: '600px', margin: '0 auto 60px', padding: '0 20px' }}>
          <div style={{ background: 'linear-gradient(135deg, rgba(236,72,153,0.1), rgba(0,0,0,0.6))', borderRadius: '20px', padding: '40px', border: '2px solid #ec4899', textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🤲</div>
            <h2 style={{ color: '#FFD700', fontSize: '2rem', marginBottom: '20px' }}>Volunteer With Us</h2>
            <p style={{ color: '#DDD6B8', marginBottom: '30px' }}>Join our mission. Share your skills. Help elevate frequency worldwide.</p>
            {!volunteerSubmitted ? (
              <form onSubmit={handleVolunteerSubmit} style={{ textAlign: 'left' }}>
                <input type="text" placeholder="Your Name" value={volunteerForm.name} onChange={(e) => setVolunteerForm({...volunteerForm, name: e.target.value})} style={inputStyle} required />
                <input type="email" placeholder="Email Address" value={volunteerForm.email} onChange={(e) => setVolunteerForm({...volunteerForm, email: e.target.value})} style={inputStyle} required />
                <input type="text" placeholder="Skills (e.g., marketing, web development, event planning)" value={volunteerForm.skills} onChange={(e) => setVolunteerForm({...volunteerForm, skills: e.target.value})} style={inputStyle} />
                <select value={volunteerForm.availability} onChange={(e) => setVolunteerForm({...volunteerForm, availability: e.target.value})} style={inputStyle}>
                  <option value="">Availability</option>
                  <option>Weekends</option><option>Evenings</option><option>Flexible</option><option>Full-time</option>
                </select>
                <button type="submit" style={buttonStyle}>Sign Up to Volunteer →</button>
              </form>
            ) : (
              <div style={{ background: 'rgba(236,72,153,0.2)', padding: '30px', borderRadius: '15px' }}>
                <h3 style={{ color: '#FFD700', fontSize: '1.5rem', marginBottom: '10px' }}>Thank You!</h3>
                <p style={{ color: '#DDD6B8' }}>We'll reach out soon with volunteer opportunities.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ===== WORKSHOP SECTION ===== */}
      {activeTab === 'workshop' && (
        <div style={{ maxWidth: '600px', margin: '0 auto 60px', padding: '0 20px' }}>
          <div style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(0,0,0,0.6))', borderRadius: '20px', padding: '40px', border: '2px solid #f59e0b', textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🧘</div>
            <h2 style={{ color: '#FFD700', fontSize: '2rem', marginBottom: '20px' }}>Workshops & Retreats</h2>
            <p style={{ color: '#DDD6B8', marginBottom: '30px' }}>Reserve your spot for upcoming workshops, retreats, and the 11:11 Convergence.</p>
            {!workshopSubmitted ? (
              <form onSubmit={handleWorkshopSubmit} style={{ textAlign: 'left' }}>
                <input type="text" placeholder="Your Name" value={workshopForm.name} onChange={(e) => setWorkshopForm({...workshopForm, name: e.target.value})} style={inputStyle} required />
                <input type="email" placeholder="Email Address" value={workshopForm.email} onChange={(e) => setWorkshopForm({...workshopForm, email: e.target.value})} style={inputStyle} required />
                <select value={workshopForm.workshop} onChange={(e) => setWorkshopForm({...workshopForm, workshop: e.target.value})} style={inputStyle}>
                  <option value="">Select Workshop</option>
                  <option>Frequency Recalibration (Virtual)</option>
                  <option>J2E St. Lucia Retreat (5 days)</option>
                  <option>11:11 Convergence (Nov 2026)</option>
                  <option>Quantum Breathwork Intensive</option>
                </select>
                <button type="submit" style={buttonStyle}>Reserve My Spot →</button>
              </form>
            ) : (
              <div style={{ background: 'rgba(245,158,11,0.2)', padding: '30px', borderRadius: '15px' }}>
                <h3 style={{ color: '#FFD700', fontSize: '1.5rem', marginBottom: '10px' }}>Reservation Confirmed!</h3>
                <p style={{ color: '#DDD6B8' }}>We'll send details and payment information to your email.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ===== GIFT PORTAL ===== */}
      {activeTab === 'gifts' && (
        <div style={{ maxWidth: '1200px', margin: '0 auto 60px', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ color: '#FFD700', fontSize: '2rem' }}>🎁 Resonance Alignment Portal</h2>
            <p style={{ color: '#DDD6B8' }}>Support our mission by purchasing these needed items. All gifts ship to our Doral, FL warehouse.</p>
            <div style={{ background: 'rgba(255,215,0,0.15)', padding: '12px', borderRadius: '10px', marginTop: '20px', display: 'inline-block' }}>
              <p style={{ color: '#FFD700', margin: 0, fontSize: '0.9rem' }}>📦 SHIP TO: MY ALKALINE VEGAN JOURNEY, 2281 NW 82nd Ave, STE. SLU114258, Doral, FL 33198-6511</p>
            </div>
          </div>
          {Object.entries(categories).map(([key, cat]) => (
            cat.items.length > 0 && (
              <div key={key} style={{ marginBottom: '40px' }}>
                <h3 style={{ color: cat.color, fontSize: '1.5rem', marginBottom: '20px', borderBottom: `2px solid ${cat.color}`, display: 'inline-block' }}>{cat.name}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '15px', marginTop: '20px' }}>
                  {cat.items.map((item, idx) => (
                    <a key={idx} href={item.link} target="_blank" rel="noreferrer" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px',
                      background: 'rgba(0,0,0,0.5)',
                      borderRadius: '10px',
                      border: `1px solid ${cat.color}`,
                      textDecoration: 'none',
                      transition: 'all 0.2s'
                    }}>
                      <span style={{ fontSize: '2rem' }}>{item.icon}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ color: '#FFF', fontSize: '0.85rem' }}>{item.name}</div>
                        <div style={{ color: cat.color, fontWeight: 'bold', fontSize: '0.8rem' }}>{item.price}</div>
                      </div>
                      <span style={{ color: cat.color }}>→</span>
                    </a>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      )}

      {/* ===== CONNECT SECTION ===== */}
      <div style={{ maxWidth: '800px', margin: '0 auto 60px', padding: '30px', background: 'rgba(0,0,0,0.4)', borderRadius: '20px', textAlign: 'center' }}>
        <h3 style={{ color: '#FFD700', marginBottom: '15px' }}>📩 Questions? Contact Us</h3>
        <a href="mailto:MyAlkalineVeganJourney@gmail.com" style={{ display: 'inline-block', padding: '12px 30px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#FFF', textDecoration: 'none', borderRadius: '30px', fontWeight: 'bold' }}>MyAlkalineVeganJourney@gmail.com</a>
      </div>

    </PageLayout>
  );
};

const inputStyle = {
  width: '100%',
  padding: '12px 15px',
  marginBottom: '15px',
  background: 'rgba(0,0,0,0.6)',
  border: '2px solid #8b5cf6',
  borderRadius: '10px',
  color: '#FFF',
  fontSize: '1rem',
  boxSizing: 'border-box'
};

const buttonStyle = {
  width: '100%',
  padding: '14px',
  background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
  border: 'none',
  borderRadius: '10px',
  color: '#FFF',
  fontSize: '1.1rem',
  fontWeight: 'bold',
  cursor: 'pointer'
};

export default AlignWithUs;
