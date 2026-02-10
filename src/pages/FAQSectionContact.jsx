
import React from 'react'


  import { useState } from "react";
import { Plus, Minus } from "lucide-react";
 const faqs = [
  {
    question: "What happens after we submit the contact form?",
    answer:
      "Once you submit the form, our team reviews your request and responds within one business day. If needed, we’ll schedule a discovery call to understand your goals and next steps.",
  },
  {
    question: "How quickly can you start working with us?",
    answer:
      "We typically begin within a few days after alignment. Project kickoff timelines depend on scope, availability, and complexity, which we confirm during the initial call.",
  },
  {
    question: "What information should we include in our message?",
    answer:
      "A brief overview of your requirements, goals, and any relevant timelines is enough. You don’t need to prepare anything detailed—we’ll guide you through the rest.",
  },
  {
    question: "Do you work with international or remote clients?",
    answer:
      "Yes. We collaborate with clients globally and are experienced in working across time zones with distributed teams.",
  },
  {
    question: "Is our information kept confidential?",
    answer:
      "Absolutely. All information shared with us is treated as confidential and used only to evaluate and respond to your inquiry.",
  },
];


const FAQSectionContact = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20
      bg-gradient-to-b from-blue-50 to-white
      dark:bg-gradient-to-br dark:from-zinc-950 dark:via-slate-900 dark:to-teal-950">
      
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">
          Frequently Asked{" "}
          <span className="text-blue-600 dark:text-teal-400">Questions</span>
        </h2>

        <p className="text-center mb-12 text-gray-600 dark:text-gray-400">
          Everything you need to know before we begin your Salesforce
          transformation.
        </p>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border transition
                bg-white border-gray-100 shadow-sm
                dark:bg-slate-900 dark:border-slate-800 dark:shadow-none"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full font-semibold
                    bg-blue-100 text-blue-600
                    dark:bg-teal-500/10 dark:text-teal-400">
                    ?
                  </span>

                  <span className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    {faq.question}
                  </span>
                </div>

                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 pl-16 leading-relaxed
                  text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSectionContact;

