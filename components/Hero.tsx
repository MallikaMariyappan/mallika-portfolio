"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github, Linkedin, Code2, Mail, Phone, Download,
  MapPin, Briefcase, ArrowUpRight, Clock, Zap,
} from "lucide-react";
import { fadeUpD, staggerContainer } from "@/lib/motion";

const stats = [
  { value: "1.9+", label: "Years Exp"    },
  { value: "3",    label: "Apps Live"    },
  { value: "50+",  label: "Active Users" },
  { value: "3+",   label: "Products"     },
];

const socials = [
  { icon: Github,   href: "https://github.com/MallikaMariyappan",    label: "GitHub"   },
  { icon: Linkedin, href: "https://www.linkedin.com/in/mallika-mr/", label: "LinkedIn" },
  { icon: Code2,    href: "https://leetcode.com/u/AlpY7oW1gS/",      label: "LeetCode" },
];

/* ── Expandable card gallery items (inspired from interview-portfolio) ── */
const galleryCards = [
  { title: "React.js",    sub: "Web Apps",       bg: "linear-gradient(135deg,#111 0%,#1a1a1a 100%)", icon: "⚛️" },
  { title: "Flutter",     sub: "Mobile Apps",    bg: "linear-gradient(135deg,#0d0d0d 0%,#181818 100%)", icon: "📱" },
  { title: "Play Store",  sub: "3 Apps Live",    bg: "linear-gradient(135deg,#111 0%,#1c1c1c 100%)", icon: "🚀" },
];

