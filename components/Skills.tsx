import { Monitor, Smartphone, Database, Wrench } from "lucide-react";

const groups = [
  {
    icon: <Monitor size={18} />,
    title: "Frontend",
    skills: [
      { name: "React.js",        pct: 92 },
      { name: "JavaScript ES6+", pct: 90 },
      { name: "Tailwind CSS",    pct: 88 },
      { name: "Redux",           pct: 85 },
      { name: "HTML5 / CSS3",    pct: 93 },
    ],
  },
  {
    icon: <Smartphone size={18} />,
    title: "Mobile",
    skills: [
      { name: "Flutter",       pct: 88 },
      { name: "Dart",          pct: 85 },
      { name: "GetX / Provider", pct: 83 },
      { name: "Firebase",      pct: 80 },
      { name: "Play Store",    pct: 78 },
    ],
  },
  {
    icon: <Database size={18} />,
    title: "Backend / DB",
    skills: [
      { name: "Node.js",    pct: 74 },
      { name: "Express.js", pct: 72 },
      { name: "MongoDB",    pct: 70 },
      { name: "REST API",   pct: 88 },
      { name: "JWT Auth",   pct: 82 },
    ],
  },
  {
    icon: <Wrench size={18} />,
    title: "Tools",
    skills: [
      { name: "Git / GitHub", pct: 88 },
      { name: "Figma",        pct: 80 },
      { name: "Postman",      pct: 82 },
      { name: "VS Code",      pct: 95 },
      { name: "Agile/Scrum",  pct: 78 },
    ],
  },
];

const allTags = [
  "React.js","Flutter","Redux","GetX","Node.js","Express.js",
  "MongoDB","Firebase","JWT","Tailwind CSS","Bootstrap","Framer Motion",
  "Dart","JavaScript","TypeScript","HTML5","CSS3","REST API","Figma",
  "Git","Postman","Agile","Google Play Store","Firebase Auth","Firestore",
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "100px 32px", background: "#f5f5f5" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>

        <p className="section-label" style={{ marginBottom: 14 }}>Technical Skills</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 56 }}>
          <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, letterSpacing: "-0.03em", color: "#111", lineHeight: 1.1 }}>
            My Tech Stack.
          </h2>
          <p style={{ color: "#888", fontSize: "0.9rem", maxWidth: 320, lineHeight: 1.7 }}>
            Tools and technologies I use to build production-ready products.
          </p>
        </div>

        {/* Skill bars grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", gap: 32, marginBottom: 56 }}>
          {groups.map(g => (
            <div key={g.title} className="card" style={{ padding: 28 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 8, background: "#111",
                  display: "flex", alignItems: "center", justifyContent: "center", color: "#fff",
                }}>
                  {g.icon}
                </div>
                <h3 style={{ fontWeight: 700, color: "#111", fontSize: "0.95rem", letterSpacing: "0.02em" }}>{g.title}</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {g.skills.map(s => (
                  <div key={s.name}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <span style={{ color: "#444", fontSize: "0.82rem", fontWeight: 500 }}>{s.name}</span>
                      <span style={{ color: "#aaa", fontSize: "0.78rem" }}>{s.pct}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div className="skill-bar-fill" style={{ width: `${s.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* All tags cloud */}
        <div className="card" style={{ padding: 32 }}>
          <p style={{ color: "#aaa", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>
            All Technologies
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {allTags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
