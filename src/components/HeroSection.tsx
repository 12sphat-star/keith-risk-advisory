import heroImage from "../assets/hero-executive.jpg"
import "../styles/layout.css"

const HeroSection = () => {
  return (
    <section className="hero">

      <div className="hero-text">
        <h1>
          When Your Income Is the Engine, Protection Shouldn’t Be an Afterthought.
        </h1>

        <p>
          Health and life insurance guidance for Virginia self-employed
          professionals and business owners — structured to protect income,
          strengthen business continuity, and support the families who depend on it.
        </p>

        <p className="hero-subnote">
          Licensed Health & Life Advisor | Serving Virginia Business Owners | Affiliated with USABG
        </p>

        <div className="hero-buttons">
          <a href="/schedule" className="primary-btn">
            Schedule a Coverage Review
          </a>

          <a href="/health-insurance" className="secondary-btn">
            Explore Coverage Options
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src={heroImage}
          alt="Executive planning discussion"
        />
      </div>

    </section>
  )
}

export default HeroSection