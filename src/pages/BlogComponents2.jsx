import React from "react";

const posts = [
  {
    id: 1,
    category: "Technology",
    title: "The Future of Human–AI Collaboration",
    desc: "A deep look at how AI systems and humans will collaborate to build smarter, more ethical products.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
    views: 1200,
    comments: 18,
  },
  {
    id: 2,
    category: "Design",
    title: "Design Systems That Scale",
    desc: "How modern design systems help teams move faster while keeping visual consistency.",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop",
    views: 980,
    comments: 12,
  },
  {
    id: 3,
    category: "Development",
    title: "Advanced Tailwind CSS Patterns",
    desc: "Production-ready Tailwind techniques used by agencies for large-scale applications.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
    views: 1540,
    comments: 27,
  },
  {
    id: 4,
    category: "Startup",
    title: "From Idea to MVP in 30 Days",
    desc: "A practical roadmap to validate ideas quickly and launch your first MVP with confidence.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop",
    views: 860,
    comments: 9,
  },
  {
    id: 5,
    category: "Product",
    title: "Building Products Users Love",
    desc: "Why empathy-driven product decisions lead to higher engagement and retention.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    views: 1320,
    comments: 21,
  },
  {
    id: 6,
    category: "Business",
    title: "Remote Teams: What Actually Works",
    desc: "Lessons learned from building and managing high-performing distributed teams.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    views: 1100,
    comments: 16,
  },

 
//   {
//     id: 7,
//     category: "AI",
//     title: "AI Strategy Beyond the Hype",
//     desc: "How leaders can separate real AI value from buzzwords and build strategies that last.",
//     image:
//       "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
//     views: 1890,
//     comments: 34,
//   },
//   {
//     id: 8,
//     category: "UX",
//     title: "UX Decisions Backed by Data",
//     desc: "Blending qualitative research with analytics to design experiences that convert.",
//     image:
//       "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format&fit=crop",
//     views: 920,
//     comments: 11,
//   },
//   {
//     id: 9,
//     category: "Engineering",
//     title: "Scaling Frontend Architecture",
//     desc: "Patterns and pitfalls when scaling React applications across large teams.",
//     image:
//       "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
//     views: 1680,
//     comments: 29,
//   },
  //   {
  //     id: 10,
  //     category: "Leadership",
  //     title: "Tech Leadership in Fast-Growth Companies",
  //     desc: "How engineering leaders can balance speed, quality, and culture.",
  //     image:
  //       "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&auto=format&fit=crop",
  //     views: 1040,
  //     comments: 14,
  //   },
  //   {
  //     id: 11,
  //     category: "Marketing",
  //     title: "Content That Builds Trust",
  //     desc: "Why authenticity and consistency outperform growth hacks in modern marketing.",
  //     image:
  //       "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1200&auto=format&fit=crop",
  //     views: 880,
  //     comments: 8,
  //   },
  //   {
  //     id: 12,
  //     category: "SaaS",
  //     title: "Retention-First SaaS Design",
  //     desc: "Design and product strategies that reduce churn and increase lifetime value.",
  //     image:
  //       "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
  //     views: 1460,
  //     comments: 23,
  //   },
];

const BlogComponents2 = () => {
  return (
    <>
      <section className="bg-[#0b0f19] py-28">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-2xl mb-20">
            <h2 className="text-5xl font-semibold text-white leading-tight">
              Insights & Perspectives
            </h2>
            <p className="text-gray-400 mt-6 text-lg">
              Deep dives into technology, design, and product thinking.
            </p>
          </div>

           <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group relative rounded-3xl overflow-hidden
                     bg-white/5 backdrop-blur-xl border border-white/10
                     transition-all duration-500
                     hover:-translate-y-2 hover:border-white/20"
              >
                 <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover
                         transition-transform duration-700
                         group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                 <div className="p-8">
                  <span className="inline-block text-xs uppercase tracking-[0.2em] text-indigo-400 mb-4">
                    {post.category}
                  </span>

                  <h3 className="text-xl font-semibold text-white leading-snug mb-4">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {post.desc}
                  </p>

                    
                </div>
                <div className="flex items-center  justify-between text-xs mb-3 ml-2 mr-2 text-gray-500">
                    <span>{post.views.toLocaleString()} views</span>
                    <span>{post.comments} comments</span>
                  </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogComponents2;
