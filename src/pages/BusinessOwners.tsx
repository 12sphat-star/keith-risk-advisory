import { Link } from "react-router-dom"

const BusinessOwners = () => {
  return (
    <div style={{ padding: "120px 120px 80px 120px", maxWidth: "1200px", margin: "0 auto" }}>

      <h1 style={{ fontSize: "42px", marginBottom: "24px" }}>
        Insurance Strategy for Virginia Business Owners
      </h1>

      <p style={{ fontSize: "20px", lineHeight: "1.7", marginBottom: "40px", maxWidth: "820px" }}>
        When you own the business, you are the infrastructure.
        Your health, your income, and your planning decisions directly impact
        your employees, your clients, and your family.
      </p>

      <div style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          What Makes Business Coverage Different
        </h2>

        <ul style={{ fontSize: "18px", lineHeight: "1.8" }}>
          <li>✔ Income is often variable</li>
          <li>✔ Tax structure impacts coverage decisions</li>
          <li>✔ Employees may rely on your stability</li>
          <li>✔ Partnerships require contingency planning</li>
          <li>✔ Growth changes protection needs</li>
        </ul>
      </div>

      <div style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          Structured Protection Approach
        </h2>

        <p style={{ fontSize: "18px", lineHeight: "1.7", maxWidth: "820px" }}>
          We evaluate health and life insurance through a structural lens —
          aligning coverage with ownership structure, income flow,
          and long-term business stability.
        </p>

        <p style={{ fontSize: "18px", lineHeight: "1.7", maxWidth: "820px", marginTop: "20px" }}>
          For certain business owners, properly designed policies can also provide
          long-term capital flexibility — but only when appropriate and aligned
          with broader financial goals.
        </p>
      </div>

      <div style={{ padding: "40px", background: "#f3f4f6", borderRadius: "12px" }}>
        <h3 style={{ fontSize: "24px", marginBottom: "16px" }}>
          Schedule a Business Coverage Strategy Call
        </h3>

        <p style={{ fontSize: "18px", marginBottom: "24px" }}>
          This session focuses on identifying risk exposure,
          protection gaps, and structural alignment.
        </p>

        <Link 
          to="/schedule"
          style={{
            padding: "14px 28px",
            background: "#1e3a8a",
            color: "white",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "600"
          }}
        >
          Book Strategy Call
        </Link>
      </div>

    </div>
  )
}

export default BusinessOwners