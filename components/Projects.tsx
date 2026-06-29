"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { fadeUpD, staggerContainer } from "@/lib/motion";

const projects = [
  { num: "01", title: "IELTSGenAI", subtitle: "Web & Mobile", desc: "Full-stack EdTech product — React.js web app + Flutter mobile app for AI-powered IELTS exam preparation with JWT auth, Redux state management, and content delivery.", tags: ["Flutter","React.js","Redux","Node.js","JWT Auth"], platforms: ["Web","Play Store"], hl: "AI-Powered", hBg: "#eff6ff", hC: "#1d4ed8" },
  { num: "02", title: "ESL English Learning", subtitle: "Flutter Mobile App", desc: "Flutter app with audio lessons, interactive exercises, and a 5-level curriculum. Firebase Firestore for real-time content — 50+ active Play Store users on launch.", tags: ["Flutter","Dart","Firebase","Firestore"], platforms: ["Play Store"], hl: "50+ Users", hBg: "#f0fdf4", hC: "#16a34a" },
  { num: "03", title: "NEET / JEE Platform", subtitle: "Web & Mobile", desc: "Competitive exam prep — Flutter app + React.js portal with subject-wise practice tests, real-time progress tracking, and performance analytics.", tags: ["Flutter","React.js","Redux","MongoDB","Node.js"], platforms: ["Web","Play Store"], hl: "Full-Stack", hBg: "#fff7ed", hC: "#c2410c" },
  { num: "04", title: "AI Admin Dashboard", subtitle: "Student Management", desc: "Comprehensive admin panel for managing IELTS/PTE students with AI-driven performance insights. Built from scratch with RBAC access control for 3+ client accounts.", tags: ["React.js","Tailwind CSS","Node.js","MongoDB"], platforms: ["Web"], hl: "RBAC", hBg: "#faf5ff", hC: "#7e22ce" },
];

export default function Projects() {
  return (
    <section id="projects" style={{ background: "#f4f4f4", padding: "96px 32px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 56 }}>
          <motion.div variants={fadeUpD(0)}>
            <p className="section-label" style={{ marginBottom: 12 }}>Key Projects</p>
            <h2 style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "clamp(1.9rem,4vw,2.8rem)", fontWeight: 900, letterSpacing: "-0.03em", color: "#111", lineHeight: 1.08 }}>Things I&apos;ve Built.</h2>
          </motion.div>
          <motion.a variants={fadeUpD(0.1)} href="https://github.com/MallikaMariyappan" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#111", fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.04em", textTransform: "uppercase", padding: "10px 20px", borderRadius: 8, border: "1.5px solid #ccc", textDecoration: "none", transition: "all 0.2s" }}>
            <Icon icon="mdi:github" width={17} /> GitHub <Icon icon="mdi:arrow-top-right" width={14} />
          </motion.a>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
          {projects.map((p, i) => (
            <motion.div key={p.num}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 20px 48px rgba(0,0,0,0.1)" }}
              style={{ background: "#fff", border: "1px solid #e8e8e8", borderRadius: 12, padding: 32, position: "relative", overflow: "hidden" }}
            >
              {/* Watermark number */}
              <span style={{ position: "absolute", top: 12, right: 16, fontSize: "4rem", fontWeight: 900, color: "#f5f5f5", lineHeight: 1, userSelect: "none", fontFamily: "var(--font-syne),sans-serif" }}>{p.num}</span>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 18 }}>
                <span style={{ background: p.hBg, color: p.hC, fontSize: "0.7rem", fontWeight: 700, padding: "4px 12px", borderRadius: 999 }}>{p.hl}</span>
                {p.platforms.map(pl => (
                  <span key={pl} style={{ background: "#f5f5f5", color: "#888", fontSize: "0.68rem", fontWeight: 500, padding: "4px 10px", borderRadius: 999, border: "1px solid #e8e8e8" }}>{pl}</span>
                ))}
              </div>

              <h3 style={{ color: "#111", fontWeight: 800, fontSize: "1rem", marginBottom: 4, fontFamily: "var(--font-syne),sans-serif" }}>{p.title}</h3>
              <p style={{ color: "#888", fontSize: "0.78rem", fontWeight: 500, marginBottom: 12 }}>{p.subtitle}</p>
              <p style={{ color: "#666", fontSize: "0.85rem", lineHeight: 1.72, marginBottom: 20 }}>{p.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {p.tags.map(t => <span key={t} className="tag" style={{ fontSize: "0.7rem" }}>{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
