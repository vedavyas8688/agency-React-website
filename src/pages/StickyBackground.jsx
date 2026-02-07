import React from "react";

const StickyBackground = () => {
  return (
    <section className="relative h-[100vh]">
      <div
        className="sticky h-screen bg-cover bg-center  flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-2xl ml-16 bg-white/70 backdrop-blur-xl rounded-2xl p-10">
          <h1 className="text-4xl font-semibold mb-4">Join our team</h1>

           <p className="text-gray-700 leading-relaxed">
            We're a passionate and creative bunch, building innovative,
            user-friendly software solutions. Our workplace is filled
            with plenty of opportunities for growth.
            <br /><br />
            Whether you're applying for a specific role or just want
            to explore possibilities, we can't wait to hear from you.
          </p>

          <button className="mt-6 px-6 py-3 bg-black text-white  rounded-full">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default StickyBackground;
