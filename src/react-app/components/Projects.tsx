import { ImageWithFallback } from "./figma/ImageWithFallback";

type Project = {
  title: string;
  role: string;
  skills: string[];
  description: string;
  image: string;
  accent: string;
  video?: string;
  videoAspect?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Golden Wings: 50 Year Flight Path",
    role: "Director, Cinematographer",
    skills: ["Color Grading", "Visual Effects", "Archival Restoration", "Song Writing"],
    description:
      "Award-winning documentary about flight attendant Robyn Stewart's 54-year career — a mother's legacy, the Boeing 747's swan song. Best Cinematography, Silicon Beach Film Festival.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600",
    accent: "Award Winner",
    video: "https://customer-e46l63ee4ck01nmz.cloudflarestream.com/c402d4c38370712bde680e8ca30296a3/iframe",
    featured: true,
  },
  {
    title: "Gold Reels",
    role: "Director",
    skills: ["Color Grading", "Restoration", "Visual Effects"],
    description:
      "Repurposes personal narratives recorded for the Veterans History Project. 1,095 videos, 500K+ views — turning rotting archives into living memory.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200",
    accent: "Cultural Preservation",
    video: "https://customer-e46l63ee4ck01nmz.cloudflarestream.com/7cfc6dd01c56d40ebdc5e2394c7b0cd9/iframe?poster=https%3A%2F%2Fcustomer-e46l63ee4ck01nmz.cloudflarestream.com%2F7cfc6dd01c56d40ebdc5e2394c7b0cd9%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600",
    videoAspect: "9/16",
  },
  {
    title: "Immigration is Beautiful",
    role: "Director / Editor",
    skills: ["Color Grading", "Sound Design", "Special Effects"],
    description:
      "A music video for the 'Immigration is Beautiful' concert, benefitting immigrants. Story-first filmmaking with full post-production craft.",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200",
    accent: "Music Video",
    video: "https://customer-e46l63ee4ck01nmz.cloudflarestream.com/6f86251a1d962c886c3c74a60852bd0d/iframe?poster=https%3A%2F%2Fcustomer-e46l63ee4ck01nmz.cloudflarestream.com%2F6f86251a1d962c886c3c74a60852bd0d%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600",
  },
  {
    title: "Robert Redford Tribute",
    role: "Director / Editor",
    skills: ["Quick-Turn Edits", "Sound Design", "Extemporaneous Speaking"],
    description:
      "Caleb reflects on his time as a Sundance Virtual Festival Agent and Robert Redford's legacy. Fast turnaround, full heart.",
    image: "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=1200",
    accent: "Sundance",
    video: "https://customer-e46l63ee4ck01nmz.cloudflarestream.com/d378c7344fe3567243574f89c910eb76/iframe?poster=https%3A%2F%2Fcustomer-e46l63ee4ck01nmz.cloudflarestream.com%2Fd378c7344fe3567243574f89c910eb76%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600",
    videoAspect: "9/16",
  },
  {
    title: "Guardr",
    role: "Founder",
    skills: ["AI / ML", "Product", "Cybersecurity"],
    description:
      "AI-powered safety platform with 99.2% profile authenticity accuracy and sub-five-second risk assessment. Built — not consulted on.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200",
    accent: "Founder",
    video: "https://customer-e46l63ee4ck01nmz.cloudflarestream.com/9554ab7b480dabf8341263fa50bae815/iframe?poster=https%3A%2F%2Fcustomer-e46l63ee4ck01nmz.cloudflarestream.com%2F9554ab7b480dabf8341263fa50bae815%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600",
    videoAspect: "9/16",
  },
  {
    title: "Accelerate Grocery: AI Microburst Training",
    role: "Lead / Architect",
    skills: ["AI Training", "Curriculum Design", "Webinars"],
    description:
      "Deployed an AI-empowered Microburst Education Training Platform across UNFI Professional Services. 30% increase in frontline engagement.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",
    accent: "Enterprise",
    video: "https://customer-e46l63ee4ck01nmz.cloudflarestream.com/7d965fa55cb0c3927d1f465767e88f18/iframe?poster=https%3A%2F%2Fcustomer-e46l63ee4ck01nmz.cloudflarestream.com%2F7d965fa55cb0c3927d1f465767e88f18%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600",
    videoAspect: "9/16",
  },
];

function ProjectMedia({ project }: { project: Project }) {
  if (project.video) {
    const isPortrait = project.videoAspect === "9/16";
    if (isPortrait) {
      return (
        <div className="relative w-full bg-black flex items-center justify-center" style={{ aspectRatio: "16 / 10" }}>
          <div className="relative h-full" style={{ aspectRatio: "9 / 16" }}>
            <iframe
              src={project.video}
              title={project.title}
              loading="lazy"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>
      );
    }
    return (
      <div className="relative w-full aspect-video bg-black">
        <iframe
          src={project.video}
          title={project.title}
          loading="lazy"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>
    );
  }
  return (
    <div className="relative aspect-[16/10] overflow-hidden">
      <ImageWithFallback
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
  );
}

function ProjectCard({ p, idx, large }: { p: Project; idx: number; large?: boolean }) {
  return (
    <article className="group border-2 border-white/20 rounded overflow-hidden hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#16A34A] hover:border-white transition-all" style={{ background: "linear-gradient(160deg, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.4) 100%)", backdropFilter: "blur(8px)" }}>
      <div className="relative border-b-2 border-white/20">
        <ProjectMedia project={p} />
        <div className="absolute top-4 left-4 bg-[#111111] text-white px-3 py-1.5 uppercase rounded z-10" style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.18em" }}>
          {p.accent}
        </div>
        <div className="absolute top-4 right-4 bg-[#0077BC] text-white px-2 py-1 uppercase rounded z-10" style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.15em" }}>
          /{String(idx).padStart(2, "0")}
        </div>
      </div>
      <div className={large ? "p-8 md:p-10" : "p-8"}>
        <h3 className="text-white mb-3 uppercase" style={{ fontFamily: "var(--font-display)", fontSize: large ? "clamp(1.75rem, 3vw, 2.5rem)" : "1.5rem", lineHeight: 1, letterSpacing: "-0.01em" }}>{p.title}</h3>
        <p className="text-[#16A34A] mb-5 uppercase" style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.18em" }}>{p.role}</p>
        <p className="text-white/85 mb-6 max-w-3xl" style={{ fontSize: large ? "1.125rem" : "1rem", lineHeight: 1.6 }}>{p.description}</p>
        <div className="flex flex-wrap gap-2">
          {p.skills.map((s) => (
            <span key={s} className="px-3 py-1.5 bg-white/10 border border-white/20 text-white uppercase rounded" style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.12em" }}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="py-24 px-6" style={{ background: "linear-gradient(180deg, #111111 0%, #0a1f33 30%, #003d61 70%, #0077BC 100%)", color: "#ffffff" }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[#16A34A] uppercase mb-6" style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.2em" }}>
              [02] Selected Work
            </p>
            <h2 className="text-white uppercase" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 0.95, letterSpacing: "-0.02em" }}>
              Six Things He<br />Could <span className="text-[#16A34A]">Retire</span> On <span className="text-[#D97706]">Tomorrow.</span>
            </h2>
          </div>
          <div className="text-white uppercase border-2 border-white/40 px-4 py-2 rounded" style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.15em" }}>
            {projects.length} Projects // 2014–2026
          </div>
        </div>

        {featured && (
          <div className="mb-8">
            <ProjectCard p={featured} idx={1} large />
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {rest.map((p, i) => (
            <ProjectCard key={p.title} p={p} idx={i + 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
