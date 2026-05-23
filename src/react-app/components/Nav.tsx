export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111111] border-b-2 border-[#0077BC]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="text-white" style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", letterSpacing: "0.02em" }}>
          CMS<span className="text-[#0077BC]">/</span><span className="text-[#009866]">STEWART</span>
        </a>
        <div className="hidden md:flex gap-8 text-white uppercase" style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.15em" }}>
          <a href="#about" className="hover:text-[#0077BC] transition">About</a>
          <a href="#work" className="hover:text-[#0077BC] transition">Work</a>
          <a href="#contact" className="hover:text-[#0077BC] transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}
