// Trust Section – Premium Style
const ContactSection3 = () => {
  return (
    <section
      className="
        relative py-24 overflow-hidden
        bg-gradient-to-b from-white via-blue-50/40 to-white
        dark:bg-gradient-to-br dark:from-zinc-950 dark:via-slate-900 dark:to-teal-950
      "
    >
       <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl dark:bg-teal-400/10" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl dark:bg-emerald-400/10" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-20">
          <h3 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
            Trusted by{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-teal-400 dark:to-emerald-400">
              Growing Teams
            </span>
          </h3>

          <p className="mt-5 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Teams rely on us for precision execution, clear communication, and
            consistent delivery.
          </p>
        </div>

         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Projects Delivered", value: "100+" },
            { label: "Client Satisfaction", value: "98%" },
            { label: "Avg Response Time", value: "< 24 hrs" },
            { label: "Years of Experience", value: "5+" },
          ].map((item, index) => (
            <div
              key={index}
              className="
                group relative rounded-3xl p-8 text-center
                bg-white/70 backdrop-blur-xl
                border border-white/40 shadow-lg shadow-blue-100/50
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl
                dark:bg-slate-900/60 dark:border-slate-800/60 dark:shadow-none
              "
            >

                {/* border effecct */}
               <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-blue-500/10 dark:ring-teal-400/10 pointer-events-none" />

              <div className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                {item.value}
              </div>

              <div className="mt-3 text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection3;
