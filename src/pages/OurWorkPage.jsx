 import React from 'react'
import IndustryPerson from './IndustryPerson'
import OurTeam from './OurTeam'
import OurPartners from './OurPartners'
import StickyBackground from './StickyBackground'
 import CategorFilter from './CategorFilter'
import PricePage from './PricePage'
import BlogComponents from './BlogComponents'
 
 const OurWorkPage = () => {
   return (
        <>
        <section className="bg-[#1f2326] text-white py-20 relative overflow-hidden">
       
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT */}
        <div className="space-y-6">
          <p className="text-5xl text-gray-300 mb-4 tracking-wide">VeDaa Now</p>

          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight">
            CONNECT YOUR TEAM TO <br />
            EVERYTHING - COLLEAGUES, <br />
            CUSTOMERS, DEVICES, <br />
            TASKS AND DATA
          </h1>

          <p className="text-gray-300 text-lg max-w-xl mb-8 leading-relaxed">
            Stress-free communication, fewer running routes, a better
            atmosphere, more turnover and nothing is forgotten anymore: with
            ReAct Now, your employees finally have a tool at their fingertips so
            that they can fully concentrate on their work.
          </p>

          <div className="flex items-center gap-4 max-w-2xl pt-4">
            <div className="relative flex-1">
              <input
                type="email"
                placeholder="name@company.com"
                className="w-full px-6 py-4 rounded-full bg-transparent border-2 border-gray-600 outline-none focus:border-cyan-400 transition-colors text-white placeholder-gray-500"
              />
            </div>
            <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-all hover:scale-105 whitespace-nowrap shadow-lg">
              SCHEDULE A DEMO
            </button>
          </div>
        </div>


        <div className="">

        </div>




         
      </div>
    </section>
    
    <IndustryPerson />
    <OurTeam />
    <OurPartners />
    <StickyBackground />
 
    <CategorFilter />
    <PricePage />
    <BlogComponents/>
     

    </>
   )
 }
 
 export default OurWorkPage
 