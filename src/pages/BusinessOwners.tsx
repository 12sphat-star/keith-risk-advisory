import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import "../styles/components.css"
import businessImage from "../assets/business-strategy.jpg"

const BusinessOwners = () => {
  return (
    <>
      <Helmet>
        <title>
          Insurance Strategy for Business Owners in Virginia | The Fin Coach
        </title>
        <meta
          name="description"
          content="Structured health and life insurance advisory for Virginia business owners. Align coverage with income, taxes, entity structure, and long-term continuity planning."
        />
      </Helmet>

      <div className="business-page">

        {/* HERO */}
        <section className="business-hero">
          <div className="business-hero-text">
            <h1>
              Structured Insurance Strategy for Business Owners
            </h1>

            <p>
              Your coverage should align with how your business generates income,
              how it is taxed, and how it continues if something unexpected happens.
            </p>

            <p className="business-subnote">
              Serving Hampton Roads and Virginia business owners.
            </p>
          </div>

          <div className="business-hero-image">
            <img
              src={businessImage}
              alt="Advisor reviewing business continuity and insurance strategy"
            />
          </div>
        </section>

        {/* WHAT WE REVIEW */}
        <section className="business-section">
          <h2>What We Review</h2>

          <ul>
            <li>Owner Compensation & Income Stability</li>
            <li>Entity Structure (LLC, S-Corp, C-Corp)</li>
            <li>Health Coverage Alignment</li>
            <li>Life Insurance for Continuity & Key Person Protection</li>
            <li>Exposure Gaps in Scaling Businesses</li>
          </ul>
        </section>

        {/* COMMON MISTAKES */}
        <section className="business-section light-bg">
          <h2>Common Structural Gaps</h2>

          <ul>
            <li>Choosing coverage based only on premium</li>
            <li>Separating insurance decisions from tax strategy</li>
            <li>Failing to adjust coverage as revenue grows</li>
            <li>Ignoring business continuity planning</li>
            <li>Leaving income protection exposed</li>
          </ul>
        </section>

        {/* WHY STRUCTURE MATTERS */}
        <section className="business-section">
          <h2>Why Structure Matters</h2>

          <p>
            Insurance decisions affect taxes, income stability,
            and long-term business continuity.
          </p>

          <p>
            A structured review ensures your protection strategy
            supports the way your business actually operates.
          </p>
        </section>

        {/* CTA */}
        <section className="business-cta">
          <h3>Schedule a Structured Business Coverage Review</h3>

          <p>
            A focused discussion to confirm alignment or identify areas for improvement.
            No pressure. No obligation.
          </p>

          <div className="business-cta-buttons">
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

export default BusinessOwners