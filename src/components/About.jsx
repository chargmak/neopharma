import './About.css';

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: 'Scientific Rigor',
    desc: 'Every decision is backed by robust data, peer-reviewed research, and the highest standards of clinical evidence.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Patient First',
    desc: 'Patients are at the heart of everything we do. We design therapies around real-world needs and outcomes.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Innovation',
    desc: 'We push boundaries with novel platforms, from gene therapy and mRNA to AI-driven drug discovery.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Global Reach',
    desc: 'With operations in over 40 countries, we ensure life-changing medicines reach patients worldwide.',
  },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-top">
          <div className="about-text">
            <span className="section-tag">About NeoPharma</span>
            <h2 className="section-title">Science-Driven. Patient-Focused.</h2>
            <p className="about-desc">
              Founded in 2005, NeoPharma has grown from a small biotech startup into
              a global pharmaceutical leader. Our mission is to discover, develop, and
              deliver transformative medicines that make a meaningful difference in
              patients' lives.
            </p>
            <p className="about-desc">
              With a world-class team of scientists, clinicians, and engineers, we are
              tackling some of the most complex diseases across oncology, neuroscience,
              cardiovascular, immunology, and rare diseases.
            </p>
          </div>
          <div className="about-milestones">
            <div className="milestone">
              <div className="milestone-year">2005</div>
              <div className="milestone-text">Founded in Cambridge, MA</div>
            </div>
            <div className="milestone">
              <div className="milestone-year">2012</div>
              <div className="milestone-text">First FDA-approved therapy</div>
            </div>
            <div className="milestone">
              <div className="milestone-year">2018</div>
              <div className="milestone-text">Global expansion to 40+ countries</div>
            </div>
            <div className="milestone">
              <div className="milestone-year">2024</div>
              <div className="milestone-text">$2.8B annual R&D investment</div>
            </div>
          </div>
        </div>
        <div className="values-grid">
          {values.map((v) => (
            <div key={v.title} className="value-card">
              <div className="value-icon">{v.icon}</div>
              <h3 className="value-title">{v.title}</h3>
              <p className="value-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
