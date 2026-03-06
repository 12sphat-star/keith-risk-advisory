import "../styles/components.css"

const FAQSection = () => {
  return (
    <section className="faq-section">

      <div className="faq-container">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-item">
          <h3>Is this a sales call?</h3>
          <p>
            No. The review is designed to evaluate your current health or life coverage,
            assess structural alignment, and determine whether adjustments are necessary.
            If your coverage is appropriately structured, that will be confirmed.
          </p>
        </div>

        <div className="faq-item">
          <h3>Is there a fee for the coverage review?</h3>
          <p>
            There is no cost for the initial review session.
            The purpose is clarity and alignment — not pressure or obligation.
          </p>
        </div>

        <div className="faq-item">
          <h3>Do you only work with business owners?</h3>
          <p>
            A primary focus is serving self-employed professionals and small business owners,
            but individuals and families across Virginia are also supported.
            Coverage strategy is tailored based on income structure and personal objectives.
          </p>
        </div>

        <div className="faq-item">
          <h3>What if my current coverage is already good?</h3>
          <p>
            If your current plan is structured appropriately,
            the review will simply confirm that.
            The goal is alignment and clarity — not unnecessary change.
          </p>
        </div>

        <div className="faq-item">
          <h3>What types of coverage are reviewed?</h3>
          <p>
            Reviews may include individual health plans,
            small group coverage, and life insurance strategies —
            depending on your situation and objectives.
          </p>
        </div>

        <div className="faq-item">
          <h3>Are you licensed in Virginia?</h3>
          <p>
            Yes. Services are provided to clients across Virginia,
            with a focus in Hampton Roads and surrounding communities.
          </p>
        </div>

      </div>

    </section>
  )
}

export default FAQSection