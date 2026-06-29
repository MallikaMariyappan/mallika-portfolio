const skillGroups = [
  {
    category: "Frontend",
    icon: "🌐",
    color: "#6366f1",
    skills: ["React.js", "Redux", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Framer Motion"],
  },
  {
    category: "Mobile",
    icon: "📱",
    color: "#a855f7",
    skills: ["Flutter", "Dart", "GetX", "Provider", "Google Play Store", "Firebase"],
  },
  {
    category: "Backend / DB",
    icon: "🗄️",
    color: "#ec4899",
    skills: ["Node.js", "Express.js", "MongoDB", "Firebase Firestore", "REST API", "JWT Auth"],
  },
  {
    category: "Languages",
    icon: "💬",
    color: "#f59e0b",
    skills: ["JavaScript (ES6+)", "Dart", "Core Java"],
  },
  {
    category: "Tools",
    icon: "🔧",
    color: "#10b981",
    skills: ["Git", "GitHub", "Figma", "Postman", "VS Code", "Agile / Scrum"],
  },
];

const proficiency = [
  { name: "React.js",   level: 90 },
  { name: "Flutter",    level: 88 },
  { name: "JavaScript", level: 88 },
  { name: "Node.js",    level: 72 },
  { name: "MongoDB",    level: 68 },
  { name: "Firebase",   level: 80 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ padding: "100px 24px" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="section-badge">Technical Skills</span>
          <h2
            style={{
              fontSize: "clamp(1.8rem,4vw,2.5rem)",
              fontWeight: 800,
              marginTop: 16,
              color: "#f1f5f9",
            }}
          >
            My Tech Stack
          </h2>
          <p style={{ color: "#64748b", marginTop: 10, fontSize: "0.95rem" }}>
            Technologies I use to build production-ready products
          </p>
        </div>

        {/* Skill groups */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 24,
            marginBottom: 56,
          }}
        >
          {skillGroups.map((g) => (
            <div key={g.category} className="card" style={{ padding: 28 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                <span style={{ fontSize: "1.4rem" }}>{g.icon}</span>
                <h3
                  style={{
                    color: g.color,
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {g.category}
                </h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {g.skills.map((s) => (
                  <span key={s} className="skill-pill">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency bars */}
        <div className="card" style={{ padding: 36 }}>
          <h3
            style={{
              color: "#f1f5f9",
              fontWeight: 700,
              fontSize: "1.1rem",
              marginBottom: 28,
              textAlign: "center",
            }}
          >
            Core Proficiency
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {proficiency.map((p) => (
              <div key={p.name}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 6,
                  }}
                >
                  <span style={{ color: "#cbd5e1", fontSize: "0.88rem", fontWeight: 500 }}>
                    {p.name}
                  </span>
                  <span style={{ color: "#a5b4fc", fontSize: "0.85rem", fontWeight: 600 }}>
                    {p.level}%
                  </span>
                </div>
                <div className="progress-bar-bg">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${p.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
