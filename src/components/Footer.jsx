import React from "react";
import assets from "../assets/assets";
import { useNavigate, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Footer = ({ theme }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-gray-900 pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40">
      <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
        {/* Left Side */}
        <div className="space-y-5 text-sm text-gray-700 dark:text-gray-400">
          <img
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            className="w-32 sm:w-44"
            alt="Company Logo"
          />

          <p className="max-w-md">
            From Strategy to execution, we craft digital solutions that move
            your business forward.
          </p>

          <ul className="flex gap-8">
            <li>
              <NavLink to="/" className="hover:text-primary">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:text-primary">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/ourwork" className="hover:text-primary">
                Our Work
              </NavLink>
            </li>
            <li>
              <NavLink to="/contactuspage" className="hover:text-primary">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="text-gray-600 dark:text-gray-400">
          <h3 className="font-semibold">Subscribe to our newsletter</h3>
          <p className="text-sm my-2 mt-6">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>

          <div className="flex gap-2 text-sm mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary outline-none transition"
            />

            <button className="bg-primary hover:bg-primary/90 transition text-white rounded-md px-6">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr className="border-gray-300 dark:border-gray-600 my-6" />

      {/* Bottom */}
      <div className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap">
        <p>Copyright 2026 © veda - All Rights Reserved</p>

        <div className="flex items-center gap-4">
          <img
            src={assets.facebook_icon}
            alt="Facebook"
            className="w-5 hover:scale-110 transition"
          />
          <img
            src={assets.instagram_icon}
            alt="Instagram"
            className="w-5 hover:scale-110 transition"
          />
          <img
            src={assets.linkedin_icon}
            alt="LinkedIn"
            className="w-5 hover:scale-110 transition"
          />
          <img
            src={assets.twitter_icon}
            alt="Twitter"
            className="w-5 hover:scale-110 transition"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
