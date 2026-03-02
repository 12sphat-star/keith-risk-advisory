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
          professionals and small business owners — designed to protect income,
          support business stability, and secure the families who depend on it.
        </p>

        <div className="hero-buttons">
          <a href="/schedule" className="primary-btn">
            Schedule a Strategy Call
          </a>
          <a href="/health-insurance" className="secondary-btn">
            Explore Coverage Options
          </a>
        </div>
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