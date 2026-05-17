import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageLayout, { TranslationContext } from '../components/PageLayout';
import { issueFamilyId, getExistingFamilyId, getUserProfile } from '../utils/familyIdManager';
import { sendDiscoveryEmail } from '../utils/emailService';

const AlignWithUs = () => {
  const { T } = useContext(TranslationContext);
  
  // Translation helper using capital T from Libre system
  const t = (key, fallback) => {
    const keys = key.split('.');
    let value = T;
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return fallback;
      }
    }
    return typeof value === 'string' ? value : fallback;
  };
  
  // Tab state
  const [activeTab, setActiveTab] = useState('family');
  
  // Family Member State
  const [familyForm, setFamilyForm] = useState({ name: '', email: '', phone: '', experience: '', familyId: null });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isExistingMember, setIsExistingMember] = useState(false);
  
  // Volunteer State
  const [volunteerForm, setVolunteerForm] = useState({ name: '', email: '', skills: '', availability: '' });
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);
  
  // Workshop State
  const [workshopForm, setWorkshopForm] = useState({ name: '', email: '', workshop: '' });
  const [workshopSubmitted, setWorkshopSubmitted] = useState(false);
  
  // Donation State
  const [donationAmount, setDonationAmount] = useState('');
  
  // Load existing Family ID on mount (coordinate with game)
  useEffect(() => {
    const storedFamilyId = localStorage.getItem('mavj_family_id');
    if (storedFamilyId) {
      setFamilyForm(prev => ({ ...prev, familyId: storedFamilyId }));
    }
  }, []);
  
  // ============================================
  // FAMILY ID SYSTEM (Coordinated with Positive Word Game)
  // ============================================
  const handleFamilySubmit = (e) => {
    e.preventDefault();
    
    // Check if user already has a Family ID (from game or previous visit)
    const existingId = getExistingFamilyId(familyForm.email);
    
    if (existingId) {
      // User already has an ID - show it without creating new one
      setFamilyForm({ ...familyForm, familyId: existingId });
      setFormSubmitted(true);
      setIsExistingMember(true);
      
      // Update their profile with additional info from this form
      const profile = getUserProfile(familyForm.email);
      if (profile && !profile.name) {
        // Update missing info
        const users = JSON.parse(localStorage.getItem('mavj_family_members') || '[]');
        const userIndex = users.findIndex(u => u.email === familyForm.email);
        if (userIndex !== -1) {
          users[userIndex].name = familyForm.name;
          users[userIndex].phone = familyForm.phone;
          users[userIndex].experience = familyForm.experience;
          localStorage.setItem('mavj_family_members', JSON.stringify(users));
        }
      }
      return;
    }
    
    // Issue new Family ID for first-time member
    const result = issueFamilyId({
      email: familyForm.email,
      name: familyForm.name,
      phone: familyForm.phone,
      source: 'alignWithUs',
      discoveries: []
    });
    
    setFamilyForm({ ...familyForm, familyId: result.familyId });
    setFormSubmitted(true);
    setIsExistingMember(false);
    
    // Send welcome email with Family ID (coordinated with game's email service)
    sendDiscoveryEmail(
      familyForm.email, 
      'WELCOME', 
      result.familyId, 
      { definition: 'Welcome to the MAVJ Family!', etymology: 'Your journey begins here.' },
      true
    );
  };
  
  // ============================================
  // DONATION HANDLERS
  // ============================================
  const handleDonation = (amount) => {
    window.open(`https://buy.stripe.com/test_donation?amount=${amount}`, '_blank');
  };
  
  // ============================================
  // VOLUNTEER HANDLER
  // ============================================
  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    setVolunteerSubmitted(true);
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
  // CORPORATE SPONSORSHIP TIERS
  // ============================================
  const corporateTiers = [
    { level: 'Bronze', amount: '$5,000 - $9,999', icon: '🥉', color: '#cd7f32', 
      benefits: ['Logo on website', 'Social media mention', 'Newsletter recognition'] },
    { level: 'Silver', amount: '$10,000 - $24,999', icon: '🥈', color: '#c0c0c0', 
      benefits: ['All Bronze benefits', 'Dedicated thank you post', 'Name in J2E program'] },
    { level: 'Gold', amount: '$25,000 - $49,999', icon: '🥇', color: '#ffd700', 
      benefits: ['All Silver benefits', 'Logo on J2E materials', 'VIP access to events'] },
    { level: 'Platinum', amount: '$50,000 - $99,999', icon: '💎', color: '#00d4ff', 
      benefits: ['All Gold benefits', 'Named frequency pod', 'Private consultation'] },
    { level: 'Diamond', amount: '$100,000+', icon: '👑', color: '#ff69b4', 
      benefits: ['All Platinum benefits', 'Founding partner status', 'Lifetime recognition'] },
  ];
  
  // ============================================
  // GOLF TOURNAMENT SPONSORSHIP
  // ============================================
  const golfTiers = [
    { level: 'Hole Sponsor', amount: '$500', icon: '⛳', color: '#22c55e', 
      benefits: ['Signage at one hole', 'Name in program'] },
    { level: 'Beverage Cart Sponsor', amount: '$2,500', icon: '🥤', color: '#3b82f6', 
      benefits: ['Logo on beverage carts', 'Social media shoutout'] },
    { level: 'Lunch Sponsor', amount: '$5,000', icon: '🍽️', color: '#f59e0b', 
      benefits: ['Signage at lunch', 'VIP seating', '4 player spots'] },
    { level: 'Dinner/Gala Sponsor', amount: '$10,000', icon: '🎭', color: '#ec4899', 
      benefits: ['Stage recognition', '10 player spots', 'Hotel stay'] },
    { level: 'Presenting Sponsor', amount: '$25,000', icon: '🏆', color: '#ffd700', 
      benefits: ['Title sponsorship', 'Full page ad', '20 player spots'] },
  ];
  
  // ============================================
  // INDIVIDUAL SPONSORSHIP TIERS (CORRECTED)
  // ============================================
  const sponsorshipTiers = [
    { level: 'Family Member', amount: 'Any Amount', icon: '💎', color: '#8b5cf6', 
      benefits: ['Personal Family ID', 'Newsletter', '10% Discount'] },
    { level: 'Frequency Guardian', amount: '$500+ / year', icon: '🛡️', color: '#6366f1', 
      benefits: ['Family Member benefits', 'Guardian Webinars', 'Name on Honor Roll', '20% Discount'] },
    { level: 'Resonance Patron', amount: '$5,000+ / year', icon: '🌟', color: '#f59e0b', 
      benefits: ['Guardian benefits', '1-on-1 Consultation', 'One 5-Day J2E Stay (per $5,000)', 'Sponsorship Wall'] },
    { level: 'Ascension Circle', amount: '$100,000+ / year', icon: '👑', color: '#FFD700', 
      benefits: ['Patron benefits', 'Founding Circle', 'Co-create Initiatives', 'LIFETIME J2E Retreat Access'] }
  ];
  
  // ============================================
  // RESONANCE ALIGNMENT PORTAL ITEMS (COMPLETE)
  // ============================================
  const giftItems = [
    // 🌊 DIVE EQUIPMENT
    { icon: '🤿', name: 'Dive Tanks (Aluminum 80cu ft)', price: '$279+', link: 'https://amzn.to/4r6gcPD', category: 'dive' },
    { icon: '🦺', name: 'BC Jacket + Regulator Combo', price: '$829+', link: 'https://amzn.to/4r6gcPD', category: 'dive' },
    { icon: '🏊', name: 'Fins/Mask/Snorkel Set', price: '$130+', link: 'https://amzn.to/4l3fXDF', category: 'dive' },
    { icon: '⚖️', name: 'Weight Belt + Weights', price: '$69+', link: 'https://amzn.to/46wgFDB', category: 'dive' },
    { icon: '🕸️', name: 'Mesh Harvest Bags', price: '$30+', link: 'https://amzn.to/4rICvfG', category: 'dive' },
    { icon: '🔦', name: 'Dive Flashlight', price: '$45+', link: 'https://amzn.to/4cU82qd', category: 'dive' },
    { icon: '📷', name: 'Underwater Camera', price: '$199+', link: 'https://amzn.to/40AbwH3', category: 'dive' },
    { icon: '📱', name: 'Waterproof Phone Case', price: '$30+', link: 'https://amzn.to/4rN6XVS', category: 'dive' },
    // 🏭 PRODUCTION & PACKAGING
    { icon: '🥫', name: 'Commercial Vacuum Sealer', price: '$189+', link: 'https://amzn.to/4sk9aYT', category: 'production' },
    { icon: '🏺', name: 'Glass Mason Jars', price: '$35+', link: 'https://amzn.to/3OCKNXO', category: 'production' },
    { icon: '🏷️', name: 'Waterproof Labels', price: '$25+', link: 'https://amzn.to/3N4FtvP', category: 'production' },
    { icon: '⚖️', name: 'Digital Scale', price: '$22+', link: 'https://amzn.to/4ckf9Io', category: 'production' },
    // ⚡ ELECTRICAL & SOLAR
    { icon: '☀️', name: 'Solar Generator', price: '$999+', link: 'https://amzn.to/3OE9SBC', category: 'electrical' },
    { icon: '☀️', name: 'Solar Panels 100W+', price: '$169+', link: 'https://amzn.to/3NapKeC', category: 'electrical' },
    { icon: '🔦', name: 'LED Flashlights', price: '$25+', link: 'https://amzn.to/4l1vTGF', category: 'electrical' },
    // 🔨 TOOLS
    { icon: '🔧', name: 'Cordless Drill/Driver Kit', price: '$79+', link: 'https://amzn.to/4b0ZJXh', category: 'tools' },
    { icon: '🔨', name: 'Hammer', price: '$15+', link: 'https://amzn.to/4b0ZJXh', category: 'tools' },
    { icon: '🪛', name: 'Screwdriver Set', price: '$20+', link: 'https://amzn.to/4b0ZJXh', category: 'tools' },
    // 🍄 MUSHROOM CULTIVATION
    { icon: '🍄', name: 'Lions Mane Grow Kit', price: '$35+', link: 'https://amzn.to/4bgbaeI', category: 'mushroom' },
    { icon: '🍄', name: 'Oyster Mushroom Kit', price: '$30+', link: 'https://amzn.to/3P8hQD5', category: 'mushroom' },
    // 🌱 FOOD & PANTRY
    { icon: '🌾', name: 'Quinoa Bulk', price: '$18+', link: 'https://amzn.to/4aHIM57', category: 'food' },
    { icon: '🥜', name: 'Brazil Nuts', price: '$20+', link: 'https://amzn.to/4kY7xxm', category: 'food' },
    { icon: '🍯', name: 'Raw Honey', price: '$18+', link: 'https://amzn.to/4rHRfev', category: 'food' },
    { icon: '☕', name: 'Coffee Beans', price: '$15+', link: 'https://amzn.to/4l1ESaQ', category: 'food' },
    // 💻 ELECTRONICS
    { icon: '🖨️', name: 'Printer/Scanner', price: '$120+', link: 'https://amzn.to/4bcQBQt', category: 'electronics' },
    { icon: '💾', name: 'SD Cards', price: '$15+', link: 'https://amzn.to/4sflhpT', category: 'electronics' },
    { icon: '📱', name: 'Used iPhones', price: '$100+', link: 'https://amzn.to/4sjUEQJ', category: 'electronics' },
    // 👕 CLOTHING
    { icon: '👕', name: 'Lightweight Hoodie', price: '$39+', link: 'https://amzn.to/4cUHaGD', category: 'clothing' },
    { icon: '👖', name: 'Leggings', price: '$25+', link: 'https://amzn.to/3MPBWBw', category: 'clothing' },
    { icon: '🧦', name: 'Socks Pack', price: '$15+', link: 'https://amzn.to/4s9v9Bq', category: 'clothing' },
    // 📦 SHIPPING & PACKING
    { icon: '🫧', name: 'Bubble Wrap Roll', price: '$20+', link: 'https://amzn.to/4cVpZVi', category: 'shipping' },
    { icon: '📦', name: 'Shipping Boxes', price: '$25+', link: 'https://amzn.to/4rVBaC0', category: 'shipping' },
  ];
  
  const categories = {
    dive: { name: '🌊 Dive Equipment', color: '#06b6d4', items: giftItems.filter(i => i.category === 'dive') },
    production: { name: '🏭 Production & Packaging', color: '#10b981', items: giftItems.filter(i => i.category === 'production') },
    electrical: { name: '⚡ Electrical & Solar', color: '#f59e0b', items: giftItems.filter(i => i.category === 'electrical') },
    tools: { name: '🔨 Tools', color: '#ef4444', items: giftItems.filter(i => i.category === 'tools') },
    mushroom: { name: '🍄 Mushroom Cultivation', color: '#8b5cf6', items: giftItems.filter(i => i.category === 'mushroom') },
    food: { name: '🌱 Food & Pantry', color: '#10b981', items: giftItems.filter(i => i.category === 'food') },
    electronics: { name: '💻 Electronics', color: '#3b82f6', items: giftItems.filter(i => i.category === 'electronics') },
    clothing: { name: '👕 Clothing', color: '#ec4899', items: giftItems.filter(i => i.category === 'clothing') },
    shipping: { name: '📦 Shipping & Packing', color: '#0ea5e9', items: giftItems.filter(i => i.category === 'shipping') },
  };
  
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
  
  // Styles
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
  
  return (
    <PageLayout pageTitle={t('align.pageTitle', '🤝 ALIGN WITH US - BECOME FAMILY')}>
      
      {/* HERO SECTION */}
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
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#FFD700', marginBottom: '20px' }}>
            🤝 {t('align.title', 'Align With Us')}
          </h1>
          <p style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: '#FFFFFF', maxWidth: '900px', margin: '0 auto', lineHeight: '1.6' }}>
            {t('align.subtitle', 'Resonate with the frequency. Become family. Elevate together.')}
          </p>
        </div>
      </div>
      
      {/* GODSPACE STORY */}
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
      
      {/* TAB NAVIGATION */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 40px', padding: '0 20px', display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {[
          { id: 'family', label: '👨‍👩‍👧‍👦 ' + t('tabs.family', 'Become Family'), color: '#8b5cf6' },
          { id: 'donate', label: '🙏 ' + t('tabs.donate', 'Private Donor'), color: '#10b981' },
          { id: 'corporate', label: '🏢 ' + t('tabs.corporate', 'Corporate Sponsor'), color: '#6366f1' },
          { id: 'golf', label: '⛳ ' + t('tabs.golf', 'Golf Tournament'), color: '#22c55e' },
          { id: 'sponsor', label: '🤝 ' + t('tabs.sponsor', 'Individual Tiers'), color: '#f59e0b' },
          { id: 'volunteer', label: '🤲 ' + t('tabs.volunteer', 'Volunteer'), color: '#ec4899' },
          { id: 'workshop', label: '🧘 ' + t('tabs.workshop', 'Workshops'), color: '#f97316' },
          { id: 'gifts', label: '🎁 ' + t('tabs.gifts', 'RESONANCE ALIGNMENT PORTAL'), color: '#00d4ff' }
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
      
      {/* ===== FAMILY SECTION (Coordinated with Game) ===== */}
      {activeTab === 'family' && (
        <div style={{ maxWidth: '600px', margin: '0 auto 60px', padding: '0 20px' }}>
          <div style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(0,0,0,0.6))', borderRadius: '20px', padding: '40px', border: '2px solid #8b5cf6', textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>💎</div>
            <h2 style={{ color: '#FFD700', fontSize: '2rem', marginBottom: '15px' }}>
              {t('family.title', 'Become a MAVJ Family Member')}
            </h2>
            <p style={{ color: '#DDD6B8', fontSize: '1.1rem', marginBottom: '30px' }}>
              {t('family.subtitle', 'Join our family. Get your unique Family ID. No payment required—just your commitment to elevate.')}
            </p>
            
            {!formSubmitted ? (
              <form onSubmit={handleFamilySubmit} style={{ textAlign: 'left' }}>
                <input 
                  type="text" 
                  placeholder={t('family.namePlaceholder', 'Your Name')} 
                  value={familyForm.name} 
                  onChange={(e) => setFamilyForm({...familyForm, name: e.target.value})} 
                  style={inputStyle} 
                  required 
                />
                <input 
                  type="email" 
                  placeholder={t('family.emailPlaceholder', 'Email Address')} 
                  value={familyForm.email} 
                  onChange={(e) => setFamilyForm({...familyForm, email: e.target.value})} 
                  style={inputStyle} 
                  required 
                />
                <input 
                  type="tel" 
                  placeholder={t('family.phonePlaceholder', 'Phone Number (optional)')} 
                  value={familyForm.phone} 
                  onChange={(e) => setFamilyForm({...familyForm, phone: e.target.value})} 
                  style={inputStyle} 
                />
                <textarea 
                  placeholder={t('family.experiencePlaceholder', 'What brought you here? What are you seeking?')} 
                  rows="3" 
                  value={familyForm.experience} 
                  onChange={(e) => setFamilyForm({...familyForm, experience: e.target.value})} 
                  style={{...inputStyle, resize: 'vertical' }} 
                />
                <button type="submit" style={buttonStyle}>
                  {t('family.submitButton', 'Claim My Family ID →')}
                </button>
              </form>
            ) : (
              <div style={{ background: 'rgba(139,92,246,0.2)', padding: '30px', borderRadius: '15px', border: '2px solid #8b5cf6' }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🎉</div>
                <h3 style={{ color: '#FFD700', fontSize: '1.5rem', marginBottom: '10px' }}>
                  {isExistingMember ? t('family.welcomeBack', 'Welcome Back to the Family!') : t('family.welcomeNew', 'Welcome to the Family!')}
                </h3>
                <p style={{ color: '#DDD6B8', fontSize: '1.2rem', marginBottom: '15px' }}>
                  {t('family.yourId', 'Your Family ID')}: <strong style={{ color: '#FFD700' }}>{familyForm.familyId}</strong>
                </p>
                <p style={{ color: '#DDD6B8' }}>
                  {isExistingMember 
                    ? t('family.existingMessage', 'Your Family ID has been confirmed. Check your email for updates.') 
                    : t('family.newMessage', 'Check your email for your welcome gift and certificate.')}
                </p>
                <Link to="/" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 25px', background: '#8b5cf6', color: '#000', textDecoration: 'none', borderRadius: '30px', fontWeight: 'bold' }}>
                  {t('family.returnHome', 'Return Home')}
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* PRIVATE DONOR SECTION */}
      {activeTab === 'donate' && (
        <div style={{ maxWidth: '800px', margin: '0 auto 60px', padding: '0 20px' }}>
          <div style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(0,0,0,0.6))', borderRadius: '20px', padding: '40px', border: '2px solid #10b981', textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🙏</div>
            <h2 style={{ color: '#FFD700', fontSize: '2rem', marginBottom: '20px' }}>
              {t('donate.title', 'Private Donor')}
            </h2>
            <p style={{ color: '#DDD6B8', marginBottom: '30px' }}>
              {t('donate.subtitle', 'Every contribution helps elevate global frequency. Choose an amount below:')}
            </p>
            
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
                  cursor: 'pointer'
                }}>${amount.toLocaleString()}</button>
              ))}
            </div>
            
            <button onClick={() => handleDonation(0)} style={{
              padding: '15px 40px',
              background: '#10b981',
              border: 'none',
              color: '#000',
              borderRadius: '50px',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              {t('donate.customAmount', 'Custom Amount')}
            </button>
          </div>
        </div>
      )}
      
      {/* CORPORATE SPONSOR SECTION */}
      {activeTab === 'corporate' && (
        <div style={{ maxWidth: '1200px', margin: '0 auto 60px', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ color: '#FFD700', fontSize: '2rem' }}>
              {t('corporate.title', '🏢 Corporate Sponsorship Tiers')}
            </h2>
            <p style={{ color: '#DDD6B8' }}>
              {t('corporate.subtitle', 'Partner with us to elevate global consciousness.')}
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
            {corporateTiers.map(tier => (
              <div key={tier.level} style={{ background: 'rgba(0,0,0,0.6)', borderRadius: '20px', padding: '25px', border: `2px solid ${tier.color}`, textAlign: 'center' }}>
                <div style={{ fontSize: '3rem' }}>{tier.icon}</div>
                <h3 style={{ color: tier.color, fontSize: '1.5rem' }}>{tier.level}</h3>
                <p style={{ color: '#FFD700', fontWeight: 'bold' }}>{tier.amount}</p>
                <ul style={{ textAlign: 'left', color: '#DDD6B8', listStyle: 'none', padding: 0 }}>
                  {tier.benefits.map((benefit, i) => <li key={i} style={{ marginBottom: '8px' }}>✓ {benefit}</li>)}
                </ul>
                <button onClick={() => handleDonation(5000)} style={{ width: '100%', padding: '12px', background: tier.color, border: 'none', color: '#000', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer' }}>
                  {t('corporate.sponsorNow', 'Sponsor Now →')}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* GOLF TOURNAMENT SECTION */}
      {activeTab === 'golf' && (
        <div style={{ maxWidth: '1200px', margin: '0 auto 60px', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ color: '#FFD700', fontSize: '2rem' }}>
              {t('golf.title', '⛳ J2E Golf Tournament Sponsorship')}
            </h2>
            <p style={{ color: '#DDD6B8' }}>
              {t('golf.subtitle', 'November 11, 2026 • St. Lucia')}
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
            {golfTiers.map(tier => (
              <div key={tier.level} style={{ background: 'rgba(0,0,0,0.6)', borderRadius: '20px', padding: '25px', border: `2px solid ${tier.color}`, textAlign: 'center' }}>
                <div style={{ fontSize: '3rem' }}>{tier.icon}</div>
                <h3 style={{ color: tier.color, fontSize: '1.3rem' }}>{tier.level}</h3>
                <p style={{ color: '#FFD700', fontWeight: 'bold' }}>{tier.amount}</p>
                <ul style={{ textAlign: 'left', color: '#DDD6B8', listStyle: 'none', padding: 0 }}>
                  {tier.benefits.map((benefit, i) => <li key={i} style={{ marginBottom: '8px' }}>✓ {benefit}</li>)}
                </ul>
                <button onClick={() => handleDonation(500)} style={{ width: '100%', padding: '12px', background: tier.color, border: 'none', color: '#000', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer' }}>
                  {t('golf.sponsorNow', 'Sponsor Now →')}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* INDIVIDUAL SPONSOR SECTION */}
      {activeTab === 'sponsor' && (
        <div style={{ maxWidth: '1200px', margin: '0 auto 60px', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ color: '#FFD700', fontSize: '2rem' }}>
              {t('sponsor.title', 'Individual Sponsorship Tiers')}
            </h2>
            <p style={{ color: '#DDD6B8' }}>
              {t('sponsor.subtitle', 'Choose the level that resonates with your frequency.')}
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
            {sponsorshipTiers.map(tier => (
              <div key={tier.level} style={{ background: 'rgba(0,0,0,0.6)', borderRadius: '20px', padding: '25px', border: `2px solid ${tier.color}`, textAlign: 'center' }}>
                <div style={{ fontSize: '3rem' }}>{tier.icon}</div>
                <h3 style={{ color: tier.color, fontSize: '1.5rem' }}>{tier.level}</h3>
                <p style={{ color: '#FFD700', fontWeight: 'bold' }}>{tier.amount}</p>
                <ul style={{ textAlign: 'left', color: '#DDD6B8', listStyle: 'none', padding: 0 }}>
                  {tier.benefits.map((benefit, i) => <li key={i} style={{ marginBottom: '8px' }}>✓ {benefit}</li>)}
                </ul>
                <button onClick={() => handleDonation(500)} style={{ width: '100%', padding: '12px', background: tier.color, border: 'none', color: '#000', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer' }}>
                  {t('sponsor.sponsorNow', 'Sponsor Now →')}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* VOLUNTEER SECTION */}
      {activeTab === 'volunteer' && (
        <div style={{ maxWidth: '600px', margin: '0 auto 60px', padding: '0 20px' }}>
          <div style={{ background: 'linear-gradient(135deg, rgba(236,72,153,0.1), rgba(0,0,0,0.6))', borderRadius: '20px', padding: '40px', border: '2px solid #ec4899', textAlign: 'center' }}>
            <div style={{ fontSize: '4rem' }}>🤲</div>
            <h2 style={{ color: '#FFD700', fontSize: '2rem' }}>
              {t('volunteer.title', 'Volunteer With Us')}
            </h2>
            <p style={{ color: '#DDD6B8' }}>
              {t('volunteer.subtitle', 'Join our mission. Share your skills.')}
            </p>
            {!volunteerSubmitted ? (
              <form onSubmit={handleVolunteerSubmit} style={{ textAlign: 'left' }}>
                <input type="text" placeholder={t('volunteer.namePlaceholder', 'Your Name')} value={volunteerForm.name} onChange={(e) => setVolunteerForm({...volunteerForm, name: e.target.value})} style={inputStyle} required />
                <input type="email" placeholder={t('volunteer.emailPlaceholder', 'Email Address')} value={volunteerForm.email} onChange={(e) => setVolunteerForm({...volunteerForm, email: e.target.value})} style={inputStyle} required />
                <input type="text" placeholder={t('volunteer.skillsPlaceholder', 'Skills')} value={volunteerForm.skills} onChange={(e) => setVolunteerForm({...volunteerForm, skills: e.target.value})} style={inputStyle} />
                <select value={volunteerForm.availability} onChange={(e) => setVolunteerForm({...volunteerForm, availability: e.target.value})} style={inputStyle}>
                  <option value="">{t('volunteer.availabilityPlaceholder', 'Availability')}</option>
                  <option>{t('volunteer.weekends', 'Weekends')}</option>
                  <option>{t('volunteer.evenings', 'Evenings')}</option>
                  <option>{t('volunteer.flexible', 'Flexible')}</option>
                  <option>{t('volunteer.fulltime', 'Full-time')}</option>
                </select>
                <button type="submit" style={buttonStyle}>
                  {t('volunteer.submitButton', 'Sign Up →')}
                </button>
              </form>
            ) : (
              <div>
                <h3 style={{ color: '#FFD700' }}>{t('volunteer.thankYou', 'Thank You!')}</h3>
                <p>{t('volunteer.response', 'We\'ll reach out soon.')}</p>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* WORKSHOP SECTION */}
      {activeTab === 'workshop' && (
        <div style={{ maxWidth: '600px', margin: '0 auto 60px', padding: '0 20px' }}>
          <div style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(0,0,0,0.6))', borderRadius: '20px', padding: '40px', border: '2px solid #f97316', textAlign: 'center' }}>
            <div style={{ fontSize: '4rem' }}>🧘</div>
            <h2 style={{ color: '#FFD700', fontSize: '2rem' }}>
              {t('workshop.title', 'Workshops & Retreats')}
            </h2>
            <p style={{ color: '#DDD6B8' }}>
              {t('workshop.subtitle', 'Reserve your spot for upcoming events.')}
            </p>
            {!workshopSubmitted ? (
              <form onSubmit={handleWorkshopSubmit} style={{ textAlign: 'left' }}>
                <input type="text" placeholder={t('workshop.namePlaceholder', 'Your Name')} value={workshopForm.name} onChange={(e) => setWorkshopForm({...workshopForm, name: e.target.value})} style={inputStyle} required />
                <input type="email" placeholder={t('workshop.emailPlaceholder', 'Email Address')} value={workshopForm.email} onChange={(e) => setWorkshopForm({...workshopForm, email: e.target.value})} style={inputStyle} required />
                <select value={workshopForm.workshop} onChange={(e) => setWorkshopForm({...workshopForm, workshop: e.target.value})} style={inputStyle}>
                  <option value="">{t('workshop.selectPlaceholder', 'Select Workshop')}</option>
                  <option>{t('workshop.virtual', 'Frequency Recalibration (Virtual)')}</option>
                  <option>{t('workshop.retreat', 'J2E St. Lucia Retreat (5 days)')}</option>
                  <option>{t('workshop.convergence', '11:11 Convergence (Nov 2026)')}</option>
                </select>
                <button type="submit" style={buttonStyle}>
                  {t('workshop.submitButton', 'Reserve My Spot →')}
                </button>
              </form>
            ) : (
              <div>
                <h3 style={{ color: '#FFD700' }}>{t('workshop.confirmed', 'Reservation Confirmed!')}</h3>
                <p>{t('workshop.details', 'We\'ll send details to your email.')}</p>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* RESONANCE ALIGNMENT PORTAL */}
      {activeTab === 'gifts' && (
        <div style={{ maxWidth: '1400px', margin: '0 auto 60px', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ fontSize: '3rem' }}>🎁</div>
            <h2 style={{ color: '#FFD700', fontSize: '2rem' }}>
              {t('portal.title', 'RESONANCE ALIGNMENT PORTAL')}
            </h2>
            <p style={{ color: '#DDD6B8', maxWidth: '800px', margin: '20px auto' }}>
              {t('portal.subtitle', 'Support our mission by purchasing these needed items. All gifts ship to our Doral, FL warehouse.')}
            </p>
            <div style={{ background: 'rgba(255,215,0,0.15)', padding: '12px', borderRadius: '10px', display: 'inline-block' }}>
              <p style={{ color: '#FFD700', margin: 0, fontSize: '0.9rem' }}>
                {t('portal.shipTo', '📦 SHIP TO: MY ALKALINE VEGAN JOURNEY, 2281 NW 82nd Ave, STE. SLU114258, Doral, FL 33198-6511')}
              </p>
            </div>
          </div>
          
          {Object.entries(categories).map(([key, cat]) => cat.items.length > 0 && (
            <div key={key} style={{ marginBottom: '50px' }}>
              <h3 style={{ color: cat.color, fontSize: '1.8rem', marginBottom: '20px', borderBottom: `3px solid ${cat.color}`, display: 'inline-block', paddingBottom: '5px' }}>
                {cat.name} <span style={{ fontSize: '0.9rem', color: '#FFD700' }}>({cat.items.length} {t('portal.items', 'items')})</span>
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '15px', marginTop: '20px' }}>
                {cat.items.map((item, idx) => (
                  <a key={idx} href={item.link} target="_blank" rel="noreferrer" style={{
                    display: 'flex', alignItems: 'center', gap: '12px', padding: '12px',
                    background: 'rgba(0,0,0,0.5)', borderRadius: '10px', border: `1px solid ${cat.color}`,
                    textDecoration: 'none', transition: 'all 0.2s'
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
          ))}
          
          <div style={{ textAlign: 'center', marginTop: '40px', padding: '20px', background: 'rgba(255,215,0,0.1)', borderRadius: '10px' }}>
            <p style={{ color: '#FFD700', fontSize: '1.1rem' }}>
              📊 {t('portal.totalItems', 'Total Items Available')}: <strong>{giftItems.length}</strong>
            </p>
          </div>
        </div>
      )}
      
      {/* CONNECT SECTION */}
      <div style={{ maxWidth: '800px', margin: '0 auto 60px', padding: '30px', background: 'rgba(0,0,0,0.4)', borderRadius: '20px', textAlign: 'center' }}>
        <h3 style={{ color: '#FFD700', marginBottom: '15px' }}>
          {t('connect.title', '📩 Questions? Contact Us')}
        </h3>
        <a href="mailto:MyAlkalineVeganJourney@gmail.com" style={{ display: 'inline-block', padding: '12px 30px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#FFF', textDecoration: 'none', borderRadius: '30px', fontWeight: 'bold' }}>
          MyAlkalineVeganJourney@gmail.com
        </a>
      </div>
      
    </PageLayout>
  );
};

export default AlignWithUs;