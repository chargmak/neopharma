import './Products.css';

const products = [
  {
    name: 'NeoCardio',
    category: 'Cardiovascular',
    phase: 'Phase III',
    description: 'Next-generation anticoagulant therapy targeting atrial fibrillation with significantly reduced bleeding risk.',
    color: '#ef4444',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.65l.78.77L12 20.64l7.64-7.64.78-.77a5.4 5.4 0 0 0 0-7.65z" />
      </svg>
    ),
  },
  {
    name: 'NeuroVex',
    category: 'Neuroscience',
    phase: 'Phase II',
    description: 'Monoclonal antibody treatment for early-stage Alzheimer\'s disease, targeting amyloid-beta plaques.',
    color: '#8b5cf6',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    name: 'OncoShield',
    category: 'Oncology',
    phase: 'Phase III',
    description: 'CAR-T cell therapy platform for solid tumors, offering personalized treatment with enhanced tumor penetration.',
    color: '#f59e0b',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    name: 'ImmunoCore',
    category: 'Immunology',
    phase: 'Phase I',
    description: 'Bispecific antibody for autoimmune disorders, modulating immune response without broad immunosuppression.',
    color: '#10b981',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v12M6 12h12" />
      </svg>
    ),
  },
  {
    name: 'PulmoVita',
    category: 'Respiratory',
    phase: 'Phase II',
    description: 'Inhaled gene therapy for cystic fibrosis, delivering corrective CFTR genes directly to lung epithelium.',
    color: '#0ea5e9',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    name: 'MetaBalance',
    category: 'Metabolic',
    phase: 'Phase III',
    description: 'Dual GLP-1/GIP receptor agonist for type 2 diabetes and obesity with superior glycemic control.',
    color: '#ec4899',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
];

export default function Products() {
  return (
    <section id="products" className="products">
      <div className="products-container">
        <div className="section-header">
          <span className="section-tag">Our Pipeline</span>
          <h2 className="section-title">Breakthrough Therapies</h2>
          <p className="section-desc">
            Our diverse pipeline spans multiple therapeutic areas, with innovative
            treatments in various stages of clinical development.
          </p>
        </div>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.name} className="product-card">
              <div className="product-icon" style={{ background: `${product.color}14`, color: product.color }}>
                {product.icon}
              </div>
              <div className="product-phase" style={{ color: product.color, background: `${product.color}14` }}>
                {product.phase}
              </div>
              <h3 className="product-name">{product.name}</h3>
              <span className="product-category">{product.category}</span>
              <p className="product-desc">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
