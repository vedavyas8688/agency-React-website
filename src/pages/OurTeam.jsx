import React from "react";

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
 

  {
    name: "Lars-Erik Glage",
    role: "Senior Account Director",
    image: "/team/lars-erik-glage.jpg",
  },
  {
    name: "Robin Schacht",
    role: "Senior System Professional",
    image: "/team/robin-schacht.jpg",
  },
  {
    name: "Gerrit Dopatka",
    role: "Senior System Professional",
    image: "/team/gerrit-dopatka.jpg",
  },
  {
    name: "Torsten Tapper",
    role: "Senior System Professional",
    image: "/team/torsten-tapper.jpg",
  },
  {
    name: "Melanie Quassdorf",
    role: "Team Assistance Operation",
    image: "/team/melanie-quassdorf.jpg",
  },
  {
    name: "Felix Lorenz",
    role: "Working Student / Software Testing",
    image: "/team/felix-lorenz.jpg",
  },
  {
    name: "Jewgenij Behrendt",
    role: "Working Student / Marketing & Sales",
    image: "/team/jewgenij-behrendt.jpg",
  },
  {
    name: "Benjamin Ghodsi-Moghaddam",
    role: "Working Student / Software Testing",
    image: "/team/benjamin-ghodsi-moghaddam.jpg",
  },
];

 

const OurTeam = () => {
  return (
    <section className="bg-[#1f2326] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
         <h2 className="text-5xl font-light mb-6">
          Meet our team
        </h2>

         <p className="max-w-3xl text-gray-300 leading-relaxed mb-20">
          Who's behind the tools? We're not just any team – we're a powerful
          collective of specialists who love pushing boundaries. Every day, we
          challenge ourselves with the question: "How can this run even
          better?" Meet the individuals who help make it all happen and help
          create wow moments on your retail or factory floor. Every single day.
        </p>

         <div className="grid md:grid-cols-2 gap-x-24 gap-y-20">
          {team.map((member, index) => (
            <div key={index}>
              <div className="flex items-center gap-6 mb-6">
                 <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full object-cover grayscale transition duration-300 hover:grayscale-0"
                />

                 <div>
                  <h3 className="text-lg font-medium">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {member.role}
                  </p>
                </div>
              </div>

               <div className="h-px bg-gray-600/40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
