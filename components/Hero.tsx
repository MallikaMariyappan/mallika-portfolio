"use client";
import { Github, Linkedin, Code2, Mail, ExternalLink } from "lucide-react";


export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "100px 24px 60px",
      }}
    >
      {/* Background blobs */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "8%",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 48,
          flexWrap: "wrap",
        }}
      >
        {/* Text side */}
        <div style={{ flex: "1 1 480px" }} className="animate-fade-in-up">
          <div style={{ marginBottom: 20 }}>
            <span className="section-badge">👋 Available for opportunities</span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: 8,
              color: "#f1f5f9",
            }}
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Mallika M</span>
          </h1>

          <h2
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              fontWeight: 500,
              color: "#94a3b8",
              marginBottom: 24,
            }}
          >
            Frontend Developer &amp; Flutter Mobile App Developer
          </h2>

          <p
            style={{
              color: "#64748b",
              fontSize: "1rem",
              lineHeight: 1.75,
              maxWidth: 520,
              marginBottom: 36,
            }}
          >
            1.9 years of production experience building and shipping{" "}
            <span style={{ color: "#a5b4fc" }}>React.js web apps</span> and{" "}
            <span style={{ color: "#a5b4fc" }}>Flutter mobile apps</span> for live
            EdTech clients. Published 3 apps on Google Play Store with 50+ active users.
          </p>

          {/* CTA row */}
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 40 }}>
            <a href="#projects" className="btn-primary">
              View Projects <ExternalLink size={16} />
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me <Mail size={16} />
            </a>
          </div>

          {/* Social icons */}
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <a
              href="https://github.com/MallikaMariyappan"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#64748b",
                transition: "color 0.2s",
                display: "flex",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#64748b")}
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/mallika-mr/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#64748b",
                transition: "color 0.2s",
                display: "flex",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#6366f1")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#64748b")}
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://leetcode.com/u/AlpY7oW1gS/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#64748b",
                transition: "color 0.2s",
                display: "flex",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#f59e0b")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#64748b")}
              aria-label="LeetCode"
            >
              <Code2 size={22} />
            </a>
            <span style={{ color: "#1e293b", margin: "0 4px" }}>|</span>
            <span style={{ color: "#475569", fontSize: "0.85rem" }}>
              📍 Chennai, Tamil Nadu
            </span>
            <span style={{ color: "#475569", fontSize: "0.85rem" }}>
              ⏱ 15 Days Notice
            </span>
          </div>
        </div>

        {/* Avatar / stats side */}
        <div
          style={{ flex: "1 1 300px", maxWidth: 380, textAlign: "center" }}
          className="float"
        >
          {/* Avatar circle */}
          <div
            style={{
              width: 180,
              height: 180,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #6366f1, #a855f7, #ec4899)",
              margin: "0 auto 32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "4rem",
              fontWeight: 800,
              color: "#fff",
              boxShadow: "0 0 40px rgba(99,102,241,0.4)",
              border: "4px solid rgba(255,255,255,0.1)",
            }}
          >
            M
          </div>

          {/* Stat cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 14,
            }}
          >
            {[
              { value: "1.9+", label: "Years Exp" },
              { value: "3", label: "Play Store Apps" },
              { value: "50+", label: "Active Users" },
              { value: "3+", label: "EdTech Products" },
            ].map((s) => (
              <div
                key={s.label}
                className="card"
                style={{ padding: "20px 12px", textAlign: "center" }}
              >
                <div
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: 800,
                    background: "linear-gradient(135deg,#6366f1,#a855f7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {s.value}
                </div>
                <div style={{ color: "#64748b", fontSize: "0.75rem", marginTop: 4 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
