"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const links = [
  { href: "#hero",       label: "Home"       },
  { href: "#about",      label: "About"      },
  { href: "#projects",   label: "Projects"   },
  { href: "#experience", label: "Experience" },
];

const socials = [
  { icon: "mdi:github",            href: "https://github.com/MallikaMariyappan",    label: "GitHub"   },
  { icon: "mdi:linkedin",          href: "https://www.linkedin.com/in/mallika-mr/", label: "LinkedIn" },
  { icon: "simple-icons:leetcode", href: "https://leetcode.com/u/AlpY7oW1gS/",     label: "LeetCode" },
  { icon: "mdi:phone",             href: "tel:+917200309967",                       label: "Phone"    },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [mounted, setMounted]   = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const isScrolled = mounted && scrolled;

  return (
    <motion.nav
      suppressHydrationWarning
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(244,244,244,0.96)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid #e4e4e4",
        boxShadow: isScrolled ? "0 2px 24px rgba(0,0,0,0.07)" : "none",
        transition: "box-shadow 0.3s ease",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 32px" }}>
        {/* Main row */}
        <div style={{ display: "flex", alignItems: "center", height: 64, gap: 40 }}>

          {/* Left — links */}
          <div style={{ display: "flex", gap: 32, flex: 1 }} className="desk-links">
            {links.map(l => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
          </div>

          {/* Center — logo */}
          <a href="#hero" onClick={() => setOpen(false)} style={{ textDecoration: "none", flexShrink: 0 }}>
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: 44, height: 44, borderRadius: "50%",
                background: "#111",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#fff", fontWeight: 900, fontSize: "0.82rem",
                boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
                userSelect: "none",
              }}
            >
              MM
            </motion.div>
          </a>

          {/* Right — socials */}
          <div style={{ display: "flex", gap: 8, flex: 1, justifyContent: "flex-end" }} className="desk-links">
            {socials.map(s => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                className="social-icon"
                whileHover={{ y: -2 }}
              >
                <Icon icon={s.icon} width={16} />
              </motion.a>
            ))}
          </div>

          {/* Burger */}
          <button
            onClick={() => setOpen(!open)}
            className="burger-btn"
            aria-label="Toggle menu"
            style={{
              background: "none", border: "none", color: "#111",
              cursor: "pointer", display: "none", padding: 4,
            }}
          >
            <Icon icon={open ? "mdi:close" : "mdi:menu"} width={24} />
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{ overflow: "hidden", borderTop: "1px solid #e4e4e4" }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 20, padding: "20px 0 24px" }}>
                {links.map(l => (
                  <a key={l.href} href={l.href} className="nav-link"
                    style={{ fontSize: "1rem" }} onClick={() => setOpen(false)}>
                    {l.label}
                  </a>
                ))}
                <div style={{ display: "flex", gap: 10, paddingTop: 8 }}>
                  {socials.map(s => (
                    <a key={s.label} href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={s.label} className="social-icon">
                      <Icon icon={s.icon} width={16} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desk-links  { display: none !important; }
          .burger-btn  { display: block !important; }
        }
      `}</style>
    </motion.nav>
  );
}
