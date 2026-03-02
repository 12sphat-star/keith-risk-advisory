import { Link } from "react-router-dom"

const LifeInsurance = () => {
  return (
    <div style={{ padding: "120px 120px 80px 120px", maxWidth: "1200px", margin: "0 auto" }}>

      <h1 style={{ fontSize: "42px", marginBottom: "24px" }}>
        Life Insurance for Income Protection & Business Continuity
      </h1>

      <p style={{ fontSize: "20px", lineHeight: "1.7", marginBottom: "40px", maxWidth: "820px" }}>
        Life insurance is not just about final expenses.
        For entrepreneurs and business owners in Virginia,
        it can serve as income protection, succession planning support,
        and a stabilizing financial tool for families.
      </p>

      <div style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          Who Should Consider Structured Life Coverage
        </h2>

        <ul style={{ fontSize: "18px", lineHeight: "1.8" }}>
          <li>✔ Business Owners with Dependents</li>
          <li>✔ Self-Employed Professionals</li>
          <li>✔ Partners in Multi-Owner Businesses</li>
          <li>✔ Families Relying on a Primary Income Earner</li>
          <li>✔ Individuals Planning Long-Term Wealth Transfer</li>
        </ul>
      </div>

      <div style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          Coverage Types We Review With You
        </h2>

        <ul style={{ fontSize: "18px", lineHeight: "1.8" }}>
          <li>• Term Life Insurance</li>
          <li>• Permanent Life Insurance</li>
          <li>• Policies with Living Benefits</li>
          <li>• Business Continuity Structures</li>
          <li>• Buy-Sell Agreement Funding</li>
        </ul>
      </div>

      <div style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          Planning with Intent
        </h2>

        <p style={{ fontSize: "18px", lineHeight: "1.7", maxWidth: "820px" }}>
          The right life insurance structure depends on your income,
          liabilities, family needs, and long-term goals.
          We evaluate options based on alignment —
          ensuring protection is appropriate, sustainable,
          and integrated into your broader financial strategy.
        </p>
      </div>

      <div style={{ padding: "40px", background: "#f3f4f6", borderRadius: "12px" }}>
        <h3 style={{ fontSize: "24px", marginBottom: "16px" }}>
          Schedule a Protection Review
        </h3>

        <p style={{ fontSize: "18px", marginBottom: "24px" }}>
          We’ll review your current coverage (if any),
          identify gaps, and determine appropriate next steps.
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
          Book Consultation
        </Link>
      </div>

    </div>
  )
}

export default LifeInsurance