import React from "react";
import {
  Mail,
  Settings,
  Users,
  Database,
  FileText,
  ArrowUpRight,
  Key,
} from "lucide-react";
import { div } from "motion/react-client";

const services = [
  {
    title: "Cold Email Marketing (DIY)",
    description:
      "Launch your own campaigns with our proven templates and strategies.",
    icon: Mail,
  },
  {
    title: "Cold Email Marketing (DFY)",
    description: "End-to-end management where we handle everything for you.",
    icon: Settings,
  },
  {
    title: "Prospect List Building",
    description:
      "Custom-curated lists of ideal prospects with verified contact info.",
    icon: Users,
  },
  {
    title: "B2B Database Cleaning",
    description:
      "Ensure your data is accurate, up-to-date, and ready for outreach.",
    icon: Database,
  },
  {
    title: "Personalized Copy (Email Copies)",
    description: "High-converting scripts tailored to resonate with your ICP.",
    icon: FileText,
  },
];

const Scale = () => {
  return (
    <section className="bg-[#eaf6ff] py-20">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="mt-25">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Everything You Need to <br />
            <span className="text-blue-600">Scale</span>
          </h2>

          <div className="w-24 h-1 bg-blue-400 mt-4 mb-6 rounded-full" />

          <p className="text-gray-900 max-w-md">
            Don't let bits and pieces slow you down. We offer a holistic suite
            of lead generation services to ensure every part of your engine is
            firing.
          </p>

          <button className="mt-10 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition">
            OutboundReadiness Review
            <ArrowUpRight size={19} />
          </button>
        </div>

        <div className="space-y-6  hover:border-blue-600 ">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="flex items-center justify-between rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 ">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border text-gray-400 hover:text-blue-600 hover:border-blue-600 transition">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Scale;
