 import React, { useState } from "react";
import {
  Search,
  Zap,
  Sun,
  Database,
  Sprout,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

export default function ServicesSection() {
  const [active, setActive] = useState(0);

  const services = [
    {
      icon: Search,
      title: "Site Survey & Feasibility",
      description:
        "We conduct comprehensive site assessments to determine the best water solutions for each unique location and community need.",
      points: [
        "Geological Assessment",
        "Community Needs Analysis",
        "Environmental Impact Study",
      ],
      image:
        "https://images.unsplash.com/photo-1581091870627-3e7a5d5c5a17?q=80&w=1600&auto=format&fit=crop",
    },
    {
      icon: Zap,
      title: "Borehole Drilling",
      description:
        "Professional borehole drilling using advanced machinery to ensure reliable and long-lasting groundwater access.",
      points: [
        "Precision Drilling",
        "High Capacity Pumps",
        "Water Quality Testing",
      ],
      image:
        "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=1600&auto=format&fit=crop",
    },
    {
      icon: Sun,
      title: "Solar Pumping Systems",
      description:
        "Energy-efficient solar-powered pumping systems designed for remote and rural communities.",
      points: [
        "Solar Panel Installation",
        "Battery Storage Systems",
        "Low Maintenance Design",
      ],
      image:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop",
    },
    {
      icon: Database,
      title: "Water Storage & Distribution",
      description:
        "Efficient storage tanks and pipeline systems to ensure stable water supply.",
      points: [
        "Elevated Tanks",
        "Pipeline Installation",
        "Flow Optimization",
      ],
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1600&auto=format&fit=crop",
    },
    {
      icon: Sprout,
      title: "Smart Irrigation",
      description:
        "Automated irrigation systems to maximize agricultural efficiency.",
      points: [
        "Drip Irrigation",
        "Moisture Sensors",
        "Water Efficiency Control",
      ],
      image:
        "https://images.unsplash.com/photo-1598514983318-2f64f8f4796d?q=80&w=1600&auto=format&fit=crop",
    },
    {
      icon: HeartHandshake,
      title: "End-to-End Support",
      description:
        "Complete lifecycle support from planning to maintenance.",
      points: [
        "24/7 Monitoring",
        "Maintenance Contracts",
        "Technical Assistance",
      ],
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  const current = services[active];

  return (
    <section className="bg-gradient-to-b from-[#1a1a1a] to-black py-16 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* STEP NAVIGATION */}
        <div className="relative flex justify-between items-center mb-14">

          {/* Background line */}
          <div className="absolute top-6 left-0 w-full h-[2px] bg-gray-700"></div>

          {/* Progress line */}
          <div
            className="absolute top-6 left-0 h-[2px] bg-yellow-500 transition-all duration-500"
            style={{ width: `${(active / (services.length - 1)) * 100}%` }}
          />

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                onClick={() => setActive(index)}
                className="relative z-10 flex flex-col items-center cursor-pointer"
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-300
                  ${
                    active === index
                      ? "bg-yellow-500 text-black border-yellow-500"
                      : "bg-black border-gray-600 text-yellow-500"
                  }`}
                >
                  <Icon size={20} />
                </div>

                <p
                  className={`mt-3 text-xs text-center w-28
                  ${
                    active === index
                      ? "text-yellow-500 font-medium"
                      : "text-gray-400"
                  }`}
                >
                  {service.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* CONTENT CARD */}
        <div className="bg-black border border-yellow-600/30 rounded-2xl p-10 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>
            <h2 className="text-4xl font-serif text-yellow-500 mb-6">
              {current.title}
            </h2>

            <p className="text-gray-300 mb-6 leading-relaxed">
              {current.description}
            </p>

            <ul className="space-y-4">
              {current.points.map((point, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-200">
                  <CheckCircle2 className="text-yellow-500" size={18} />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div>
            <img
              src={current.image}
              alt={current.title}
              className="rounded-xl w-full h-[350px] object-cover transition-all duration-500"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
