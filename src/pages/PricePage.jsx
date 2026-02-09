import { Check } from "lucide-react";
import React, { useState } from "react";

const pricing = [
  { contacts: "1K", starter: 5, business: 9 },
  { contacts: "5K", starter: 19, business: 29 },
  { contacts: "10K", starter: 29, business: 49 },
  { contacts: "15K", starter: 39, business: 59 },
  { contacts: "1M", starter: 1490, business: 2490 },
];

const PricePage = () => {
  const [index, setIndex] = useState(0);

  const max = pricing.length - 1;

  const progress = (index / max) * 100;

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* heading */}

        <h1 className="text-center text-xl font-semibold text-slate-900">
          How Many Contacts Do You Have ?
        </h1>

        <p className="text-center text-sm text-slate-500 mt-2">
          {pricing[index].contacts} contacts/month
        </p>

        {/* slider */}

        <div className="max-w-3xl mx-auto mt-10">
          <div className="relative">
            {/* Base track */}
            <div className="h-1 rounded-full bg-slate-200" />

            {/* Filled progress */}
            <div
              className="absolute top-0 h-1 rounded-full bg-indigo-500 transition-all duration-200"
              style={{ width: `${progress}%` }}
            />

            {/* Tick marks */}
            <div className="absolute top-0 left-0 right-0 h-1 flex justify-between">
              {pricing.map((_, i) => (
                <span key={i} className="w-px h-2 bg-slate-300 -mt-0.5" />
              ))}
            </div>

            {/* Range input */}
            <input
              type="range"
              min="0"
              max={max}
              step="1"
              value={index}
              onChange={(e) => setIndex(Number(e.target.value))}
              className="absolute inset-0 w-full appearance-none bg-transparent cursor-pointer
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:w-4
                [&::-webkit-slider-thumb]:h-4
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-white
                [&::-webkit-slider-thumb]:shadow
                [&::-webkit-slider-thumb]:border
                [&::-webkit-slider-thumb]:border-slate-300
                [&::-webkit-slider-thumb]:-mt-1.5
                [&::-moz-range-thumb]:w-4
                [&::-moz-range-thumb]:h-4
                [&::-moz-range-thumb]:rounded-full
                [&::-moz-range-thumb]:bg-white
                [&::-moz-range-thumb]:border-none
                [&::-moz-range-thumb]:shadow"
            />
          </div>

          {/* Labels */}
          <div className="flex justify-between text-xs text-slate-400 mt-4 px-0.5">
            {pricing.map((p, i) => (
              <span key={i}>{p.contacts}</span>
            ))}
          </div>
        </div>

        {/* cards */}

        <div className="grid lg:grid-cols-2 gap-9 mt-20 max-w-4xl mx-auto">
          {/* starter */}

          <div className="bg-white rounded-2xl shadow p-8">
            <h3 className="font-semibold text-slate-900 ">Starter</h3>

            <div className="flex items-end mt-2">
              <span className="text-4xl font-bold">
                ${pricing[index].starter}
              </span>
              <span className="text-slate-500 ml-1 mb-1"> /mo</span>
            </div>

            <p className="text-sm text-slate-500 mt-3">
              There are many variations available, but the majority have
              suffered.
            </p>

            <button className="w-full bg-indigo-500 text-white rounded-lg py-1.5 mt-6 font-medium hover:bg-indigo-600">
              Purchase Plan
            </button>
            <div className="mt-6 text-sm font-medium">Includes:</div>

            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {[
                "Unlimited placeholder texts",
                "Consectetur adipiscing elit",
                "Excepteur sint occaecat cupidatat",
                "Officia deserunt mollit anim",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emrald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Business */}
          <div className="relative rounded-2xl p-8 bg-gradient-to-b from-slate-900 to-slate-800 text-white shadow-xl">
            <span className="absolute top-4 right-4 bg-emerald-500 text-xs px-3 py-1 rounded-full">
              Most Popular
            </span>

            <h3 className="font-semibold text-slate-100">Business</h3>

            <div className="flex items-end mt-2">
              <span className="text-4xl font-bold">
                ${pricing[index].business}
              </span>
              <span className="text-slate-400 ml-1 mb-1">/mo</span>
            </div>

            <p className="text-sm text-slate-400 mt-3">
              There are many variations available, but the majority have
              suffered.
            </p>

            <button className="w-full bg-indigo-500 rounded-lg py-2.5 mt-6 font-medium hover:bg-indigo-600">
              Purchase Plan
            </button>

            <div className="mt-6 text-sm font-medium text-slate-200">
              Everything in Starter, plus:
            </div>

            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {[
                "Unlimited placeholder texts",
                "Consectetur adipiscing elit",
                "Excepteur sint occaecat cupidatat",
                "Officia deserunt mollit anim",
                "Predefined chunks as necessary",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricePage;
