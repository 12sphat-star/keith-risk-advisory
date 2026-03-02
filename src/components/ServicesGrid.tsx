import "../styles/layout.css"

const ServicesGrid = () => {
  return (
    <section className="services-grid">
      <div className="service-card">
        <h3>Health Insurance Strategy</h3>
        <p>
          Structured coverage guidance for self-employed professionals,
          families, and small business teams across Virginia.
        </p>
      </div>

      <div className="service-card">
        <h3>Life Insurance Planning</h3>
        <p>
          Income protection and family security solutions designed for
          business owners and professionals.
        </p>
      </div>

      <div className="service-card">
        <h3>Insurance for Business Owners</h3>
        <p>
          Coverage alignment built around ownership structure, income flow,
          and long-term stability.
        </p>
      </div>
    </section>
  )
}

export default ServicesGrid