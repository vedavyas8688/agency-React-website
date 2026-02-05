 import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const sidebarItems = [
  "Salesforce Clouds",
  "Salesforce AI",
  "Salesforce Consulting",
  "Development & DevOps",
  "Consulting & Support",
   "Testing & Quality",
];

const capabilitiesData = {
  "Salesforce Clouds": [
    "Sales Cloud",
    "Service Cloud",
    "Marketing Cloud",
    "Data Cloud",
    "Commerce Cloud",
    "Field Service",
    "Revenue Cloud",
    "Health Cloud",
  ],
  "Salesforce AI": [
    "Einstein AI",
    "Predictive Analytics",
    "AI Automation",
    "Generative AI",
    "AI Chatbots",
    "Personalization Engine",
  ],
  "Salesforce Consulting": [
    "Implementation",
    "Migration",
    "Customization",
    "Integration",
    "Optimization",
    "Support & Maintenance",
  ],
  "Development & DevOps": [
    "Custom Development",
    "CI/CD Pipelines",
    "DevOps Automation",
    "Cloud Infrastructure",
    "Monitoring & Scaling",
  ],
    "Testing & Quality": [
    "Unit Testing",
    "Salesforce Test Classes",
    "Jest",
    "Automation Testing",
    "Code Review & Optimization",
  ],

  "Consulting & Support": [
    "Requirement Analysis",
    "System Architecture",
    "Performance Optimization",
    "Maintenance & Support",
    "User Training",
  ],
};

const Capabilities = () => {
  const [activeTab, setActiveTab] = useState("Salesforce Clouds");

  return (
    <section className="bg-sky-50 dark:bg-gray-950 px-6 sm:px-12 lg:px-24  py-6">
      <h2 className="text-center text-4xl font-extrabold text-gray-900 dark:text-white mb-14">
        Tech Capabilities Driving Digital Transformation
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
        <aside className="rounded-2xl bg-gradient-to-b from-blue-600 to-indigo-600 p-6 shadow-xl">
          <ul className="space-y-3">
            {sidebarItems.map((item) => (
              <li
                key={item}
                onClick={() => setActiveTab(item)}
                className={`px-4 py-3 rounded-xl text-sm font-semibold cursor-pointer transition ${
                  activeTab === item
                    ? "bg-white text-blue-600 shadow"
                    : "text-white/90 hover:bg-white/10"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {activeTab}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {capabilitiesData[activeTab].map((item) => (
              <div
                key={item}
                className="group flex items-center justify-between rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-5 py-4 transition hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700"
              >
                <div className="flex items-center gap-3">
                  <span className="h-9 w-9 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                    ▶   
                  </span>
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    {item}
                  </span>
                </div>

                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <button className="px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:opacity-90 transition">
          System Readiness Review
        </button>
      </div>
    </section>
  );
};

export default Capabilities;
