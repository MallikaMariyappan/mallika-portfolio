const certs = [
  { name: "Full Stack Development", org: "Infycle Technologies", icon: "🏆" },
  { name: "Complete Java Course", org: "Besant Technologies", icon: "☕" },
  { name: "Published 3 Apps on Google Play Store", org: "Independent", icon: "📱" },
  { name: "Promoted: Intern → Frontend Developer", org: "Dataspark AI Solutions", icon: "🚀" },
];

export default function Education() {
  return (
    <section
      id="education"
      style={{
        padding: "100px 24px",
        background: "rgba(255,255,255,0.01)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="section-badge">Education & Certifications</span>
          <h2
            style={{
              fontSize: "clamp(1.8rem,4vw,2.5rem)",
              fontWeight: 800,
              marginTop: 16,
              color: "#f1f5f9",
            }}
          >
            Learning Never Stops
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 28,
          }}
        >
          {/* Degree */}
          <div
            className="card"
            style={{
              padding: 32,
              background:
                "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(168,85,247,0.05))",
            }}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>🎓</div>
            <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1.05rem", marginBottom: 4 }}>
              Bachelor of Computer Applications
            </h3>
            <p style={{ color: "#6366f1", fontSize: "0.9rem", fontWeight: 500, marginBottom: 8 }}>
              BCA
            </p>
            <p style={{ color: "#64748b", fontSize: "0.88rem" }}>
              SFR College for Women, Tamil Nadu
            </p>
            <p style={{ color: "#475569", fontSize: "0.82rem", marginTop: 6 }}>2019 – 2022</p>
          </div>

          {/* Certifications */}
          {certs.map((c) => (
            <div key={c.name} className="card" style={{ padding: 28 }}>
              <div style={{ fontSize: "1.8rem", marginBottom: 12 }}>{c.icon}</div>
              <h3 style={{ color: "#f1f5f9", fontWeight: 600, fontSize: "0.95rem", marginBottom: 4 }}>
                {c.name}
              </h3>
              <p style={{ color: "#64748b", fontSize: "0.82rem" }}>{c.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
