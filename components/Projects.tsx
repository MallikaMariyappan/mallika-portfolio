"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github, ArrowUpRight, Globe, Smartphone,
  Zap, Layers, Building2, Lock, ChevronDown, ChevronUp,
} from "lucide-react";
import { fadeUpD, staggerContainer } from "@/lib/motion";

const projects = [
  {
    id: "contentforge",
    num: "01",
    title: "ContentForge",
    subtitle: "AI-Powered Social Media Content Generator",
    ownership: "personal",
    ownershipLabel: "Personal Project",
    company: null,
    alwaysOpen: true, // ← always expanded, no toggle
    desc: "Give it a topic, pick a platform, set your tone — get 3 post variations + a shareable branded PNG image card in seconds. Dual AI provider support (Claude + Groq), local history, dark mode, and one-click export.",
    tags: ["React 18", "Tailwind CSS", "Framer Motion", "Claude API", "Groq / Llama 3", "React Router v6"],
    highlights: [
      "3 unique post variations per generation with different hooks",
      "Platform-aware prompting — LinkedIn (3000 chars), Twitter (280), Instagram (2200)",
      "Tone slider — 5 levels from Very Formal to Very Casual",
      "Export any post as a branded PNG infographic card via dom-to-image",
      "Save up to 50 posts to local history, filter by platform",
      "Dual AI provider — Claude (Anthropic) + Groq (Llama 3) via .env switch",
    ],
    flow: ["Topic", "Platform", "Tone", "Generate", "3 Posts", "Export PNG"],
    github: "https://github.com/MallikaMariyappan/contentforge",
    live: null,
    icon: Zap,
  },
  {
    id: "ielts",
    num: "02",
    title: "IELTSGenAI",
    subtitle: "AI-Powered IELTS Prep Platform — Web + Mobile",
    ownership: "professional",
    ownershipLabel: "Core Team · Dataspark AI Solutions",
    company: "Dataspark AI Solutions",
    alwaysOpen: false,
    desc: "End-to-end dual-platform EdTech product for IELTS exam preparation. Core team partner who co-owned this product from requirement gathering through Play Store launch — built the full React.js web app and Flutter mobile app simultaneously.",
    tags: ["React.js", "Flutter", "Redux", "Node.js", "JWT Auth", "Firebase", "Dart"],
    highlights: [
      "React.js web app + Flutter mobile app shipped simultaneously for a live client",
      "JWT authentication with role-based access control across web and mobile",
      "Redux state management on web, GetX/Provider on Flutter",
      "AI-generated practice content integrated via REST APIs",
      "Live on Google Play Store — personally managed deployment and release",
      "Led client demos, requirement gathering, and sprint delivery end-to-end",
    ],
    flow: ["Requirements", "Design", "React.js Web", "Flutter App", "API Integration", "Play Store"],
    github: null,
    live: null,
    icon: Globe,
  },
  {
    id: "esl",
    num: "03",
    title: "ESL English Learning App",
    subtitle: "Flutter Mobile App — Google Play Store",
    ownership: "professional",
    ownershipLabel: "Core Team · Dataspark AI Solutions",
    company: "Dataspark AI Solutions",
    alwaysOpen: false,
    desc: "Flutter mobile app for English language learning with a structured 5-level curriculum, audio lessons, and interactive exercises. Published on Google Play Store with 50+ active users. Owned the full mobile development lifecycle.",
    tags: ["Flutter", "Dart", "Firebase", "Firestore", "Firebase Auth", "GetX"],
    highlights: [
      "5-level structured English curriculum with audio lessons",
      "Interactive exercises with real-time progress tracking",
      "Firebase Firestore for live content delivery and user data",
      "50+ active users on Google Play Store post-launch",
      "Fully owned Flutter architecture, state management, and release pipeline",
      "Offline-capable lesson caching for low-connectivity users",
    ],
    flow: ["Curriculum Design", "Flutter UI", "Firebase Setup", "Audio Integration", "Testing", "Play Store"],
    github: null,
    live: null,
    icon: Smartphone,
  },
  {
    id: "pte",
    num: "04",
    title: "PTE Preparation Platform",
    subtitle: "Full-Stack Web Application",
    ownership: "professional",
    ownershipLabel: "Core Team · Dataspark AI Solutions",
    company: "Dataspark AI Solutions",
    alwaysOpen: false,
    desc: "Comprehensive PTE Academic exam prep web application with practice tests, performance analytics, and an admin dashboard. Built entire frontend from Figma designs with role-based admin controls for client accounts.",
    tags: ["React.js", "Tailwind CSS", "Redux", "Node.js", "MongoDB", "REST API"],
    highlights: [
      "Section-wise PTE practice tests with timed mock exam mode",
      "Real-time performance analytics dashboard for students",
      "Role-based admin panel — manage students, content, and results",
      "Built pixel-perfect UI from Figma designs with full API integration",
      "RBAC access control managing 3+ client accounts independently",
      "Responsive across desktop and tablet for diverse user base",
    ],
    flow: ["Figma", "Component Build", "API Integration", "Admin Panel", "RBAC", "Client Delivery"],
    github: null,
    live: null,
    icon: Building2,
  },
];

