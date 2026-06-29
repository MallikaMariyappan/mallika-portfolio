"use client";
import { useState, useEffect } from "react";
import { Github, Linkedin, Code2, Phone, Menu, X } from "lucide-react";

const links = [
  { href: "#hero",       label: "Home"       },
  { href: "#about",      label: "About"      },
  { href: "#projects",   label: "Projects"   },
  { href: "#experience", label: "Experience" },
];

const socials = [
  { icon: <Github size={15} />,   href: "https://github.com/MallikaMariyappan",    label: "GitHub"   },
  { icon: <Linkedin size={15} />, href: "https://www.linkedin.com/in/mallika-mr/", label: "LinkedIn" },
  { icon: <Code2 size={15} />,    href: "https://leetcode.com/u/AlpY7oW1gS/",     label: "LeetCode" },
  { icon: <Phone size={15} />,    href: "tel:+917200309967",                       label: "Phone"    },
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

  // Always render the same shell on server + first client paint
  const isScrolled = mounted && scrolled;

  return (
    <nav suppressHydrationWarning style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 100,
      background: isScrolled ? "rgba(245,245,245,0.96)" : "rgba(245,245,245,0.92)",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
      borderBottom: "1px solid #e8e8e8",
      boxShadow: isScrolled ? "0 2px 20px rgba(0,0,0,0.07)" : "none",
      transition: "box-shadow 0.3s ease",
    }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 32px" }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          height: 64,
          gap: 48,
        }}>
          {/* Left — nav links */}
          <div style={{ display: "flex", gap: 32, flex: 1 }} className="desk-nav">
            {links.map(l => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
          </div>

          {/* Center — logo circle */}
          <a href="#hero" style={{ textDecoration: "none", flexShrink: 0 }} onClick={() => setOpen(false)}>
            <div style={{
              width: 44, height: 44,
              borderRadius: "50%",
              background: "#111",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontWeight: 900, fontSize: "0.82rem",
              letterSpacing: "0.02em",
              boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
              userSelect: "none",
            }}>
              MM
            </div>
          </a>

          {/* Right — social icons */}
          <div style={{ display: "flex", gap: 8, flex: 1, justifyContent: "flex-end" }} className="desk-nav">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                className="social-icon"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Burger */}
          <button
            onClick={() => setOpen(!open)}
            className="burger-btn"
            style={{ background: "none", border: "none", color: "#111", cursor: "pointer", display: "none" }}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{
            padding: "16px 0 24px",
            display: "flex", flexDirection: "column", gap: 20,
            borderTop: "1px solid #e8e8e8",
          }}>
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link"
                style={{ fontSize: "1rem" }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <div style={{ display: "flex", gap: 10, paddingTop: 8 }}>
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="social-icon"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desk-nav    { display: none !important; }
          .burger-btn  { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
