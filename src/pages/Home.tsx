import HeroSection from "../components/HeroSection"
import ServicesGrid from "../components/ServicesGrid"
import IncomeStatement from "../components/IncomeStatement"
import CTASection from "../components/CTASection"
import { Helmet } from "react-helmet-async"


const Home = () => {
  return (
    
    <>

<Helmet>
  <title>Structured Health & Life Insurance | Virginia | The Fin Coach</title>
  <meta
    name="description"
    content="Structured health and life insurance advisory for Virginia business owners and individuals. Serving Hampton Roads and surrounding communities."
  />
</Helmet>
      {/* HERO */}
      <HeroSection />
      {/* CREDIBILITY STRIP */}
      <section className="credibility-strip">
        <div className="container">
          <p>
            20+ Years in Banking, Lending & Risk Management |
            Structured Health & Life Planning for Business Owners & Individuals
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <ServicesGrid />

      {/* PROCESS */}
      <section className="process-section">
        <div className="container">
          <h2>What Happens During a Coverage Review</h2>

          <div className="process-grid">

            <div className="process-step">
              <h3>1. Quick Overview</h3>
              <p>
                We review your current coverage and basic income structure
                to understand how everything is set up today.
              </p>
            </div>

            <div className="process-step">
              <h3>2. Identify Gaps or Strengths</h3>
              <p>
                We determine whether your current structure is aligned —
                or if there are exposure areas worth improving.
              </p>
            </div>

            <div className="process-step">
              <h3>3. Clear Next Steps</h3>
              <p>
                If changes make sense, we outline options.
                If your structure is solid, we confirm it.
                No pressure either way.
              </p>
            </div>

          </div>

          <div className="process-clarity">
            <p>The goal is clarity — not selling.</p>
          </div>
        </div>
      </section>

      {/* COMMON MISTAKES */}
      <section className="mistakes-section">
        <div className="container">

          <h2>Common Coverage Mistakes Business Owners Make</h2>

          <div className="mistakes-grid">

            <div className="mistake-card">
              <h3>Choosing Based on Premium Alone</h3>
              <p>
                The lowest monthly cost often leads to higher long-term exposure.
                Deductibles, network limitations, and out-of-pocket risk matter.
              </p>
            </div>

            <div className="mistake-card">
              <h3>Separating Insurance From Business Strategy</h3>
              <p>
                Coverage decisions affect taxes, income stability,
                and long-term business continuity — yet they’re often treated as isolated purchases.
              </p>
            </div>

            <div className="mistake-card">
              <h3>Never Re-Evaluating After Growth</h3>
              <p>
                As income changes and businesses scale,
                coverage structures should evolve. Many don’t.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* INCOME STABILITY BAND */}
      <IncomeStatement />

<section className="faq-section">
  <div className="container">
    <h2>Frequently Asked Questions</h2>

    <div className="faq-item">
      <h3>Do I need a coverage review if I already have insurance?</h3>
      <p>
        Yes. A review confirms whether your current health and life coverage
        aligns with your income structure, business model, and long-term goals.
      </p>
    </div>

    <div className="faq-item">
      <h3>Do you only work with business owners?</h3>
      <p>
        While many clients are business owners and self-employed professionals,
        individuals and families across Virginia also benefit from structured reviews.
      </p>
    </div>

    <div className="faq-item">
      <h3>Is there an obligation to change coverage?</h3>
      <p>
        No. The purpose of the review is clarity. If your structure is sound,
        that is confirmed. If adjustments are needed, options are outlined.
      </p>
    </div>
  </div>
</section>
      {/* FINAL CTA */}
      <CTASection />
    </>
  )
}

export default Home