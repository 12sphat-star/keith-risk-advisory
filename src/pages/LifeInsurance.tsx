import { Link } from "react-router-dom"
import "../styles/components.css"
import lifeImage from "../assets/life-continuity.jpg"

const LifeInsurance = () => {
  return (
    <div className="life-page">

      {/* HERO */}
      <section className="life-hero">
        <div className="life-hero-text">
          <h1>
            Life Insurance Structured for Business Continuity
          </h1>

          <p>
            For business owners, life insurance is more than just personal protection —
            it is operational protection. If something happens to you,
            the business must still function.
          </p>

          <p className="life-subnote">
            Serving Virginia entrepreneurs and small business owners.
          </p>
        </div>

        <div className="life-hero-image">
  <img src={lifeImage} alt="Business continuity planning discussion" />

        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="life-section">
        <h2>Why Business Continuity Planning Matters</h2>

        <ul>
          <li>Income disruption impacts operations immediately</li>
          <li>Employees and partners rely on structural stability</li>
          <li>Outstanding debt and obligations remain</li>
          <li>Ownership transitions require funding</li>
          <li>Family and business interests must stay aligned</li>
        </ul>
      </section>

      {/* STRUCTURED APPROACH */}
      <section className="life-section light-bg">
        <h2>Structured Policy Design</h2>

        <p>
          Policies are evaluated based on ownership structure,
          income flow, and long-term objectives —
          not simply premium comparison.
        </p>

        <p>
          In certain cases, properly designed life insurance
          can provide strategic flexibility and long-term capital access,
          when aligned appropriately with broader financial planning.
        </p>
      </section>

      {/* BLENDED FAMILY PROTECTION */}
      <section className="life-section">
        <h2>Family Protection Remains Central</h2>

        <p>
          While business continuity is critical,
          protection ultimately extends to the family.
          Structured life insurance ensures that personal stability
          remains intact alongside business protection.
        </p>
      </section>

      {/* CTA */}
      <section className="life-cta">
        <h3>Schedule a Continuity & Coverage Review</h3>

        <p>
          A structured discussion to evaluate protection,
          exposure, and long-term alignment.
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