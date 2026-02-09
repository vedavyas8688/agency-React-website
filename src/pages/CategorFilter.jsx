import { useState } from "react";

const articles = [
  {
    id: 1,
    type: "featured",
    category: "ai",
    title: "The Future of Human–AI Collaboration",
    desc: "A deep look at how intelligence systems and humans will shape products, creativity, and decision-making.",
    author: "Sarah Chen",
    read: "6 min",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600",
  },
  {
    id: 2,
    type: "wide",
    category: "engineering",
    title: "System Design for AI Products",
    author: "Rahul Mehta",
    read: "5 min",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200",
  },
  {
    id: 3,
    type: "small",
    category: "ai",
    title: "GPT-5: What Actually Changed",
    desc: "Separating signal from hype",
    read: "3 min",
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1200",
  },
  {
    id: 4,
    type: "wide",
    category: "design",
    title: "Design Systems at Scale",
    author: "Alex Rivera",
    read: "4 min",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200",
  },
  {
    id: 5,
    type: "small",
    category: "product",
    title: "AI Features Users Actually Want",
    desc: "Lessons from shipped products",
    read: "3 min",
    image:
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=1200",
  },
  {
    id: 6,
    type: "small",
    category: "tech",
    title: "Rust in Production",
    desc: "One year later",
    read: "6 min",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
  },
  {
    id: 7,
    type: "wide",
    category: "ai",
    title: "From Prompts to Products",
    author: "Daniel Foster",
    read: "5 min",
    image:
      "https://images.unsplash.com/photo-1676321796070-902b6a8ec8a8?q=80&w=1200",
  },
  {
    id: 8,
    type: "small",
    category: "engineering",
    title: "Scaling APIs for AI Workloads",
    desc: "Lessons from real traffic spikes",
    read: "4 min",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200",
  },
  {
    id: 9,
    type: "wide",
    category: "product",
    title: "Shipping AI Without Breaking Trust",
    author: "Emily Wong",
    read: "6 min",
    image:
      "https://images.unsplash.com/photo-1551817958-20204d6ab8f8?q=80&w=1200",
  },
  {
    id: 10,
    type: "small",
    category: "design",
    title: "UX Patterns for AI Interfaces",
    desc: "Clarity beats cleverness",
    read: "3 min",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200",
  },
  {
    id: 11,
    type: "small",
    category: "tech",
    title: "Monorepos at Scale",
    desc: "What breaks first",
    read: "5 min",
    image:
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1200",
  },
  {
    id: 12,
    type: "wide",
    category: "engineering",
    title: "Observability for Modern Systems",
    author: "Karan Patel",
    read: "7 min",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
  },
  {
    id: 13,
    type: "small",
    category: "ai",
    title: "Evaluating LLM Outputs",
    desc: "Beyond accuracy metrics",
    read: "4 min",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1200",
  },
  {
    id: 14,
    type: "featured",
    category: "product",
    title: "Building AI Products People Love",
    desc: "Where UX, trust, and intelligence meet",
    author: "Michael Brooks",
    read: "8 min",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600",
  },
  {
    id: 15,
    type: "small",
    category: "design",
    title: "Designing for Edge Cases",
    desc: "Why defaults matter more than features",
    read: "3 min",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200",
  },
  {
    id: 16,
    type: "wide",
    category: "ai",
    title: "Rethinking Intelligence in Software",
    author: "Nina Kapoor",
    read: "6 min",
    image:
      "https://images.unsplash.com/photo-1677442135780-0d5b2aab7c71?q=80&w=1200",
  },
  {
    id: 17,
    type: "small",
    category: "engineering",
    title: "Async Architectures Explained",
    desc: "Why sync systems fail at scale",
    read: "4 min",
    image:
      "https://images.unsplash.com/photo-1581091870627-3f89c6a9b3f0?q=80&w=1200",
  },
  {
    id: 18,
    type: "small",
    category: "product",
    title: "Why AI Roadmaps Fail",
    desc: "Strategy before tooling",
    read: "5 min",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
  },
  {
    id: 19,
    type: "wide",
    category: "design",
    title: "Designing Calm Interfaces",
    author: "Laura Mendes",
    read: "4 min",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1200",
  },
  {
    id: 20,
    type: "small",
    category: "tech",
    title: "Web Performance Myths",
    desc: "What actually moves the needle",
    read: "3 min",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",
  },
  {
    id: 21,
    type: "featured",
    category: "ai",
    title: "Human-Centered AI Is Not Optional",
    desc: "Why ethics, UX, and outcomes are inseparable",
    author: "Arjun Malhotra",
    read: "9 min",
    image:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1600",
  },
  {
    id: 22,
    type: "small",
    category: "engineering",
    title: "Event-Driven Systems in Practice",
    desc: "From theory to production",
    read: "5 min",
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200",
  },
  {
    id: 23,
    type: "wide",
    category: "product",
    title: "Metrics That Matter for AI Products",
    author: "Sophia Grant",
    read: "6 min",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
  },
  {
    id: 24,
    type: "small",
    category: "design",
    title: "Design Tokens Done Right",
    desc: "Consistency without rigidity",
    read: "4 min",
    image:
      "https://images.unsplash.com/photo-1545239351-8d44b2d3e2a1?q=80&w=1200",
  },
  {
    id: 25,
    type: "small",
    category: "tech",
    title: "The Cost of Overengineering",
    desc: "Simple systems age better",
    read: "3 min",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200",
  },
  {
    id: 26,
    type: "wide",
    category: "ai",
    title: "LLMs in the Real World",
    author: "Victor Hansen",
    read: "7 min",
    image:
      "https://images.unsplash.com/photo-1677442135412-4c9a8c0d8b3b?q=80&w=1200",
  },
  {
    id: 27,
    type: "small",
    category: "product",
    title: "User Trust Is a Feature",
    desc: "You earn it or you lose it",
    read: "4 min",
    image:
      "https://images.unsplash.com/photo-1551817958-9b9c1d1a2f52?q=80&w=1200",
  },
  {
    id: 28,
    type: "small",
    category: "engineering",
    title: "Deployments Without Downtime",
    desc: "Patterns that actually work",
    read: "5 min",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
  },
  {
    id: 29,
    type: "wide",
    category: "design",
    title: "Designing for Systems, Not Screens",
    author: "Marco Silva",
    read: "6 min",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200",
  },
  {
    id: 30,
    type: "small",
    category: "tech",
    title: "Choosing the Right Stack",
    desc: "Constraints beat trends",
    read: "4 min",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200",
  },
];