export default function Hero() {
  const [expandedCard, setExpandedCard] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const heroRef = useRef<HTMLDivElement>(null);

  /* Auto-cycle gallery cards */
  useEffect(() => {
    const id = setInterval(() => {
      setExpandedCard(prev => (prev + 1) % galleryCards.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  /* Track mouse for spotlight effect */
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top)  / rect.height,
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        minHeight: "100vh",
        background: "#000",
        display: "flex",
        alignItems: "stretch",
        overflow: "hidden",
        paddingTop: 64,
        position: "relative",
      }}
    >
      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        zIndex: 1,
      }} />

      {/* Mouse spotlight */}
      <div style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 2,
        background: `radial-gradient(600px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(255,255,255,0.04) 0%, transparent 60%)`,
        transition: "background 0.1s",
      }} />

      {/* Bottom fade */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: 120,
        background: "linear-gradient(to top, #000 0%, transparent 100%)",
        zIndex: 3,
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: 1180, margin: "0 auto", width: "100%",
        padding: "0 32px", position: "relative", zIndex: 4,
        display: "grid",
        gridTemplateColumns: "400px 1fr",
        gap: 0,
        alignItems: "stretch",
      }} className="hero-grid">

        {/* ── LEFT — Photo panel ── */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 32,
            paddingBottom: 40,
          }}
        >
          {/* Photo frame */}
          <div style={{ position: "relative", width: 340, flex: 1, maxHeight: 520, minHeight: 400 }}>

            {/* Decorative offset border */}
            <div style={{
              position: "absolute", top: 12, left: 12, right: -12, bottom: -12,
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 20, zIndex: 0,
            }} />

            {/* Main photo */}
            <div style={{
              position: "relative", width: "100%", height: "100%",
              borderRadius: 16, overflow: "hidden",
              boxShadow: "0 32px 80px rgba(0,0,0,0.8)",
              zIndex: 1,
            }}>
              <Image
                src="/profile.png"
                alt="Mallika M"
                fill
                priority
                sizes="340px"
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />

              {/* Subtle dark overlay at bottom for text legibility */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: "45%",
                background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)",
              }} />

              {/* Name tag */}
              <div style={{ position: "absolute", bottom: 20, left: 20, right: 20 }}>
                <p style={{ color: "#fff", fontWeight: 900, fontSize: "1.2rem", letterSpacing: "-0.02em", fontFamily: "var(--font-syne),sans-serif", marginBottom: 2 }}>
                  Mallika M
                </p>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.78rem", fontWeight: 500 }}>
                  Frontend &amp; Flutter Developer
                </p>
              </div>
            </div>

            {/* Floating availability badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5, type: "spring" }}
              style={{
                position: "absolute", top: -14, right: -20,
                background: "#fff",
                borderRadius: 999, padding: "8px 16px",
                display: "flex", alignItems: "center", gap: 7,
                boxShadow: "0 4px 24px rgba(0,0,0,0.6)",
                zIndex: 2, whiteSpace: "nowrap",
              }}
            >
              <motion.span
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
                style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", display: "inline-block", boxShadow: "0 0 8px #22c55e" }}
              />
              <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#000", letterSpacing: "0.06em" }}>Available for hire</span>
            </motion.div>

            {/* Floating location badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              style={{
                position: "absolute", bottom: 60, left: -24,
                background: "rgba(20,20,20,0.95)",
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
                borderRadius: 12, padding: "10px 14px",
                display: "flex", alignItems: "center", gap: 8,
                boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                zIndex: 2,
              }}
            >
              <MapPin size={13} color="#fff" />
              <div>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Location</p>
                <p style={{ color: "#fff", fontSize: "0.75rem", fontWeight: 700 }}>Chennai, Tamil Nadu</p>
              </div>
            </motion.div>
          </div>

          {/* Stats strip */}
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 10, width: "100%", maxWidth: 340, marginTop: 28,
          }}>
            {stats.map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.45 }}
                whileHover={{ y: -3, borderColor: "rgba(255,255,255,0.3)" }}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 10, padding: "12px 6px", textAlign: "center",
                  transition: "border-color 0.2s",
                  cursor: "default",
                }}
              >
                <div style={{ fontSize: "1.25rem", fontWeight: 900, color: "#fff", letterSpacing: "-0.04em", fontFamily: "var(--font-syne),sans-serif" }}>{s.value}</div>
                <div style={{ fontSize: "0.6rem", color: "#666", fontWeight: 600, marginTop: 2, lineHeight: 1.3 }}>{s.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Rotating hire badge */}
          <div style={{ position: "absolute", bottom: 48, right: -10, zIndex: 10, width: 88, height: 88 }}>
            <a href="mailto:mmallika2121@gmail.com" aria-label="Hire Me"
              style={{ position: "relative", display: "block", width: 88, height: 88 }}>
              <svg viewBox="0 0 100 100" width="88" height="88" className="rotate-badge"
                style={{ position: "absolute", top: 0, left: 0 }}>
                <defs><path id="cpHero" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" /></defs>
                <circle cx="50" cy="50" r="46" fill="#fff" />
                <text fill="#000" fontSize="8" fontWeight="700" letterSpacing="2.2">
                  <textPath href="#cpHero">FRONTEND • FLUTTER • HIRE ME •</textPath>
                </text>
              </svg>
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ArrowUpRight size={18} color="#000" />
              </div>
            </a>
          </div>
        </motion.div>

        {/* ── RIGHT — Text ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          style={{
            display: "flex", flexDirection: "column", justifyContent: "center",
            padding: "48px 0 48px 56px",
          }}
        >
          {/* Role chip */}
          <motion.div variants={fadeUpD(0)} style={{ marginBottom: 24 }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 999, padding: "6px 16px",
              fontSize: "0.72rem", fontWeight: 700,
              color: "#aaa", letterSpacing: "0.08em",
            }}>
              <Zap size={13} color="#fff" />
              Frontend Developer · Flutter Developer
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUpD(0.08)}
            style={{
              fontFamily: "var(--font-syne),sans-serif",
              fontSize: "clamp(2.6rem,5vw,4.4rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              color: "#fff",
              marginBottom: 24,
            }}
          >
            Turning Vision<br />
            Into Reality<br />
            <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.25)" }}>
              With Code.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUpD(0.15)}
            style={{ color: "#666", fontSize: "0.96rem", lineHeight: 1.8, maxWidth: 440, marginBottom: 32 }}
          >
            1.9 years shipping production-ready{" "}
            <strong style={{ color: "#ddd", fontWeight: 700 }}>React.js web apps</strong> &amp;{" "}
            <strong style={{ color: "#ddd", fontWeight: 700 }}>Flutter mobile apps</strong>{" "}
            for live EdTech clients. 3 apps on Google Play Store with 50+ active users.
          </motion.p>

          {/* ── Expandable card gallery (from interview-portfolio) ── */}
          <motion.div variants={fadeUpD(0.19)} style={{ marginBottom: 32 }}>
            <div className="skill-gallery-wrapper">
              {galleryCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  className={`skill-gallery-card${expandedCard === i ? " active" : ""}`}
                  onMouseEnter={() => setExpandedCard(i)}
                  onClick={() => setExpandedCard(i)}
                  animate={{ flex: expandedCard === i ? 5 : 1 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  style={{ background: card.bg }}
                >
                  <div className="skill-gallery-overlay">
                    <span className="skill-gallery-icon">{card.icon}</span>
                    <AnimatePresence>
                      {expandedCard === i && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="skill-gallery-title">{card.title}</p>
                          <p className="skill-gallery-sub">{card.sub}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={fadeUpD(0.22)} style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 36 }}>
            <motion.a
              href="#projects"
              whileHover={{ y: -3, boxShadow: "0 8px 28px rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#fff", color: "#000",
                fontWeight: 700, fontSize: "0.85rem",
                letterSpacing: "0.04em", textTransform: "uppercase",
                padding: "13px 28px", borderRadius: 8,
              }}
            >
              <Briefcase size={16} />
              View Projects
            </motion.a>

            <motion.a
              href="/Mallika_M_Resume.pdf"
              download="Mallika_M_Resume.pdf"
              whileHover={{ y: -3, boxShadow: "0 8px 28px rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "transparent", color: "#fff",
                fontWeight: 700, fontSize: "0.85rem",
                letterSpacing: "0.04em", textTransform: "uppercase",
                padding: "12px 24px", borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <Download size={16} />
              Resume
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "transparent", color: "#666",
                fontWeight: 700, fontSize: "0.85rem",
                letterSpacing: "0.04em", textTransform: "uppercase",
                padding: "12px 22px", borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <Mail size={16} />
              Contact
            </motion.a>
          </motion.div>

          <motion.div variants={fadeUpD(0.28)} style={{ height: 1, background: "rgba(255,255,255,0.08)", marginBottom: 28 }} />

          {/* Tech tags */}
          <motion.div variants={fadeUpD(0.3)} style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
            {["React.js", "Flutter", "Node.js", "Redux", "Firebase", "Dart"].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </motion.div>

          {/* Social + links row */}
          <motion.div variants={fadeUpD(0.35)} style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <span style={{ color: "#444", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Connect</span>
            <div style={{ width: 24, height: 1, background: "#333" }} />
            {socials.map(s => (
              <motion.a
                key={s.label} href={s.href}
                target="_blank" rel="noopener noreferrer"
                aria-label={s.label}
                className="social-icon"
                whileHover={{ y: -2, scale: 1.1 }}
              >
                <s.icon size={15} />
              </motion.a>
            ))}
            <motion.a
              href="mailto:mmallika2121@gmail.com"
              className="social-icon"
              whileHover={{ y: -2, scale: 1.1 }}
              aria-label="Email"
            >
              <Mail size={15} />
            </motion.a>
            <motion.a
              href="tel:+917200309967"
              className="social-icon"
              whileHover={{ y: -2, scale: 1.1 }}
              aria-label="Phone"
            >
              <Phone size={15} />
            </motion.a>
            <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.1)", margin: "0 4px" }} />
            <span style={{ display: "flex", alignItems: "center", gap: 5, color: "#555", fontSize: "0.78rem" }}>
              <Clock size={13} /> 15 Days Notice
            </span>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-grid > *:last-child { padding: 32px 0 48px 0 !important; }
        }

        /* ── Expandable skill gallery ── */
        .skill-gallery-wrapper {
          display: flex;
          gap: 8px;
          height: 100px;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
        }
        .skill-gallery-card {
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          cursor: pointer;
          min-width: 0;
          border: 1px solid rgba(255,255,255,0.06);
          transition: border-color 0.3s;
        }
        .skill-gallery-card.active {
          border-color: rgba(255,255,255,0.2);
        }
        .skill-gallery-overlay {
          position: absolute;
          inset: 0;
          padding: 16px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 4px;
          background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%);
        }
        .skill-gallery-icon {
          font-size: 1.4rem;
          line-height: 1;
          margin-bottom: 4px;
        }
        .skill-gallery-title {
          color: #fff;
          font-family: var(--font-syne), sans-serif;
          font-weight: 800;
          font-size: 0.95rem;
          white-space: nowrap;
        }
        .skill-gallery-sub {
          color: rgba(255,255,255,0.5);
          font-size: 0.72rem;
          font-weight: 500;
          white-space: nowrap;
        }
      `}</style>
    </section>
  );
}
