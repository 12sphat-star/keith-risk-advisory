const Footer = () => {
  return (
    <footer className="site-footer">

      {/* Authority Band */}
      <div className="authority-band">
        <p>
          Licensed Health & Life Insurance Advisor | Serving Virginia Business Owners & Self-Employed Professionals
        </p>
      </div>

      {/* Main Footer Content */}
      <div className="footer-content">

        <div className="footer-col">
          <h4>Keith Robertson</h4>
          
          <p>Risk Advisory</p>
          <p>Virginia Health & Life Insurance Advisor</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/health-insurance">Health Insurance</a>
          <a href="/life-insurance">Life Insurance</a>
          <a href="/business-owners">For Business Owners</a>
          <a href="/schedule">Schedule Review</a>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <a href="tel:7572804120">757-280-4120</a>
          <p>24/7 Support Access</p>
          <p>Hampton Roads, Virginia</p>
        </div>

      </div>

     
<div className="footer-bottom">

  <p className="footer-service-area">
    Serving Hampton Roads, Norfolk, Virginia Beach, Chesapeake,
    Newport News, and surrounding Virginia communities.
  </p>

  <p>
    © {new Date().getFullYear()} Keith Robertson | The Fin Coach
  </p>

  <p className="powered-by">
    Powered by 12 Stone Smart Website Solutions
  </p>

</div>
    </footer>
  )
}

export default Footer