import React, { useState } from "react";

const ContactSection5 = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-white py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-3xl font-semibold text-white text-tight">
            Hi This Is VeDaa
          </h1>

          <p className="mt-6 text-lg text-slate-300">
            Have a question, an idea, or a project in mind? We're always open to
            meaningful conversations and new opportunities.
          </p>

          <div
            className={`mt-6 overflow-hidden transition-all duration-500 ease-in-out ${
              expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-slate-300">
              We work closely with individuals, startups, and businesses to
              understand their goals and challenges. Every conversation begins
              with listening, clarity, and a focus on long-term value.
            </p>

            <p className="mt-4 text-slate-300">
              Whether yo're exploring possibilities or ready to move forward,
              we're here to guide the next step.
            </p>
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-8 inline-flex items-center gap-2 text-base font-medium text-white underline-offset-4 hover:underline transition border rounded-xl px-2 py-2 border-blue-900"
          >
            {expanded ? " Show More" : "Learn More" }    

          </button>
        </div>
      </section>
    </>
  );
};

export default ContactSection5;
