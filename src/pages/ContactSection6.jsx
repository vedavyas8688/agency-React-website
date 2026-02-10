import React from "react";

const ContactSection6 = () => {
  return (
    <section className="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
      <div className="container mx-auto flex px-6 py-16">
        {/* left */}

        <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
          <span className="mb-12 h-2 w-20 bg-gray-800 dark:bg-white" />

          <h1 className="flex flex-col font-bebas-neue text-6xl font-black uppercase leading-none text-gray-800 sm:text-8xl dark:text-white">
            Be on
            <span className="text-5xl sm:text-7xl">Time</span>
          </h1>

          <p className="mt-4 text-sm text-gray-700 sm:text-base dark:text-gray-300">
            Dimension of reality that makes change possible and understandable.
            An indefinite and homogeneous environment in which natural events
            and human existence take place.
          </p>

          <div className="mt-8 flex">
            <a
              href="#"
              className="mr-4 rounded-lg border-2 border-transparent bg-pink-500 px-4 py-2 text-md uppercase text-white transition hover:bg-pink-400"
            >
              Get started
            </a>
            <a
              href="#"
              className="rounded-lg border-2 border-pink-500 bg-transparent px-4 py-2 text-md uppercase text-pink-500 transition hover:bg-pink-500 hover:text-white dark:text-white"
            >
              Read more
            </a>
          </div>
        </div>

        {/* right */}

        <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="Watch images"
            className="m-auto max-w-xs h-100 rounded-3xl md:max-w-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection6;
