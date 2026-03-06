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
            Experience includes roles in mortgage lending,
            underwriting, and risk management with institutions
            such as Bank of America, SunTrust, Wells Fargo, and TD Bank.
          </p>

          <p>
            That foundation informs a structured, analytical
            approach to health and life insurance strategy.
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

      </div>
    </>
  )
}

export default About