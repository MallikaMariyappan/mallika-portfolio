"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { fadeUpD, staggerContainer } from "@/lib/motion";

const facts = [
  { icon: "mdi:school-outline",          label: "Education",    value: "BCA — SFR College, Tamil Nadu (2019–2022)" },
  { icon: "mdi:office-building-outline", label: "Company",      value: "Dataspark AI Solutions (Full-time)"        },
  { icon: "mdi:map-marker-outline",      label: "Location",     value: "Chennai, Tamil Nadu"                       },
  { icon: "mdi:clock-fast",              label: "Notice Period",value: "15 Days"                                   },
  { icon: "mdi:target",                  label: "Seeking",      value: "Frontend / Flutter Developer Roles"        },
];

const whatIDo = [
  "Build pixel-perfect React.js web apps from Figma designs",
  "Develop cross-platform Flutter mobile apps for Android",
  "Integrate REST APIs with JWT authentication end-to-end",
  "Manage state with Redux (web) and GetX / Provider (mobile)",
  "Deploy and publish apps to Google Play Store independently",
  "Build role-based admin dashboards with RBAC access control",
  "Lead client demos, sprint planning, and delivery",
];

const S = {
  section: { background: "#fff", padding: "96px 32px" } as React.CSSProperties,
  wrap:    { maxWidth: 1180, margin: "0 auto" } as React.CSSProperties,
  heading: { fontFamily: "var(--font-syne),sans-serif", fontSize: "clamp(1.9rem,4vw,2.8rem)", fontWeight: 900, letterSpacing: "-0.03em", color: "#111", lineHeight: 1.08 } as React.CSSProperties,
  card:    { background: "#fff", border: "1px solid #e8e8e8", borderRadius: 12, padding: 28, transition: "transform 0.3s,box-shadow 0.3s" } as React.CSSProperties,
  iconBox: (bg = "#111") => ({ width: 36, height: 36, borderRadius: 8, background: bg, border: "1px solid #e8e8e8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }) as React.CSSProperties,
};

export default function About() {
  return (
    <section id="about" style={S.section}>
      <div style={S.wrap}>

        {/* Heading */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={staggerContainer}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 56 }}
        >
          <motion.div variants={fadeUpD(0)}>
            <p className="section-label" style={{ marginBottom: 12 }}>About Me</p>
            <h2 style={S.heading}>The Person Behind<br />the Code.</h2>
          </motion.div>
          <motion.p variants={fadeUpD(0.1)} style={{ color: "#888", fontSize: "0.9rem", lineHeight: 1.75, maxWidth: 340 }}>
            Promoted from Intern to Frontend Developer — I own end-to-end
            delivery across web and mobile for live EdTech clients.
          </motion.p>
        </motion.div>

        <div style={{ height: 1, background: "#ebebeb", marginBottom: 56 }} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="about-grid">

          {/* Left */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeUpD(0)} style={{ display: "flex", gap: 16, marginBottom: 36 }}>
              <div style={{ ...S.iconBox("#111"), width: 44, height: 44, borderRadius: 10 }}>
                <Icon icon="mdi:account-outline" width={20} color="#fff" />
              </div>
              <div>
                <h3 style={{ color: "#111", fontWeight: 700, fontSize: "0.95rem", marginBottom: 8, fontFamily: "var(--font-syne),sans-serif" }}>My Story</h3>
                <p style={{ color: "#666", fontSize: "0.88rem", lineHeight: 1.8 }}>
                  I&apos;m a Frontend &amp; Flutter Developer with 1.9 years of production experience at
                  Dataspark AI Solutions. Starting as an intern, I was promoted to Frontend Developer
                  within 3 months and owned full delivery of 3 dual-platform EdTech apps simultaneously.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUpD(0.05)}>
              <h3 style={{ color: "#111", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16, fontFamily: "var(--font-syne),sans-serif" }}>What I Do</h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {whatIDo.map((item, i) => (
                  <motion.li key={i} variants={fadeUpD(0.04 * i)} style={{ display: "flex", alignItems: "flex-start", gap: 10, color: "#555", fontSize: "0.87rem" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#111", flexShrink: 0, marginTop: 6 }} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}>
            <h3 style={{ color: "#111", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20, fontFamily: "var(--font-syne),sans-serif" }}>Quick Facts</h3>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {facts.map((f, i) => (
                <motion.div key={f.label} variants={fadeUpD(0.05 * i)} style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 0", borderBottom: i < facts.length - 1 ? "1px solid #f0f0f0" : "none" }}>
                  <div style={S.iconBox("#f5f5f5")}>
                    <Icon icon={f.icon} width={17} style={{ color: "#444" }} />
                  </div>
                  <div>
                    <p style={{ color: "#aaa", fontSize: "0.68rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>{f.label}</p>
                    <p style={{ color: "#333", fontSize: "0.87rem", fontWeight: 500 }}>{f.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginTop: 28 }}>
              {[{ v: "1.9+", l: "Years Exp" }, { v: "3", l: "Apps Live" }, { v: "50+", l: "Users" }].map((s, i) => (
                <motion.div key={s.l} variants={fadeUpD(0.1 + i * 0.06)} style={{ textAlign: "center", padding: "20px 8px", background: "#f8f8f8", borderRadius: 12, border: "1px solid #efefef" }}>
                  <div style={{ fontSize: "1.9rem", fontWeight: 900, color: "#111", letterSpacing: "-0.04em", fontFamily: "var(--font-syne),sans-serif" }}>{s.v}</div>
                  <div style={{ color: "#888", fontSize: "0.7rem", marginTop: 4, fontWeight: 500 }}>{s.l}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
