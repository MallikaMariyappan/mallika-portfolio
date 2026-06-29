"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { fadeUpD, staggerContainer } from "@/lib/motion";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "#f4f4f4",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        paddingTop: 80,
        position: "relative",
      }}
    >
      {/* Dot grid */}
      <div
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle, #c0c0c0 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          opacity: 0.6,
        }}
      />

      <div style={{ maxWidth: 1180, margin: "0 auto", width: "100%", padding: "0 32px", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "flex-end",
            minHeight: "calc(100vh - 80px)",
            gap: 0,
          }}
          className="hero-inner"
        >

          {/* ── LEFT: photo ── */}
          <motion.div
            style={{ position: "relative", display: "flex", alignItems: "flex-end", justifyContent: "center" }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Rotating badge — fixed 100×100 */}
            <div style={{ position: "absolute", bottom: 40, left: 16, zIndex: 20, width: 100, height: 100 }}>
              <a
                href="mailto:mmallika2121@gmail.com"
                aria-label="Hire Me"
                style={{ position: "relative", display: "block", width: 100, height: 100, textDecoration: "none" }}
              >
                <svg
                  viewBox="0 0 100 100"
                  width="100" height="100"
                  className="rotate-badge"
                  style={{ position: "absolute", top: 0, left: 0 }}
                >
                  <defs>
                    <path id="cpHero" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
                  </defs>
                  <circle cx="50" cy="50" r="46" fill="#111" />
                  <text fill="#fff" fontSize="8.5" fontWeight="600" letterSpacing="2.2">
                    <textPath href="#cpHero">FRONTEND DEV • FLUTTER DEV • </textPath>
                  </text>
                </svg>
                <div
                  style={{
                    position: "absolute", inset: 0,
                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                  }}
                >
                  <span style={{ color: "#fff", fontWeight: 900, fontSize: "0.58rem", letterSpacing: "0.1em", textAlign: "center", lineHeight: 1.4 }}>
                    HIRE<br />ME
                  </span>
                </div>
              </a>
            </div>

            {/* Floating photo */}
            <motion.div
              style={{ position: "relative", width: "100%", maxWidth: 420, height: 540 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Ink blobs */}
              <svg style={{ position: "absolute", top: 30, left: 20, opacity: 0.05, pointerEvents: "none" }} width="160" height="160" viewBox="0 0 160 160">
                <ellipse cx="80" cy="60" rx="70" ry="50" fill="#111" />
                <ellipse cx="44" cy="100" rx="34" ry="24" fill="#111" transform="rotate(-18 44 100)" />
              </svg>

              {/* Photo with arch shape */}
              <div
                style={{
                  position: "absolute", bottom: 0,
                  left: "50%", transform: "translateX(-50%)",
                  width: 300, height: 440,
                  borderRadius: "150px 150px 0 0",
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                }}
              >
                <Image
                  src="/profile.jpeg"
                  alt="Mallika M"
                  fill priority
                  sizes="300px"
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: text ── */}
          <motion.div
            style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingBottom: 64, paddingLeft: 40 }}
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {/* Status */}
            <motion.div variants={fadeUpD(0)} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", display: "inline-block", boxShadow: "0 0 8px #22c55e" }} />
              <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "#888", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                Open to Opportunities
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUpD(0.08)}
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: "#111",
                marginBottom: 20,
              }}
            >
              Turning Vision<br />
              Into Reality With<br />
              <span style={{ color: "#777" }}>Code &amp; Design.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={fadeUpD(0.16)}
              style={{ color: "#666", fontSize: "0.95rem", lineHeight: 1.8, maxWidth: 400, marginBottom: 36 }}
            >
              Frontend Developer &amp; Flutter Mobile App Developer with{" "}
              <strong style={{ color: "#111" }}>1.9 years</strong> of production experience.
              Shipped 3 Play Store apps with{" "}
              <strong style={{ color: "#111" }}>50+ active users</strong>.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUpD(0.22)} style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 36 }}>
              <motion.a
                href="#projects"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "#111", color: "#fff",
                  fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.04em", textTransform: "uppercase",
                  padding: "13px 28px", borderRadius: 6, textDecoration: "none",
                }}
              >
                View Projects <Icon icon="mdi:arrow-top-right" width={16} />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "transparent", color: "#111",
                  fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.04em", textTransform: "uppercase",
                  padding: "12px 27px", borderRadius: 6,
                  border: "1.5px solid #bbb", textDecoration: "none",
                  transition: "all 0.2s",
                }}
              >
                Contact <Icon icon="mdi:email-outline" width={16} />
              </motion.a>
            </motion.div>

            {/* Tags */}
            <motion.div
              variants={fadeUpD(0.28)}
              style={{ display: "flex", gap: 8, flexWrap: "wrap", paddingTop: 24, borderTop: "1px solid #e4e4e4" }}
            >
              {["React.js", "Flutter", "Node.js", "TypeScript", "Firebase", "Redux"].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </motion.div>

            {/* Meta */}
            <motion.div variants={fadeUpD(0.33)} style={{ display: "flex", gap: 20, marginTop: 18, flexWrap: "wrap" }}>
              <span style={{ display: "flex", alignItems: "center", gap: 5, color: "#aaa", fontSize: "0.78rem" }}>
                <Icon icon="mdi:map-marker-outline" width={14} /> Chennai, Tamil Nadu
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 5, color: "#aaa", fontSize: "0.78rem" }}>
                <Icon icon="mdi:clock-outline" width={14} /> 15 Days Notice Period
              </span>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-inner { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
