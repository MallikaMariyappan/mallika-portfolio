"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function Footer() {
  const [year, setYear] = useState(2025);
  useEffect(() => { setYear(new Date().getFullYear()); }, []);

  return (
    <footer style={{ background: "#111", borderTop: "1px solid rgba(255,255,255,0.1)", padding: "36px 32px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>

        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#111", fontWeight: 900, fontSize: "0.68rem" }}>MM</span>
            </div>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem" }}>Mallika M</span>
          </div>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem" }}>Frontend Developer · Flutter Developer · Chennai</p>
        </div>

        <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.75rem" }}>
          Built with Next.js, Tailwind &amp; Framer Motion © {year}
        </p>

        <div style={{ display: "flex", gap: 10 }}>
          {[
            { icon: "mdi:github",           href: "https://github.com/MallikaMariyappan",    label: "GitHub"   },
            { icon: "mdi:linkedin",         href: "https://www.linkedin.com/in/mallika-mr/",  label: "LinkedIn" },
            { icon: "simple-icons:leetcode",href: "https://leetcode.com/u/AlpY7oW1gS/",      label: "LeetCode" },
          ].map(s => (
            <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              aria-label={s.label} whileHover={{ y: -2, background: "#fff", color: "#111" }}
              style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.35)", textDecoration: "none", transition: "all 0.2s" }}>
              <Icon icon={s.icon} width={15} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
