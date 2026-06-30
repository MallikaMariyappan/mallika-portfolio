"use client";
import { motion } from "framer-motion";
import { Github, ArrowUpRight, Globe, Smartphone } from "lucide-react";
import { fadeUpD, staggerContainer } from "@/lib/motion";

const projects = [
  {
    num: "01", title: "IELTSGenAI", subtitle: "Web & Mobile",
    desc: "Full-stack EdTech product — React.js web app + Flutter mobile app for AI-powered IELTS exam preparation with JWT auth, Redux state management, and content delivery.",
    tags: ["Flutter","React.js","Redux","Node.js","JWT Auth"],
    platforms: ["Web","Play Store"], hl: "AI-Powered",
    platformIcons: [Globe, Smartphone],
    github: "https://github.com/MallikaMariyappan",
  },
  {
    num: "02", title: "ESL English Learning", subtitle: "Flutter Mobile App",
    desc: "Flutter app with audio lessons, interactive exercises, and a 5-level curriculum. Firebase Firestore for real-time content — 50+ active Play Store users on launch.",
    tags: ["Flutter","Dart","Firebase","Firestore"],
    platforms: ["Play Store"], hl: "50+ Users",
    platformIcons: [Smartphone],
    github: "https://github.com/MallikaMariyappan",
  },
  {
    num: "03", title: "NEET / JEE Platform", subtitle: "Web & Mobile",
    desc: "Competitive exam prep — Flutter app + React.js portal with subject-wise practice tests, real-time progress tracking, and performance analytics.",
    tags: ["Flutter","React.js","Redux","MongoDB","Node.js"],
    platforms: ["Web","Play Store"], hl: "Full-Stack",
    platformIcons: [Globe, Smartphone],
    github: "https://github.com/MallikaMariyappan",
  },
  {
    num: "04", title: "AI Admin Dashboard", subtitle: "Student Management",
    desc: "Comprehensive admin panel for managing IELTS/PTE students with AI-driven performance insights. Built from scratch with RBAC access control for 3+ client accounts.",
    tags: ["React.js","Tailwind CSS","Node.js","MongoDB"],
    platforms: ["Web"], hl: "RBAC",
    platformIcons: [Globe],
    github: "https://github.com/MallikaMariyappan",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ background: "#050505", padding: "96px 32px", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "rgba(255,255,255,0.06)" }} />

      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 56 }}>
          <motion.div variants={fadeUpD(0)}>
            <p className="section-label" style={{ marginBottom: 12 }}>Key Projects</p>
            <h2 style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "clamp(1.9rem,4vw,2.8rem)", fontWeight: 900, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.08 }}>
              Things I&apos;ve Built.
            </h2>
          </motion.div>
          <motion.a variants={fadeUpD(0.1)} href="https://github.com/MallikaMariyappan"
            target="_blank" rel="noopener noreferrer"
            whileHover={{ y: -2, borderColor: "rgba(255,255,255,0.4)" }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8, color: "#fff",
              fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.04em", textTransform: "uppercase",
              padding: "10px 20px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.15)",
              transition: "border-color 0.2s",
            }}>
            <Github size={16} /> View All on GitHub <ArrowUpRight size={14} />
          </motion.a>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 20 }}>
          {projects.map((p, i) => (
            <motion.div key={p.num}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: "0 24px 56px rgba(0,0,0,0.7)", borderColor: "rgba(255,255,255,0.2)" }}
              style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 14, padding: 32, position: "relative", overflow: "hidden",
                transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
                display: "flex", flexDirection: "column",
              }}
            >
              {/* Watermark number */}
              <span style={{ position: "absolute", top: 10, right: 14, fontSize: "4.5rem", fontWeight: 900, color: "rgba(255,255,255,0.04)", lineHeight: 1, userSelect: "none", fontFamily: "var(--font-syne),sans-serif" }}>{p.num}</span>

              {/* Badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 18 }}>
                <span style={{ background: "rgba(255,255,255,0.08)", color: "#fff", fontSize: "0.7rem", fontWeight: 700, padding: "4px 12px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.12)" }}>{p.hl}</span>
                {p.platforms.map((pl, pi) => {
                  const PIcon = p.platformIcons[pi];
                  return (
                    <span key={pl} style={{ background: "transparent", color: "#555", fontSize: "0.68rem", fontWeight: 500, padding: "4px 10px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.08)", display: "inline-flex", alignItems: "center", gap: 4 }}>
                      {PIcon && <PIcon size={11} />} {pl}
                    </span>
                  );
                })}
              </div>

              <h3 style={{ color: "#fff", fontWeight: 800, fontSize: "1rem", marginBottom: 4, fontFamily: "var(--font-syne),sans-serif" }}>{p.title}</h3>
              <p style={{ color: "#444", fontSize: "0.78rem", fontWeight: 500, marginBottom: 12 }}>{p.subtitle}</p>
              <p style={{ color: "#666", fontSize: "0.85rem", lineHeight: 1.72, marginBottom: 20, flex: 1 }}>{p.desc}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 20 }}>
                {p.tags.map(t => <span key={t} className="tag" style={{ fontSize: "0.7rem" }}>{t}</span>)}
              </div>

              {/* GitHub link */}
              <motion.a
                href={p.github}
                target="_blank" rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  color: "#555", fontSize: "0.78rem", fontWeight: 600,
                  marginTop: "auto", borderTop: "1px solid rgba(255,255,255,0.06)",
                  paddingTop: 16, transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "#555")}
              >
                <Github size={14} /> View on GitHub <ArrowUpRight size={12} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
