 import React from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="
        relative
        flex flex-col items-center gap-6
        py-20 px-4 sm:px-12 lg:px-24 xl:px-40
        text-center w-full overflow-hidden
        text-gray-700 dark:text-white
      "
    >
      <div className="absolute inset-0 flex justify-center items-start pointer-events-none dark:hidden">
        <div
          className="
            w-[900px] h-[450px]
            bg-gradient-to-r
            from-[#e9efff]
            via-[#c7d8ff]
            to-[#9dbbff]
            blur-3xl
            opacity-80
            mt-24
          "
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="
            inline-flex items-center gap-2
            border border-gray-300 dark:border-white/20
            p-1.5 pr-4 rounded-full
          "
        >
          <img
            className="w-20"
            src={assets.group_profile}
            alt="Group of trusted users"
          />
          <p className="text-xs font-medium">Trusted by 10k+ people</p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="
            text-4xl sm:text-5xl md:text-6xl xl:text-[84px]
            font-medium xl:leading-[95px]
            max-w-5xl
          "
        >
          Turning imagination into{" "}
          <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
            digital
          </span>{" "}
          impact.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="
            text-sm sm:text-lg font-medium
            text-gray-500 dark:text-white/75
            max-w-[80%] sm:max-w-lg
            pb-3
          "
        >
          Creating meaningful connections and turning big ideas into interactive
          digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative flex justify-center items-center w-full mt-6"
        >
          <img
            src={assets.hero_img}
            alt=""
            className="w-full max-w-6xl relative z-10"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
