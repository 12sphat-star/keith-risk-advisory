import { Link } from "react-router-dom"

const ServicesGrid = () => {
  return (
    <section className="services-section">
      <div className="container">

        <h2>Structured Protection Advisory</h2>

        <div className="services-grid">

          {/* HEALTH */}
          <div className="service-card">
            <h3>Health Insurance Strategy</h3>
            <p>
              We evaluate coverage through structure — carrier stability,
              provider network strength, deductible exposure, and long-term
              cost sustainability. The objective isn’t the cheapest plan.
              It’s proper alignment with your income and risk tolerance.
            </p>

            <Link to="/health-insurance" className="service-link">
              Learn More →
            </Link>
          </div>

          {/* LIFE */}
          <div className="service-card">
            <h3>Life Insurance Planning</h3>
            <p>
              Life coverage isn’t just about replacing income.
              When structured correctly, it supports family stability,
              business continuity, and long-term capital positioning —
              aligned with your broader financial strategy.
            </p>

            <Link to="/life-insurance" className="service-link">
              Explore Options →
            </Link>
          </div>

          {/* BUSINESS OWNERS */}
          <div className="service-card">
            <h3>Business Owner Risk Structuring</h3>
            <p>
              Business ownership changes how protection should be designed.
              We evaluate coverage in the context of entity structure,
              income variability, key-person exposure, and continuity planning.
            </p>

            <Link to="/business-owners" className="service-link">
              See Business Strategy →
            </Link>
          </div>

        </div>

      </div>
    </section>
  )
}

export default ServicesGrid