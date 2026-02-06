import { CheckCircle, ArrowRight } from "lucide-react";
import React from "react";

const DiagnoticsSession = () => {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-br from-[#0b1324] via-[#0e1a33] to-[#0b1324] p-14 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* left */}

          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-900/40 px-4 py-1 text-sm text-blue-300">
              Diagnostic Session
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight">
              Outbound Readiness <br /> Review
            </h2>

            <div className="w-32 h-1 bg-blue-500 mt-4 mb-6 rounded-full" />

            <p className="max-w-md text-gray-300">
              A short diagnostic to determine whether outbound fits your
              business and what system layers are required.
            </p>

            <button className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 font-semibold text-white hover:opacity-90 transition">
              Request Your Predictable Pipeline Review
              <ArrowRight size={18} />
            </button>
          </div>

          {/* right */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/5 p-6 backdrop-blur border border-white/10">
              <h3 className="mb-4 font-semibold">On the call we:</h3>
              <ul className="space-y-4 text-sm text-gray-300">
                {[
                  "Assess your services and ICP",
                  "Identify missing outbound components",
                  "Map your first signal-based journey",
                  "Define what a predictable pipeline should look like",
                ].map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <CheckCircle size={18} className="text-blue-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white/5 p-6 backdrop-blur border border-white/10 flex flex-col justify-between">
              <div>
                <h3 className="mb-4 font-semibold">You leave with:</h3>
                <ul className="space-y-4 text-sm text-gray-300">
                  {[
                    "Clear outbound readiness",
                    "System priorities",
                    "Next-step clarity",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <CheckCircle
                        size={18}
                        className="text-cyan-400 shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="w-20 mt-6 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-500 border-0 mx-auto mb-3" />

              <button className="mt-4 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 text-sm text-white hover:opacity-90 transition">
                Review My Outbound Setup
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnoticsSession;
