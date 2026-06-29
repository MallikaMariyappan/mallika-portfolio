"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Code2, Send, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sub = encodeURIComponent(form.subject || `Message from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:mmallika2121@gmail.com?subject=${sub}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" style={{ padding: "100px 32px", background: "#f5f5f5" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>

        <p className="section-label" style={{ marginBottom: 14 }}>Get In Touch</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 56 }}>
          <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, letterSpacing: "-0.03em", color: "#111", lineHeight: 1.1 }}>
            Let&apos;s Work<br />Together.
          </h2>
          <p style={{ color: "#888", fontSize: "0.9rem", maxWidth: 320, lineHeight: 1.7 }}>
            Actively seeking Frontend Engineer / Flutter Developer roles in Chennai or Remote. 15 days notice period.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 40 }} className="contact-grid">

          {/* Left — info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {[
              { icon: <Mail size={18} />, label: "Email", value: "mmallika2121@gmail.com", href: "mailto:mmallika2121@gmail.com" },
              { icon: <Phone size={18} />, label: "Phone", value: "+91 7200309967", href: "tel:+917200309967" },
              { icon: <MapPin size={18} />, label: "Location", value: "Chennai, Tamil Nadu", href: null },
            ].map(c => (
              <div key={c.label} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: "#fff", border: "1.5px solid #e8e8e8",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#333", flexShrink: 0,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}>
                  {c.icon}
                </div>
                <div>
                  <p style={{ color: "#aaa", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 3 }}>{c.label}</p>
                  {c.href
                    ? <a href={c.href} style={{ color: "#333", fontSize: "0.9rem", textDecoration: "none", fontWeight: 500 }}
                        onMouseOver={e => e.currentTarget.style.color = "#111"}
                        onMouseOut={e => e.currentTarget.style.color = "#333"}>
                        {c.value}
                      </a>
                    : <span style={{ color: "#333", fontSize: "0.9rem", fontWeight: 500 }}>{c.value}</span>}
                </div>
              </div>
            ))}

            {/* Social */}
            <div style={{ paddingTop: 8 }}>
              <p style={{ color: "#aaa", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>Find Me Online</p>
              <div style={{ display: "flex", gap: 10 }}>
                {[
                  { icon: <Github size={17} />,   href: "https://github.com/MallikaMariyappan",    label: "GitHub"   },
                  { icon: <Linkedin size={17} />, href: "https://www.linkedin.com/in/mallika-mr/",  label: "LinkedIn" },
                  { icon: <Code2 size={17} />,    href: "https://leetcode.com/u/AlpY7oW1gS/",      label: "LeetCode" },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    aria-label={s.label} className="social-icon"
                    style={{ background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div style={{
              padding: "20px 22px",
              background: "#111", borderRadius: 12,
              display: "flex", gap: 14, alignItems: "center", marginTop: 8,
            }}>
              <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80", flexShrink: 0 }} />
              <div>
                <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.88rem" }}>Available for hire</p>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.78rem", marginTop: 2 }}>15 days notice period · Chennai / Remote</p>
              </div>
              <ArrowUpRight size={16} color="rgba(255,255,255,0.3)" style={{ marginLeft: "auto" }} />
            </div>
          </div>

          {/* Right — form */}
          <div className="card" style={{ padding: 36, background: "#fff" }}>
            <h3 style={{ color: "#111", fontWeight: 800, fontSize: "1.1rem", marginBottom: 24 }}>Send a Message</h3>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="form-row">
                <div>
                  <label style={{ color: "#888", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Name</label>
                  <input type="text" required className="input" placeholder="Your name"
                    value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                </div>
                <div>
                  <label style={{ color: "#888", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Email</label>
                  <input type="email" required className="input" placeholder="you@company.com"
                    value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                </div>
              </div>
              <div>
                <label style={{ color: "#888", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Subject</label>
                <input type="text" className="input" placeholder="Job opportunity / Collaboration"
                  value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} />
              </div>
              <div>
                <label style={{ color: "#888", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Message</label>
                <textarea required className="input" rows={5} placeholder="Hi Mallika, I'd love to discuss..."
                  value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{ resize: "vertical" }} />
              </div>
              <button type="submit" className="btn-dark" style={{ justifyContent: "center", marginTop: 4 }}>
                {sent ? "Opening email client..." : <><Send size={15} /> Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