/* ── Shared card body ── */
function CardBody({ p }: { p: typeof projects[0] }) {
  const isProfessional = p.ownership === "professional";
  return (
    <div style={{ padding: "0 32px 32px" }}>
      <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: 24 }} />

      {isProfessional && (
        <div style={{
          display: "flex", alignItems: "flex-start", gap: 10,
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 10, padding: "11px 14px", marginBottom: 24,
        }}>
          <Building2 size={14} color="#555" style={{ flexShrink: 0, marginTop: 1 }} />
          <p style={{ color: "#555", fontSize: "0.76rem", lineHeight: 1.65 }}>
            Built as a <strong style={{ color: "#888" }}>full-time employee and core team partner</strong> at{" "}
            <strong style={{ color: "#888" }}>Dataspark AI Solutions</strong>. Source code is proprietary.
            I co-owned this product end-to-end — architecture, delivery, and client demos.
          </p>
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }} className="proj-body-cols">
        {/* Left */}
        <div>
          <p style={{ color: "#777", fontSize: "0.87rem", lineHeight: 1.85, marginBottom: 22 }}>{p.desc}</p>
          <p style={{ color: "#333", fontSize: "0.6rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 10 }}>Tech Stack</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 22 }}>
            {p.tags.map(t => <span key={t} className="tag" style={{ fontSize: "0.7rem" }}>{t}</span>)}
          </div>
          {/* CTA */}
          {p.github ? (
            <motion.a href={p.github} target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "#fff", color: "#000", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "8px 16px", borderRadius: 8 }}>
              <Github size={13} /> View on GitHub
            </motion.a>
          ) : (
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7, color: "#444", fontSize: "0.72rem", fontWeight: 600, padding: "8px 16px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.07)" }}>
              <Lock size={12} /> Proprietary Source Code
            </span>
          )}
        </div>

        {/* Right */}
        <div>
          <p style={{ color: "#333", fontSize: "0.6rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>What I Built</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 24 }}>
            {p.highlights.map((h, j) => (
              <motion.div key={j}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: j * 0.05, duration: 0.3 }}
                style={{ display: "flex", alignItems: "flex-start", gap: 9 }}
              >
                <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#fff", flexShrink: 0, marginTop: 7 }} />
                <p style={{ color: "#666", fontSize: "0.81rem", lineHeight: 1.65 }}>{h}</p>
              </motion.div>
            ))}
          </div>

          <p style={{ color: "#333", fontSize: "0.6rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 10 }}>Delivery Flow</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 10, padding: "11px 14px" }}>
            {p.flow.map((f, fi) => (
              <span key={f} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ color: "#aaa", fontSize: "0.7rem", fontWeight: 600 }}>{f}</span>
                {fi < p.flow.length - 1 && <span style={{ color: "#333", fontSize: "0.65rem" }}>→</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Shared card header ── */
function CardHeader({
  p, isOpen, onToggle,
}: {
  p: typeof projects[0];
  isOpen: boolean;
  onToggle?: () => void;
}) {
  const isProfessional = p.ownership === "professional";
  const PIcon = p.icon;

  const inner = (
    <div style={{ padding: "24px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, width: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, flex: 1, minWidth: 0 }}>
        <span style={{ color: "#333", fontSize: "0.68rem", fontWeight: 700, flexShrink: 0 }}>{p.num}</span>
        <div style={{
          width: 42, height: 42, borderRadius: 11, flexShrink: 0,
          background: isProfessional ? "rgba(255,255,255,0.06)" : "#fff",
          border: isProfessional ? "1px solid rgba(255,255,255,0.1)" : "none",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <PIcon size={19} color={isProfessional ? "#888" : "#000"} />
        </div>
        <div style={{ minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 4 }}>
            <h3 style={{ color: "#fff", fontWeight: 900, fontSize: "1rem", fontFamily: "var(--font-syne),sans-serif" }}>
              {p.title}
            </h3>
            <span style={{
              fontSize: "0.62rem", fontWeight: 700, padding: "3px 10px", borderRadius: 999,
              background: isProfessional ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.1)",
              color: isProfessional ? "#666" : "#ccc",
              border: isProfessional ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(255,255,255,0.2)",
              display: "inline-flex", alignItems: "center", gap: 5,
            }}>
              {isProfessional ? <Lock size={9} /> : <Github size={9} />}
              {p.ownershipLabel}
            </span>
          </div>
          <p style={{ color: "#555", fontSize: "0.8rem" }}>{p.subtitle}</p>
        </div>
      </div>

      {/* Chevron only for collapsible cards */}
      {!p.alwaysOpen && (
        <div style={{
          width: 30, height: 30, borderRadius: "50%", flexShrink: 0,
          border: "1px solid rgba(255,255,255,0.12)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#666",
          background: isOpen ? "rgba(255,255,255,0.08)" : "transparent",
          transition: "background 0.2s",
        }}>
          {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </div>
      )}
    </div>
  );

  if (p.alwaysOpen) {
    // Not a button — just a div
    return <div>{inner}</div>;
  }

  return (
    <button
      onClick={onToggle}
      style={{ width: "100%", background: "none", border: "none", cursor: "none", textAlign: "left" }}
    >
      {inner}
    </button>
  );
}

/* ── Main component ── */
export default function Projects() {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpenIds(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <section id="projects" style={{ background: "#050505", padding: "96px 32px", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "rgba(255,255,255,0.06)" }} />

      <div style={{ maxWidth: 1180, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={staggerContainer}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 56 }}
        >
          <motion.div variants={fadeUpD(0)}>
            <p className="section-label" style={{ marginBottom: 12 }}>Projects</p>
            <h2 style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "clamp(1.9rem,4vw,2.8rem)", fontWeight: 900, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.08 }}>
              Things I&apos;ve Built.
            </h2>
          </motion.div>
          <motion.div variants={fadeUpD(0.1)} style={{ display: "flex", gap: 16 }}>
            <span style={{ display: "flex", alignItems: "center", gap: 6, color: "#555", fontSize: "0.75rem" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#fff", display: "inline-block" }} />
              Personal
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 6, color: "#555", fontSize: "0.75rem" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#444", border: "1px solid #666", display: "inline-block" }} />
              Professional · Dataspark AI Solutions
            </span>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {projects.map((p, i) => {
            const isOpen = p.alwaysOpen || openIds.has(p.id);

            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.09 }}
                style={{
                  background: isOpen ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
                  border: `1px solid ${isOpen ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.07)"}`,
                  borderRadius: 16,
                  overflow: "hidden",
                  transition: "border-color 0.3s, background 0.3s",
                }}
              >
                <CardHeader p={p} isOpen={isOpen} onToggle={() => toggle(p.id)} />

                {/* Always-open card: show body directly, no animation */}
                {p.alwaysOpen && <CardBody p={p} />}

                {/* Collapsible cards: animate open/close */}
                {!p.alwaysOpen && (
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <CardBody p={p} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            marginTop: 16,
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: 16,
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 14, padding: "18px 28px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Layers size={15} color="#555" />
            <p style={{ color: "#555", fontSize: "0.82rem" }}>More experiments and open-source work on GitHub</p>
          </div>
          <motion.a
            href="https://github.com/MallikaMariyappan"
            target="_blank" rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            style={{ display: "inline-flex", alignItems: "center", gap: 7, color: "#aaa", fontSize: "0.8rem", fontWeight: 600, padding: "8px 16px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "#aaa"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
          >
            <Github size={14} /> GitHub <ArrowUpRight size={12} />
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        @media(max-width: 768px) {
          .proj-body-cols { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </section>
  );
}
