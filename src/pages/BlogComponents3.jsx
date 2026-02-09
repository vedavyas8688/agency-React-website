import React from "react";

const testimonials = [
  {
    text: "They quickly understood our technical challenges and proposed solutions that aligned perfectly with our long-term roadmap. The execution was structured and reliable.",
    name: "Aarav Patel",
    role: "Head of Engineering",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    text: "Working with them felt effortless. Design decisions, timelines, and delivery were clearly communicated at every stage of the project.",
    name: "Sophia Miller",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
  {
    text: "Their technical judgment stood out. The architecture they implemented helped us scale without rework or performance tradeoffs.",
    name: "Daniel Wong",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  },
  {
    text: "They worked like a true extension of our internal team. The final product was stable, maintainable, and exceeded expectations.",
    name: "Emily Johnson",
    role: "Operations Lead",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9",
  },
  {
    text: "Their technical judgment stood out. The architecture they implemented helped us scale without rework or performance tradeoffs.",
    name: "Daniel Wong",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  },
  {
    text: "They worked like a true extension of our internal team. The final product was stable, maintainable, and exceeded expectations.",
    name: "Emily Johnson",
    role: "Operations Lead",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9",
  },
];

const classes = ["", "lg:mt-10", "lg:mt-20"];

const BlogComponents3 = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#0f172a] to-[#020617] text-white max-w-full py-28 overflow-hidden">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.08),transparent_40%)]" />

      <div className="relative container mx-auto px-6">
        <div className="grid gap-16 xl:grid-cols-5 items-start">
          {/* LEFT   */}
          <div className="xl:col-span-2 mt-60 space-y-5">
            <h2 className="text-4xl font-semibold leading-tight tracking-tight">
              Trusted by teams building real products
            </h2>
            <p className="text-gray-400 max-w-md text-base leading-relaxed">
              We collaborate with product leaders and engineering teams to
              design scalable systems, improve performance, and deliver
              meaningful outcomes.
            </p>
          </div>

          {/* RIGHT   */}
          <div className="xl:col-span-3 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`
                  relative bg-white/[0.035] backdrop-blur-xl
                  p-7 rounded-2xl
                  border border-white/10
                  shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]
                  transition-all duration-300
                  hover:-translate-y-1 hover:border-white/20
                  ${classes[index % 3]}
                `}
              >
                <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

                <p className="relative text-gray-300 text-[15px] leading-relaxed tracking-wide">
                  “{item.text}”
                </p>

                <div className="relative flex items-center gap-4 mt-7">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover ring-1 ring-white/20"
                  />
                  <div>
                    <p className="text-sm font-medium text-white">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-400 tracking-wide">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogComponents3;
