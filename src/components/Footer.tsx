import "../styles/layout.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <h3>Keith Robertson | Risk Advisory</h3>
          <p>
            Health and Life Insurance guidance for Virginia business owners,
            entrepreneurs, and families seeking structured protection.
          </p>
        </div>

        <div className="footer-links">
          <h4>Services</h4>
          <a href="/health-insurance">Health Insurance</a>
          <a href="/life-insurance">Life Insurance</a>
          <a href="/business-owners">Business Owners</a>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <a href="/about">About</a>
          <a href="/resources">Resources</a>
          <a href="/schedule">Schedule Call</a>
        </div>

        <div className="footer-links">
          <h4>Location</h4>
          <p>Serving Hampton Roads & Virginia</p>
          <p>Independent USABG Affiliate</p>
          <p>Phone: 757-280-4120</p>
<p>Calls accepted 24 hours</p>
        </div>

      </div>

    <div className="footer-bottom">
  <p>© 2026 Keith Robertson | Risk Advisory</p>
  <p className="powered-by">
    Powered by 12 Stone Smart Website Infrastructure
  </p>
</div>
    </footer>
  )
}

export default Footer