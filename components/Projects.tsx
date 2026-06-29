"use client";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "IELTSGenAI",
    subtitle: "Web & Mobile",
    emoji: "🎯",
    description:
      "Full-stack EdTech product — React.js web app + Flutter mobile app for AI-powered IELTS exam prep. Handled JWT auth, Redux state management, content delivery, and user progress tracking across both platforms.",
    tags: ["Flutter", "React.js", "Redux", "Node.js", "JWT Auth", "REST API"],
    color: "#6366f1",
    platforms: ["Web", "Mobile"],
    highlight: "AI-Powered",
  },
  {
    title: "ESL English Learning App",
    subtitle: "Mobile App",
    emoji: "📚",
    description:
      "Flutter mobile app with audio lessons, interactive exercises, and 5-level curriculum — 50+ active Play Store users. Integrated Firebase Firestore for real-time content management and Firebase Auth for secure login.",
    tags: ["Flutter", "Dart", "Firebase Firestore", "Firebase Auth", "REST API"],
    color: "#a855f7",
    platforms: ["Play Store"],
    highlight: "50+ Users",
  },
  {
    title: "NEET / JEE Learning Platform",
    subtitle: "Web & Mobile",
    emoji: "🔬",
    description:
      "Full-stack product — Flutter mobile app (Play Store) + React.js web portal for competitive exam preparation. Features: subject-wise practice tests, real-time progress tracking, performance analytics, and Redux state management.",
    tags: ["Flutter", "React.js", "Redux", "Node.js", "MongoDB", "REST API"],
    color: "#ec4899",
    platforms: ["Web", "Play Store"],
    highlight: "Full-Stack",
  },
  {
    title: "AI-Powered Admin Panel",
    subtitle: "Student Management System",
    emoji: "🛡️",
    description:
      "Comprehensive admin dashboard for managing IELTS/PTE students with AI insights for performance monitoring. Designed and developed full admin panel UI from scratch with RBAC access control for 3+ client accounts.",
    tags: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "REST API"],
    color: "#f59e0b",
    platforms: ["Web"],
    highlight: "RBAC",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ padding: "100px 24px" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="section-badge">Key Projects</span>
          <h2
            style={{
              fontSize: "clamp(1.8rem,4vw,2.5rem)",
              fontWeight: 800,
              marginTop: 16,
              color: "#f1f5f9",
            }}
          >
            Things I&apos;ve Built
          </h2>
          <p style={{ color: "#64748b", marginTop: 10, fontSize: "0.95rem" }}>
            Production-ready products shipped for live EdTech clients
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 28,
          }}
        >
          {projects.map((p) => (
            <div
              key={p.title}
              className="card"
              style={{ padding: 32, position: "relative", overflow: "hidden" }}
            >
              {/* Top accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: `linear-gradient(90deg, ${p.color}, transparent)`,
                }}
              />

              {/* Highlight badge */}
              <div
                style={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  background: `${p.color}22`,
                  border: `1px solid ${p.color}44`,
                  color: p.color,
                  padding: "3px 10px",
                  borderRadius: 999,
                  fontSize: "0.7rem",
                  fontWeight: 700,
                }}
              >
                {p.highlight}
              </div>

              {/* Emoji + Title */}
              <div style={{ marginBottom: 14, paddingRight: 60 }}>
                <span style={{ fontSize: "2rem" }}>{p.emoji}</span>
                <h3
                  style={{
                    color: "#f1f5f9",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    marginTop: 8,
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ color: p.color, fontSize: "0.82rem", fontWeight: 500, marginTop: 2 }}>
                  {p.subtitle}
                </p>
              </div>

              {/* Platform badges */}
              <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
                {p.platforms.map((pl) => (
                  <span
                    key={pl}
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      color: "#94a3b8",
                      padding: "3px 10px",
                      borderRadius: 999,
                      fontSize: "0.72rem",
                      fontWeight: 500,
                    }}
                  >
                    {pl}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p
                style={{
                  color: "#64748b",
                  fontSize: "0.88rem",
                  lineHeight: 1.7,
                  marginBottom: 20,
                }}
              >
                {p.description}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.tags.map((t) => (
                  <span key={t} className="skill-pill" style={{ fontSize: "0.72rem" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div style={{ textAlign: "center", marginTop: 52 }}>
          <a
            href="https://github.com/MallikaMariyappan"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            View GitHub Profile <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
