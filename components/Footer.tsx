"use client";
import { Github, Linkedin, Code2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(2025);
  useEffect(() => { setYear(new Date().getFullYear()); }, []);

  return (
    <footer style={{ padding: "36px 32px", background: "#111", borderTop: "1px solid #222" }}>
      <div style={{
        maxWidth: 1180, margin: "0 auto",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: 20,
      }}>

        {/* Left */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            <div style={{
              width: 30, height: 30, borderRadius: "50%",
              background: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ color: "#111", fontWeight: 900, fontSize: "0.68rem" }}>MM</span>
            </div>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem" }}>Mallika M</span>
          </div>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.78rem" }}>
            Frontend Developer · Flutter Developer · Chennai
          </p>
        </div>

        {/* Center */}
        <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.78rem" }}>
          Built with Next.js &amp; Tailwind CSS © {year}
        </p>

        {/* Right */}
        <div style={{ display: "flex", gap: 10 }}>
          {[
            { icon: <Github size={16} />,   href: "https://github.com/MallikaMariyappan",    label: "GitHub"   },
            { icon: <Linkedin size={16} />, href: "https://www.linkedin.com/in/mallika-mr/",  label: "LinkedIn" },
            { icon: <Code2 size={16} />,    href: "https://leetcode.com/u/AlpY7oW1gS/",      label: "LeetCode" },
          ].map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              style={{
                width: 36, height: 36, borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.12)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "rgba(255,255,255,0.35)",
                transition: "all 0.2s",
                textDecoration: "none",
              }}
              onMouseOver={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#fff";
                (e.currentTarget as HTMLAnchorElement).style.color = "#111";
              }}
              onMouseOut={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.35)";
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
