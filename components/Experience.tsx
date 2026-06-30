"use client";
import { motion } from "framer-motion";
import { TrendingUp, Briefcase } from "lucide-react";
import { fadeUpD, staggerContainer } from "@/lib/motion";

const LucideIcons: Record<string, React.FC<{ size?: number; color?: string }>> = {
  "trend": TrendingUp,
  "brief": Briefcase,
};

const experiences = [
  {
    iconKey: "trend",
    role: "Frontend Developer & Mobile App Developer",
    company: "Dataspark AI Solutions",
    period: "Dec 2024 – Present",
    type: "Full-time",
    badge: "Current",
    badgeBg: "rgba(34,197,94,0.12)",
    badgeColor: "#4ade80",
    points: [
      "Delivered 3+ dual-platform products (React.js web + Flutter mobile + Node.js backend) simultaneously for live EdTech clients.",
      "Built IELTSGenAI — Flutter mobile app (Play Store) + React.js web app with JWT auth and Redux state management.",
      "Developed ESL English Learning App in Flutter with audio lessons and 5-level curriculum; 50+ active Play Store users.",
      "Built NEET/JEE Learning Platform — Flutter app + React.js portal with practice tests and performance analytics.",
      "Implemented scalable state management using Redux (React.js) and GetX/Provider (Flutter) across all products.",
      "Built role-based admin dashboards with React.js + Tailwind CSS with RBAC for 3+ client accounts.",
      "Led client demos, requirement-gathering, and sprint planning; delivered all products on schedule.",
    ],
  },
  {
    iconKey: "brief",
    role: "Frontend Developer Intern",
    company: "Dataspark AI Solutions",
    period: "Sep 2024 – Dec 2024",
    type: "Full-time",
    badge: "Promoted ↑",
    badgeBg: "rgba(139,92,246,0.12)",
    badgeColor: "#a78bfa",
    points: [
      "Built responsive React.js UI components from Figma designs and integrated REST APIs in live client projects from day one.",
      "Gained production experience in component architecture, API integration, and cross-browser testing within first month.",
      "Promoted from Intern → Frontend Developer; took on full project ownership for a live client product.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ background: "#000", padding: "96px 32px", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "rgba(255,255,255,0.06)" }} />

      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        {/* Heading */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={staggerContainer}
          style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 56 }}
        >
          <motion.div variants={fadeUpD(0)} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
            <div>
              <p className="section-label" style={{ marginBottom: 12 }}>Work Experience</p>
              <h2 style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "clamp(1.9rem,4vw,2.8rem)", fontWeight: 900, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.08 }}>
                Where I&apos;ve Worked.
              </h2>
            </div>
            <motion.p variants={fadeUpD(0.1)} style={{ color: "#555", fontSize: "0.9rem", maxWidth: 240, lineHeight: 1.7 }}>
              1.9 years of full-time production experience.
            </motion.p>
          </motion.div>
        </motion.div>

        <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: 56 }} />

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          <div style={{
            position: "absolute", left: 19, top: 0, bottom: 0, width: 1.5,
            background: "linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.03) 100%)",
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {experiences.map((exp, i) => {
              const LIcon = LucideIcons[exp.iconKey];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  style={{ display: "flex", gap: 10, paddingLeft: 10 }}
                >
                  {/* Dot */}
                  <div style={{ marginTop: 28, position: "relative", zIndex: 10, flexShrink: 0 }}>
                    <div className="tl-dot" />
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -3, boxShadow: "0 20px 48px rgba(0,0,0,0.8)", borderColor: "rgba(255,255,255,0.2)" }}
                    transition={{ duration: 0.2 }}
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: 32, flex: 1, transition: "border-color 0.2s" }}
                  >
                    {/* Header */}
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 12, marginBottom: 12 }}>
                      <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                        <div style={{ width: 40, height: 40, borderRadius: 9, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                          <LIcon size={17} color="#aaa" />
                        </div>
                        <div>
                          <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "0.98rem", marginBottom: 4, fontFamily: "var(--font-syne),sans-serif" }}>{exp.role}</h3>
                          <p style={{ color: "#555", fontSize: "0.84rem", fontWeight: 500 }}>{exp.company} · {exp.type}</p>
                        </div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                        <span style={{ fontSize: "0.7rem", fontWeight: 700, padding: "4px 12px", borderRadius: 999, background: exp.badgeBg, color: exp.badgeColor }}>{exp.badge}</span>
                        <span style={{ color: "#444", fontSize: "0.78rem", fontWeight: 500 }}>{exp.period}</span>
                      </div>
                    </div>

                    <div style={{ height: 1, background: "rgba(255,255,255,0.06)", margin: "16px 0" }} />

                    <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {exp.points.map((p, j) => (
                        <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10, color: "#666", fontSize: "0.86rem", lineHeight: 1.65 }}>
                          <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#444", flexShrink: 0, marginTop: 8 }} />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
