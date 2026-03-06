import "../styles/layout.css"

const Schedule = () => {
  return (
    <div className="schedule-page">

      <div className="schedule-intro">
        <h1>Schedule Your Coverage Review</h1>

        <p>
          This is a focused conversation designed to evaluate your current
          health and life coverage structure.
        </p>

        <ul>
          <li>✔ Review current plan alignment</li>
          <li>✔ Identify potential exposure or gaps</li>
          <li>✔ Clarify next steps (if any)</li>
        </ul>

        <p>
          If your structure is solid, we confirm it.
          If improvements make sense, we outline options.
        </p>

        <p className="schedule-reassurance">
          No obligation. No pressure. Just clarity.
        </p>
      </div>

      <div className="schedule-calendar">
        <iframe
          src="https://b.12stoneboost.com/widget/booking/qz0erNCXziJlA89kT7pd"
          style={{ width: "100%", height: "800px", border: "none" }}
          title="Schedule Appointment"
        />
      </div>

    </div>
  )
}

export default Schedule