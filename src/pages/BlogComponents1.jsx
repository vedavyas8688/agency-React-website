import { div } from "motion/react-client";
import React from "react";

const articles = [
  {
    id: 1,
    title: "2022 Transparency Report: January to June",
    category: "Policy",
    desc:"We’re reporting on a six-month period rather than annually to increase our level of transparency. For this report, we’ve continued with the more granular reporting we began in our 2021 reports.",
    date: "Feb 09, 2026",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },
  {
    id: 2,
    title: "The next step for LGTM.com: GitHub code scanning",
    category: "Company",
    desc:"Today, GitHub code scanning has all of LGTM.com’s key features—and more! The time has therefore come to announce the plan for the gradual deprecation of LGTM.com.",
    date: "Feb 09, 2022",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
];


function BlogComponents1() {
  return (
    <>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* left */}
             
            <div className="lg:col-span-2">
                <hr className="my-8 border-gray-600" />

              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                alt="featured"
                className="rounded-lg w-full h-[420px] object-cover"
              />
              <p className="text-sm text-pink-500 mt-6 uppercase">
                open source
              </p>
              <h2 className="text-3xl font-bold mt-2 leading-tight">
                New request for comments on improving npm security with Sigstore
              </h2>
              <p className="text-gray-600 mt-3 max-w-xl">
                {" "}
                Supply chain attacks exploit trust of open source developers and
                consumers. Read our proposal for improving security.
              </p>

              <div className="flex items-center gap-3 mt-4 text-sm text-gray-500 ">
                <span className="font-medium text-black">Jusin Hanching</span>
                <span>8 FEB 2026</span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="space-y-8">
              {[
                {
                  title: "5 simple things you can do with GitHub Packages",
                  category: "Product",
                  img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
                },
                {
                  title:
                    "Streamline virtual hackathon events with the new Hackathon in the Cloud",
                  category: "Education",
                  img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
                },
                {
                  title: "GitHub Sponsors available in 30 new regions",
                  category: "Open Source",
                  img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
                },
                {
                  title: "How GitHub Actions helps teams automate faster",
                  category: "Engineering",
                  img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
                },
                // {
                //   title:
                //     "Improving supply chain security for open source projects",
                //   category: "Security",
                //   img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
                // },
                // {
                //   title: "Introducing GitHub Copilot for business workflows",
                //   category: "AI",
                //   img: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
                // },
                // {
                //   title:
                //     "Scaling developer productivity with GitHub Codespaces",
                //   category: "DevOps",
                //   img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
                // },
              ].map((item, i) => (
                <div key={i} className="flex-gap-4">
                  <img
                    src={item.img}
                    alt=""
                    className="w-25 h-25 rounded-md object-cover"
                  />
                  <p className="text-xs text-pink-600 uppercase">
                    {item.category}
                  </p>
                  <h4 className="font-semibold ">
                      {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Feb 09 2026

                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* bitton  */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
      {articles.map((item) => (
        <article
          key={item.id}
          className="group cursor-pointer"
        >
            <hr className="my-8 border-gray-600" />

           
          <div className="overflow-hidden rounded-lg aspect-[16/10]">
            <img
              src={item.img}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          
          <p className="text-sm text-pink-600 uppercase mt-5 tracking-wide">
            {item.category}
          </p>

          <h3 className="text-xl font-bold mt-2 line-clamp-2 group-hover:underline">
            {item.title}
          </h3>

          <p className="text-gray-900 text-sm font-semibold mt-1 ">
                   {item.desc}
          </p>

          <p className="text-sm text-gray-500 mt-2">
            {item.date}
          </p>
        </article>
      ))}
    </div>

          
        </div>
      </section>
      <hr className="my-8 mx-15 border-gray-200" />

    </>
  );
}

export default BlogComponents1;
