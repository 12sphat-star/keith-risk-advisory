import { Link } from "react-router-dom"
import usabgLogo from "../assets/usabg-logo.png"

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="brand-block">
          <Link to="/" className="brand-link">
            <div className="primary-brand">Keith Robertson</div>
            <div className="sub-brand">Risk Advisory</div>
          </Link>
        </div>

        <nav className="nav">
          <Link to="/health-insurance">Health Insurance</Link>
          <Link to="/life-insurance">Life Insurance</Link>
          <Link to="/business-owners">For Business Owners</Link>
          <Link to="/about">About</Link>
        </nav>

        <div className="header-actions">
          <div className="contact-block">
            <a href="tel:7572804120" className="phone-link">
              757-280-4120
            </a>
            <div className="availability">24/7 Support Access</div>
          </div>

          <a
            href="https://usabg.com/krobertson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={usabgLogo}
              alt="USABG National Partner"
              className="usabg-logo"
            />
          </a>

          <Link to="/schedule" className="cta-button">
            Schedule Review
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header