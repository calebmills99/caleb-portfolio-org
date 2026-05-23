export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20" style={{ background: "linear-gradient(135deg, #000000 0%, #0a1f33 40%, #0077BC 100%)" }}>
      <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(#0077BC 1px, transparent 1px), linear-gradient(90deg, #0077BC 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#0077BC] opacity-20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#009866] opacity-20 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border-2 border-[#0077BC] rounded text-[#0077BC] uppercase" style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.2em" }}>
          <span className="w-2 h-2 bg-[#16A34A] rounded-full animate-pulse" />
          Available for hire
        </div>

        <h1 className="text-white mb-6 uppercase" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 11vw, 9rem)", lineHeight: 0.92, letterSpacing: "-0.03em" }}>
          Caleb<br />
          <span className="text-[#0077BC]">Mills</span><br />
          <span className="text-[#009866]">Stewart.</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-5xl">
          <p className="text-white/80 max-w-xl" style={{ fontSize: "1.25rem", lineHeight: 1.5 }}>
            Bilingual technical communicator who builds what I teach. I turn code-level logic into tools people use — and turn real lives into stories that stick.
          </p>
          <div className="flex flex-wrap gap-3 items-start md:items-end md:justify-end">
            <a href="#work" className="px-8 py-4 bg-[#0077BC] text-white uppercase rounded hover:bg-white hover:text-[#0077BC] transition" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}>
              See the Work →
            </a>
            <a href="#contact" className="px-8 py-4 bg-transparent border-2 border-white text-white uppercase rounded hover:bg-white hover:text-[#111111] transition" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}>
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
