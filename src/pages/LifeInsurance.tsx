import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import "../styles/components.css"
import lifeImage from "../assets/life-continuity.jpg"

const LifeInsurance = () => {
  return (
    <>
      <Helmet>
        <title>
          Life Insurance Strategy for Virginia Business Owners | The Fin Coach
        </title>
        <meta
          name="description"
          content="Life insurance planning aligned with income stability, family protection, and business continuity for Virginia business owners and individuals."
        />
      </Helmet>

      <div className="life-page">

        {/* HERO */}
        <section className="life-hero">
          <div className="life-hero-text">
            <h1>
              Life Insurance Structured for Income & Continuity
            </h1>

            <p>
              Life insurance is not just about death benefit —
              it is about income replacement, family stability,
              and long-term planning.
            </p>

            <p className="life-subnote">
              Serving Virginia business owners, professionals, and families.
            </p>
          </div>

          <div className="life-hero-image">
            <img
              src={lifeImage}
              alt="Long-term financial planning discussion with advisor"
            />
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section className="life-section">
          <h2>Designed For</h2>

          <ul>
            <li>Business Owners Protecting Income</li>
            <li>Families Planning Long-Term Stability</li>
            <li>Key Person & Buy-Sell Planning</li>
            <li>High-Income Professionals</li>
            <li>Self-Employed Individuals</li>
          </ul>
        </section>

        {/* WHAT WE STRUCTURE */}
        <section className="life-section light-bg">
          <h2>What We Structure</h2>

          <ul>
            <li>Term vs Permanent Strategy Alignment</li>
            <li>Income Replacement Analysis</li>
            <li>Business Continuity Planning</li>
            <li>Policy Design for Long-Term Sustainability</li>
            <li>Integration with Overall Financial Structure</li>
          </ul>
        </section>

        {/* WHY STRUCTURE MATTERS */}
        <section className="life-section">
          <h2>Why Structure Matters</h2>

          <p>
            The purpose of life insurance is not just protection —
            it is resilience.
          </p>

          <p>
            When structured properly, life coverage supports
            your income, strengthens family security,
            and protects long-term business planning.
          </p>
        </section>

        {/* CTA */}
        <section className="life-cta">
          <h3>Schedule a Structured Life Coverage Review</h3>

          <p>
            A focused conversation to evaluate alignment
            and ensure your protection strategy supports your goals.
            No pressure. No obligation.
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
    </>
  )
}

export default LifeInsurance