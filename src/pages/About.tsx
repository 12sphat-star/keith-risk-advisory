import headshot from "../assets/headshot.jpg"
import "../styles/components.css"

const About = () => {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <div className="about-hero">

        <div className="about-text">
          <h1>Experience. Structure. Perspective.</h1>

          <p>
            With more than two decades of experience in banking, lending,
            underwriting, and financial services, Keith Robertson approaches
            health and life insurance differently than traditional advisors.
          </p>

          <p>
            His background includes roles in mortgage lending, risk management,
            underwriting, and executive banking environments — including
            leadership experience within the Office of the President at Bank of America,
            and prior roles at SunTrust, Wells Fargo, and TD Bank.
          </p>

          <p>
            This experience shapes a structured, analytical approach to insurance —
            focused not on selling policies, but on evaluating alignment,
            exposure, and long-term stability.
          </p>
        </div>

        <div className="about-image">
          <img src={headshot} alt="Keith Robertson" />
        </div>

      </div>

      {/* PHILOSOPHY SECTION */}
      <div className="about-section">
        <h2>Structured Advisory Approach</h2>

        <p>
          Health and life insurance decisions impact income continuity,
          business stability, and family protection. Rather than focusing
          solely on premiums or product comparisons, each review considers
          structure, ownership, risk exposure, and long-term alignment.
        </p>

        <p>
          The goal is clarity — confirming when coverage is appropriate,
          identifying gaps when necessary, and ensuring decisions support
          both personal and business objectives.
        </p>
      </div>

      {/* CLIENT FOCUS SECTION */}
      <div className="about-section">
        <h2>Who Is Served</h2>

        <p>
          Primary focus includes Virginia business owners, self-employed
          professionals, and structured income earners. Individuals and
          families across the Commonwealth are also supported when aligned
          with a disciplined planning approach.
        </p>

        <p>
          Services are delivered with an emphasis on discretion,
          professionalism, and long-term relationship building —
          not transactional sales.
        </p>
      </div>

    </div>
  )
}

export default About