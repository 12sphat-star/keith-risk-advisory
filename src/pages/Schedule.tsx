import { Helmet } from "react-helmet-async"
import "../styles/layout.css"

const Schedule = () => {
  return (
    <>
      <Helmet>
        <title>
          Schedule a Coverage Review | KB Robertson Coverage | Virginia
        </title>
        <meta
          name="description"
          content="Schedule a structured health and life insurance coverage review for Virginia business owners and individuals. No pressure. No obligation. Just clarity."
        />
      </Helmet>

      <div className="schedule-page">

        <div className="schedule-intro">
          <h1>Schedule Your Coverage Review</h1>

          <p>
            This is a focused conversation designed to evaluate your current
            health and life coverage structure.
          </p>

          <p>
            The goal is alignment — not selling. If your coverage is properly
            structured, that will be confirmed. If adjustments make sense,
            options will be clearly outlined.
          </p>

          <ul>
            <li>✔ Review of current health & life coverage</li>
            <li>✔ Income structure discussion</li>
            <li>✔ Risk exposure evaluation</li>
            <li>✔ Clear next steps (if needed)</li>
          </ul>
        </div>

        {/* Replace this with your calendar embed */}
        <div className="schedule-calendar">
          <p style={{ textAlign: "center", marginTop: "40px" }}>
            Calendar Embed Goes Here
          </p>
        </div>

      </div>
    </>
  )
}

export default Schedule