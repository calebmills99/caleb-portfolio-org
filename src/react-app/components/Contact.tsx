import { Mail, Linkedin, Film } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 text-white" style={{ background: "linear-gradient(135deg, #0077BC 0%, #009866 60%, #16A34A 100%)" }}>
      <div className="max-w-5xl mx-auto">
        <p className="text-white/80 uppercase mb-6" style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.2em" }}>
          [04] Contact
        </p>
        <h2 className="uppercase mb-8" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 7vw, 6rem)", lineHeight: 0.92, letterSpacing: "-0.03em" }}>
          Let's Build<br />Something<br /><span className="text-[#111111]">Worth Honoring.</span>
        </h2>
        <p className="max-w-2xl mb-12 text-white/90" style={{ fontSize: "1.25rem", lineHeight: 1.5 }}>
          Whether it's a documentary, a learning platform, or an AI product that needs to actually work — I'd love to hear what you're building.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="mailto:hello@example.com" className="inline-flex items-center gap-3 px-8 py-4 bg-[#111111] text-white uppercase rounded hover:bg-white hover:text-[#0077BC] transition" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}>
            <Mail size={18} /> Email
          </a>
          <a href="#" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white uppercase rounded hover:bg-white hover:text-[#0077BC] transition" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}>
            <Linkedin size={18} /> LinkedIn
          </a>
          <a href="#" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white uppercase rounded hover:bg-white hover:text-[#0077BC] transition" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}>
            <Film size={18} /> Reel
          </a>
        </div>
      </div>
      <footer className="max-w-7xl mx-auto mt-24 pt-8 border-t-2 border-white/30 flex flex-wrap justify-between gap-4 text-white/80 uppercase" style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.15em" }}>
        <span>© {new Date().getFullYear()} Caleb Mills Stewart</span>
        <span>Allergic to Corporate Sludge</span>
      </footer>
    </section>
  );
}
