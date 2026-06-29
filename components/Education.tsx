"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { fadeUpD } from "@/lib/motion";

const certs = [
  { icon: "mdi:certificate-outline", title: "Full Stack Development",      org: "Infycle Technologies",   bg: "#eff6ff", color: "#1d4ed8" },
  { icon: "mdi:language-java",       title: "Complete Java Course",        org: "Besant Technologies",    bg: "#fff7ed", color: "#c2410c" },
  { icon: "mdi:cellphone-check",     title: "3 Apps on Google Play Store", org: "Independent — 50+ users",bg: "#f0fdf4", color: "#16a34a" },
  { icon: "mdi:trending-up",         title: "Intern → Frontend Developer", org: "Dataspark AI Solutions", bg: "#faf5ff", color: "#7e22ce" },
];

export default function Education() {
  return (
    <section id="education" style={{ background: "#fff", padding: "96px 32px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: 56 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>Education & Certifications</p>
          <h2 style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "clamp(1.9rem,4vw,2.8rem)", fontWeight: 900, letterSpacing: "-0.03em", color: "#111", lineHeight: 1.08 }}>Learning &amp; Achievements.</h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }} className="edu-grid">

          {/* Degree */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}
            whileHover={{ y: -4, boxShadow: "0 20px 48px rgba(0,0,0,0.18)" }}
            style={{ background: "linear-gradient(135deg,#111 0%,#333 100%)", borderRadius: 16, padding: 36 }}>
            <div style={{ width: 52, height: 52, borderRadius: 12, background: "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
              <Icon icon="mdi:school-outline" width={26} color="#fff" />
            </div>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 8 }}>Degree</p>
            <h3 style={{ color: "#fff", fontWeight: 900, fontSize: "1.2rem", marginBottom: 8, lineHeight: 1.3, fontFamily: "var(--font-syne),sans-serif" }}>Bachelor of Computer Applications</h3>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.88rem", marginBottom: 4 }}>SFR College for Women, Tamil Nadu</p>
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem" }}>2019 – 2022</p>
          </motion.div>

          {/* Certs grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {certs.map((c, i) => (
              <motion.div key={c.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -3, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
                style={{ background: "#fff", border: "1px solid #e8e8e8", borderRadius: 12, padding: 22 }}>
                <div style={{ width: 36, height: 36, borderRadius: 9, background: c.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <Icon icon={c.icon} width={18} style={{ color: c.color }} />
                </div>
                <h4 style={{ color: "#111", fontWeight: 700, fontSize: "0.83rem", marginBottom: 4, lineHeight: 1.35, fontFamily: "var(--font-syne),sans-serif" }}>{c.title}</h4>
                <p style={{ color: "#888", fontSize: "0.73rem" }}>{c.org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.edu-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
