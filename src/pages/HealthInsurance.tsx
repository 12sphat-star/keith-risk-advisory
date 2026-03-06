import { Link } from "react-router-dom"
import "../styles/components.css"
import healthImage from "../assets/health-review.jpg"

const HealthInsurance = () => {
  return (
    <div className="health-page">

      {/* HERO */}
      <section className="health-hero">
        <div className="health-hero-text">
          <h1>
            Health Insurance Structured for Virginia Business Owners
          </h1>

          <p>
            If you run your own business, you are responsible for protecting
            your income, your family, and your operational stability.
            Coverage should be structured — not guessed.
          </p>

          <p className="health-subnote">
            Serving self-employed professionals and small business owners across Virginia.
          </p>
        </div>

       <div className="health-hero-image">
  <img src={healthImage} alt="Health coverage strategy review" />
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="health-section">
        <h2>Designed For</h2>

        <ul>
          <li>Self-Employed Professionals</li>
          <li>LLC & S-Corp Owners</li>
          <li>1099 Contractors</li>
          <li>Small Teams (2–25 Employees)</li>
          <li>Hampton Roads & Virginia Businesses</li>
        </ul>
      </section>

      {/* WHAT WE REVIEW */}
      <section className="health-section light-bg">
        <h2>What We Evaluate</h2>

        <ul>
          <li>Marketplace vs Private Plan Alignment</li>
          <li>Virginia Network Strength</li>
          <li>Deductible & Exposure Analysis</li>
          <li>Tax Coordination (with your CPA)</li>
          <li>Long-Term Coverage Stability</li>
        </ul>
      </section>

      {/* WHY STRUCTURE MATTERS */}
      <section className="health-section">
        <h2>Why Structure Matters</h2>

        <p>
          The goal is not the most expensive plan —
          and not the cheapest.
          It is alignment with your income, family needs,
          and business structure.
        </p>

        <p>
          A structured review confirms whether your current coverage
          is properly aligned — and if it is, that is validated.
        </p>
      </section>

      {/* CTA */}
      <section className="health-cta">
        <h3>Schedule a Structured Coverage Review</h3>

        <p>
          A brief conversation to evaluate alignment.
          No pressure. No obligation.
        </p>

        <div className="health-cta-buttons">
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

export default HealthInsurance