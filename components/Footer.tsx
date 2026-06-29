"use client";
import { Github, Linkedin, Code2, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        padding: "40px 24px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(0,0,0,0.3)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        {/* Left */}
        <div>
          <span
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              background: "linear-gradient(135deg,#6366f1,#a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Mallika M
          </span>
          <p style={{ color: "#475569", fontSize: "0.8rem", marginTop: 4 }}>
            Frontend Developer & Flutter Mobile App Developer
          </p>
        </div>

        {/* Center */}
        <p
          style={{
            color: "#475569",
            fontSize: "0.82rem",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          Built with <Heart size={14} style={{ color: "#ec4899" }} fill="#ec4899" /> using
          Next.js & Tailwind CSS · © {year}
        </p>

        {/* Right */}
        <div style={{ display: "flex", gap: 14 }}>
          {[
            { icon: <Github size={18} />, href: "https://github.com/MallikaMariyappan", label: "GitHub" },
            { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/mallika-mr/", label: "LinkedIn" },
            { icon: <Code2 size={18} />, href: "https://leetcode.com/u/AlpY7oW1gS/", label: "LeetCode" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              style={{ color: "#475569", transition: "color 0.2s" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#a5b4fc")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#475569")}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
