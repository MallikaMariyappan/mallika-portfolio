"use client";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: "100vh",
      background: "#f5f5f5",
      display: "flex", alignItems: "center",
      position: "relative", overflow: "hidden",
      padding: "80px 0 0",
    }}>
      {/* Subtle dot pattern */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle, #ccc 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        opacity: 0.35,
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1180, margin: "0 auto", width: "100%", padding: "0 32px", position: "relative", zIndex: 1 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 0,
          alignItems: "flex-end",
          minHeight: "calc(100vh - 80px)",
        }} className="hero-grid">

          {/* LEFT — Artistic photo */}
          <div style={{
            position: "relative",
            display: "flex", alignItems: "flex-end", justifyContent: "center",
            paddingBottom: 0,
          }} className="anim-slide-left">

            {/* Circular rotating badge — bottom left */}
            <div style={{ position: "absolute", bottom: 40, left: 20, zIndex: 10 }}>
              <a href="mailto:mmallika2121@gmail.com" className="circular-badge" aria-label="Hire Me">
                {/* SVG circular text */}
                <svg viewBox="0 0 100 100" className="badge-ring" style={{ width: 100, height: 100 }}>
                  <defs>
                    <path id="circle-path" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                  </defs>
                  <circle cx="50" cy="50" r="44" fill="#111" />
                  <text fill="#fff" fontSize="9.5" fontWeight="600" letterSpacing="2.8">
                    <textPath href="#circle-path">
                      FRONTEND DEVELOPER • FLUTTER DEV • 
                    </textPath>
                  </text>
                </svg>
                <div className="badge-center">
                  <span style={{ color: "#fff", fontWeight: 800, fontSize: "0.62rem", letterSpacing: "0.06em", textAlign: "center", lineHeight: 1.3 }}>
                    HIRE<br />ME
                  </span>
                </div>
              </a>
            </div>

            {/* Profile image with artistic splash effect */}
            <div style={{
              position: "relative",
              width: "100%",
              maxWidth: 460,
              height: 580,
            }}>
              {/* Colored splash blobs behind image */}
              <div style={{
                position: "absolute",
                top: "5%", left: "5%",
                width: "90%", height: "90%",
                background: "radial-gradient(ellipse at 30% 30%, rgba(0,0,0,0.07) 0%, transparent 60%)",
                filter: "blur(20px)",
              }} />
              {/* Main image */}
              <div style={{
                position: "absolute",
                bottom: 0, left: "50%",
                transform: "translateX(-50%)",
                width: 340,
                height: 480,
                borderRadius: "180px 180px 0 0",
                overflow: "hidden",
              }}>
                <Image
                  src="/profile.jpeg"
                  alt="Mallika M"
                  fill
                  priority
                  sizes="340px"
                  style={{
                    objectFit: "cover",
                    objectPosition: "top center",
                    mixBlendMode: "multiply",
                  }}
                />
              </div>
              {/* Ink splash SVG decoration */}
              <svg style={{ position: "absolute", top: 20, left: 10, opacity: 0.08, pointerEvents: "none" }}
                width="200" height="200" viewBox="0 0 200 200">
                <ellipse cx="100" cy="80" rx="80" ry="60" fill="#111" />
                <ellipse cx="60" cy="120" rx="40" ry="30" fill="#111" transform="rotate(-20 60 120)" />
                <ellipse cx="150" cy="100" rx="35" ry="25" fill="#111" transform="rotate(15 150 100)" />
              </svg>
              <svg style={{ position: "absolute", bottom: 60, right: 20, opacity: 0.06, pointerEvents: "none" }}
                width="140" height="140" viewBox="0 0 140 140">
                <ellipse cx="70" cy="70" rx="60" ry="45" fill="#111" />
                <ellipse cx="40" cy="100" rx="30" ry="20" fill="#111" transform="rotate(25 40 100)" />
              </svg>
            </div>
          </div>

          {/* RIGHT — Text content */}
          <div style={{
            paddingBottom: 60,
            paddingLeft: 40,
            display: "flex", flexDirection: "column", justifyContent: "center",
          }} className="anim-fade-up">

            {/* Status */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e66" }} />
              <span style={{ fontSize: "0.78rem", color: "#888", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600 }}>
                Open to Opportunities
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              color: "#111",
              letterSpacing: "-0.03em",
              marginBottom: 20,
            }}>
              Turning Vision Into<br />
              Reality With Code<br />
              <span style={{ color: "#555" }}>And Design.</span>
            </h1>

            {/* Sub */}
            <p style={{
              color: "#666",
              fontSize: "0.95rem",
              lineHeight: 1.75,
              maxWidth: 400,
              marginBottom: 36,
            }}>
              Frontend Developer &amp; Flutter Mobile App Developer with 1.9 years of
              production experience. I ship React.js web apps and Flutter mobile apps
              for live EdTech clients — 3 apps live on Google Play Store with 50+ active users.
            </p>

            {/* CTA row */}
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
              <a href="#projects" className="btn-dark">
                View Projects <ArrowUpRight size={16} />
              </a>
              <a href="#contact" className="btn-outline-dark">
                Contact <ExternalLink size={15} />
              </a>
            </div>

            {/* Tech strip */}
            <div style={{
              display: "flex", gap: 10, flexWrap: "wrap", marginTop: 40,
              paddingTop: 28, borderTop: "1px solid #e8e8e8",
            }}>
              {["React.js", "Flutter", "Node.js", "TypeScript", "Firebase"].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
