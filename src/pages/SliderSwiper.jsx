 import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Elevate Your Digital Presence",
    desc: "Strategic design and engineering that transforms ambitious ideas into scalable digital products.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Crafting Exceptional Experiences",
    desc: "We blend creativity with technology to build seamless user experiences that convert.",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Engineered for Performance",
    desc: "Fast, secure, and scalable solutions built with modern architecture and precision.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Design Meets Innovation",
    desc: "Premium interfaces crafted with attention to detail and pixel-perfect execution.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function SliderSwiper() {
  return (
    // <Swiper
    //   modules={[Autoplay, Pagination]}
    //   spaceBetween={30}
    //   slidesPerView={1}
    //   autoplay={{ delay: 3000 }}
    //   pagination={{ clickable: true }}
    //   className="max-w-4xl mx-auto"
    // >
    //   {[1, 2, 3].map((item) => (
    //     <SwiperSlide key={item}>
    //       <div className="h-64 bg-slate-900 text-white flex items-center justify-center text-4xl rounded-xl">
    //         Slide {item}
    //       </div>
    //     </SwiperSlide>
    //   ))}
    // </Swiper>
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className=" overflow-hidden"
      >
        {slides.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative h-125 md:h-150 group">
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 text-white max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                  {item.title}
                </h2>

                <p className="text-lg md:text-xl text-gray-300 mt-6">
                  {item.desc}
                </p>

                <button className="mt-8 w-fit px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
                  Explore More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
