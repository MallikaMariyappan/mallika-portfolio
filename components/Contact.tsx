"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Code2, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:mmallika2121@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      id="contact"
      style={{ padding: "100px 24px" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="section-badge">Get In Touch</span>
          <h2
            style={{
              fontSize: "clamp(1.8rem,4vw,2.5rem)",
              fontWeight: 800,
              marginTop: 16,
              color: "#f1f5f9",
            }}
          >
            Let&apos;s Work Together
          </h2>
          <p style={{ color: "#64748b", marginTop: 10, fontSize: "0.95rem", maxWidth: 480, margin: "10px auto 0" }}>
            I&apos;m actively seeking Frontend Engineer / Flutter Developer roles in Chennai or Remote. Let&apos;s connect!
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 40,
          }}
        >
          {/* Contact info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1.1rem" }}>
              Contact Details
            </h3>
            {[
              { icon: <Mail size={18} />, label: "Email", value: "mmallika2121@gmail.com", href: "mailto:mmallika2121@gmail.com" },
              { icon: <Phone size={18} />, label: "Phone", value: "+91 7200309967", href: "tel:+917200309967" },
              { icon: <MapPin size={18} />, label: "Location", value: "Chennai, Tamil Nadu", href: null },
            ].map((c) => (
              <div key={c.label} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 10,
                    background: "rgba(99,102,241,0.12)",
                    border: "1px solid rgba(99,102,241,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#a5b4fc",
                    flexShrink: 0,
                  }}
                >
                  {c.icon}
                </div>
                <div>
                  <div style={{ color: "#475569", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {c.label}
                  </div>
                  {c.href ? (
                    <a
                      href={c.href}
                      style={{ color: "#cbd5e1", fontSize: "0.9rem", textDecoration: "none" }}
                      onMouseOver={(e) => (e.currentTarget.style.color = "#a5b4fc")}
                      onMouseOut={(e) => (e.currentTarget.style.color = "#cbd5e1")}
                    >
                      {c.value}
                    </a>
                  ) : (
                    <span style={{ color: "#cbd5e1", fontSize: "0.9rem" }}>{c.value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Social links */}
            <div style={{ marginTop: 8 }}>
              <h4 style={{ color: "#475569", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 14 }}>
                Find Me Online
              </h4>
              <div style={{ display: "flex", gap: 12 }}>
                {[
                  { icon: <Github size={20} />, href: "https://github.com/MallikaMariyappan", label: "GitHub", color: "#fff" },
                  { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/mallika-mr/", label: "LinkedIn", color: "#0ea5e9" },
                  { icon: <Code2 size={20} />, href: "https://leetcode.com/u/AlpY7oW1gS/", label: "LeetCode", color: "#f59e0b" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#64748b",
                      textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = s.color;
                      e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)";
                      e.currentTarget.style.background = "rgba(99,102,241,0.1)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = "#64748b";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="card" style={{ padding: 36 }}>
            <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1.1rem", marginBottom: 24 }}>
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={{ color: "#94a3b8", fontSize: "0.82rem", fontWeight: 500, display: "block", marginBottom: 6 }}>
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  className="input-field"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label style={{ color: "#94a3b8", fontSize: "0.82rem", fontWeight: 500, display: "block", marginBottom: 6 }}>
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="input-field"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label style={{ color: "#94a3b8", fontSize: "0.82rem", fontWeight: 500, display: "block", marginBottom: 6 }}>
                  Message
                </label>
                <textarea
                  required
                  className="input-field"
                  placeholder="Hi Mallika, I'd love to discuss..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ resize: "vertical" }}
                />
              </div>
              <button type="submit" className="btn-primary" style={{ justifyContent: "center" }}>
                {sent ? "✅ Opening email client..." : (<>Send Message <Send size={16} /></>)}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
