import { User, Briefcase, MapPin, Clock, GraduationCap, Target } from "lucide-react";

const facts = [
  { icon: <GraduationCap size={16} />, label: "Education",    value: "BCA — SFR College, Tamil Nadu (2019–2022)" },
  { icon: <Briefcase size={16} />,    label: "Company",       value: "Dataspark AI Solutions (Full-time)" },
  { icon: <MapPin size={16} />,       label: "Location",      value: "Chennai, Tamil Nadu" },
  { icon: <Clock size={16} />,        label: "Notice Period", value: "15 Days" },
  { icon: <Target size={16} />,       label: "Looking For",   value: "Frontend / Flutter Developer Roles" },
];

const whatIDo = [
  "Build pixel-perfect React.js web apps from Figma designs",
  "Develop cross-platform Flutter mobile apps for Android",
  "Integrate REST APIs with JWT authentication",
  "Manage complex state with Redux & GetX / Provider",
  "Deploy apps to Google Play Store independently",
  "Build role-based admin dashboards with RBAC",
  "Lead client demos and sprint planning",
];

export default function About() {
  return (
    <section id="about" style={{ padding: "100px 32px", background: "#fff" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>

        {/* Top label */}
        <div style={{ marginBottom: 56 }}>
          <p className="section-label" style={{ marginBottom: 14 }}>About Me</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, letterSpacing: "-0.03em", color: "#111", lineHeight: 1.1 }}>
              The Person Behind<br />the Code.
            </h2>
            <p style={{ color: "#888", fontSize: "0.9rem", maxWidth: 380, lineHeight: 1.7 }}>
              Promoted from Intern to Frontend Developer — I own end-to-end
              delivery across web and mobile for live EdTech clients.
            </p>
          </div>
        </div>

        <div className="divider" style={{ marginBottom: 56 }} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="about-grid">

          {/* Left — story + what I do */}
          <div>
            <div style={{ display: "flex", gap: 16, marginBottom: 32 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: "#111", display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <User size={20} color="#fff" />
              </div>
              <div>
                <h3 style={{ color: "#111", fontWeight: 700, fontSize: "1rem", marginBottom: 8 }}>My Story</h3>
                <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: 1.75 }}>
                  I&apos;m a Frontend &amp; Flutter Developer with 1.9 years of production experience
                  at Dataspark AI Solutions. Starting as an intern, I was promoted to Frontend Developer
                  within 3 months and took on full ownership of live client products — delivering
                  3 dual-platform EdTech apps simultaneously.
                </p>
              </div>
            </div>

            <h3 style={{ color: "#111", fontWeight: 700, fontSize: "0.9rem", marginBottom: 16, letterSpacing: "0.04em", textTransform: "uppercase" }}>
              What I Do
            </h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: 10, listStyle: "none" }}>
              {whatIDo.map(item => (
                <li key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start", color: "#555", fontSize: "0.88rem" }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: "50%", background: "#111",
                    marginTop: 6, flexShrink: 0,
                  }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — quick facts */}
          <div>
            <h3 style={{ color: "#111", fontWeight: 700, fontSize: "0.9rem", marginBottom: 20, letterSpacing: "0.04em", textTransform: "uppercase" }}>
              Quick Facts
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {facts.map((f, i) => (
                <div key={f.label} style={{
                  display: "flex", gap: 16, alignItems: "flex-start",
                  padding: "18px 0",
                  borderBottom: i < facts.length - 1 ? "1px solid #f0f0f0" : "none",
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: "#f5f5f5", border: "1px solid #e8e8e8",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#444", flexShrink: 0,
                  }}>
                    {f.icon}
                  </div>
                  <div>
                    <p style={{ color: "#aaa", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 2 }}>{f.label}</p>
                    <p style={{ color: "#333", fontSize: "0.88rem", fontWeight: 500 }}>{f.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginTop: 32 }}>
              {[
                { v: "1.9+", l: "Years Exp" },
                { v: "3",    l: "Apps Live" },
                { v: "50+",  l: "Users"     },
              ].map(s => (
                <div key={s.l} style={{ textAlign: "center", padding: "20px 10px", background: "#f8f8f8", borderRadius: 10, border: "1px solid #efefef" }}>
                  <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "#111", letterSpacing: "-0.04em" }}>{s.v}</div>
                  <div style={{ color: "#888", fontSize: "0.72rem", marginTop: 4, fontWeight: 500 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
