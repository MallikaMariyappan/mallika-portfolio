import { Briefcase, TrendingUp } from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer & Mobile App Developer",
    company: "Dataspark AI Solutions",
    period: "Dec 2024 – Present",
    type: "Full-time",
    badge: "Current",
    badgeBg: "#e8f5e9",
    badgeColor: "#2e7d32",
    icon: <TrendingUp size={16} />,
    points: [
      "Delivered 3+ dual-platform products (React.js web + Flutter mobile + Node.js backend) simultaneously for live EdTech clients.",
      "Built IELTSGenAI — Flutter mobile app (Play Store) + React.js web app with JWT auth and Redux state management.",
      "Developed ESL English Learning App in Flutter with audio lessons and 5-level curriculum; 50+ active Play Store users.",
      "Built NEET/JEE Learning Platform — Flutter app + React.js portal with practice tests and performance analytics.",
      "Implemented scalable state management using Redux (React.js) and GetX/Provider (Flutter) across all products.",
      "Built role-based admin dashboards with React.js + Tailwind CSS with RBAC for 3+ client accounts.",
      "Led client demos, requirement-gathering, and sprint planning; delivered all products on schedule.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Dataspark AI Solutions",
    period: "Sep 2024 – Dec 2024",
    type: "Full-time",
    badge: "Promoted",
    badgeBg: "#e8eaf6",
    badgeColor: "#3949ab",
    icon: <Briefcase size={16} />,
    points: [
      "Built responsive React.js UI components from Figma designs and integrated REST APIs in live client projects from day one.",
      "Gained production experience in component architecture, API integration, and cross-browser testing within first month.",
      "Promoted from Intern → Frontend Developer; took on full project ownership for a live client product.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "100px 32px", background: "#fff" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>

        <p className="section-label" style={{ marginBottom: 14 }}>Work Experience</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 56 }}>
          <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, letterSpacing: "-0.03em", color: "#111", lineHeight: 1.1 }}>
            Where I&apos;ve Worked.
          </h2>
          <p style={{ color: "#888", fontSize: "0.9rem", maxWidth: 280, lineHeight: 1.7 }}>
            1.9 years of full-time production experience.
          </p>
        </div>

        <div className="divider" style={{ marginBottom: 56 }} />

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute", left: 20, top: 0, bottom: 0,
            width: 1.5, background: "linear-gradient(to bottom, #111 0%, #e8e8e8 100%)",
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {experiences.map((exp, i) => (
              <div key={i} style={{ display: "flex", gap: 40, paddingLeft: 10 }}>
                {/* Dot */}
                <div style={{ marginTop: 26, position: "relative", zIndex: 1 }}>
                  <div className="tl-dot" />
                </div>

                {/* Card */}
                <div className="card" style={{ padding: 32, flex: 1 }}>
                  {/* Header */}
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 8 }}>
                    <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                      <div style={{
                        width: 40, height: 40, borderRadius: 10, background: "#f5f5f5",
                        border: "1px solid #e8e8e8",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "#444", flexShrink: 0, marginTop: 2,
                      }}>
                        {exp.icon}
                      </div>
                      <div>
                        <h3 style={{ color: "#111", fontWeight: 800, fontSize: "1rem", marginBottom: 2 }}>{exp.role}</h3>
                        <p style={{ color: "#666", fontSize: "0.85rem", fontWeight: 500 }}>{exp.company} · {exp.type}</p>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                      <span style={{
                        background: exp.badgeBg, color: exp.badgeColor,
                        padding: "4px 12px", borderRadius: 999,
                        fontSize: "0.72rem", fontWeight: 700,
                      }}>{exp.badge}</span>
                      <span style={{ color: "#aaa", fontSize: "0.8rem", fontWeight: 500 }}>
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="divider" style={{ margin: "16px 0" }} />

                  {/* Points */}
                  <ul style={{ display: "flex", flexDirection: "column", gap: 10, listStyle: "none" }}>
                    {exp.points.map((p, j) => (
                      <li key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start", color: "#555", fontSize: "0.87rem", lineHeight: 1.65 }}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#aaa", marginTop: 7, flexShrink: 0 }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
