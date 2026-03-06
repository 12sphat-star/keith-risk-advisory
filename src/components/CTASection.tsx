import "../styles/layout.css"

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">

        <h2>
          Make Sure Your Coverage Is Working the Way You Think It Is
        </h2>

        <p>
          A focused review designed to confirm alignment, reduce exposure,
          and ensure your health and life coverage supports your income,
          business stability, and long-term goals.
        </p>

        <p className="cta-reassurance">
          No obligation. No pressure. Just clarity.
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