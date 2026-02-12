import React from "react";

const steps = [
  {
    title: "Idea",
    heading: "Find your best idea",
    description:
      "Brainstorm and validate innovative concepts before moving forward.",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Collaboration",
    heading: "Find your team and collaborate",
    description:
      "Work together with experts and align your vision into execution.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Planning",
    heading: "Make a good plan and prepare tasks",
    description:
      "Structure your roadmap with clarity, milestones, and defined goals.",
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Implementation",
    heading: "Execute and implement your solution",
    description:
      "Turn your strategy into action with precision and efficiency.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
  },
];

const ContactSection9 = () => {
  return (
    <section className="max-w-5xl mx-auto py-10">
      <div>
        {steps.map((step, index) => {
          const isReverse = index % 2 !== 0;
          const isLast = index === steps.length - 1;

          return (
            <React.Fragment key={index}>
              {/* row */}
              <div
                className={`flex ${
                  isReverse ? "flex-row-reverse" : "flex-row"
                }`}
              >
                {/* step box */}
                <div className="hidden md:flex flex-col items-center">
                  <div
                    className={`w-32 py-5 border border-gray-300 rounded uppercase flex flex-col items-center justify-center ${
                      isReverse ? "ml-4" : "mr-4"
                    }`}
                  >
                    <div className="text-3xl font-black text-gray-500">
                      Step {index + 1}
                    </div>
                    <div className="text-gray-500 text-sm">{step.title}</div>
                  </div>

                  {!isLast && (
                    <div
                      className={`h-full ${
                        isReverse ? "border-r-4 ml-4" : "border-l-4 mr-4"
                      } border-gray-300 border-dashed`}
                    ></div>
                  )}
                </div>

                {/* content card */}
                <div className="flex-auto border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="flex md:flex-row flex-col items-center">
                    <div className="flex-auto p-8">
                      <div className="md:hidden text-sm font-semibold uppercase tracking-wider text-blue-600 mb-3">
                        Step {index + 1} - {step.title}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug">
                        {step.heading}
                      </h3>

                      <p className="text-gray-600 leading-relaxed text-base">
                        {step.description}
                      </p>
                    </div>

                    {/* image */}
                    <div className="md:w-80 w-full">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-72 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* connector */}
              {!isLast && (
                <div
                  className={`flex items-start ${
                    isReverse ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`border-t-4 ${
                      isReverse ? "border-l-4" : "border-r-4"
                    } border-transparent`}
                  >
                    <div
                      className={`w-16 ${isReverse ? "mr-16" : "ml-16"} h-16 ${
                        isReverse
                          ? "border-r-4 rounded-br-full"
                          : "border-l-4 rounded-bl-full"
                      } border-gray-300 border-dashed border-b-4`}
                    ></div>
                  </div>

                  <div className="border-t-4 border-transparent flex-auto">
                    <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
                  </div>

                  <div
                    className={`w-16 mt-16 ${
                      isReverse ? "ml-16" : "mr-16"
                    } h-16 ${
                      isReverse
                        ? "border-l-4 rounded-tl-full"
                        : "border-r-4 rounded-tr-full"
                    } border-gray-300 border-dashed border-t-4`}
                  ></div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default ContactSection9;
