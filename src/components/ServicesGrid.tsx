const ServicesGrid = () => {
  return (
    <section className="services-section">
      <div className="container">

        <h2>Coverage Areas</h2>

        <div className="services-grid">

          <div className="service-card">
            <h3>Individual Health Plans</h3>
            <p>
              Structured coverage for self-employed professionals
              and independent contractors throughout Virginia.
            </p>
          </div>

          <div className="service-card">
            <h3>Small Group Health Insurance</h3>
            <p>
              Health plan solutions for growing businesses
              seeking cost stability and structured benefit alignment.
            </p>
          </div>

          <div className="service-card">
            <h3>Term & Permanent Life Insurance</h3>
            <p>
              Income protection and long-term planning
              structured to support business continuity and family stability.
            </p>
          </div>

          <div className="service-card">
            <h3>Business Risk Review</h3>
            <p>
              Alignment of health and life coverage
              with operational exposure and financial risk considerations.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default ServicesGrid