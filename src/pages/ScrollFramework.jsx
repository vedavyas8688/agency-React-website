 import { useRef, useState } from "react";

export const services = [
  {
    id: "readiness",
    title: "AI Readiness & Strategy",
    desc:
      "We assess your business objectives, processes, data, and systems to define a clear AI strategy and roadmap aligned with measurable outcomes.",
    points: [
      "AI readiness assessment",
      "Business & process analysis",
      "AI strategy & roadmap",
    ],
  },
  {
    id: "consulting",
    title: "AI Consulting & Use Case Definition",
    desc:
      "We identify high-impact AI use cases and design solutions aligned with your industry, operational needs, and growth plans.",
    points: [
      "Use case identification",
      "Feasibility analysis",
      "Solution concepts",
    ],
  },
  {
    id: "integration",
    title: "AI Integration & Architecture",
    desc:
      "We architect and integrate AI solutions seamlessly into your existing IT ecosystem, ensuring security, scalability, and performance.",
    points: [
      "AI system architecture",
      "Cloud & API integration",
      "Security & governance",
    ],
  },
  {
    id: "automation",
    title: "AI Workflow Automation",
    desc:
      "We automate complex and repetitive workflows using AI to improve operational efficiency, accuracy, and speed.",
    points: [
      "Workflow automation",
      "AI-driven decision flows",
      "Process optimization",
    ],
  },
  {
    id: "data",
    title: "Data Strategy & Enablement",
    desc:
      "We build and optimize data foundations required for scalable, reliable, and high-performing AI solutions.",
    points: [
      "Data strategy & architecture",
      "Data pipelines & infrastructure",
      "Data quality & governance",
    ],
  },
  {
    id: "training",
    title: "Training, Optimization & Support",
    desc:
      "We ensure long-term success through training, continuous optimization, and ongoing AI system support.",
    points: [
      "Team training & enablement",
      "Model performance optimization",
      "Ongoing monitoring & support",
    ],
  },
];

const ScrollFramework = () => {
  const scrollRef = useRef(null);
  const sectionRefs = useRef([]);
  const [active, setActive] = useState("readiness");

  const handleScroll = () => {
    const container = scrollRef.current;
    const containerTop = container.getBoundingClientRect().top;

    let current = active;

    sectionRefs.current.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top - containerTop <= 120) {
        current = section.id;
      }
    });

     const isAtBottom =
      container.scrollTop + container.clientHeight >=
      container.scrollHeight - 5;

    if (isAtBottom) {
      current = sectionRefs.current.at(-1).id;
    }

    setActive(current);
  };

  return (
    <section className="bg-[#eaf6ff] py-24">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-16 px-6">

        {/* LEFT   */}
        <div className="lg:col-span-1 sticky top-24 self-start">
          <h2 className="text-3xl font-semibold mb-8">
            Our <span className="text-blue-600">AI Services</span>
          </h2>

          <div className="space-y-3">
            {services.map((item) => (
              <div
                key={item.id}
                className={`px-6 py-3 rounded-full text-sm ${
                  active === item.id
                    ? "bg-white text-blue-600 font-medium border border-blue-200"
                    : "bg-white/60 text-gray-600"
                }`}
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT    */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="lg:col-span-2 h-[70vh] overflow-y-auto no-scrollbar pr-6 space-y-20"
        >
          {services.map((item, index) => (
            <div
              key={item.id}
              id={item.id}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="bg-white rounded-2xl p-10 border border-gray-100"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 mb-8 max-w-xl">
                {item.desc}
              </p>

              <ul className="space-y-3">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ScrollFramework;
