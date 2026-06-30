"use client";
import { motion } from "framer-motion";
import { GraduationCap, Award, Code2, TrendingUp, Smartphone } from "lucide-react";
import { fadeUpD } from "@/lib/motion";

const certs = [
  { Icon: Award,      title: "Full Stack Development",      org: "Infycle Technologies"          },
  { Icon: Code2,      title: "Complete Java Course",        org: "Besant Technologies"           },
  { Icon: Smartphone, title: "3 Apps on Google Play Store", org: "Independent — 50+ users"       },
  { Icon: TrendingUp, title: "Intern → Frontend Developer", org: "Dataspark AI Solutions"        },
];

export default function Education() {
  return (
    <section id="education" style={{ background: "#000", padding: "96px 32px", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "rgba(255,255,255,0.06)" }} />

      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: 56 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>Education & Certifications</p>
          <h2 style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "clamp(1.9rem,4vw,2.8rem)", fontWeight: 900, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.08 }}>
            Learning &amp; Achievements.
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="edu-grid">

          {/* Degree card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65 }}
            whileHover={{ y: -4, boxShadow: "0 24px 60px rgba(0,0,0,0.9)" }}
            style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 16, padding: 36 }}
          >
            <div style={{ width: 52, height: 52, borderRadius: 12, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
              <GraduationCap size={26} color="#000" />
            </div>
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 8 }}>Degree</p>
            <h3 style={{ color: "#fff", fontWeight: 900, fontSize: "1.2rem", marginBottom: 8, lineHeight: 1.3, fontFamily: "var(--font-syne),sans-serif" }}>Bachelor of Computer Applications</h3>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.88rem", marginBottom: 4 }}>SFR College for Women, Tamil Nadu</p>
            <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.8rem" }}>2019 – 2022</p>
          </motion.div>

          {/* Certs grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {certs.map((c, i) => (
              <motion.div key={c.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -3, boxShadow: "0 12px 32px rgba(0,0,0,0.5)", borderColor: "rgba(255,255,255,0.2)" }}
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 22, transition: "border-color 0.2s" }}
              >
                <div style={{ width: 36, height: 36, borderRadius: 9, background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <c.Icon size={17} color="#aaa" />
                </div>
                <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "0.83rem", marginBottom: 4, lineHeight: 1.35, fontFamily: "var(--font-syne),sans-serif" }}>{c.title}</h4>
                <p style={{ color: "#555", fontSize: "0.73rem" }}>{c.org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`@media(max-width:768px){.edu-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
