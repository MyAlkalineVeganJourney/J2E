import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import '../styles/ProductPage.css';

const MAVJSeaMoss = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedColor, setSelectedColor] = useState('spectrum');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const seaMossColors = {
    spectrum: {
      name: 'Volcanic Spectrum Sea Moss',
      color: '#9400D3',
      image: '/images/RawSpectrumMoss.png',
      chakra: 'All Chakras - Full Spectrum Activation',
      frequency: '741 Hz',
      primaryCompounds: ['Carrageenan', 'Iodine', 'Iron', 'Zinc', 'Magnesium', 'Calcium', 'Potassium'],
      benefits: [
        'Complete mineral replenishment - 92 of 102 minerals',
        'Full endocrine system support',
        'DNA repair and cellular regeneration',
        'Immune system modulation',
        'Thyroid optimization'
      ],
      energetic: 'Universal frequency alignment - connects all energy centers simultaneously'
    },
    gold: {
      name: 'Volcanic Gold Sea Moss',
      color: '#FFD700',
      image: '/images/GoldSMGel.png',
      chakra: 'Solar Plexus',
      frequency: '432 Hz',
      primaryCompounds: ['Calcium', 'Magnesium', 'Sulfur', 'Selenium'],
      benefits: [
        'Digestive system optimization',
        'Nervous system regeneration',
        'Bone density support',
        'Metabolic activation',
        'Vitality enhancement'
      ],
      energetic: 'Golden ray frequency - personal power, manifestation, solar energy'
    },
    violet: {
      name: 'Volcanic Violet Sea Moss',
      color: '#9370DB',
      image: '/images/VioletRawSeaMoss.jpg',
      chakra: 'Third Eye + Crown',
      frequency: '639 Hz',
      primaryCompounds: ['Iodine', 'Iron', 'Anthocyanins', 'Zinc'],
      benefits: [
        'Pineal gland activation',
        'Hormonal balance',
        'Cognitive clarity',
        'Spiritual attunement',
        'Circulatory support'
      ],
      energetic: 'Violet flame transmutation - spiritual awakening, intuition, higher consciousness'
    },
    jade: {
      name: 'Volcanic Jade Sea Moss',
      color: '#00FF00',
      image: '/images/JadeRawSeaMoss.jpg',
      chakra: 'Heart + Throat',
      frequency: '528 Hz',
      primaryCompounds: ['Chlorophyll', 'Iron', 'Zinc', 'Magnesium'],
      benefits: [
        'Blood alkalinization',
        'Oxygen delivery optimization',
        'Heavy metal detoxification',
        'Cellular oxygenation',
        'Heart chakra healing'
      ],
      energetic: 'Miracle frequency - DNA repair, love resonance, cellular healing'
    }
  };

  const currentMoss = seaMossColors[selectedColor];

  return (
    <PageLayout title="St. Lucia Volcanic Sea Moss">
      {/* SHOCKING CLAIM BANNER */}
      <div className="shocking-claim-banner multicolor-border">
        <h2 style={{ 
          color: '#FFD700', 
          fontSize: '2.8rem', 
          textShadow: '0 0 30px rgba(255,215,0,0.9)',
          marginBottom: '20px'
        }}>
          🌊 92 OF 102 MINERALS YOUR BODY NEEDS - IN ONE SUPERFOOD
        </h2>
        <p className="shocking-claim-subscript" style={{ fontSize: '1.3rem' }}>
          Harvested by hand from St. Lucia's volcanic reefs. Charged by solar-lunar cycles. 
          Infused with volcanic spring water from the Pitons.
        </p>
        <a href="#citations" className="claim-citation-link">
          Read the Peer-Reviewed Caribbean Marine Studies →
        </a>
      </div>

      {/* COLOR SELECTOR */}
      <section className="color-selector multicolor-border" style={{
        background: 'rgba(0,0,0,0.8)',
        padding: '40px',
        margin: '20px',
        textAlign: 'center'
      }}>
        <h2 style={{ 
          color: '#FFD700', 
          fontSize: '2.5rem',
          textShadow: '0 0 20px rgba(255,215,0,0.8)',
          marginBottom: '30px'
        }}>
          Choose Your Frequency
        </h2>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {Object.keys(seaMossColors).map(colorKey => (
            <button
              key={colorKey}
              onClick={() => setSelectedColor(colorKey)}
              style={{
                background: selectedColor === colorKey 
                  ? `linear-gradient(135deg, ${seaMossColors[colorKey].color}, rgba(255,215,0,0.3))`
                  : `rgba(${seaMossColors[colorKey].color}, 0.2)`,
                border: `4px solid ${seaMossColors[colorKey].color}`,
                color: selectedColor === colorKey ? '#000' : '#FFD700',
                padding: '20px 40px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: `0 0 ${selectedColor === colorKey ? '30px' : '15px'} ${seaMossColors[colorKey].color}`,
                transition: 'all 0.3s',
                textTransform: 'uppercase'
              }}
            >
              {colorKey}
            </button>
          ))}
        </div>
      </section>

      {/* HERO SECTION */}
      <section className="product-hero multicolor-border">
        <div className="product-hero-image">
          <img 
            src={currentMoss.image} 
            alt={currentMoss.name}
            style={{
              border: `6px solid ${currentMoss.color}`,
              boxShadow: `0 0 40px ${currentMoss.color}`
            }}
          />
        </div>
        
        <div className="product-hero-details">
          <h1 style={{ 
            color: currentMoss.color,
            textShadow: `0 0 30px ${currentMoss.color}`,
            fontSize: '3.5rem'
          }}>
            {currentMoss.name}
          </h1>
          
          <div className="botanical-info">
            <p><strong>Species:</strong> <em>Gracilaria spp. & Eucheuma cottonii</em></p>
            <p><strong>Source:</strong> St. Lucia Volcanic Coastline</p>
            <p><strong>Chakra:</strong> {currentMoss.chakra}</p>
            <p><strong>Frequency:</strong> {currentMoss.frequency}</p>
            <p><strong>Harvest Method:</strong> Hand-picked by freediving team</p>
          </div>

          <div className="product-actions">
            <Link to="/MAVJStore" className="btn-buy-now">
              Shop Sea Moss Collection
            </Link>
          </div>
        </div>
      </section>

      {/* ST. LUCIA HARVEST STORY */}
      <section className="harvest-story multicolor-border">
        <h2 style={{ 
          color: '#FFD700',
          fontSize: '2.5rem',
          textShadow: '0 0 20px rgba(255,215,0,0.8)',
          marginBottom: '25px'
        }}>
          🏝️ The St. Lucia Story: Volcanic Waters, Coral Restoration, Solar-Lunar Charging
        </h2>
        <div style={{ lineHeight: '2', fontSize: '1.15rem' }}>
          <p>
            Our sea moss is hand-harvested by a team of freedivers along St. Lucia's volcanic coastline, 
            where the Caribbean Sea meets mineral-rich volcanic rock formations. The unique geology of the 
            Pitons creates waters saturated with sulfur, magnesium, and trace minerals that don't exist 
            in conventional ocean environments.
          </p>
          <p>
            <strong>Coral Restoration Mission:</strong> While harvesting, our team actively transplants 
            fertile coral to areas affected by bleaching. We restore ghost reefs back to living ecosystems. 
            Every jar of sea moss supports reef regeneration.
          </p>
          <p>
            <strong>Volcanic Spring Water Preparation:</strong> After harvest, each batch is rinsed with 
            spring water from the Pitons - naturally alkaline water filtered through volcanic rock for 
            thousands of years. The gel is never boiled. We sun-dry under St. Lucia's tropical sun and 
            activate under full moon cycles.
          </p>
          <p>
            <strong>Species Harvested:</strong> We work with two primary species - <em>Gracilaria</em> 
            (red-purple varieties) and <em>Eucheuma cottonii</em> (gold-green varieties). The color 
            variations reflect different mineral concentrations and phytonutrient profiles.
          </p>
        </div>
      </section>

      {/* TABS */}
      <div className="product-tabs">
        <button 
          className={activeTab === 'overview' ? 'active' : ''}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={activeTab === 'science' ? 'active' : ''}
          onClick={() => setActiveTab('science')}
        >
          Biochemistry
        </button>
        <button 
          className={activeTab === 'quantum' ? 'active' : ''}
          onClick={() => setActiveTab('quantum')}
        >
          Quantum Mechanics
        </button>
        <button 
          className={activeTab === 'usage' ? 'active' : ''}
          onClick={() => setActiveTab('usage')}
        >
          Usage Protocol
        </button>
        <button 
          className={activeTab === 'colors' ? 'active' : ''}
          onClick={() => setActiveTab('colors')}
        >
          Color Frequencies
        </button>
        <button 
          className={activeTab === 'citations' ? 'active' : ''}
          onClick={() => setActiveTab('citations')}
        >
          Research Citations
        </button>
      </div>

      {/* TAB CONTENT */}
      <div className="tab-content">
        {activeTab === 'overview' && (
          <section className="biochemical-section multicolor-border">
            <h2>Quick Benefits Overview</h2>
            <div className="compound-card">
              <h3>Key Benefits of {currentMoss.name}:</h3>
              <ul>
                {currentMoss.benefits.map((benefit, i) => (
                  <li key={i} style={{ fontSize: '1.1rem', marginBottom: '10px' }}>{benefit}</li>
                ))}
              </ul>
            </div>
            <div className="compound-card">
              <h3>Energetic Signature:</h3>
              <p style={{ fontSize: '1.15rem', lineHeight: '1.8' }}>{currentMoss.energetic}</p>
            </div>
            <div className="compound-card">
              <h3>Why St. Lucia Sea Moss is Different:</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                Most commercial sea moss is pool-grown in controlled environments. Ours is wildcrafted from 
                volcanic reefs where the mineral profile is 3-5x higher than typical ocean-grown varieties. 
                The volcanic rock formations release sulfur, selenium, and rare earth minerals into the water, 
                creating a nutritional density unmatched by farm-raised alternatives.
              </p>
            </div>
          </section>
        )}

        {activeTab === 'science' && (
          <section className="biochemical-section multicolor-border">
            <h2>Biochemical Compounds in Sea Moss</h2>
            
            {/* CARRAGEENAN */}
            <div className="compound-card">
              <h3 style={{ color: '#FFD700' }}>Carrageenan</h3>
              <p><strong>Chemical Formula:</strong> (C₂₄H₃₆O₂₅S₂)ₙ</p>
              <p><strong>Molecular Weight:</strong> ~400,000 Da</p>
              <p><strong>Structure:</strong> Sulfated galactose polymer</p>
              <p><strong>Found in:</strong> All sea moss varieties</p>
              
              <h4>Mechanism of Action:</h4>
              <ul style={{ lineHeight: '1.8' }}>
                <li>Forms viscous gel matrix in digestive tract, protecting mucosal lining</li>
                <li>Sulfate groups bind heavy metals (lead, mercury, cadmium) for elimination</li>
                <li>Prebiotic effect: feeds beneficial gut bacteria (Lactobacillus, Bifidobacterium)</li>
                <li>Anti-inflammatory via COX-2 enzyme inhibition</li>
                <li>Antiviral properties: blocks viral attachment to host cells</li>
              </ul>
            </div>

            {/* IODINE */}
            <div className="compound-card">
              <h3 style={{ color: '#FFD700' }}>Iodine</h3>
              <p><strong>Chemical Formula:</strong> I₂, I⁻</p>
              <p><strong>Atomic Number:</strong> 53</p>
              <p><strong>Concentration in St. Lucia Sea Moss:</strong> 47-72 mcg per gram (exceptionally high)</p>
              
              <h4>Mechanism of Action:</h4>
              <ul style={{ lineHeight: '1.8' }}>
                <li>Essential component of thyroid hormones T3 (triiodothyronine) and T4 (thyroxine)</li>
                <li>Regulates basal metabolic rate through mitochondrial ATP production</li>
                <li>Supports apoptosis (programmed death) of abnormal cells</li>
                <li>Deficiency linked to fibrocystic breast disease, cognitive impairment, and goiter</li>
                <li>Crosses blood-brain barrier: essential for neurodevelopment</li>
              </ul>
            </div>

            {/* CHLOROPHYLL (Jade variety) */}
            <div className="compound-card">
              <h3 style={{ color: '#00FF00' }}>Chlorophyll (Jade Sea Moss)</h3>
              <p><strong>Chemical Formula:</strong> C₅₅H₇₂MgN₄O₅</p>
              <p><strong>Molecular Weight:</strong> 893.49 g/mol</p>
              <p><strong>Structure:</strong> Magnesium-centered porphyrin ring (identical to hemoglobin except Mg vs Fe)</p>
              
              <h4>Mechanism of Action:</h4>
              <ul style={{ lineHeight: '1.8' }}>
                <li>Blood builder: structurally mirrors heme, supports hemoglobin synthesis</li>
                <li>Increases oxygen delivery to tissues</li>
                <li>Chelates heavy metals through porphyrin ring structure</li>
                <li>Alkalizes blood pH (shifts from acidic to alkaline environment)</li>
                <li>Promotes wound healing via granulation tissue formation</li>
              </ul>
            </div>

            {/* ANTHOCYANINS (Violet variety) */}
            <div className="compound-card">
              <h3 style={{ color: '#9370DB' }}>Anthocyanins (Violet Sea Moss)</h3>
              <p><strong>Chemical Formula:</strong> C₁₅H₁₁O₆⁺ (cyanidin core)</p>
              <p><strong>Molecular Weight:</strong> 287.24 g/mol</p>
              <p><strong>Structure:</strong> Glycosylated flavonoid pigments</p>
              
              <h4>Mechanism of Action:</h4>
              <ul style={{ lineHeight: '1.8' }}>
                <li>Potent antioxidant: neutralizes reactive oxygen species (ROS)</li>
                <li>Crosses blood-brain barrier: neuroprotective effects</li>
                <li>Improves endothelial function by increasing nitric oxide production</li>
                <li>Anti-inflammatory through COX-2 inhibition</li>
                <li>Enhances insulin sensitivity and glucose metabolism</li>
              </ul>
            </div>

            {/* ADDITIONAL MINERALS */}
            <div className="compound-card">
              <h3 style={{ color: '#FFD700' }}>Complete Mineral Profile</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                St. Lucia volcanic sea moss contains 92 of the 102 minerals essential for human function:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginTop: '20px' }}>
                <div>
                  <h4>Macro-Minerals:</h4>
                  <ul>
                    <li>Calcium</li>
                    <li>Magnesium</li>
                    <li>Potassium</li>
                    <li>Sodium</li>
                    <li>Phosphorus</li>
                    <li>Sulfur</li>
                  </ul>
                </div>
                <div>
                  <h4>Trace Minerals:</h4>
                  <ul>
                    <li>Iron</li>
                    <li>Zinc</li>
                    <li>Selenium</li>
                    <li>Copper</li>
                    <li>Manganese</li>
                    <li>Iodine</li>
                  </ul>
                </div>
                <div>
                  <h4>Rare Earth Elements:</h4>
                  <ul>
                    <li>Boron</li>
                    <li>Molybdenum</li>
                    <li>Vanadium</li>
                    <li>Chromium</li>
                    <li>Silicon</li>
                    <li>Strontium</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'quantum' && (
          <section className="biochemical-section multicolor-border">
            <h2>Quantum Mechanics: How Sea Moss Heals at the Subatomic Level</h2>
            
            <div className="compound-card">
              <p style={{ fontSize: '1.15rem', lineHeight: '1.8' }}>
                Sea moss operates through quantum mechanical principles that enable healing at cellular 
                and subatomic levels. The sulfated polysaccharides, mineral ions, and phytonutrients 
                exhibit quantum behaviors that classical biochemistry cannot fully explain.
              </p>
            </div>

            <div className="compound-card">
              <h3 style={{ color: '#9400D3' }}>⚛️ Quantum Tunneling in Carrageenan</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                Sulfate groups on carrageenan molecules enable <strong>proton tunneling</strong> across 
                cell membranes. In classical physics, charged particles cannot pass through membrane barriers 
                due to energy requirements. However, at the quantum level, protons "tunnel" through these 
                barriers, facilitating rapid hydration and nutrient absorption that occurs faster than 
                conventional diffusion would allow.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginTop: '15px' }}>
                This explains why sea moss gel creates almost instantaneous cellular hydration - the 
                quantum tunneling effect bypasses normal transport mechanisms.
              </p>
            </div>

            <div className="compound-card">
              <h3 style={{ color: '#9400D3' }}>🔗 Quantum Entanglement in Mineral Ions</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                Iodine and selenium exhibit <strong>quantum entanglement</strong> within thyroid peroxidase 
                enzyme complexes. These elements exist in a quantum superposition state where changes to 
                one immediately affect the other, regardless of distance. This entangled state enables the 
                thyroid gland to respond instantaneously to metabolic demands.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginTop: '15px' }}>
                Additionally, the magnesium in chlorophyll becomes entangled with iron in hemoglobin during 
                blood-building processes, creating coherent oxygen transport systems.
              </p>
            </div>

            <div className="compound-card">
              <h3 style={{ color: '#9400D3' }}>↕️ Quantum Superposition in Carrageenan Structure</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                Carrageenan exists in multiple conformational states simultaneously - a phenomenon called 
                <strong> quantum superposition</strong>. Depending on pH environment (stomach acid vs. 
                intestinal alkalinity), the molecule "collapses" into the specific configuration needed 
                for that environment.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginTop: '15px' }}>
                In the stomach (pH 1-3), carrageenan forms a protective gel. In the intestines (pH 7-8), 
                it transitions to a prebiotic fiber structure. This adaptive behavior cannot be explained 
                by classical chemistry alone - it requires quantum superposition.
              </p>
            </div>

            <div className="compound-card">
              <h3 style={{ color: '#9400D3' }}>🌊 Vibrational Frequency Resonance</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                Each sea moss color resonates at specific frequencies that correspond to chakra energies:
              </p>
              <ul style={{ fontSize: '1.1rem', lineHeight: '1.8', marginTop: '15px' }}>
                <li><strong>Gold (432 Hz):</strong> Solar Plexus - personal power, metabolism, digestion</li>
                <li><strong>Jade (528 Hz):</strong> Heart - love, healing, cellular repair (DNA frequency)</li>
                <li><strong>Violet (639 Hz):</strong> Third Eye/Crown - spiritual connection, intuition</li>
                <li><strong>Spectrum (741 Hz):</strong> All Chakras - consciousness awakening, detoxification</li>
              </ul>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginTop: '15px' }}>
                These frequencies create quantum coherence between the sea moss and your body's bio electromagnetic 
                field, enabling resonant healing that transcends chemical interactions.
              </p>
            </div>

            <div className="compound-card">
              <h3>What This Means for Your Healing</h3>
              <ul style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                <li>
                  <strong>Quantum Tunneling</strong> allows minerals and nutrients to enter cells faster than 
                  conventional absorption, bypassing energy barriers
                </li>
                <li>
                  <strong>Quantum Entanglement</strong> creates instantaneous communication between nutrients 
                  and target tissues, enabling rapid metabolic responses
                </li>
                <li>
                  <strong>Quantum Superposition</strong> means sea moss compounds adapt to your body's specific 
                  needs in real-time, functioning differently in different pH environments
                </li>
                <li>
                  <strong>Frequency Resonance</strong> aligns your biofield with healing frequencies, creating 
                  coherent states that support cellular regeneration
                </li>
              </ul>
            </div>
          </section>
        )}

        {activeTab === 'usage' && (
          <section className="biochemical-section multicolor-border">
            <h2>Usage Protocol</h2>
            
            <div className="compound-card">
              <h3>Raw Sea Moss Preparation (from dried form)</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                <strong>Step 1:</strong> Rinse dried sea moss under cold water to remove sea salt and debris
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                <strong>Step 2:</strong> Soak in spring water (not tap water) for 12-24 hours until fully expanded
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                <strong>Step 3:</strong> Drain and rinse again
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                <strong>Step 4:</strong> Blend with spring water (2 cups water per cup of soaked moss) until smooth
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                <strong>Step 5:</strong> Store in glass jar in refrigerator. Lasts 2-3 weeks.
              </p>
            </div>

            <div className="compound-card">
              <h3>Sea Moss Gel Usage (pre-made gel)</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                <strong>Daily Serving:</strong> 1-2 tablespoons (15-30ml)
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                <strong>Best Time:</strong> Morning on empty stomach, or before bed for overnight cellular repair
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                <strong>Methods:</strong>
              </p>
              <ul style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                <li>Add to smoothies</li>
                <li>Mix into alkaline water or herbal tea</li>
                <li>Blend into soups or sauces (do not boil)</li>
                <li>Take directly from spoon</li>
                <li>Apply topically to skin or hair</li>
              </ul>
            </div>

            <div className="compound-card">
              <h3>Topical Application</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                <strong>Face Mask:</strong> Apply thin layer to clean skin, leave for 15-20 minutes, rinse with warm water
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                <strong>Hair Treatment:</strong> Apply to damp hair and scalp, cover with cap, leave for 30-60 minutes, 
                rinse thoroughly
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                <strong>Benefits:</strong> Hydration, collagen production, anti-inflammatory effects, mineral absorption 
                through skin
              </p>
            </div>

            <div className="compound-card" style={{ background: 'rgba(255,107,0,0.1)', border: '3px solid #ff6b00' }}>
              <h3>⚠️ Important Considerations</h3>
              <ul style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                <li>
                  <strong>Thyroid Medication:</strong> If taking thyroid medication, consult healthcare provider. 
                  High iodine content may interfere with dosing.
                </li>
                <li>
                  <strong>Blood Thinners:</strong> Sea moss contains Vitamin K. Monitor if on anticoagulants.
                </li>
                <li>
                  <strong>Pregnancy/Breastfeeding:</strong> Generally safe, but consult provider due to high iodine levels.
                </li>
                <li>
                  <strong>Iodine Sensitivity:</strong> Start with small amounts (1 teaspoon) if new to sea moss.
                </li>
                <li>
                  <strong>Quality Matters:</strong> Pool-grown or contaminated sea moss may contain heavy metals. 
                  Only use wildcrafted from clean waters (like our St. Lucia harvest).
                </li>
              </ul>
            </div>

            <div className="compound-card">
              <h3>Cycling Protocol (Optional for Intensive Use)</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                <strong>Use Phase:</strong> 30 days continuous use
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                <strong>Break Phase:</strong> 7-10 days rest
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                <strong>Why:</strong> Prevents iodine overload, allows body to recalibrate thyroid function
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                <strong>Note:</strong> Most people can use sea moss daily without cycling, but if using therapeutic 
                doses (3+ tablespoons daily), consider cycling.
              </p>
            </div>
          </section>
        )}

        {activeTab === 'colors' && (
          <section className="biochemical-section multicolor-border">
            <h2>Sea Moss Color Frequencies & Chakra Alignment</h2>
            
            {Object.entries(seaMossColors).map(([key, moss]) => (
              <div 
                key={key} 
                className="compound-card"
                style={{ 
                  borderColor: moss.color,
                  boxShadow: `0 0 20px ${moss.color}`
                }}
              >
                <h3 style={{ color: moss.color, fontSize: '2rem' }}>
                  {moss.name}
                </h3>
                <p><strong>Frequency:</strong> {moss.frequency}</p>
                <p><strong>Chakra:</strong> {moss.chakra}</p>
                
                <h4 style={{ color: moss.color, marginTop: '20px' }}>Primary Compounds:</h4>
                <ul style={{ fontSize: '1.1rem' }}>
                  {moss.primaryCompounds.map((compound, i) => (
                    <li key={i}>{compound}</li>
                  ))}
                </ul>
                
                <h4 style={{ color: moss.color, marginTop: '20px' }}>Key Benefits:</h4>
                <ul style={{ fontSize: '1.1rem' }}>
                  {moss.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
                
                <h4 style={{ color: moss.color, marginTop: '20px' }}>Energetic Signature:</h4>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  {moss.energetic}
                </p>
              </div>
            ))}
          </section>
        )}

        {activeTab === 'citations' && (
          <section className="biochemical-section multicolor-border">
            <h2>📚 Peer-Reviewed Research & Citations</h2>
            
            <div className="compound-card">
              <h3>Sulfated polysaccharides from marine algae: extraction, purification, and bioactivities</h3>
              <p className="citation-authors">Qin H, et al. (2020)</p>
              <p className="citation-journal"><em>Marine Drugs</em>, 18(7), 354</p>
              
              <div className="citation-links">
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/32668602/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="citation-link"
                >
                  View on PubMed
                </a>
                <a 
                  href="https://www.mdpi.com/1660-3397/18/7/354" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="citation-link"
                >
                  Read Full Article
                </a>
              </div>
              
              <div className="citation-key-findings">
                <h5>🔬 Key Findings:</h5>
                <ul>
                  <li>Carrageenan exhibits strong antiviral activity against influenza and HIV</li>
                  <li>Sulfate content directly correlates with antioxidant capacity</li>
                  <li>Thermal degradation reduces bioactivity - raw consumption preferred</li>
                </ul>
              </div>
            </div>

            <div className="compound-card">
              <h3>Iodine content of edible seaweeds from the Caribbean and its relation to thyroid function</h3>
              <p className="citation-authors">Teas J, et al. (2004)</p>
              <p className="citation-journal"><em>Journal of Medicinal Food</em>, 7(3), 345-351</p>
              
              <div className="citation-links">
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/15383228/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="citation-link"
                >
                  View on PubMed
                </a>
              </div>
              
              <div className="citation-key-findings">
                <h5>🔬 Key Findings:</h5>
                <ul>
                  <li>Caribbean sea moss contains 47-72 mcg iodine per gram (exceptionally high)</li>
                  <li>Bioavailable iodine supports optimal thyroid hormone production</li>
                  <li>Volcanic coastal waters increase mineral density in sea moss species</li>
                </ul>
              </div>
            </div>

            <div className="compound-card">
              <h3>Antioxidant and antiproliferative activities of marine algae</h3>
              <p className="citation-authors">Zubia M, et al. (2009)</p>
              <p className="citation-journal"><em>Food Chemistry</em>, 116(4), 842-846</p>
              
              <div className="citation-key-findings">
                <h5>🔬 Key Findings:</h5>
                <ul>
                  <li>Anthocyanins in purple sea moss varieties show superior antioxidant capacity</li>
                  <li>Chlorophyll content in green varieties supports blood oxygenation</li>
                  <li>Polyphenolic compounds exhibit anti-cancer properties in vitro</li>
                </ul>
              </div>
            </div>

            <div className="compound-card">
              <h3>Prebiotic potential of seaweed polysaccharides</h3>
              <p className="citation-authors">Ramnani P, et al. (2012)</p>
              <p className="citation-journal"><em>Anaerobe</em>, 18(1), 1-6</p>
              
              <div className="citation-links">
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/22198385/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="citation-link"
                >
                  View on PubMed
                </a>
              </div>
              
              <div className="citation-key-findings">
                <h5>🔬 Key Findings:</h5>
                <ul>
                  <li>Carrageenan selectively promotes growth of Bifidobacterium and Lactobacillus species</li>
                  <li>Prebiotic effect enhances gut barrier function and immune response</li>
                  <li>Fermentation of sea moss polysaccharides produces beneficial short-chain fatty acids</li>
                </ul>
              </div>
            </div>

            <div className="compound-card">
              <h3>Heavy metal chelation by marine algae polysaccharides</h3>
              <p className="citation-authors">Davis TA, et al. (2003)</p>
              <p className="citation-journal"><em>Environmental Science & Technology</em>, 37(2), 261-267</p>
              
              <div className="citation-key-findings">
                <h5>🔬 Key Findings:</h5>
                <ul>
                  <li>Sulfated polysaccharides bind lead, mercury, and cadmium with high affinity</li>
                  <li>Chlorophyll's porphyrin structure chelates heavy metals from tissues</li>
                  <li>Regular consumption supports natural detoxification pathways</li>
                </ul>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* RELATED PRODUCTS SECTION */}
      <section className="related-products multicolor-border">
        <h2>🔗 Complete Your Sea Moss Experience</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Explore our full range of volcanic sea moss products - raw, gel, and frequency-specific varieties
        </p>
        <Link to="/MAVJStore" className="btn-buy-now">
          Shop All Sea Moss Products →
        </Link>
      </section>

      {/* MASTER ELEMENTS CONNECTION */}
      <section className="master-elements-integration multicolor-border">
        <h2>🧪 Explore the Molecular Intelligence</h2>
        <p>Dive deeper into the quantum biochemistry of these compounds in our Master Elements database:</p>
        
        <div className="elements-links">
          <div className="element-link">
            🔬 <strong>Carrageenan</strong> - (C₂₄H₃₆O₂₅S₂)ₙ
          </div>
          <div className="element-link">
            🔬 <strong>Iodine</strong> - I₂, I⁻
          </div>
          <div className="element-link">
            🔬 <strong>Chlorophyll</strong> - C₅₅H₇₂MgN₄O₅
          </div>
          <div className="element-link">
            🔬 <strong>Anthocyanins</strong> - C₁₅H₁₁O₆⁺
          </div>
        </div>
        
        <Link 
          to="/VibrationalIntelligence/MasterElements" 
          className="btn-buy-now" 
          style={{marginTop: '15px', display: 'inline-block'}}
        >
          🧬 Explore Master Elements Database →
        </Link>
      </section>

      {/* DR SEBI APPROVED BADGE */}
      <section className="dr-sebi-badge multicolor-border">
        <h2>✅ Dr. Sebi Approved</h2>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
          Sea moss was a cornerstone of Dr. Sebi's nutritional guide, recommended for its complete 
          mineral profile and alkaline properties. Our St. Lucian volcanic sea moss represents the 
          highest quality wildcrafted variety available - exactly as Dr. Sebi intended.
        </p>
      </section>
    </PageLayout>
  );
};

export default MAVJSeaMoss;
