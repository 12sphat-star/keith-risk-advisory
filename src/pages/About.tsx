import { Helmet } from "react-helmet-async"
import "../styles/components.css"
import headshot from "../assets/headshot.jpg"

const About = () => {
  return (
    <>
      <Helmet>
        <title>
          About Keith Robertson | The Fin Coach | Virginia Insurance Advisor
        </title>
        <meta
          name="description"
          content="Keith Robertson brings 20+ years in banking, underwriting, lending, and financial services to structured health and life insurance advisory for Virginia business owners and individuals."
        />
      </Helmet>

      <div className="about-page">

        <section className="about-hero">
          <div className="about-text">
            <h1>
              Advisory Built on Risk, Structure, and Experience
            </h1>

            <p>
              With more than two decades in banking, underwriting,
              risk management, and financial services, I approach
              insurance differently.
            </p>

            <p>
              Coverage decisions are not transactions —
              they are structural decisions affecting income,
              tax positioning, and long-term stability.
            </p>
          </div>

    <div className="about-image">
                  <img
              src={headshot}
              alt="Keith Robertson - The Fin Coach"
            />
          </div>
        </section>

      <section className="about-section">
  <h2>Professional Background</h2>

  <p>
    Experience includes roles in mortgage lending, SBA commercial lending,
    underwriting, and risk management with institutions such as Bank of America,
    SunTrust, Wells Fargo, and TD Bank.
  </p>

  <p>
    That foundation — built in credit analysis, capital structuring, and
    risk evaluation — informs a structured, analytical approach to
    health and life insurance strategy.
  </p>

  <p>
    Coverage decisions are not viewed as isolated transactions,
    but as components of a broader financial structure affecting
    income stability, tax positioning, and long-term protection.
  </p>
</section>

        <section className="about-section">
          <h2>Who I Work With</h2>

          <p>
            Business owners, self-employed professionals,
            and individuals across Hampton Roads and
            throughout Virginia seeking clarity —
            not pressure.
          </p>
        </section>
<section className="about-cta">
  <h3>Ready for a Structured Coverage Review?</h3>

  <p>
    Whether you are a business owner or an individual,
    clarity begins with a focused conversation.
  </p>

  <div className="about-cta-buttons">
    <a href="/schedule" className="cta-primary">
      Schedule Review
    </a>

    <a href="tel:7572804120" className="cta-secondary">
      Call 757-280-4120
    </a>
  </div>
</section>
      </div>
    </>
  )
}

export default About