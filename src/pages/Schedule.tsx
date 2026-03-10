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
            This is a short, focused conversation designed to review your current
            health and life coverage and better understand your situation.
          </p>

          <p>
            The goal is clarity — not pressure. If your current coverage is
            properly structured, we will confirm that. If there may be
            opportunities for improvement, we will walk through them clearly and
            simply.
          </p>

          <ul>
            <li>✔ Review your current health and life coverage</li>
            <li>✔ Discuss your household, income, or business situation</li>
            <li>✔ Identify possible gaps or missed options</li>
            <li>✔ Leave with clear next steps, if needed</li>
          </ul>

          <p>
            This is not a long or complicated meeting — just a simple review to
            help determine whether your current coverage still makes sense.
          </p>
        </div>

        {/* CALENDAR EMBED */}
        <div className="schedule-calendar">
          <iframe
            src="https://b.12stoneboost.com/widget/booking/bGW5zlqar3C6EJakHhli"
            width="100%"
            height="700"
            style={{ border: "none" }}
            title="Schedule Appointment"
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default Schedule