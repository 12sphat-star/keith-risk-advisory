import { Link } from "react-router-dom"
import "../styles/components.css"

const LifeInsurance = () => {
  return (
    <div className="life-page">

      {/* HERO */}
      <section className="life-hero">
        <div className="life-hero-text">
          <h1>
            Life Insurance Structured for Income Protection & Business Stability
          </h1>

          <p>
            For business owners and self-employed professionals,
            life insurance is not just personal protection —
            it safeguards income continuity, family stability,
            and long-term planning objectives.
          </p>

          <p className="life-subnote">
            Serving entrepreneurs and small business owners across Virginia.
          </p>
        </div>

        <div className="life-hero-image">
          <div className="image-placeholder">
            Executive Planning Image
          </div>
        </div>
      </section>

      {/* WHO IT’S FOR */}
      <section className="life-section">
        <h2>Designed For</h2>

        <ul>
          <li>Business Owners with Income Dependents</li>
          <li>Self-Employed Professionals</li>
          <li>Partnership & Buy-Sell Planning</li>
          <li>Families Dependent on Business Revenue</li>
        </ul>
      </section>

      {/* WHAT WE STRUCTURE */}
      <section className="life-section light-bg">
        <h2>What We Structure</h2>

        <ul>
          <li>Term Life for Income Replacement</li>
          <li>Permanent Coverage for Long-Term Planning</li>
          <li>Business Continuity Protection</li>
          <li>Alignment with Estate & Financial Planning Goals</li>
        </ul>
      </section>

      {/* WHY STRUCTURE MATTERS */}
      <section className="life-section">
        <h2>Why Structure Matters</h2>

        <p>
          Life insurance should reflect your income level,
          business exposure, and long-term objectives.
          The wrong structure can create unnecessary cost
          or leave critical gaps.
        </p>

        <p>
          A structured review ensures coverage supports
          your overall financial position — not just a policy number.
        </p>
      </section>

      {/* CTA */}
      <section className="life-cta">
        <h3>Schedule a Structured Life Coverage Review</h3>

        <p>
          A focused conversation to evaluate alignment.
          No obligation. No pressure.
        </p>

        <div className="life-cta-buttons">
          <Link to="/schedule" className="cta-primary">
            Schedule Review
          </Link>

          <a href="tel:7572804120" className="cta-secondary">
            Call 757-280-4120
          </a>
        </div>
      </section>

    </div>
  )
}

export default LifeInsurance