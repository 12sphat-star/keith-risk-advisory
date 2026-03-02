import "../styles/layout.css"

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Ready to Clarify Your Coverage Strategy?</h2>

        <p>
          A focused conversation can help identify gaps, reduce uncertainty,
          and align your health and life coverage with your income and business goals.
        </p>

        <a href="/schedule" className="cta-primary">
          Schedule a Strategy Call
        </a>
      </div>
    </section>
  )
}

export default CTASection