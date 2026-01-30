 import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import { motion } from "motion/react";

const services = [
  {
    title: "Advertising",
    description:
      "We turn bold ideas into powerful digital solutions that connect, engage, and convert audiences effectively.",
    icon: assets.ads_icon,
  },
  {
    title: "Brand Strategy",
    description:
      "We craft clear brand identities and positioning strategies that help businesses stand out and build lasting trust.",
    icon: assets.marketing_icon,
  },
  {
    title: "UI / UX Design",
    description:
      "We design intuitive and engaging digital experiences focused on usability, accessibility, and visual impact.",
    icon: assets.content_icon,
  },
  {
    title: "Web Development",
    description:
      "We build fast, scalable, and secure websites and applications tailored to your business goals.",
    icon: assets.social_icon,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
};

const Services = () => {
  return (
    <section
      id="services"
      className="relative px-4 sm:px-12 lg:px-24 xl:px-40 pt-30
      text-gray-700 dark:text-white"
    >
      <div
        className="absolute inset-0 bg-center bg-cover opacity-20 dark:hidden"
        style={{ backgroundImage: `url(${assets.bgImage2})` }}
      />

      <div className="relative z-10 flex flex-col items-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Title
            title="How can we help?"
            desc="From strategy to execution, we craft digital solutions that move your business forward."
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="relative overflow-hidden group flex gap-5 rounded-2xl
              border border-gray-200 dark:border-gray-700
              p-6 bg-white dark:bg-[#0f172a]
              shadow-sm hover:shadow-2xl"
            >
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r
                from-indigo-500/10 via-blue-500/10 to-cyan-500/10 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                whileHover={{ y: -4, rotate: -6 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                }}
                className="flex-shrink-0 relative z-10"
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-12 h-12"
                />
              </motion.div>

              <div className="flex flex-col relative z-10">
                <h3 className="text-lg font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
