import React from "react";
import { ArrowRight, Search, Code2, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Search,
    title: "Salesforce Scans & Health Checks",
    desc: "Deep-dive analysis of your current org to identify optimization opportunities.",
  },
  {
    icon: Code2,
    title: "Project-Based Engagements",
    desc: "Custom development and end-to-end implementations tailored to your needs.",
  },
  {
    icon: ShieldCheck,
    title: "Managed Services & Support",
    desc: "Ongoing support models for Salesforce and cloud environments.",
  },
];

const ReadinessReview = () => {
  return (
    <section
      className="px-6 sm:px-12 lg:px-24 py-16
bg-sky-50
 dark:bg-gradient-to-br dark:from-zinc-950 dark:via-neutral-900 dark:to-purple-950
"
    >
      <div
        className="max-w-7xl mx-auto rounded-[40px] px-10 py-14 grid lg:grid-cols-2 gap-14 items-center shadow-xl
        bg-white dark:bg-slate-900"
      >
        <div>
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6
            bg-blue-50 text-blue-600
            dark:bg-blue-500/10 dark:text-blue-400"
          >
            ☎ Free Consultation
          </span>

          <h2 className="text-5xl font-extrabold leading-tight text-gray-900 dark:text-gray-100">
            System
            <span className="block text-blue-600 dark:text-blue-400">
              Readiness
            </span>
            <span className="block text-blue-600 dark:text-blue-400">
              Review
            </span>
          </h2>

          <p className="mt-6 text-lg max-w-md text-gray-600 dark:text-gray-400">
            Meet with an expert and get your Salesforce scan as key entry
            points. Start your journey today.
          </p>

          <button
            className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full
            bg-gradient-to-r from-blue-600 to-cyan-600
            dark:from-blue-500 dark:to-cyan-500
            text-white font-semibold shadow-lg hover:opacity-90 transition"
          >
            Book a Free Consultation
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="space-y-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex gap-5 items-start p-6 rounded-2xl transition
                  bg-gradient-to-r from-gray-50 to-blue-50
                  dark:from-slate-800 dark:to-slate-800
                  shadow-sm hover:shadow-md"
              >
                <div
                  className="h-12 w-12 flex items-center justify-center rounded-xl
                  bg-white dark:bg-slate-700 shadow"
                >
                  <Icon className="text-blue-600 dark:text-blue-400" />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ReadinessReview;
