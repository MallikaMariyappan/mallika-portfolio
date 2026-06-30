"use client";
import { motion } from "framer-motion";
import { Monitor, Smartphone, Database, Wrench } from "lucide-react";
import { fadeUpD, staggerContainer } from "@/lib/motion";

const groups = [
  { Icon: Monitor,    title: "Frontend",     skills: [{ name: "React.js", pct: 92 }, { name: "JavaScript (ES6+)", pct: 90 }, { name: "Tailwind CSS", pct: 88 }, { name: "Redux", pct: 85 }, { name: "HTML5 / CSS3", pct: 93 }] },
  { Icon: Smartphone, title: "Mobile",       skills: [{ name: "Flutter", pct: 88 }, { name: "Dart", pct: 85 }, { name: "GetX / Provider", pct: 83 }, { name: "Firebase", pct: 80 }, { name: "Play Store", pct: 78 }] },
  { Icon: Wrench,     title: "Tools",        skills: [{ name: "Git / GitHub", pct: 88 }, { name: "Figma", pct: 80 }, { name: "Postman", pct: 82 }, { name: "VS Code", pct: 95 }, { name: "Agile/Scrum", pct: 78 }] },
];

const allTags = ["React.js","Flutter","Nextjs","Redux","GetX","Node.js","Express.js","MongoDB","Firebase","JWT","Tailwind CSS","Bootstrap","Framer Motion","Dart","JavaScript","HTML5","CSS3","REST API","Figma","Git","Postman","Agile","Google Play Store","Firebase Auth","Firestore"];

export default function Skills() {
  return (
    <section id="skills" style={{ background: "#050505", padding: "96px 32px", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "rgba(255,255,255,0.06)" }} />

      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 56 }}>
          <motion.div variants={fadeUpD(0)}>
            <p className="section-label" style={{ marginBottom: 12 }}>Technical Skills</p>
            <h2 style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "clamp(1.9rem,4vw,2.8rem)", fontWeight: 900, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.08 }}>My Tech Stack.</h2>
          </motion.div>
          <motion.p variants={fadeUpD(0.1)} style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.75, maxWidth: 280 }}>
            Tools and technologies I use to build production-ready products.
          </motion.p>
        </motion.div>

        {/* Skill cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20, marginBottom: 20 }}>
          {groups.map((g, gi) => (
            <motion.div key={g.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: gi * 0.1 }}
              whileHover={{ y: -4, boxShadow: "0 20px 48px rgba(0,0,0,0.6)", borderColor: "rgba(255,255,255,0.2)" }}
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: 28, transition: "border-color 0.2s" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <div style={{ width: 38, height: 38, borderRadius: 9, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <g.Icon size={18} color="#000" />
                </div>
                <h3 style={{ fontWeight: 700, color: "#fff", fontSize: "0.9rem", fontFamily: "var(--font-syne),sans-serif" }}>{g.title}</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {g.skills.map(s => (
                  <div key={s.name}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <span style={{ color: "#aaa", fontSize: "0.8rem", fontWeight: 500 }}>{s.name}</span>
                      <span style={{ color: "#444", fontSize: "0.75rem" }}>{s.pct}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <motion.div className="skill-bar-fill" initial={{ width: 0 }} whileInView={{ width: `${s.pct}%` }} viewport={{ once: true }} transition={{ duration: 1.2, delay: gi * 0.05, ease: [0.22, 1, 0.36, 1] }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tags */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: 32 }}>
          <p style={{ color: "#444", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>All Technologies</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {allTags.map((t, i) => (
              <motion.span key={t} initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.02 }} className="tag">{t}</motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
