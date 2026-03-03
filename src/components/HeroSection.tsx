import "../styles/layout.css"

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text">

        <h1>
          Structured Health & Life Insurance for Virginia Business Owners
        </h1>

        <p>
          I work with self-employed professionals and small business owners
          across Virginia to structure health and life insurance properly —
          protecting income, strengthening business continuity, and supporting
          the families who depend on it.
        </p>

        <div className="hero-buttons">
          <a href="/schedule" className="primary-btn">
            Schedule a Coverage Review
          </a>
          <a href="/health-insurance" className="secondary-btn">
            View Health Plan Options
          </a>
         
        </div>
<section className="trust-strip">
  <div className="container">
    <p>
      Licensed Health & Life Advisor | Serving Virginia Business Owners |
      Affiliated with USABG
    </p>
  </div>
</section>
      </div>

      <div className="hero-image">
        <div className="image-placeholder">
          Executive Office Image Here
        </div>
      </div>
    </section>
  )
}

export default HeroSection