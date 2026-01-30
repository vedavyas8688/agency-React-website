 import React from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";

const works = [
  {
    title: "Mobile app marketing",
    desc: "We turn bold ideas into powerful digital solutions that connect.",
    image: assets.work_mobile_app,
  },
  {
    title: "Dashboard management",
    desc: "We build data-driven dashboards for better decision making.",
    image: assets.work_dashboard_management,
  },
  {
    title: "Fitness app promotion",
    desc: "We design engaging fitness experiences that drive growth.",
    image: assets.work_fitness_app,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 18,
    },
  },
};

const OurWork = () => {
  return (
    <section
      id="our-work"
      className="px-4 sm:px-12 lg:px-24 xl:px-40 py-20 text-center
      text-gray-700 dark:text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold mb-2"
      >
        Our latest work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-gray-500 mb-12 max-w-xl mx-auto dark:text-white/75"
      >
        Browse our portfolio of innovative digital projects that showcase
        creativity, performance, and results.
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-8"
      >
        {works.map((work, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="group relative overflow-hidden bg-white dark:bg-[#0f172a]
            rounded-2xl border border-gray-200 dark:border-gray-700
            shadow-sm hover:shadow-2xl"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr
              from-indigo-500/10 via-blue-500/10 to-cyan-500/10
              opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            <div className="overflow-hidden rounded-t-2xl">
              <motion.img
                src={work.image}
                alt={work.title}
                className="w-full h-auto object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>

            <div className="relative z-10 p-6 text-left">
              <motion.h3
                initial={false}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="text-lg font-semibold mb-2"
              >
                {work.title}
              </motion.h3>

              <p className="text-sm text-gray-500 dark:text-gray-300 leading-relaxed">
                {work.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default OurWork;
