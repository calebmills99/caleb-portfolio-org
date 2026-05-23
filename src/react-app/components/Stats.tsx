const stats = [
  { value: "1,095", label: "Videos Produced" },
  { value: "500K+", label: "Total Views" },
  { value: "99.2%", label: "Guardr AI Accuracy" },
  { value: "30%", label: "UNFI Engagement Lift" },
];

export function Stats() {
  return (
    <section className="text-white py-16 px-6 border-y-4 border-[#111111]" style={{ background: "linear-gradient(90deg, #0077BC 0%, #00566b 50%, #009866 100%)" }}>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-0 divide-x-2 divide-white/30">
        {stats.map((s, i) => (
          <div key={s.label} className={`px-6 ${i === 0 ? "border-l-0" : ""}`}>
            <div className="mb-3 uppercase" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 0.95, letterSpacing: "-0.02em" }}>
              {s.value}
            </div>
            <div className="uppercase border-t-2 border-white pt-3" style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.18em" }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
