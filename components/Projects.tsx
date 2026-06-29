"use client";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "IELTSGenAI",
    subtitle: "Web & Mobile",
    desc: "Full-stack EdTech product — React.js web app + Flutter mobile app for AI-powered IELTS exam preparation. JWT auth, Redux state management, and content delivery across both platforms.",
    tags: ["Flutter", "React.js", "Redux", "Node.js", "JWT Auth"],
    platforms: ["Web", "Play Store"],
    highlight: "AI-Powered",
    highlightBg: "#f0f4ff",
    highlightColor: "#3b4fe0",
  },
  {
    num: "02",
    title: "ESL English Learning App",
    subtitle: "Flutter Mobile",
    desc: "Flutter mobile app with audio lessons, interactive exercises, and a 5-level curriculum. Firebase Firestore for real-time content, Firebase Auth for secure login — 50+ active users.",
    tags: ["Flutter", "Dart", "Firebase", "Firestore"],
    platforms: ["Play Store"],
    highlight: "50+ Users",
    highlightBg: "#f0fdf4",
    highlightColor: "#16a34a",
  },
  {
    num: "03",
    title: "NEET / JEE Platform",
    subtitle: "Web & Mobile",
    desc: "Full-stack competitive exam prep — Flutter app + React.js portal. Subject-wise practice tests, real-time progress tracking, performance analytics, and Redux state management.",
    tags: ["Flutter", "React.js", "Redux", "MongoDB", "Node.js"],
    platforms: ["Web", "Play Store"],
    highlight: "Full-Stack",
    highlightBg: "#fff7ed",
    highlightColor: "#c2410c",
  },
  {
    num: "04",
    title: "AI Admin Dashboard",
    subtitle: "Student Management",
    desc: "Comprehensive admin panel for managing IELTS/PTE students with AI insights. Designed and built from scratch with full RBAC access control for 3+ client accounts.",
    tags: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
    platforms: ["Web"],
    highlight: "RBAC",
    highlightBg: "#fdf4ff",
    highlightColor: "#9333ea",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "100px 32px", background: "#f5f5f5" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>

        <p className="section-label" style={{ marginBottom: 14 }}>Key Projects</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 56 }}>
          <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, letterSpacing: "-0.03em", color: "#111", lineHeight: 1.1 }}>
            Things I&apos;ve Built.
          </h2>
          <a href="https://github.com/MallikaMariyappan" target="_blank" rel="noopener noreferrer"
            className="btn-outline-dark" style={{ padding: "10px 22px", fontSize: "0.8rem" }}>
            GitHub Profile <ArrowUpRight size={14} />
          </a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))", gap: 24 }}>
          {projects.map(p => (
            <div key={p.num} className="card" style={{ padding: 32, position: "relative", overflow: "hidden", background: "#fff" }}>
              {/* Big number watermark */}
              <div className="proj-num" style={{
                position: "absolute", top: 16, right: 20,
                fontSize: "4rem", color: "#f5f5f5",
                fontWeight: 900, letterSpacing: "-0.05em",
                userSelect: "none",
              }}>
                {p.num}
              </div>

              {/* Top row */}
              <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 20, flexWrap: "wrap" }}>
                <span style={{
                  background: p.highlightBg, color: p.highlightColor,
                  padding: "4px 12px", borderRadius: 999,
                  fontSize: "0.72rem", fontWeight: 700,
                }}>{p.highlight}</span>
                {p.platforms.map(pl => (
                  <span key={pl} style={{
                    background: "#f5f5f5", color: "#888",
                    padding: "4px 10px", borderRadius: 999,
                    fontSize: "0.7rem", fontWeight: 500, border: "1px solid #e8e8e8",
                  }}>{pl}</span>
                ))}
              </div>

              <h3 style={{ color: "#111", fontWeight: 800, fontSize: "1.05rem", marginBottom: 4 }}>{p.title}</h3>
              <p style={{ color: "#888", fontSize: "0.8rem", fontWeight: 500, marginBottom: 14 }}>{p.subtitle}</p>
              <p style={{ color: "#666", fontSize: "0.86rem", lineHeight: 1.7, marginBottom: 20 }}>{p.desc}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {p.tags.map(t => <span key={t} className="tag" style={{ fontSize: "0.72rem" }}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
