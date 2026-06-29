"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function Footer() {
  const [year, setYear] = useState(2025);
  useEffect(() => { setYear(new Date().getFullYear()); }, []);

  return (
    <footer className="bg-[#111] border-t border-white/10 py-9 px-8">
      <div className="max-w-[1180px] mx-auto flex flex-wrap justify-between items-center gap-5">

        {/* Left */}
        <div>
          <div className="flex items-center gap-2.5 mb-1.5">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <span className="text-[#111] font-black text-[0.68rem]">MM</span>
            </div>
            <span className="text-white font-bold text-[0.9rem]">Mallika M</span>
          </div>
          <p className="text-white/30 text-[0.75rem]">Frontend Developer · Flutter Developer · Chennai</p>
        </div>

        {/* Center */}
        <p className="text-white/25 text-[0.75rem]">
          Built with Next.js, Tailwind CSS &amp; Framer Motion © {year}
        </p>

        {/* Socials */}
        <div className="flex gap-2.5">
          {[
            { icon: "mdi:github",           href: "https://github.com/MallikaMariyappan",    label: "GitHub"   },
            { icon: "mdi:linkedin",         href: "https://www.linkedin.com/in/mallika-mr/",  label: "LinkedIn" },
            { icon: "simple-icons:leetcode",href: "https://leetcode.com/u/AlpY7oW1gS/",      label: "LeetCode" },
          ].map(s => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              whileHover={{ y: -2, background: "#fff", color: "#111" }}
              style={{
                width: 36, height: 36,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.12)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "rgba(255,255,255,0.35)",
                transition: "all 0.2s",
                textDecoration: "none",
              }}
            >
              <Icon icon={s.icon} width={15} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
