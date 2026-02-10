import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { toast } from "react-hot-toast";
import assets from "../assets/assets"; // adjust path if needed

 
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

 
function ContactSection1() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const loadingToast = toast.loading("Sending message...");
    const formData = new FormData(event.target);

    //   access key
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#f6f1e9] py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT  */}
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          
          
          <img
  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop"
  alt="Corporate Professional"
  className="w-full h-[520px] object-cover rounded-2xl"
/>

        </motion.div>

        {/* RIGHT  form */}
        <motion.form
          onSubmit={onSubmit}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl
                     border border-gray-200 dark:border-gray-700
                     rounded-2xl p-6 sm:p-8 grid sm:grid-cols-2 gap-4
                     dark:text-white"
        >
          {/* Hidden email fields */}
          <input
            type="hidden"
            name="subject"
            value="New Contact Form Submission"
          />
          <input type="hidden" name="from_name" value="Services Page" />

          {/* Heading */}
          <motion.div
            variants={fieldVariants}
            className="sm:col-span-2 text-center mb-3"
          >
            <h2
              className="text-3xl sm:text-4xl font-extrabold
                           bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600
                           bg-clip-text text-transparent"
            >
              Contact Us
            </h2>
          </motion.div>

          {/* Name */}
          <motion.div variants={fieldVariants}>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Your Name
            </label>
            <div className="flex items-center gap-2 pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
              <img
                src={assets.person_icon}
                alt=""
                className="w-4 h-4 opacity-70"
              />
              <input
                id="name"
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
            <label htmlFor="phone" className="block mb-2 text-sm font-medium">
              Mobile No
            </label>
            <div className="flex items-center gap-2 pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
              <Phone size={16} className="opacity-70" />
              <input
                id="phone"
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
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <div className="flex items-center gap-2 pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
              <img
                src={assets.email_icon}
                alt=""
                className="w-4 h-4 opacity-70"
              />
              <input
                id="email"
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
            <label
              htmlFor="requirements"
              className="block mb-2 text-sm font-medium"
            >
              Requirements
            </label>
            <input
              id="requirements"
              type="text"
              name="requirements"
              required
              placeholder="Enter your requirements"
              className="w-full p-3 text-sm bg-transparent outline-none
                         rounded-lg border border-gray-300 dark:border-gray-600"
            />
          </motion.div>

          {/* Message */}
          <motion.div variants={fieldVariants} className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              required
              placeholder="Tell us about your project"
              className="w-full p-3 text-sm outline-none rounded-lg
                         border border-gray-300 dark:border-gray-600
                         bg-transparent resize-none"
            />
          </motion.div>

          {/* Submit */}
          <motion.button
            type="submit"
            whileHover={{ scale: loading ? 1 : 1.05 }}
            whileTap={{ scale: loading ? 1 : 0.95 }}
            disabled={loading}
            className={`sm:col-span-2 mt-2 w-full px-10 py-3 rounded-xl
                        font-semibold text-white
                        bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600
                        transition-opacity
                        ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
          >
            {loading ? "Sending..." : "Book a call"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

export default ContactSection1;
