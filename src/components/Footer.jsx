import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="navbar-logo">
              <span className="logo-icon">+</span>
              <span className="logo-text" style={{ color: '#fff' }}>NeoPharma</span>
            </a>
            <p className="footer-tagline">
              Advancing medicine through innovation,<br />
              improving lives through compassion.
            </p>
          </div>
          <div className="footer-links-group">
            <h4>Company</h4>
            <a href="#about">About Us</a>
            <a href="#products">Our Pipeline</a>
            <a href="#">Careers</a>
            <a href="#">Investors</a>
          </div>
          <div className="footer-links-group">
            <h4>Science</h4>
            <a href="#">Research Areas</a>
            <a href="#">Publications</a>
            <a href="#">Clinical Trials</a>
            <a href="#">Patents</a>
          </div>
          <div className="footer-links-group">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Compliance</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} NeoPharma, Inc. All rights reserved.</p>
          <p className="footer-disclaimer">
            This is a fictional company for demonstration purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
