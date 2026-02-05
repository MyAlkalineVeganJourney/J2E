// src/Pages/ProductPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageLayout from '../components/PageLayout';
import products from '../data/products';
import '../styles/ProductPage.css';

const ProductPage = () => {
  const { productId } = useParams();
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Find product by ID
  const product = products.find(p => 
    p.id === productId || 
    p.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') === productId
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  if (!product) {
    return (
      <PageLayout title="Product Not Found">
        <div className="multicolor-border" style={{ textAlign: 'center', padding: '40px' }}>
          <h1>Product Not Found</h1>
          <p>This product doesn't exist or has been removed.</p>
          <Link to="/MAVJStore" className="btn-buy-now">
            ← Back to Store
          </Link>
        </div>
      </PageLayout>
    );
  }

  const getSafeArray = (array) => Array.isArray(array) ? array : [];

  return (
    <PageLayout title={product.name}>
      {/* SHOCKING CLAIM BANNER */}
      {product.shockingClaim && (
        <div className="shocking-claim-banner multicolor-border">
          <h2>💥 {product.shockingClaim.main}</h2>
          <p className="shocking-claim-subscript">{product.shockingClaim.subscript}</p>
          <a href="#citations" className="claim-citation-link">
            Read the Peer-Reviewed Studies →
          </a>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="product-hero multicolor-border">
        <div className="product-hero-image">
          <img src={product.image} alt={product.name} />
        </div>
        
        <div className="product-hero-details">
          <h1>{product.name}</h1>
          <p className="product-price">${product.price.toFixed(2)}</p>
          
          {/* BOTANICAL INFO */}
          <div className="botanical-info">
            {product.botanicalName && (
              <p><strong>Botanical Name:</strong> <em>{product.botanicalName}</em></p>
            )}
            {product.commonNames && (
              <p><strong>Also Known As:</strong> {getSafeArray(product.commonNames).join(', ')}</p>
            )}
            {product.partUsed && (
              <p><strong>Part Used:</strong> {product.partUsed}</p>
            )}
            {product.chakra && (
              <p><strong>Chakra:</strong> {product.chakra}</p>
            )}
            {product.frequency && (
              <p><strong>Frequency:</strong> {product.frequency}</p>
            )}
          </div>

          {/* SAFETY PROTOCOL */}
          {product.safetyProtocol && (
            <div className="critical-warning-box">
              <h4>⚠️ {product.safetyProtocol.title}</h4>
              <p>{product.safetyProtocol.message}</p>
              <ul>
                {getSafeArray(product.safetyProtocol.requirements).map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>
          )}

          {/* ACTIONS */}
          <div className="product-actions">
            {product.url && (
              <a href={product.url} className="btn-buy-now" target="_blank" rel="noopener noreferrer">
                💳 Buy Now - ${product.price.toFixed(2)}
              </a>
            )}
            <button className="btn-add-cart">
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </section>

      {/* HARVEST STORY */}
      {(product.sourceLocation || product.harvestMethod) && (
        <section className="harvest-story multicolor-border">
          <h2>🌴 Hand-Harvested in St. Lucia</h2>
          {product.sourceLocation && <p><strong>Source:</strong> {product.sourceLocation}</p>}
          {product.harvestMethod && <p><strong>Method:</strong> {product.harvestMethod}</p>}
          {product.lastHarvest && <p><strong>Harvest:</strong> {product.lastHarvest}</p>}
          {product.harvestedBy && <p><strong>By:</strong> {product.harvestedBy}</p>}
          {product.harvestStory && (
            <div className="harvest-narrative" dangerouslySetInnerHTML={{ __html: product.harvestStory }} />
          )}
        </section>
      )}

      {/* TABS */}
      <div className="product-tabs">
        <button 
          className={activeTab === 'overview' ? 'active' : ''}
          onClick={() => setActiveTab('overview')}
        >
          📊 Overview
        </button>
        <button 
          className={activeTab === 'science' ? 'active' : ''}
          onClick={() => setActiveTab('science')}
        >
          🔬 Biochemistry
        </button>
        {product.quantumMechanics && (
          <button 
            className={activeTab === 'quantum' ? 'active' : ''}
            onClick={() => setActiveTab('quantum')}
          >
            ⚛️ Quantum Mechanics
          </button>
        )}
        <button 
          className={activeTab === 'usage' ? 'active' : ''}
          onClick={() => setActiveTab('usage')}
        >
          📖 Usage Protocol
        </button>
        <button 
          className={activeTab === 'comparison' ? 'active' : ''}
          onClick={() => setActiveTab('comparison')}
        >
          ⚖️ Comparisons
        </button>
        <button 
          className={activeTab === 'citations' ? 'active' : ''}
          onClick={() => setActiveTab('citations')}
        >
          📚 Research Citations
        </button>
      </div>

      {/* TAB CONTENT */}
      <div className="tab-content">
        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <section id="overview" className="biochemical-section multicolor-border">
            <h2>Quick Benefits Overview</h2>
            {product.hoverInfo && (
              <div className="compound-card">
                <h3>Key Benefits:</h3>
                <ul>
                  {getSafeArray(product.hoverInfo.quickBenefits).map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}
            {product.shortDescription && (
              <div className="compound-card">
                <p>{product.shortDescription}</p>
              </div>
            )}
            {product.energeticSignature && (
              <div className="compound-card">
                <h3>Energetic Signature:</h3>
                <p>{product.energeticSignature}</p>
              </div>
            )}
          </section>
        )}

        {/* BIOCHEMISTRY TAB */}
        {activeTab === 'science' && (
          <section id="biochemistry" className="biochemical-section multicolor-border">
            <h2>Biochemical Compounds</h2>
            {getSafeArray(product.biochemicalCompounds).map((compound, index) => (
              <div key={index} className="compound-card">
                <h3>{compound.name}</h3>
                
                {compound.formula && (
                  <p><strong>Chemical Formula:</strong> {compound.formula}</p>
                )}
                
                {compound.molecularWeight && (
                  <p><strong>Molecular Weight:</strong> {compound.molecularWeight}</p>
                )}
                
                {compound.structure && (
                  <div className="molecular-structure">
                    <h4>Molecular Structure:</h4>
                    <img src={compound.structure} alt={`${compound.name} structure`} />
                    {compound.pubchemLink && (
                      <a href={compound.pubchemLink} target="_blank" rel="noopener noreferrer">
                        View on PubChem →
                      </a>
                    )}
                  </div>
                )}
                
                {compound.mechanism && (
                  <div>
                    <h4>How It Works (Mechanism of Action):</h4>
                    <ul>
                      {getSafeArray(compound.mechanism).map((m, i) => <li key={i}>{m}</li>)}
                    </ul>
                  </div>
                )}
                
                {compound.potency && (
                  <p><strong>Potency:</strong> {compound.potency}</p>
                )}
                
                {compound.selectivity && (
                  <p><strong>Selectivity:</strong> {compound.selectivity}</p>
                )}
                
                {compound.concentration && (
                  <p><strong>Concentration:</strong> {compound.concentration}</p>
                )}
              </div>
            ))}
            
            {/* MINERAL PROFILE */}
            {product.mineralProfile && (
              <div className="compound-card">
                <h3>Complete Mineral Profile</h3>
                <div className="mineral-grid">
                  {Object.entries(product.mineralProfile).map(([category, minerals]) => (
                    <div key={category}>
                      <h4>{category}:</h4>
                      <ul>
                        {minerals.map((mineral, i) => <li key={i}>{mineral}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* QUANTUM MECHANICS TAB */}
        {activeTab === 'quantum' && product.quantumMechanics && (
          <section id="quantum" className="biochemical-section multicolor-border">
            <h2>Quantum Mechanics: How This Heals at the Subatomic Level</h2>
            
            <div className="compound-card">
              <p style={{ fontSize: '1.15rem', lineHeight: '1.8' }}>
                {product.quantumMechanics.introduction}
              </p>
            </div>

            {getSafeArray(product.quantumMechanics.principles).map((principle, index) => (
              <div key={index} className="compound-card">
                <h3 style={{ color: '#9400D3' }}>{principle.icon} {principle.title}</h3>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  {principle.description}
                </p>
                {principle.example && (
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginTop: '15px' }}>
                    {principle.example}
                  </p>
                )}
              </div>
            ))}

            {product.quantumMechanics.frequencies && (
              <div className="compound-card">
                <h3>🌊 Vibrational Frequency Resonance</h3>
                <ul style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  {product.quantumMechanics.frequencies.map((freq, i) => (
                    <li key={i}><strong>{freq.name} ({freq.hz}):</strong> {freq.description}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="compound-card">
              <h3>What This Means for Your Healing</h3>
              <ul style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                {getSafeArray(product.quantumMechanics.healingImplications).map((impl, i) => (
                  <li key={i}>{impl}</li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* USAGE TAB */}
        {activeTab === 'usage' && (
          <section id="usage" className="biochemical-section multicolor-border">
            <h2>Usage Protocol</h2>
            
            {product.preparation && (
              <>
                <div className="compound-card">
                  <h3>Preparation</h3>
                  {product.preparation.tea && (
                    <>
                      <p><strong>Method:</strong> {product.preparation.tea.method}</p>
                      <p><strong>Dosage:</strong> {product.preparation.tea.dosage}</p>
                      <p><strong>Timing:</strong> {product.preparation.tea.timing}</p>
                    </>
                  )}
                  {product.preparation.steps && (
                    <ol>
                      {product.preparation.steps.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>
                  )}
                </div>

                {product.preparation.cycling && (
                  <div className="compound-card">
                    <h3>⚠️ CRITICAL: Cycling Protocol</h3>
                    <p><strong>Use Phase:</strong> {product.preparation.cycling.usePhase}</p>
                    <p><strong>Break Phase:</strong> {product.preparation.cycling.breakPhase}</p>
                    <p><strong>Frequency:</strong> {product.preparation.cycling.frequency}</p>
                    <p><strong>Why Cycling:</strong> {product.preparation.cycling.why}</p>
                  </div>
                )}
              </>
            )}

            {product.warnings && (
              <div className="compound-card critical-warning-box">
                <h3>⚠️ Warnings & Contraindications</h3>
                <ul>
                  {getSafeArray(product.warnings).map((warning, i) => (
                    <li key={i}>{warning}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.topicalUse && (
              <div className="compound-card">
                <h3>Topical Application</h3>
                {Object.entries(product.topicalUse).map(([method, instructions]) => (
                  <div key={method}>
                    <p><strong>{method}:</strong> {instructions}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* COMPARISON TAB */}
        {activeTab === 'comparison' && product.comparison && (
          <section className="comparison-section multicolor-border">
            <h2>Product Comparisons</h2>
            
            <div className="comparison-grid">
              <div className="comparison-card">
                <h3>✅ Advantages</h3>
                <ul>
                  {product.comparison.betterThanDandelion && product.comparison.betterThanDandelion.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="comparison-card">
                <h3>⚠️ Considerations</h3>
                <ul>
                  {product.comparison.worseThanDandelion && product.comparison.worseThanDandelion.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {product.comparison.bestCombinedWith && (
              <div className="compound-card">
                <h3>💡 Works Best Combined With:</h3>
                <ul>
                  {product.comparison.bestCombinedWith.map((herb, i) => (
                    <li key={i}>{herb}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* CITATIONS TAB */}
        {activeTab === 'citations' && (
          <section id="research" className="citations-section multicolor-border">
            <h2>📚 Peer-Reviewed Research</h2>
            
            {product.citations && product.citations.map((citation, index) => (
              <div key={index} className="citation-card">
                <h4>{citation.title}</h4>
                <p className="citation-authors">{citation.authors} ({citation.year})</p>
                <p className="citation-journal">
                  <em>{citation.journal}</em>
                </p>
                
                <div className="citation-links">
                  {citation.pubmedLink && (
                    <a href={citation.pubmedLink} target="_blank" rel="noopener noreferrer" className="citation-link">
                      View on PubMed
                    </a>
                  )}
                  {citation.fullTextLink && (
                    <a href={citation.fullTextLink} target="_blank" rel="noopener noreferrer" className="citation-link">
                      Read Full Article
                    </a>
                  )}
                </div>
                
                {citation.keyFindings && (
                  <div className="citation-key-findings">
                    <h5>🔬 Key Findings:</h5>
                    <ul>
                      {citation.keyFindings.map((finding, i) => (
                        <li key={i}>{finding}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </section>
        )}
      </div>

      {/* RELATED PRODUCTS */}
      {product.relatedProducts && product.relatedProducts.length > 0 && (
        <section className="related-products multicolor-border">
          <h2>🔗 Related Products</h2>
          <div className="related-products-grid">
            {getSafeArray(product.relatedProducts).map(relatedId => {
              const related = products.find(p => p.id === relatedId);
              return related ? (
                <Link key={relatedId} to={`/product/${relatedId}`} className="related-product-card">
                  <img src={related.image} alt={related.name} />
                  <h4>{related.name}</h4>
                  <p>${related.price.toFixed(2)}</p>
                </Link>
              ) : null;
            })}
          </div>
        </section>
      )}

      {/* DR SEBI BADGE */}
      {product.drSebiApproved && (
        <section className="dr-sebi-badge multicolor-border">
          <h2>✅ Dr. Sebi Approved</h2>
          <p>{product.drSebiNote}</p>
        </section>
      )}

      {/* MASTER ELEMENTS CONNECTION */}
      {product.biochemicalCompounds && product.biochemicalCompounds.length > 0 && (
        <section className="master-elements-integration multicolor-border">
          <h2>🧪 Connect to Quantum Biochemistry</h2>
          <p>Explore the molecular intelligence behind this product in our Master Elements database:</p>
          
          <div className="elements-links">
            {product.biochemicalCompounds.map((compound, index) => (
              <div key={index} className="element-link">
                🔬 <strong>{compound.name}</strong> - {compound.formula || "Powerful bioactive compound"}
              </div>
            ))}
          </div>
          
          <Link to="/VibrationalIntelligence/MasterElements" className="btn-buy-now" style={{marginTop: '15px', display: 'inline-block'}}>
            🧬 Explore Master Elements Database →
          </Link>
        </section>
      )}

      {/* Q ASSISTANT INTEGRATION */}
      <section className="q-assistant-section multicolor-border">
        <h2>💬 Have Questions About This Product?</h2>
        <p>Chat with Q, our AI assistant, to learn more about biochemistry, usage protocols, or frequency alignment.</p>
        <Link to="/Q" className="btn-primary">
          🤖 Ask Q About {product.name}
        </Link>
      </section>
    </PageLayout>
  );
};

export default ProductPage;