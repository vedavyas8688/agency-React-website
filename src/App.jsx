 import React, { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import OurWork from "./components/OurWork";
import Team from "./components/Team";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import ServicesPage from "./pages/ServicesPage";
import { Toaster } from "react-hot-toast";
import OurWorkPages from "./pages/OurWorkPage";
 import BlogsSection from "./pages/BlogsSection";
import ContactUsPage from "./pages/ContactUsPage";
import ScrollToTop from "./pages/ScrollToTop";
import PageError404 from "./pages/PageError404";
 
/* Home page layout */
const Home = () => (
   <>
    <Hero />
    <TrustedBy />
    <Services />
    <OurWork />
    <Team />
    <ContactUs />
  </>
);

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });
  const requestRef = useRef(null);

  /* Cursor animation */
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1;
      position.current.y += (mouse.current.y - position.current.y) * 0.1;

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`;
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  /* Theme handling */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />

      <ScrollToTop/>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/ourwork" element={<OurWorkPages />} />
        <Route path="/blogcomponents" element={<BlogsSection/>} />
        <Route path="/contactuspage" element={<ContactUsPage />}/>



        {/* errorpage */}
         <Route path="*" element={<PageError404 />} />

          


      </Routes>

      <Footer theme={theme} />

      {/* Cursor Outline */}
      <div
        ref={outlineRef}
        className="fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none 'z-9999"
      />

      {/* Cursor Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]"
      />
    </div>
  );
};

export default App;
