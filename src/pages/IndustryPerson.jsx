 import React from "react";

const IndustryPerson = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* left */}
        <div className="relative">
           <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=1200&auto=format&fit=crop"
              alt="Retail"
              className="w-full h-[400px] object-cover rounded-2xl"
            />
             <div className="absolute -bottom-8 left-6 bg-orange-500 text-white px-6 py-4 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold leading-tight">
                STRONG FOR <br /> RETAIL
              </h3>
            </div>
          </div>
          
           <div className="mt-16 max-w-md">
            <p className="text-gray-700 mb-6">
              Whether it's a shelf, cash register or warehouse: With ReAct
              Now, your employees have everything they need.
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors">
              ReAct Now for retail
            </button>
          </div>
        </div>

        {/*  right*/}
        <div className="relative">
           <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1200&auto=format&fit=crop"
              alt="Industry"
              className="w-full h-[400px] object-cover rounded-2xl"
            />
             <div className="absolute -bottom-8 right-6 bg-cyan-500 text-white px-6 py-4 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold leading-tight">
                SMART FOR <br /> INDUSTRY
              </h3>
            </div>
          </div>
          
           <div className="mt-16 max-w-md ml-auto text-right">
            <p className="text-gray-700 mb-6">
              Smooth processes and seamless communication increase productivity.
            </p>
            <button className="bg-cyan-500 text-white px-6 py-3 rounded-full hover:bg-cyan-600 transition-colors">
              ReAct Now for industry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryPerson;