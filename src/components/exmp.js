 import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What happens after we sign the contract and make the payment?",
    answer:
      "Once the contract is signed and payment is confirmed, we begin onboarding immediately. A dedicated project manager is assigned, a kickoff call is scheduled, and timelines, goals, and next steps are aligned before moving into implementation.",
  },
  {
    question: "How long does onboarding take?",
    answer:
      "Onboarding typically takes 1–2 weeks depending on project complexity and stakeholder availability. This includes discovery, access setup, and roadmap finalization.",
  },
  {
    question: "What information do you need from us to begin?",
    answer:
      "We need business goals, Salesforce org access, current workflows, data and integration requirements, and key stakeholder contacts. We guide you through everything with a structured intake process.",
  },
  {
    question: "Will you help us identify optimization opportunities if we're unsure?",
    answer:
      "Yes. We assess your current Salesforce setup, identify gaps and inefficiencies, and recommend high-impact optimization opportunities aligned with best practices and your business goals.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Everything you need to know before we begin your Salesforce transformation.
        </p>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold">
                    ?
                  </span>
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                </div>

                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gray-500" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 pl-16 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
