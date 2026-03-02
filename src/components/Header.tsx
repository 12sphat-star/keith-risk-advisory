import { Link } from "react-router-dom"
import "../styles/components.css"
import usabgLogo from "../assets/usabg-logo.png"

export default function Header() {
  return (
    <header className="header">

     <div className="brand-block">
  <Link to="/" style={{ textDecoration: "none" }}>
    <div className="primary-brand">
      Keith Robertson
    </div>
    <div className="sub-brand">
      Risk Advisory
    </div>
  </Link>
</div>

      <nav className="nav">
        <Link to="/health-insurance">Health Insurance</Link>
        <Link to="/life-insurance">Life Insurance</Link>
        <Link to="/business-owners">For Business Owners</Link>
        <Link to="/about">About</Link>
      </nav>

      <div className="header-right">

  <div className="phone-container">
  <a href="tel:7572804120" className="phone-link">
    757-280-4120
  </a>
  <div className="availability-note">
    Calls accepted 24 hours
  </div>
</div>

  <img 
    src={usabgLogo} 
    alt="USABG National Partner"
    className="usabg-logo"
  />

  <Link to="/schedule" className="cta-button">
    Schedule Call
  </Link>

</div>

    </header>
  )
}