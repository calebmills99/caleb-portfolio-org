const pillars = [
  { title: "Documentary Direction", body: "Award-winning films that earn the tears. 54 years of aviation history, mothers' legacies, audiences calling home." },
  { title: "Technical Systems", body: "Founded Guardr — AI safety, built and shipped. Not vaporware. Scary accurate." },
  { title: "Educational Architecture", body: "Live webinars for 200+ retailers. AI training that drove 30% more frontline engagement." },
  { title: "Cultural Preservation", body: "Gold Reels turns Veterans History Project recordings into living memory worth watching." },
  { title: "Multilingual Storytelling", body: "Native Spanish. Three years in Mallorca. Opens doors most never know exist." },
  { title: "Craft", body: "Color grading, VFX, archival restoration, sound design, quick-turn edits, extemporaneous speaking." },
];

export function Skills() {
  return (
    <section className="py-24 px-6 text-white" style={{ background: "linear-gradient(135deg, #111111 0%, #0a1f33 50%, #003d61 100%)" }}>
      <div className="max-w-7xl mx-auto">
        <p className="text-[#009866] uppercase mb-6" style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.2em" }}>
          [03] Capabilities
        </p>
        <h2 className="uppercase mb-16" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 0.95, letterSpacing: "-0.02em" }}>
          Soul Architecture<br /><span className="text-[#0077BC]">Meets Surgical</span> <span className="text-[#009866]">Precision.</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          {pillars.map((p, i) => (
            <div key={p.title} className="p-8 border-2 border-white/10 hover:border-[#0077BC] transition group rounded" style={{ background: "linear-gradient(160deg, rgba(0,119,188,0.18) 0%, rgba(17,17,17,0.6) 100%)" }}>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[#0077BC] group-hover:text-white uppercase transition" style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.2em" }}>
                  /0{i + 1}
                </span>
                <div className="w-3 h-3 bg-[#009866] rounded-full" />
              </div>
              <h3 className="mb-4 uppercase" style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", lineHeight: 1.05 }}>{p.title}</h3>
              <p className="text-white/70" style={{ lineHeight: 1.6 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
