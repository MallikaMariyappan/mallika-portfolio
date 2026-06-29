import { GraduationCap, Award, Smartphone, TrendingUp } from "lucide-react";

const certs = [
  { icon: <Award size={18} />,       title: "Full Stack Development",           org: "Infycle Technologies",      bg: "#f0f4ff", color: "#3b4fe0" },
  { icon: <Award size={18} />,       title: "Complete Java Course",             org: "Besant Technologies",       bg: "#fff7ed", color: "#c2410c" },
  { icon: <Smartphone size={18} />,  title: "3 Apps on Google Play Store",      org: "Independent — 50+ users",   bg: "#f0fdf4", color: "#16a34a" },
  { icon: <TrendingUp size={18} />,  title: "Intern → Frontend Developer",      org: "Dataspark AI Solutions",    bg: "#fdf4ff", color: "#9333ea" },
];

export default function Education() {
  return (
    <section id="education" style={{ padding: "100px 32px", background: "#fff" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>

        <p className="section-label" style={{ marginBottom: 14 }}>Education & Certifications</p>
        <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, letterSpacing: "-0.03em", color: "#111", lineHeight: 1.1, marginBottom: 56 }}>
          Learning &amp; Achievements.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }} className="edu-grid">

          {/* Degree */}
          <div className="card" style={{
            padding: 36,
            background: "linear-gradient(135deg, #111 0%, #333 100%)",
            border: "none", borderRadius: 16,
          }}>
            <div style={{
              width: 52, height: 52, borderRadius: 12,
              background: "rgba(255,255,255,0.12)",
              display: "flex", alignItems: "center", justifyContent: "center",
              marginBottom: 20,
            }}>
              <GraduationCap size={24} color="#fff" />
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>
              Degree
            </p>
            <h3 style={{ color: "#fff", fontWeight: 800, fontSize: "1.2rem", marginBottom: 6 }}>
              Bachelor of Computer Applications
            </h3>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.88rem", marginBottom: 4 }}>
              SFR College for Women, Tamil Nadu
            </p>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.82rem" }}>2019 – 2022</p>
          </div>

          {/* Certs grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {certs.map(c => (
              <div key={c.title} className="card" style={{ padding: 22 }}>
                <div style={{
                  width: 38, height: 38, borderRadius: 9,
                  background: c.bg,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: c.color, marginBottom: 12,
                }}>
                  {c.icon}
                </div>
                <h4 style={{ color: "#111", fontWeight: 700, fontSize: "0.85rem", marginBottom: 4, lineHeight: 1.35 }}>{c.title}</h4>
                <p style={{ color: "#888", fontSize: "0.75rem" }}>{c.org}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .edu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
