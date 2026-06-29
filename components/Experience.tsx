const experiences = [
  {
    role: "Frontend Developer & Mobile App Developer",
    company: "Dataspark AI Solutions",
    type: "Full-time",
    period: "Dec 2024 – Present",
    badge: "Current",
    badgeColor: "#10b981",
    points: [
      "Delivered 3+ dual-platform products (React.js web + Flutter mobile + Node.js backend) simultaneously for live EdTech clients — owned complete frontend, REST API integration, and backend coordination.",
      "Built IELTSGenAI as both a Flutter mobile app (Play Store) and React.js web app — implemented JWT authentication, Redux state management, and REST API integration end-to-end.",
      "Developed ESL English Learning App in Flutter with audio lessons and 5-level curriculum; reached 50+ active users on Google Play Store within launch period.",
      "Built NEET/JEE Learning Platform — Flutter app (Play Store) + React.js web portal — featuring practice tests, progress tracking, and performance analytics.",
      "Implemented scalable state management using Redux (React.js) and GetX / Provider (Flutter) across all products, improving maintainability and reducing bug rate.",
      "Built role-based admin dashboards with React.js + Tailwind CSS with RBAC access control for 3+ client accounts.",
      "Led client demos, requirement-gathering, and sprint planning independently; delivered all 3 products on schedule.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Dataspark AI Solutions",
    type: "Full-time",
    period: "Sep 2024 – Dec 2024",
    badge: "Promoted",
    badgeColor: "#6366f1",
    points: [
      "Built responsive React.js UI components from Figma designs and integrated REST APIs in live client projects from day one.",
      "Gained production experience in component architecture, API integration, and cross-browser testing within first month.",
      "Promoted from Intern → Frontend Developer; took on full project ownership for a live client product.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "100px 24px",
        background: "rgba(255,255,255,0.01)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="section-badge">Work Experience</span>
          <h2
            style={{
              fontSize: "clamp(1.8rem,4vw,2.5rem)",
              fontWeight: 800,
              marginTop: 16,
              color: "#f1f5f9",
            }}
          >
            My Journey
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32, position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: 20,
              top: 0,
              bottom: 0,
              width: 2,
              background: "linear-gradient(to bottom, #6366f1, rgba(99,102,241,0.1))",
            }}
          />

          {experiences.map((exp) => (
            <div
              key={exp.role}
              style={{ display: "flex", gap: 32, paddingLeft: 10 }}
            >
              {/* Dot */}
              <div
                style={{
                  marginTop: 28,
                  flexShrink: 0,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div className="timeline-dot" />
              </div>

              {/* Card */}
              <div className="card" style={{ padding: 32, flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 10,
                    marginBottom: 6,
                  }}
                >
                  <div>
                    <h3
                      style={{
                        color: "#f1f5f9",
                        fontWeight: 700,
                        fontSize: "1.05rem",
                      }}
                    >
                      {exp.role}
                    </h3>
                    <p style={{ color: "#6366f1", fontSize: "0.9rem", fontWeight: 500, marginTop: 2 }}>
                      {exp.company} · {exp.type}
                    </p>
                  </div>
                  <div style={{ display: "flex", gap: 8, alignItems: "flex-start", flexWrap: "wrap" }}>
                    <span
                      style={{
                        background: `${exp.badgeColor}22`,
                        border: `1px solid ${exp.badgeColor}44`,
                        color: exp.badgeColor,
                        padding: "4px 12px",
                        borderRadius: 999,
                        fontSize: "0.75rem",
                        fontWeight: 600,
                      }}
                    >
                      {exp.badge}
                    </span>
                    <span
                      style={{
                        color: "#475569",
                        fontSize: "0.82rem",
                        padding: "4px 0",
                        whiteSpace: "nowrap",
                      }}
                    >
                      📅 {exp.period}
                    </span>
                  </div>
                </div>

                <ul
                  style={{
                    marginTop: 18,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    listStyle: "none",
                  }}
                >
                  {exp.points.map((p, i) => (
                    <li
                      key={i}
                      style={{
                        color: "#94a3b8",
                        fontSize: "0.9rem",
                        lineHeight: 1.65,
                        display: "flex",
                        gap: 8,
                      }}
                    >
                      <span style={{ color: "#6366f1", flexShrink: 0, marginTop: 2 }}>▸</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
