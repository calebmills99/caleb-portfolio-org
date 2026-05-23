export function About() {
  return (
    <section id="about" className="py-24 px-6" style={{ background: "linear-gradient(180deg, #009866 0%, #0a4d3a 60%, #111111 100%)", color: "#ffffff" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="sticky top-28">
              <p className="text-[#0077BC] uppercase mb-6" data-x="" style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.2em" }}>
                [01] About
              </p>
              <h2 className="uppercase text-white" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 0.95, letterSpacing: "-0.02em" }}>
                Decade-Level<br />Mastery,<br /><span className="text-[#0077BC]">Frame by</span><br /><span className="text-[#16A34A]">Frame.</span>
              </h2>
            </div>
          </div>
          <div className="md:col-span-8 space-y-6 text-white/90" style={{ fontSize: "1.25rem", lineHeight: 1.6 }}>
            <p>
              For more than a decade, I've turned code-level logic into tools people can use. I'm currently deploying an AI-empowered Microburst Education Training Platform across UNFI Professional Services, driving <strong className="text-[#0077BC]">30% more frontline engagement</strong>.
            </p>
            <p>
              I've hosted live webinars for 200+ retailers, shipped <strong className="text-[#0077BC]">1,095 videos</strong> totaling more than half a million views with Gold Reels, and directed <em>Golden Wings: 50 Year Flight Path</em> — winner of <strong className="text-[#16A34A]">Best Cinematography</strong> at the Silicon Beach Film Festival.
            </p>
            <p>
              I founded Guardr, an AI-powered safety platform with <strong className="text-[#0077BC]">99.2% profile authenticity accuracy</strong> and sub-five-second risk assessment. Native Spanish, three years in Mallorca, and <strong>allergic to corporate sludge</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
