"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Github, Linkedin, Code2, Phone, Menu, X, Download, FileText, Mail } from "lucide-react";

const links = [
  { href: "#hero",       label: "Home"       },
  { href: "#about",      label: "About"      },
  { href: "#skills",     label: "Skills"     },
  { href: "#projects",   label: "Projects"   },
  { href: "#experience", label: "Experience" },
  { href: "#contact",    label: "Contact"    },
];

const socials = [
  { icon: Github,   href: "https://github.com/MallikaMariyappan",    label: "GitHub"   },
  { icon: Linkedin, href: "https://www.linkedin.com/in/mallika-mr/", label: "LinkedIn" },
  { icon: Code2,    href: "https://leetcode.com/u/AlpY7oW1gS/",      label: "LeetCode" },
  { icon: Mail,     href: "mailto:mmallika2121@gmail.com",            label: "Email"    },
  { icon: Phone,    href: "tel:+917200309967",                        label: "Phone"    },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [mounted, setMounted]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    setMounted(true);
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* Active section tracking */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-64px 0px 0px 0px" }
    );
    const sections = document.querySelectorAll("section[id]");
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const isScrolled = mounted && scrolled;

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{
          scaleX,
          position: "fixed",
          top: 0, left: 0, right: 0,
          height: 2,
          background: "#fff",
          transformOrigin: "left",
          zIndex: 200,
        }}
      />

      <motion.nav
        suppressHydrationWarning
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          background: isScrolled ? "rgba(0,0,0,0.95)" : "rgba(0,0,0,0.75)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          boxShadow: isScrolled ? "0 2px 32px rgba(0,0,0,0.5)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 32px" }}>
          {/* Main row */}
          <div style={{ display: "flex", alignItems: "center", height: 64, gap: 32 }}>

            {/* Left — nav links */}
            <div style={{ display: "flex", gap: 24, flex: 1 }} className="desk-links">
              {links.map(l => (
                <a key={l.href} href={l.href} className={`nav-link${activeSection === l.href.slice(1) ? " nav-link-active" : ""}`}>
                  {l.label}
                </a>
              ))}
            </div>

            {/* Center — logo */}
            <a href="#hero" onClick={() => setOpen(false)} style={{ flexShrink: 0 }}>
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#000", fontWeight: 900, fontSize: "0.8rem",
                  boxShadow: "0 0 20px rgba(255,255,255,0.15)",
                  userSelect: "none",
                }}
              >
                MM
              </motion.div>
            </a>

            {/* Right — socials + resume */}
            <div style={{ display: "flex", gap: 8, flex: 1, justifyContent: "flex-end", alignItems: "center" }} className="desk-links">
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
                  <s.icon size={15} />
                </motion.a>
              ))}
              <motion.a
                href="/Mallika_M_Resume.pdf"
                download="Mallika_M_Resume.pdf"
                whileHover={{ y: -2 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  background: "#fff", color: "#000",
                  fontWeight: 700, fontSize: "0.72rem",
                  letterSpacing: "0.06em", textTransform: "uppercase",
                  padding: "7px 14px", borderRadius: 6,
                  marginLeft: 6,
                }}
              >
                <Download size={13} />
                Resume
              </motion.a>
            </div>

            {/* Burger */}
            <button
              onClick={() => setOpen(!open)}
              className="burger-btn"
              aria-label="Toggle menu"
              style={{ background: "none", border: "none", color: "#fff", cursor: "none", display: "none", padding: 4 }}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
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
                style={{ overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 20, padding: "20px 0 24px" }}>
                  {links.map(l => (
                    <a key={l.href} href={l.href} className="nav-link"
                      style={{ fontSize: "1rem" }} onClick={() => setOpen(false)}>
                      {l.label}
                    </a>
                  ))}
                  <div style={{ display: "flex", gap: 10, paddingTop: 8, flexWrap: "wrap", alignItems: "center" }}>
                    {socials.map(s => (
                      <a key={s.label} href={s.href}
                        target={s.href.startsWith("http") ? "_blank" : undefined}
                        rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        aria-label={s.label} className="social-icon">
                        <s.icon size={15} />
                      </a>
                    ))}
                    <a href="/Mallika_M_Resume.pdf" download="Mallika_M_Resume.pdf"
                      style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#fff", color: "#000", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "7px 14px", borderRadius: 6 }}>
                      <Download size={13} /> Resume
                    </a>
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
          .nav-link-active {
            color: #fff !important;
          }
          .nav-link-active::after {
            width: 100% !important;
          }
        `}</style>
      </motion.nav>
    </>
  );
}
