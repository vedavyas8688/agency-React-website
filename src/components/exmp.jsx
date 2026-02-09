 const BlogSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {posts.map((post) => (
            <div key={post.id} className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={post.image}
                  alt={post.title}
                />

                <div className="p-6">
                  <h2 className="tracking-widest text-xs font-medium text-gray-400 mb-1">
                    {post.category}
                  </h2>

                  <h1 className="text-lg font-medium text-gray-900 mb-3">
                    {post.title}
                  </h1>

                  <p className="leading-relaxed mb-3">{post.desc}</p>

                  <div className="flex items-center flex-wrap">
                    <a className="text-indigo-500 inline-flex items-center cursor-pointer">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>

                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto text-sm pr-3 py-1 border-r-2 border-gray-200">
                      👁 {post.views}
                    </span>

                    <span className="text-gray-400 inline-flex items-center text-sm">
                      💬 {post.comments}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
