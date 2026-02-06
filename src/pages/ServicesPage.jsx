import React from "react";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import assets from "../assets/assets";
import Capabilities from "./Capabilities";
import ReadinessReview from "./ReadinessReview";
import FAQSection from "./FAQSection";
import OutBoundSystems from "./OutBoundSystems";
import Scale from "./Scale";
import DiagnoticsSession from "./DiagnoticsSession";
import ScrollFramework from "./ScrollFramework";
 
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
};

/* ---------------- COMPONENT ---------------- */

const ServicesPage = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const loadingToast = toast.loading("Sending message...");
    const formData = new FormData(event.target);

    // Web3Forms required key
    formData.append("access_key", "e7986021-fb3b-4ddc-bc28-1c814c1760fd");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      toast.dismiss(loadingToast);

      if (data.success) {
        toast.success("Thank you! We will contact you shortly.");
        event.target.reset();
      } else {
        toast.error(data.message || "Submission failed");
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Network error. Please try again.");
    }
  };

  return (
    <>
      {/* ---------------- HERO + FORM ---------------- */}
      <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950 px-6 sm:px-12 lg:px-24 py-24 flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* left side content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
              <span className="block text-gray-900 dark:text-white">
                The right data.
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                The right architecture.
              </span>
              <span className="block text-gray-900 dark:text-white">
                Salesforce & AI.
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl">
              We help B2B businesses spend less time managing systems and more
              time closing deals with AI, Salesforce, and custom development
              built for their workflows.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl text-white font-semibold flex items-center justify-center gap-2"
              >
                System Readiness Review
                <ArrowRight size={18} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl"
              >
                Free Sales Assessment
              </motion.button>
            </div>
          </motion.div>

          {/* form */}

          <motion.form
            onSubmit={onSubmit}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8 grid sm:grid-cols-2 gap-4 dark:text-white"
          >
            {/* Hidden fields for email formatting */}
            <input
              type="hidden"
              name="subject"
              value="New Contact Form Submission"
            />
            <input type="hidden" name="from_name" value="Services Page" />

            <motion.div
              variants={fieldVariants}
              className="sm:col-span-2 text-center mb-3"
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Contact Us
              </h2>
            </motion.div>

            {/* Name */}
            <motion.div variants={fieldVariants}>
              <p className="mb-2 text-sm font-medium">Your Name</p>
              <div className="flex items-center gap-2 pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                <img
                  src={assets.person_icon}
                  alt="Person"
                  className="w-4 h-4 opacity-70"
                />
                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Enter your name"
                  className="w-full p-3 text-sm bg-transparent outline-none"
                />
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div variants={fieldVariants}>
              <p className="mb-2 text-sm font-medium">Mobile No</p>
              <div className="flex items-center gap-2 pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                <Phone size={16} className="opacity-70" />
                <input
                  type="tel"
                  name="phone"
                  required
                  autoComplete="tel"
                  placeholder="Enter your mobile number"
                  className="w-full p-3 text-sm bg-transparent outline-none"
                />
              </div>
            </motion.div>

            {/* Email */}
            <motion.div variants={fieldVariants}>
              <p className="mb-2 text-sm font-medium">Email</p>
              <div className="flex items-center gap-2 pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                <img
                  src={assets.email_icon}
                  alt="Email"
                  className="w-4 h-4 opacity-70"
                />
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="Enter your email"
                  className="w-full p-3 text-sm bg-transparent outline-none"
                />
              </div>
            </motion.div>

            {/* Requirements */}
            <motion.div variants={fieldVariants}>
              <p className="mb-2 text-sm font-medium">Requirements</p>
              <input
                type="text"
                name="requirements"
                required
                placeholder="Enter your requirements"
                className="w-full p-3 text-sm bg-transparent outline-none rounded-lg border border-gray-300 dark:border-gray-600"
              />
            </motion.div>

            {/* Message */}
            <motion.div variants={fieldVariants} className="sm:col-span-2">
              <p className="mb-2 text-sm font-medium">Message</p>
              <textarea
                name="message"
                rows={3}
                required
                placeholder="Tell us about your project"
                className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent"
              />
            </motion.div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="sm:col-span-2 mt-2 w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold px-10 py-3 rounded-xl"
            >
              Book a call
            </motion.button>
          </motion.form>
        </div>
      </section>

      <Capabilities />
      <ReadinessReview />
      <FAQSection />

      {/* outbound page */}

      <OutBoundSystems />
      <Scale />
      <DiagnoticsSession />

      <ScrollFramework />
     </>
  );
};

export default ServicesPage;
