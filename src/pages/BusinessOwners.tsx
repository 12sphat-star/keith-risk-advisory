import { Link } from "react-router-dom"
import businessHero from "../assets/business-strategy.jpg"
import "../styles/components.css"

const BusinessOwners = () => {
  return (
    <div className="business-page">

      {/* HERO */}
      <div className="business-hero">

        <div className="business-hero-text">
          <h1>
            Structured Insurance Planning for Virginia Business Owners
          </h1>

          <p>
            When you own the business, you are the infrastructure.
            Your health, your income, and your protection decisions directly
            impact employees, clients, and family stability.
          </p>

          <p className="sub-text">
            Serving small business owners and entrepreneurs across Virginia.
          </p>
        </div>

        <div className="business-hero-image">
          <img
            src={businessHero}
            alt="Business strategy presentation"
          />
        </div>

      </div>

      {/* WHAT MAKES IT DIFFERENT */}
      <section className="business-section">
        <h2>What Makes Business Coverage Different</h2>

        <ul>
          <li>Variable income structures</li>
          <li>Tax treatment affecting plan decisions</li>
          <li>Employees dependent on operational continuity</li>
          <li>Partnership and buy-sell considerations</li>
          <li>Growth-driven changes in exposure</li>
        </ul>
      </section>

      {/* STRUCTURED APPROACH */}
      <section className="business-section">
        <h2>Structured Protection Approach</h2>

        <p>
          Coverage is evaluated through ownership structure,
          income flow, and long-term business stability —
          not just premium comparison.
        </p>

        <p>
          For certain business owners, properly designed policies
          can provide long-term capital flexibility —
          when aligned with broader financial strategy.
        </p>
      </section>

      {/* CTA */}
      <section className="business-cta">
        <h3>Schedule a Business Coverage Strategy Call</h3>

        <p>
          This session focuses on identifying risk exposure,
          protection gaps, and structural alignment.
        </p>

        <Link to="/schedule" className="cta-primary">
          Book Strategy Call
        </Link>
      </section>

    </div>
  )
}

export default BusinessOwners