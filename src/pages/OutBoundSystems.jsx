import React from "react";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import assets from "../assets/assets";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const OutBoundSystems = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const loadingToast = toast.loading("Sending message...");
    const formData = new FormData(event.target);

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
    } catch {
      toast.dismiss(loadingToast);
      toast.error("Network error. Please try again.");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950 px-6 sm:px-12 lg:px-24 py-24 flex items-center">
      <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
            <span className="block text-gray-900 dark:text-white">
              Predictable Outbound
            </span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Pipeline for B2B Service
            </span>
            <span className="block bg-gradient-to-r from-green-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
              Businesses
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl">
            If your pipeline feels unstable, your outbound isn’t a system yet.
          </p>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl">
            We build predictable outbound pipelines that consistently create
            qualified sales conversations.
          </p>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl text-white font-semibold flex items-center gap-2"
          >
            System Readiness Review
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>

        {/* form */}

        <motion.form
          onSubmit={onSubmit}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8 grid sm:grid-cols-2 gap-4 dark:text-white"
        >
          <input
            type="hidden"
            name="subject"
            value="New Contact Form Submission"
          />
          <input type="hidden" name="from_name" value="Outbound Systems Page" />

          <motion.div
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
            className="sm:col-span-2 text-center mb-4"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center justify-center gap-3
      text-3xl sm:text-4xl font-extrabold
      bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
      bg-clip-text text-transparent"
            >
               
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
              Schedule a Call
              
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
            </motion.h2>
          </motion.div>

          <motion.div variants={fieldVariants}>
            <p className="mb-2 text-sm font-medium">Your Name</p>
            <div className="flex items-center gap-2 pl-3 rounded-lg border">
              <img src={assets.person_icon} className="w-4 h-4 opacity-70" />
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full p-3 bg-transparent outline-none"
              />
            </div>
          </motion.div>

          <motion.div variants={fieldVariants}>
            <p className="mb-2 text-sm font-medium">Mobile No</p>
            <div className="flex items-center gap-2 pl-3 rounded-lg border">
              <Phone size={16} className="opacity-70" />
              <input
                type="tel"
                name="phone"
                placeholder="Enter your number "
                required
                className="w-full p-3 bg-transparent outline-none"
              />
            </div>
          </motion.div>

          <motion.div variants={fieldVariants}>
            <p className="mb-2 text-sm font-medium">Email</p>
            <div className="flex items-center gap-2 pl-3 rounded-lg border">
              <img src={assets.email_icon} className="w-4 h-4 opacity-70" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full p-3 bg-transparent outline-none"
              />
            </div>
          </motion.div>

          <motion.div variants={fieldVariants}>
            <p className="mb-2 text-sm font-medium">Requirements</p>
            <input
              type="text"
              name="requirements"
              placeholder=""
              required
              className="w-full p-3 bg-transparent outline-none rounded-lg border"
            />
          </motion.div>

          <motion.div variants={fieldVariants} className="sm:col-span-2">
            <p className="mb-2 text-sm font-medium">Message</p>
            <textarea
              name="message"
               rows={3}
              required
              className="w-full p-3 bg-transparent outline-none rounded-lg border"
            />
          </motion.div>

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
  );
};

export default OutBoundSystems;
