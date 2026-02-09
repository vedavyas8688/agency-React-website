import React from "react";

 const team = [
  {
    name: "Patrick Langeslag",
    role: "CFO & Co-Founder",
    image: "https://i.pravatar.cc/300?img=12",
  },
  {
    name: "Manuel Tessloff",
    role: "CPO & Co-Founder",
    image: "https://i.pravatar.cc/300?img=32",
  },
  {
    name: "Martin Schmitz",
    role: "CTO",
    image: "https://i.pravatar.cc/300?img=45",
  },
  {
    name: "Alexandra Mikrikow",
    role: "Management Assistant",
    image: "https://i.pravatar.cc/300?img=47",
  },
  {
    name: "Lars-Erik Glage",
    role: "Senior Account Director",
    image: "https://i.pravatar.cc/300?img=52",
  },
  {
    name: "Robin Schacht",
    role: "Senior System Professional",
    image: "https://i.pravatar.cc/300?img=58",
  },
  {
    name: "Gerrit Dopatka",
    role: "Senior System Professional",
    image: "https://i.pravatar.cc/300?img=61",
  },
  {
    name: "Torsten Tapper",
    role: "Senior System Professional",
    image: "https://i.pravatar.cc/300?img=64",
  },
  {
    name: "Melanie Quassdorf",
    role: "Team Assistance Operation",
    image: "https://i.pravatar.cc/300?img=48",
  },
  {
    name: "Felix Lorenz",
    role: "Working Student / Software Testing",
    image: "https://i.pravatar.cc/300?img=67",
  },
  {
    name: "Jewgenij Behrendt",
    role: "Working Student / Marketing & Sales",
    image: "https://i.pravatar.cc/300?img=69",
  },
  {
    name: "Benjamin Ghodsi-Moghaddam",
    role: "Working Student / Software Testing",
    image:  "https://i.pravatar.cc/300?img=69",
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
          Who's behind the tools? We're not just any team - we're a powerful
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

               <div className="h-px bg-gray-600/40 " />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
