 import React from "react";
import { teamData } from "../assets/assets";
import { motion } from "motion/react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.95,
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

const Team = () => {
  return (
    <section className="px-4 sm:px-12 lg:px-24 xl:px-40 py-20 text-center text-gray-700 dark:text-white">
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold mb-2"
      >
        Meet the team
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-gray-500 dark:text-gray-300 mb-12 max-w-xl mx-auto"
      >
        A passionate team of digital experts dedicated to your brand's success.
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {teamData.map((member, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="relative overflow-hidden flex items-center gap-4 p-4
            rounded-2xl bg-white dark:bg-gray-800
            border border-gray-200 dark:border-gray-700
            shadow-sm hover:shadow-xl"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr
              from-indigo-500/10 via-blue-500/10 to-cyan-500/10
              opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            <motion.img
              src={member.image}
              alt={member.name}
              className="w-12 h-12 rounded-full object-cover relative z-10"
              whileHover={{ scale: 1.12 }}
              transition={{ type: "spring", stiffness: 400, damping: 16 }}
            />

            <div className="text-left relative z-10">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                {member.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {member.title}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Team;