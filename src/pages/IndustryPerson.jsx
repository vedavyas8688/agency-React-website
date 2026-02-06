import React from "react";
import assets from "../assets/assets";

const IndustryPerson = () => {
  return (
     <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* left Card */}
        <div className="relative">
          {/* Image */}
          {/* <img
            src={}
            alt="Retail"
            className="rounded-2xl w-full object-cover"
          /> */}

          
          {/* <div className="absolute -bottom-8 left-6 bg-orange-400 text-white px-8 py-4 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold tracking-wide">
              STRONG FOR<br />RETAIL
            </h3>
          </div> */}

           
          <div className="mt-16 max-w-md">
            <p className="text-gray-700 leading-relaxed mb-6">
              Whether it's a shelf, cash register or warehouse: With ReAct
              Now, your employees have everything they need to make your
              customers and their boss happy.
            </p>

            <button className="bg-orange-400 hover:bg-orange-500 transition text-white  px-6 py-3 rounded-full font-medium">
              ReAct Now for retail
            </button>
          </div>
        </div>

        {/* right Card */}
        <div className="relative">
           
          {/* <img
            src=" "
            alt="Industry"
            className="rounded-2xl w-full object-cover"
          /> */}

           
          <div className="absolute -bottom-8 right-6 bg-cyan-400 text-white px-8 py-4 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold tracking-wide">
              SMART FOR<br />INDUSTRY
            </h3>
          </div>

           
          <div className="mt-16 max-w-md ml-auto text-left">
            <p className="text-gray-700 leading-relaxed mb-6">
              Smooth processes and seamless communication: Increase your
              team's productivity and plant effectiveness with ReAct Now.
            </p>

            <button className="bg-cyan-400 hover:bg-cyan-500 transition text-white px-6 py-3 rounded-full font-medium">
              ReAct Now for industry
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndustryPerson;
