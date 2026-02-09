 import React, { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `sm:hover:border-b ${isActive ? "border-b border-primary" : ""}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex justify-between items-center px-4
      sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20
      backdrop-blur-xl font-medium bg-white/50 dark:bg-black"
    >
      <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        className="w-32 sm:w-40"
        alt="Logo"
      />

      {/* Links */}
      <div
        className={`text-gray-700 dark:text-white sm:text-sm
        max-sm:fixed top-0 bottom-0 right-0 max-sm:w-60
        max-sm:min-h-screen max-sm:flex-col
        max-sm:bg-primary max-sm:text-white max-sm:pt-20 max-sm:pl-10
        flex sm:items-center gap-5
        transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}
      >
        <img
          src={assets.close_icon}
          className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(false)}
          alt=""
        />

        <NavLink
          to="/"
          onClick={() => setSidebarOpen(false)}
          className={linkClasses}
        >
          Home
        </NavLink>

        <NavLink
          to="/services"
          onClick={() => setSidebarOpen(false)}
          className={linkClasses}
        >
          Services
        </NavLink>

        <NavLink
          to="/ourwork"
          onClick={() => setSidebarOpen(false)}
          className= {linkClasses}
        >
          Our Work
        </NavLink>
        <NavLink
          to="/blogcomponents"
          onClick={() => setSidebarOpen(false)}
          className={linkClasses}
        >
          Blogs
        </NavLink>

        <NavLink
          to="/contactus"
          onClick={() => setSidebarOpen(false)}
          className={linkClasses}
        >
          Contact Us
        </NavLink>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          className="w-8 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(true)}
          alt=""
        />

        <a
          href="#contact-us"
          className="text-sm max-sm:hidden flex items-center gap-2
          bg-primary text-white px-6 py-2 rounded-full
          cursor-pointer hover:scale-105 transition-all"
        >
          Connect
          <img src={assets.arrow_icon} width={14} alt="" />
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;