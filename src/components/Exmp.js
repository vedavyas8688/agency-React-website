 export default function StatsSection() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      {/* Wrapper */}
      <div className="flex flex-col gap-8 lg:flex-row">
        
        {/* LEFT — Hero Image */}
        <div
          className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-gray-100
                     bg-[url('https://picsum.photos/seed/business/900/1050')] 
                     bg-cover bg-center lg:flex-1"
        >
          {/* Top Right Spacer */}
          <div className="relative grid w-[220px] gap-12">
            
            {/* Quarter Circle */}
            <div className="h-[60px] rounded-br-2xl bg-white"></div>

            {/* Top-right Cut-out */}
            <div
              className="absolute top-0 right-[-30px] h-[30px] w-[30px] scale-y-[-1] bg-white"
              style={{
                clipPath: "path('M0 0 Q0,30 30,30 L0,30 Z')",
              }}
            ></div>

            {/* Bottom-left Cut-out */}
            <div
              className="absolute bottom-[-30px] left-0 h-[30px] w-[30px] scale-y-[-1] bg-white"
              style={{
                clipPath: "path('M0 0 Q0,30 30,30 L0,30 Z')",
              }}
            ></div>
          </div>
        </div>

        {/* RIGHT — Stats Grid */}
        <div className="grid w-full gap-8 sm:grid-cols-2 lg:flex-1">
          
          {/* Card 1 */}
          <article className="flex flex-col rounded-3xl bg-gray-100 p-10">
            <h6 className="relative mb-4 inline-block pb-4 text-xs font-semibold uppercase tracking-wide text-gray-800">
              Global Reach
              <span className="absolute inset-x-0 bottom-0 border-b border-gray-800/10"></span>
            </h6>

            <div className="mt-auto">
              <div className="flex items-start">
                <span className="text-5xl font-extrabold leading-tight text-gray-900">
                  85
                </span>
                <span className="py-2 align-super text-4xl font-bold text-red-400">
                  +
                </span>
              </div>
              <p className="text-sm text-gray-600">offices worldwide</p>
            </div>
          </article>

          {/* Card 2 */}
          <article className="flex flex-col rounded-3xl bg-gray-100 p-10">
            <h6 className="relative mb-4 inline-block pb-4 text-xs font-semibold uppercase tracking-wide text-gray-800">
              Local Expertise
              <span className="absolute inset-x-0 bottom-0 border-b border-gray-800/10"></span>
            </h6>

            <div className="mt-auto">
              <div className="flex items-start">
                <span className="text-5xl font-extrabold leading-tight text-gray-900">
                  1,500
                </span>
                <span className="py-2 align-super text-4xl font-bold text-red-400">
                  +
                </span>
              </div>
              <p className="text-sm text-gray-600">employees</p>
            </div>
          </article>

          {/* Card 3 */}
          <article className="flex flex-col rounded-3xl bg-gray-100 p-10">
            <h6 className="relative mb-4 inline-block pb-4 text-xs font-semibold uppercase tracking-wide text-gray-800">
              Our Impact
              <span className="absolute inset-x-0 bottom-0 border-b border-gray-800/10"></span>
            </h6>

            <div className="mt-auto">
              <div className="flex items-start">
                <span className="text-5xl font-extrabold leading-tight text-gray-900">
                  248
                </span>
                <span className="py-2 align-super text-4xl font-bold text-red-400">
                  +
                </span>
              </div>
              <p className="text-sm text-gray-600">projects done</p>
            </div>
          </article>

          {/* Card 4 — Image Card */}
          <article
            className="flex flex-col rounded-3xl bg-gray-100 p-10 
                       bg-[url('https://picsum.photos/seed/people/600/600')] 
                       bg-cover bg-center min-h-[150px]"
          ></article>

        </div>
      </div>
    </div>
  );
}
