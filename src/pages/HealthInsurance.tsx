import { Link } from "react-router-dom"

const HealthInsurance = () => {
  return (
    <div style={{ padding: "120px 120px 80px 120px", maxWidth: "1200px", margin: "0 auto" }}>

      <h1 style={{ fontSize: "42px", marginBottom: "24px" }}>
        Health Insurance for Virginia Business Owners & Self-Employed Professionals
      </h1>

      <p style={{ fontSize: "20px", lineHeight: "1.7", marginBottom: "40px", maxWidth: "820px" }}>
        If you run your own business, you don’t have HR handling your coverage.
        You are responsible for protecting yourself, your family, and your income.
        We help Virginia entrepreneurs evaluate private health plans, marketplace options,
        and strategic coverage structures designed for stability — not guesswork.
      </p>

      <div style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          Who This Is Designed For
        </h2>

        <ul style={{ fontSize: "18px", lineHeight: "1.8" }}>
          <li>✔ Self-Employed Individuals</li>
          <li>✔ LLC & S-Corp Owners</li>
          <li>✔ 1099 Contractors</li>
          <li>✔ Small Teams (2–25 employees)</li>
          <li>✔ Hampton Roads & Virginia Based Businesses</li>
        </ul>
      </div>

      <div style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          What We Evaluate With You
        </h2>

        <ul style={{ fontSize: "18px", lineHeight: "1.8" }}>
          <li>• Marketplace vs Private Coverage</li>
          <li>• Network Strength in Virginia</li>
          <li>• Deductible & Out-of-Pocket Exposure</li>
          <li>• Tax Considerations (in coordination with your tax professional)</li>
          <li>• Long-Term Stability of Coverage</li>
        </ul>
      </div>

      <div style={{ marginBottom: "60px" }}>
  <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
    Why Clarity Matters
  </h2>

  <p style={{ fontSize: "18px", lineHeight: "1.7", maxWidth: "820px" }}>
    Health coverage isn’t about buying the most expensive plan —
    and it’s not about choosing the cheapest one either.
    It’s about selecting coverage that fits your income,
    your family needs, and your business structure.
    The goal is alignment and confidence,
    not overpaying and not under-protecting.
  </p>
</div>

      <div style={{ padding: "40px", background: "#f3f4f6", borderRadius: "12px" }}>
        <h3 style={{ fontSize: "24px", marginBottom: "16px" }}>
          Schedule a Virginia Coverage Review
        </h3>

        <p style={{ fontSize: "18px", marginBottom: "24px" }}>
          We’ll review your current coverage, income structure, and risk exposure,
          and determine if adjustments are needed.
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

export default HealthInsurance