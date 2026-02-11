import { div } from "framer-motion/client";
import React from "react";

const teamMembers = [
  {
    name: "Aarav Mehta",
    role: "Founder & CEO",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    bg: "bg-indigo-100",
    expe: 3,
    bio: "Leads the company vision, strategy, and growth with a strong focus on innovation and long-term impact.",
  },
  {
    name: "Sophia Williams",
    role: "Product Designer",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    bg: "bg-pink-100",
    expe: 4,
    bio: "Designs intuitive user experiences and clean interfaces that turn complex ideas into simple products.",
  },
  {
    name: "Rahul Verma",
    role: "Lead Frontend Engineer",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    bg: "bg-sky-100",
    expe: 1,
    bio: "Specializes in building scalable, high-performance web interfaces using modern frontend technologies.",
  },
  {
    name: "Emily Carter",
    role: "Marketing Strategist",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    bg: "bg-emerald-100",
    expe: 5,
    bio: "Crafts data-driven marketing strategies that help brands grow visibility, trust, and conversions.",
  },
];

const ContactSection7 = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-8 lg:px-10">
      <h2 className="text-4xl md:text-5xl text-center color-indigo-800 font-bold ">
        Meet The People Behind
      </h2>

      <hr className="m-auto w-20 h-1 bg-indigo-500 mt-5 mb-6" />

      <p className="text-center text-xl text-gray-700 max-w-2xl mx-auto">
        A multidisciplinary team of designers, engineers, and strategists
        committed to building meaningful digital experiences.
      </p>

      {/* team */}

      <div className="flex flex-col gap-8 mt-20">
        {teamMembers.map((member, index) => {
          const reverse = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`flex flex-col ${
                reverse ? "md:flex-row-reverse" : "md:flex-row"
              } gap-6`}
            >
              {/* imagessss */}

              <div className="w-full lg:w-1/4 rounded-xl overflow-hidden  ">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover aspect-video  lg:aspect-square"
                />
              </div>

              <div
                className={`w-full lg:w-9/12 ${member.bg} rounded-3xl flex flex-col justify-center p-8 lg:p-14`}
              >
                <h3 className="text-2xl text-indigo-500 font-semibold">
                  {member.name}
                </h3>
                <span className="inline-block text-lg text-indigo-800  font-medium mt-1 mb-4">
                  {member.role}
                </span>
                <p className="text-xl text-indigo-900 font-bold mt-1 mb-4">
                  {member.bio}
                </p>

                <span className="text-lg tracking-widest text-indigo-900 font-bold  ">
                  +{member.expe}
                   <span className="text-lg tracking-wider text-indigo-900 foont-bold p-0.5">Years</span>
                </span> 
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ContactSection7;
