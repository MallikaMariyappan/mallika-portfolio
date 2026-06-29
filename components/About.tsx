export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 24px",
        background: "rgba(255,255,255,0.01)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="section-badge">About Me</span>
          <h2
            style={{
              fontSize: "clamp(1.8rem,4vw,2.5rem)",
              fontWeight: 800,
              marginTop: 16,
              color: "#f1f5f9",
            }}
          >
            Who I Am
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 32,
          }}
        >
          {/* Bio */}
          <div className="card" style={{ padding: 32, gridColumn: "span 1" }}>
            <div style={{ fontSize: "2rem", marginBottom: 16 }}>🚀</div>
            <h3 style={{ color: "#f1f5f9", fontWeight: 700, marginBottom: 12 }}>
              My Story
            </h3>
            <p style={{ color: "#64748b", lineHeight: 1.8, fontSize: "0.95rem" }}>
              I&apos;m a Frontend Developer &amp; Flutter Mobile App Developer with{" "}
              <span style={{ color: "#a5b4fc" }}>1.9 years of production experience</span>{" "}
              building and shipping full-stack EdTech products. Promoted from Intern to
              Frontend Developer at Dataspark AI Solutions, I owned end-to-end frontend
              delivery across web and mobile platforms.
            </p>
          </div>

          {/* What I do */}
          <div className="card" style={{ padding: 32 }}>
            <div style={{ fontSize: "2rem", marginBottom: 16 }}>💻</div>
            <h3 style={{ color: "#f1f5f9", fontWeight: 700, marginBottom: 12 }}>
              What I Do
            </h3>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {[
                "Build pixel-perfect React.js web apps",
                "Develop cross-platform Flutter mobile apps",
                "Integrate REST APIs & JWT auth",
                "Manage state with Redux & GetX",
                "Deploy apps to Google Play Store",
                "Build role-based admin dashboards",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    color: "#94a3b8",
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span style={{ color: "#6366f1" }}>▸</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick facts */}
          <div className="card" style={{ padding: 32 }}>
            <div style={{ fontSize: "2rem", marginBottom: 16 }}>⚡</div>
            <h3 style={{ color: "#f1f5f9", fontWeight: 700, marginBottom: 12 }}>
              Quick Facts
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { icon: "🎓", label: "Education", value: "BCA — SFR College, Tamil Nadu" },
                { icon: "🏢", label: "Current Company", value: "Dataspark AI Solutions" },
                { icon: "📍", label: "Location", value: "Chennai, Tamil Nadu" },
                { icon: "⏱", label: "Notice Period", value: "15 Days" },
                { icon: "🎯", label: "Looking For", value: "Frontend / Flutter roles" },
              ].map((f) => (
                <div key={f.label} style={{ display: "flex", gap: 10 }}>
                  <span style={{ fontSize: "1rem", width: 22, flexShrink: 0 }}>{f.icon}</span>
                  <div>
                    <div style={{ color: "#475569", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      {f.label}
                    </div>
                    <div style={{ color: "#cbd5e1", fontSize: "0.88rem" }}>{f.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