const categories = [
  { id: "engineering", label: "Engineering" },
  { id: "ai", label: "AI" },
  { id: "product", label: "Product" },
  { id: "design", label: "Design" },
  { id: "tech", label: "Technology" },
  { id: "all", label: "All" },
];

export default function App() {
  const [active, setActive] = useState("engineering");

  const filtered =
    active === "AI" ? articles : articles.filter((a) => a.category === active);

  return (
    <div className="min-h-screen bg-[#0b0c0f] text-white px-6 py-14">
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight">
          Where thoughtful ideas
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">
            meet modern technology
          </span>
        </h1>
        <p className="mt-6 text-neutral-400 text-lg">
          Carefully curated insights on AI, engineering, design, and product.
        </p>
      </div>

      <div className="flex justify-center gap-2 mb-16 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`px-5 py-2 rounded-full text-sm transition
                ${
                  active === cat.id
                    ? "bg-white text-black"
                    : "bg-white/5 text-neutral-300 hover:bg-white/10"
                }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-[240px]">
        {filtered.map((item) => {
          if (item.type === "featured") {
            return (
              <article
                key={item.id}
                className="lg:col-span-4 lg:row-span-2 rounded-3xl overflow-hidden bg-neutral-900 shadow-2xl group"
              >
                <div className="relative h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  <div className="relative p-8 h-full flex flex-col justify-end">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-3">
                      {item.title}
                    </h2>
                    <p className="text-neutral-300 max-w-xl">{item.desc}</p>

                    <div className="mt-6 flex gap-4 text-sm text-neutral-400">
                      <span>{item.author}</span>
                      <span>•</span>
                      <span>{item.read}</span>
                    </div>
                  </div>
                </div>
              </article>
            );
          }

          if (item.type === "wide") {
            return (
              <article
                key={item.id}
                className="md:col-span-4 lg:col-span-3 rounded-3xl overflow-hidden bg-neutral-900 shadow-xl group"
              >
                <div className="relative h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-black/60" />

                  <div className="relative p-6 h-full flex flex-col justify-end">
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    <div className="text-sm text-neutral-400">
                      {item.author} · {item.read}
                    </div>
                  </div>
                </div>
              </article>
            );
          }

          return (
            <article
              key={item.id}
              className="rounded-3xl overflow-hidden bg-neutral-900 shadow-lg group"
            >
              <div className="relative h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-65 group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative p-5 h-full flex flex-col justify-end">
                  <h4 className="font-medium mb-1">{item.title}</h4>
                  <p className="text-xs text-neutral-400">{item.desc}</p>
                  <span className="mt-3 text-xs text-neutral-500">
                    {item.read}
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-24 text-center">
        <button className="px-10 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition">
          Explore More Articles
        </button>
      </div>
    </div>
  );
}
