import "../styles/layout.css"

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">

        <h2>Schedule a Structured Coverage Review</h2>

        <p>
          A brief review can confirm your current coverage is aligned properly —
          or identify areas that may need adjustment. No obligation. No pressure.
        </p>

        <div className="cta-actions">
          <a href="/schedule" className="cta-primary">
            Schedule Review
          </a>

          <a href="tel:7572804120" className="cta-secondary">
            Call 757-280-4120
          </a>
        </div>

      </div>
    </section>
  )
}

export default CTASection