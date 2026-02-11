import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

const card = [
  {
    id: 1,
    title: "Web Development",
    desc: "Custom-built, scalable web applications engineered with modern frameworks and performance-focused architecture.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "UI/UX Design",
    desc: "Intuitive and visually compelling interfaces crafted to enhance user engagement and conversions.",
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Search Engine Optimization",
    desc: "Technical SEO strategies and content optimization designed to increase visibility and organic growth.",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Digital Marketing",
    desc: "Data-driven marketing campaigns across paid and organic channels to maximize ROI and brand reach.",
    image:
      "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Brand Strategy",
    desc: "Comprehensive brand positioning and identity systems that establish authority and long-term recognition.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "E-Commerce Solutions",
    desc: "Secure and conversion-optimized online stores with seamless integrations and scalable infrastructure.",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Content Marketing",
    desc: "Strategic content creation that educates, builds trust, and drives measurable business growth.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Performance Optimization",
    desc: "Advanced performance audits and optimization techniques to improve speed, UX, and Core Web Vitals.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop",
  },
];

const SliderSwiper1 = () => {
  return (
    <div className="w-full py-18 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 relative">
        <Swiper
          modules={[Autoplay, Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {card.map((cards) => (
            <SwiperSlide key={cards.id}>
              <div 
                className="relative h-100 rounded-2xl overflow-hidden group shadow-lg" 
                style={{ 
                  backgroundImage: `url(${cards.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition duration-300"></div>

                <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white ">
                  <h3 className="text-xl font-bold mb-3">{cards.title}</h3>
                  <p className="text-sm text-gray-200">{cards.desc}</p>
                </div>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* buttons */}

        <div className="flex justify-center gap-6 mt-8">
          <button className="custom-prev bg-white shadow-lg px-4 py-2 rounded-full">
            ←  
          </button>

          <button className="custom-next bg-white shadow-lg px-4 py-2 rounded-full">
              →
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderSwiper1;
