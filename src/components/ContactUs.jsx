 import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import toast from "react-hot-toast";
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

const fieldVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
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

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const loadingToast = toast.loading("Sending message...");

    const formData = new FormData(event.target);
    formData.append(
      "access_key",
      "e7986021-fb3b-4ddc-bc28-1c814c1760fd"
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      toast.dismiss(loadingToast);

      if (data.success) {
        toast.success("Thank you for your submission!");
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
    <section
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30
      text-gray-700 dark:text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Title
          title="Reach out to us"
          desc="From strategy to execution, we craft digital solutions that move your business forward."
        />
      </motion.div>

      <motion.form
        onSubmit={onSubmit}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
      >
        <motion.div variants={fieldVariants}>
          <p className="mb-2 text-sm font-medium">Your Name</p>
          <motion.div
            whileFocusWithin={{ scale: 1.02 }}
            className="flex items-center gap-2 pl-3 rounded-lg
            border border-gray-300 dark:border-gray-600"
          >
            <img src={assets.person_icon} alt="" className="w-4 h-4 opacity-70" />
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full p-3 text-sm bg-transparent outline-none"
            />
          </motion.div>
        </motion.div>

        <motion.div variants={fieldVariants}>
          <p className="mb-2 text-sm font-medium">Email</p>
          <motion.div
            whileFocusWithin={{ scale: 1.02 }}
            className="flex items-center gap-2 pl-3 rounded-lg
            border border-gray-300 dark:border-gray-600"
          >
            <img src={assets.email_icon} alt="" className="w-4 h-4 opacity-70" />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full p-3 text-sm bg-transparent outline-none"
            />
          </motion.div>
        </motion.div>

        <motion.div variants={fieldVariants} className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <motion.textarea
            whileFocus={{ scale: 1.01 }}
            name="message"
            required
            rows={8}
            placeholder="Enter your message"
            className="w-full p-3 text-sm outline-none rounded-lg
            border border-gray-300 dark:border-gray-600"
          />
        </motion.div>

        <motion.button
          variants={fieldVariants}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          type="submit"
          className="w-max flex gap-2 bg-primary text-white text-sm
          px-10 py-3 rounded-full cursor-pointer"
        >
          Submit <img src={assets.arrow_icon} alt="" />
        </motion.button>
      </motion.form>
    </section>
  );
};

export default ContactUs;
