 import React from "react";

const TeamSection = () => {
  const team = [
    {
      name: "Patrick Langeslag",
      role: "CFO & Co-Founder",
      image: "/team/patrick.jpg",
    },
    {
      name: "Manuel Tessloff",
      role: "CPO & Co-Founder",
      image: "/team/manuel.jpg",
    },
    {
      name: "Martin Schmitz",
      role: "CTO",
      image: "/team/martin.jpg",
    },
    {
      name: "Alexandra Mikrikow",
      role: "Management Assistant",
      image: "/team/alexandra.jpg",
    },
  ];

  return (
    <section className="bg-[#1f2326] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-5xl font-light mb-6">
          Meet our team
        </h2>

        {/* Description */}
        <p className="max-w-3xl text-gray-300 leading-relaxed mb-20">
          Who's behind the tools? We're not just any team – we're a powerful
          collective of specialists who love pushing boundaries. Every day, we
          challenge ourselves with the question: "How can this run even
          better?" Meet the individuals who help make it all happen and help
          create wow moments on your retail or factory floor. Every single day.
        </p>

        {/* Team grid */}
        <div className="grid md:grid-cols-2 gap-x-24 gap-y-20">
          {team.map((member, index) => (
            <div key={index}>
              <div className="flex items-center gap-6 mb-6">
                {/* Avatar */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full object-cover grayscale transition duration-300 hover:grayscale-0"
                />

                {/* Info */}
                <div>
                  <h3 className="text-lg font-medium">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-600/40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;




////import React from "react";

const PartnersSection = () => {
  const partners = [
    {
      name: "EDEKA Techstarter",
      logo: "/partners/edeka-techstarter.png",
    },
    {
      name: "Software AG",
      logo: "/partners/software-ag.png",
    },
    {
      name: "POS Tuning",
      logo: "/partners/pos-tuning.png",
    },
    {
      name: "TOMRA",
      logo: "/partners/tomra.png",
    },
    {
      name: "Food Akademie",
      logo: "/partners/food-akademie.png",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-4xl font-light text-gray-900 mb-16">
          Our partners
        </h2>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-x-20 gap-y-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 object-contain grayscale opacity-80 transition duration-300 hover:grayscale-0 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
