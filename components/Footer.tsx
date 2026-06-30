"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github, Linkedin, Code2, Mail, Phone, Download,
  ArrowUpRight, MapPin,
} from "lucide-react";

const quickLinks = [
  { href: "#about",      label: "About"      },
  { href: "#skills",     label: "Skills"     },
  { href: "#projects",   label: "Projects"   },
  { href: "#experience", label: "Experience" },
  { href: "#contact",    label: "Contact"    },
];

const socialLinks = [
  { Icon: Github,   href: "https://github.com/MallikaMariyappan",    label: "GitHub"   },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/mallika-mr/", label: "LinkedIn" },
  { Icon: Code2,    href: "https://leetcode.com/u/AlpY7oW1gS/",      label: "LeetCode" },
];

export default function Footer() {
  const [year, setYear] = useState(2025);
  useEffect(() => { setYear(new Date().getFullYear()); }, []);

  return (
    <footer style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "64px 32px 32px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>

        {/* Top row */}
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 40, marginBottom: 56 }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ color: "#000", fontWeight: 900, fontSize: "0.72rem" }}>MM</span>
              </div>
              <span style={{ color: "#fff", fontWeight: 800, fontSize: "1rem", fontFamily: "var(--font-syne),sans-serif" }}>Mallika M</span>
            </div>
            <p style={{ color: "#444", fontSize: "0.8rem", lineHeight: 1.8, maxWidth: 260, marginBottom: 20 }}>
              Frontend Developer &amp; Flutter Developer based in Chennai. Building production-ready EdTech products.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <MapPin size={13} color="#555" />
              <span style={{ color: "#555", fontSize: "0.78rem" }}>Chennai, Tamil Nadu</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p style={{ color: "#444", fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 16 }}>Navigation</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {quickLinks.map(l => (
                <a key={l.label} href={l.href}
                  style={{ display: "inline-flex", alignItems: "center", gap: 5, color: "#555", fontSize: "0.82rem", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#555")}>
                  <ArrowUpRight size={12} />
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social profiles */}
          <div>
            <p style={{ color: "#444", fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 16 }}>Profiles</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { Icon: Github,   href: "https://github.com/MallikaMariyappan",    label: "GitHub"   },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/mallika-mr/", label: "LinkedIn" },
                { Icon: Code2,    href: "https://leetcode.com/u/AlpY7oW1gS/",      label: "LeetCode" },
                { Icon: Download, href: "/Mallika_M_Resume.pdf",                   label: "Resume", download: "Mallika_M_Resume.pdf" },
              ].map(s => (
                <a key={s.label} href={s.href}
                  {...("download" in s && s.download ? { download: s.download } : { target: "_blank", rel: "noopener noreferrer" })}
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#555", fontSize: "0.82rem", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#555")}>
                  <s.Icon size={14} />
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ color: "#444", fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 16 }}>Contact</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a href="mailto:mmallika2121@gmail.com"
                style={{ display: "flex", alignItems: "center", gap: 8, color: "#888", fontSize: "0.82rem", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "#888")}>
                <Mail size={14} /> mmallika2121@gmail.com
              </a>
              <a href="tel:+917200309967"
                style={{ display: "flex", alignItems: "center", gap: 8, color: "#888", fontSize: "0.82rem", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "#888")}>
                <Phone size={14} /> +91 7200309967
              </a>

              {/* Availability indicator */}
              <div style={{
                display: "flex", alignItems: "center", gap: 8,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 8, padding: "10px 12px", marginTop: 4,
              }}>
                <motion.span
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", flexShrink: 0 }}
                />
                <div>
                  <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.78rem" }}>Open to work</p>
                  <p style={{ color: "#444", fontSize: "0.68rem" }}>15 days notice</p>
                </div>
              </div>

              {/* Social icons row */}
              <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                {socialLinks.map(s => (
                  <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    aria-label={s.label} whileHover={{ y: -2 }}
                    style={{ width: 34, height: 34, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.3)", transition: "all 0.2s" }}
                    onMouseEnter={e => { const el = e.currentTarget; el.style.background = "#fff"; el.style.color = "#000"; el.style.borderColor = "#fff"; }}
                    onMouseLeave={e => { const el = e.currentTarget; el.style.background = "transparent"; el.style.color = "rgba(255,255,255,0.3)"; el.style.borderColor = "rgba(255,255,255,0.1)"; }}>
                    <s.Icon size={14} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider + bottom */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ color: "#333", fontSize: "0.75rem" }}>© {year} Mallika M. All rights reserved.</p>
          <p style={{ color: "#333", fontSize: "0.75rem" }}>Built with Next.js · Framer Motion · Three.js · Lucide</p>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media(max-width:600px){
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
