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
  { icon: "mdi:github",    href: "https://github.com/MallikaMariyappan",    label: "GitHub"   },
  { icon: "mdi:linkedin",  href: "https://www.linkedin.com/in/mallika-mr/", label: "LinkedIn" },
  { icon: "simple-icons:leetcode", href: "https://leetcode.com/u/AlpY7oW1gS/", label: "LeetCode" },
  { icon: "mdi:phone",     href: "tel:+917200309967",                       label: "Phone"    },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [mounted, setMounted] = useState(false);
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
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: isScrolled ? "rgba(244,244,244,0.97)" : "rgba(244,244,244,0.9)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid #e4e4e4",
        boxShadow: isScrolled ? "0 2px 24px rgba(0,0,0,0.07)" : "none",
        transition: "box-shadow 0.3s ease",
      }}
    >
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="flex items-center h-16 gap-12">

          {/* Left links */}
          <div className="hidden md:flex gap-8 flex-1">
            {links.map(l => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
          </div>

          {/* Center logo */}
          <a href="#hero" onClick={() => setOpen(false)} style={{ textDecoration: "none", flexShrink: 0 }}>
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-full bg-[#111] flex items-center justify-center text-white font-black text-sm tracking-tight shadow-lg select-none"
            >
              MM
            </motion.div>
          </a>

          {/* Right socials */}
          <div className="hidden md:flex gap-2 flex-1 justify-end">
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
            className="md:hidden ml-auto p-1 text-[#111] bg-transparent border-none cursor-pointer"
            aria-label="Toggle menu"
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
              className="overflow-hidden border-t border-[#e4e4e4]"
            >
              <div className="flex flex-col gap-5 py-5">
                {links.map(l => (
                  <a key={l.href} href={l.href} className="nav-link text-base" onClick={() => setOpen(false)}>{l.label}</a>
                ))}
                <div className="flex gap-2 pt-2">
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
    </motion.nav>
  );
}
