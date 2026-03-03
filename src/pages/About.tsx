

const About = () => {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <div className="about-hero">

        <div className="about-text">
          <h1>Banking-Level Risk Experience Applied to Insurance</h1>

          <p>
            For over twenty years, I worked inside major financial institutions
            evaluating underwriting decisions, risk exposure, and financial structure.
            Today, I apply that same institutional lens to health and life insurance
            planning for business owners across Virginia.
          </p>

          <p>
            Insurance is not a product discussion.
            It is a structural decision that affects income stability,
            business continuity, and long-term financial positioning.
          </p>
        </div>

        <div className="about-image">
  <div style={{
    width: "100%",
    maxWidth: "380px",
    height: "420px",
    backgroundColor: "#EEF1F6",
    borderRadius: "8px"
  }}></div>
</div>

      </div>

      {/* EXPERIENCE SECTION */}
      <section className="about-section">
        <h2>Institutional Background</h2>
        <p>
          My professional background includes serving within Bank of America
          in the Office of the President, working as a Mortgage Loan Officer
          with SunTrust and Wells Fargo, underwriting risk at TD Bank,
          and operating my own brokerage prior to the financial crisis.
        </p>

        <p>
          Across those roles, the responsibility was consistent:
          evaluate risk, analyze exposure, and structure decisions
          that protect long-term stability.
        </p>
      </section>

      {/* INSURANCE FOCUS SECTION */}
      <section className="about-section">
        <h2>How That Experience Changes the Insurance Conversation</h2>
        <p>
          Most insurance conversations center on premiums.
          My approach centers on exposure.
        </p>

        <p>
          Health coverage impacts cash flow.
          Life insurance impacts continuity.
          Both affect how resilient your business and family remain
          under unexpected events.
        </p>

        <p>
          Coverage should be structured with the same discipline
          used in banking risk analysis — measured, aligned, and sustainable.
        </p>
      </section>

      {/* WHO I SERVE */}
      <section className="about-section">
        <h2>Who I Work With</h2>
        <p>
          I work primarily with entrepreneurs, contractors, professionals,
          and business owners in Hampton Roads and throughout Virginia.
          Individuals who understand that income is the engine,
          and protection must be positioned accordingly.
        </p>
      </section>

      {/* CTA */}
      <section className="about-section">
        <a href="/schedule" className="cta-button">
          Schedule a Coverage Review
        </a>
      </section>

    </div>
  )
}

export default About