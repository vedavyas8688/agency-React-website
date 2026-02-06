import React from "react";

export const services = [
  {
    id: "readiness",
    title: "AI Readiness & Strategy",
    desc: "We assess your business objectives, processes, data, and systems to define a clear AI strategy and roadmap aligned with measurable outcomes.",
    points: [
      "AI readiness assessment",
      "Business & process analysis",
      "AI strategy & roadmap",
    ],
  },
  {
    id: "consulting",
    title: "AI Consulting & Use Case Definition",
    desc: "We identify high-impact AI use cases and design solutions aligned with your industry, operational needs, and growth plans.",
    points: [
      "Use case identification",
      "Feasibility analysis",
      "Solution concepts",
    ],
  },
  {
    id: "integration",
    title: "AI Integration & Architecture",
    desc: "We architect and integrate AI solutions seamlessly into your existing IT ecosystem, ensuring security, scalability, and performance.",
    points: [
      "AI system architecture",
      "Cloud & API integration",
      "Security & governance",
    ],
  },
  {
    id: "automation",
    title: "AI Workflow Automation",
    desc: "We automate complex and repetitive workflows using AI to improve operational efficiency, accuracy, and speed.",
    points: [
      "Workflow automation",
      "AI-driven decision flows",
      "Process optimization",
    ],
  },
  {
    id: "data",
    title: "Data Strategy & Enablement",
    desc: "We build and optimize data foundations required for scalable, reliable, and high-performing AI solutions.",
    points: [
      "Data strategy & architecture",
      "Data pipelines & infrastructure",
      "Data quality & governance",
    ],
  },
  {
    id: "training",
    title: "Training, Optimization & Support",
    desc: "We ensure long-term success through training, continuous optimization, and ongoing AI system support.",
    points: [
      "Team training & enablement",
      "Model performance optimization",
      "Ongoing monitoring & support",
    ],
  },
];

const RightScroolFrameworks = () => {

    



  return (
     <section className="bg-[#eaf6ff] h-screen overflow-hidden">
            <div
               className="h-full overflow-x-auto overflow-y-hidden no-scrollbar"
            >
              <div className="flex min-w-max h-full">
                {services.map((item) => (
                  <div
                    key={item.id}
                    className="flex w-screen flex-shrink-0 px-20 items-center gap-20"
                  >
                    <div className="w-1/3">
                      <h2 className="text-4xl font-semibold leading-tight">
                        {item.title}
                      </h2>
                    </div>
      
                    <div className="w-2/3 bg-white rounded-2xl p-10 shadow-sm">
                      <p className="text-gray-600 mb-8 max-w-xl">
                        {item.desc}
                      </p>
      
                      <ul className="space-y-4">
                        {item.points.map((point, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-3 text-gray-700"
                          >
                            <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
  );
};

export default RightScroolFrameworks;
