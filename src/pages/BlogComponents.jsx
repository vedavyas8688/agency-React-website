import React from "react";

const BlogComponents = () => {
  return (
    <>
    
      <div className="flex justify-center">
        <div className="2xl:container 2xl:mx-auto lg:px-20 lg:py-16 md:px-6 md:py-12 py-9 px-4 w-full">
          <div
            role="main"
            className="flex flex-col items-center justify-center"
          >
            <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">
              This Week Blogs
            </h1>
            <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
              If you're looking for random paragraphs, you've come to the right
              place.
            </p>
          </div>

          <div className="lg:flex items-stretch md:mt-12 mt-8 gap-6">
            <div className="lg:w-1/2">
              <div className="sm:flex items-center justify-between gap-6">
                {/* Card 1 */}
                <div className="sm:w-1/2 relative">
                  <p className="p-6 text-xs font-medium text-white absolute top-0 right-0">
                    09 Feb 2026
                  </p>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-xl font-semibold text-white">
                      Modern Living
                    </h2>
                    <p className="text-base text-white mt-2">
                      Minimal Interiors
                    </p>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                    className="w-full"
                    alt="interior"
                  />
                </div>

                {/* Card 2 */}
                <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
                  <p className="p-6 text-xs font-medium text-white absolute top-0 right-0">
                    09 Feb 2026
                  </p>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-xl font-semibold text-white">
                      Creative Spaces
                    </h2>
                    <p className="text-base text-white mt-2">
                      Design Inspiration
                    </p>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36"
                    className="w-full"
                    alt="workspace"
                  />
                </div>

              </div>

              {/* card3 */}
              <div className="relative mt-6">
                <p className="p-6 text-xs font-medium text-white absolute top-0 right-0">
                  09 feb 2026
                </p>
                <div className="absolute bottom-o left-0 p-6 ">
                  <h2 className="text-xl font-semibold text-white">
                    Calm Corners
                  </h2>
                  <p className="text-base text-white mt-2">
                    Comfort Meets Style
                  </p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
                  className="w-full"
                  alt="living room"
                />
              </div>

            </div>

            {/* right */}


            <div className="lg:w-1/2 flex flex-col justify-between gap-6 mt-6 lg;mt-0" >

            {/* card4 */}

             <div className="relative">
              <p className="p-6 text-xs font-medium text-white absolute top-0 right-0">
                09 Feb 2026
              </p>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-semibold text-white">
                  Open Designs
                </h2>
                <p className="text-base text-white mt-2">
                  Airy layouts
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5"
                className="w-full"
                alt="open interior"
              />
            </div>

             <div className="sm:flex items-center justify-between gap-6">

              {/* Card 5 */}
              <div className="relative w-full">
                <p className="p-6 text-xs font-medium text-white absolute top-0 right-0">
                  09 Feb 2026
                </p>
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="text-xl font-semibold text-white">
                    Elegant Touch
                  </h2>
                  <p className="text-base text-white mt-2">
                    Details matter
                  </p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1615874959474-d609969a20ed"
                  className="w-full"
                  alt="decor"
                />
              </div>

              {/* Card 6 */}
              <div className="relative w-full sm:mt-0 mt-4">
                <p className="p-6 text-xs font-medium text-white absolute top-0 right-0">
                  09 Feb 2026
                </p>
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="text-xl font-semibold text-white">
                    Soft Tones
                  </h2>
                  <p className="text-base text-white mt-2">
                    Neutral palettes
                  </p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
                  className="w-full"
                  alt="wall design"
                />
              </div>

            </div>

            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default BlogComponents;
