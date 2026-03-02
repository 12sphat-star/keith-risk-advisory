import { useState } from "react"
import "../styles/layout.css"

const FAQSection = () => {
  const [active, setActive] = useState<number | null>(null)

  const toggle = (index: number) => {
    setActive(active === index ? null : index)
  }

  const faqs = [
    {
  question: "Can health insurance premiums be deducted as a self-employed business owner?",
  answer:
  "Deductibility can vary depending on business structure and income. We provide coverage guidance, and we recommend confirming tax treatment with your CPA or tax advisor."
},
    {
      question: "How much life insurance does a business owner need?",
      answer:
        "Coverage should reflect income replacement needs, business obligations, and family stability — not arbitrary multiples."
    },
    {
      question: "Is marketplace coverage my only option in Virginia?",
      answer:
        "Marketplace plans are one option. Business owners often have additional structured alternatives depending on eligibility and business setup."
    },
    {
      question: "When should I review my insurance coverage?",
      answer:
        "Major income changes, business growth, family expansion, or tax structure adjustments are ideal times to reassess coverage."
    }
  ]

  return (
    <section className="faq-section">
      <h2>Common Questions from Virginia Business Owners</h2>

      <div className="faq-container">
        {faqs.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggle(index)}>
              {item.question}
            </div>

            {active === index && (
              <div className="faq-answer">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQSection