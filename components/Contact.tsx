"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Code2, Send, CheckCircle, ArrowUpRight } from "lucide-react";
import { fadeUpD, staggerContainer } from "@/lib/motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const sub  = encodeURIComponent(form.subject || `Message from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:mmallika2121@gmail.com?subject=${sub}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" style={{ background: "#050505", padding: "96px 32px", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "rgba(255,255,255,0.06)" }} />

      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        {/* Heading */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={staggerContainer}
          style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 56 }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
            <motion.div variants={fadeUpD(0)}>
              <p className="section-label" style={{ marginBottom: 12 }}>Get In Touch</p>
              <h2 style={{ fontFamily: "var(--font-syne),sans-serif", fontSize: "clamp(1.9rem,4vw,2.8rem)", fontWeight: 900, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.08 }}>
                Let&apos;s Work<br />Together.
              </h2>
            </motion.div>
            <motion.p variants={fadeUpD(0.1)} style={{ color: "#555", fontSize: "0.9rem", maxWidth: "xs", lineHeight: 1.7 }}>
              Seeking Frontend / Flutter Developer roles in Chennai or Remote. 15 days notice period.
            </motion.p>
          </div>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 32 }} className="contact-grid">

          {/* Left — info */}
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }}
            variants={staggerContainer}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            {[
              { Icon: Mail,    label: "Email",    value: "mmallika2121@gmail.com", href: "mailto:mmallika2121@gmail.com" },
              { Icon: Phone,   label: "Phone",    value: "+91 7200309967",         href: "tel:+917200309967"             },
              { Icon: MapPin,  label: "Location", value: "Chennai, Tamil Nadu",    href: null                           },
            ].map((c, i) => (
              <motion.div key={c.label} variants={fadeUpD(i * 0.07)} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <c.Icon size={17} color="#aaa" />
                </div>
                <div>
                  <p style={{ color: "#444", fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 2 }}>{c.label}</p>
                  {c.href
                    ? <a href={c.href} style={{ color: "#ccc", fontSize: "0.88rem", fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                        onMouseLeave={e => (e.currentTarget.style.color = "#ccc")}>{c.value}</a>
                    : <span style={{ color: "#ccc", fontSize: "0.88rem", fontWeight: 500 }}>{c.value}</span>
                  }
                </div>
              </motion.div>
            ))}

            {/* Socials */}
            <motion.div variants={fadeUpD(0.25)}>
              <p style={{ color: "#444", fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Find Me Online</p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {[
                  { Icon: Github,   href: "https://github.com/MallikaMariyappan",    label: "GitHub"   },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/mallika-mr/", label: "LinkedIn" },
                  { Icon: Code2,    href: "https://leetcode.com/u/AlpY7oW1gS/",      label: "LeetCode" },
                ].map(s => (
                  <motion.a key={s.label} href={s.href}
                    target="_blank" rel="noopener noreferrer"
                    aria-label={s.label} className="social-icon"
                    whileHover={{ y: -2 }}>
                    <s.Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability strip */}
            <motion.div
              variants={fadeUpD(0.3)}
              style={{
                display: "flex", alignItems: "center", gap: 12,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12, padding: "16px 18px",
              }}
            >
              <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#22c55e", flexShrink: 0, boxShadow: "0 0 8px #4ade80" }} />
              <div style={{ flex: 1 }}>
                <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.85rem" }}>Available for hire</p>
                <p style={{ color: "#444", fontSize: "0.75rem", marginTop: 2 }}>15 days notice · Chennai / Remote</p>
              </div>
              <ArrowUpRight size={16} color="#333" />
            </motion.div>

            {/* Quick links */}
            <motion.div variants={fadeUpD(0.35)} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { label: "Download Resume", href: "/Mallika_M_Resume.pdf", download: "Mallika_M_Resume.pdf" },
                { label: "View GitHub Profile", href: "https://github.com/MallikaMariyappan" },
                { label: "Connect on LinkedIn", href: "https://www.linkedin.com/in/mallika-mr/" },
                { label: "LeetCode Profile",    href: "https://leetcode.com/u/AlpY7oW1gS/" },
              ].map(l => (
                <a key={l.label} href={l.href} {...(l.download ? { download: l.download } : { target: "_blank", rel: "noopener noreferrer" })}
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#555", fontSize: "0.82rem", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#555")}>
                  <ArrowUpRight size={13} />
                  {l.label}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: 36 }}
          >
            <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.05rem", marginBottom: 24, fontFamily: "var(--font-syne),sans-serif" }}>
              Send a Message
            </h3>
            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-row">
                <div>
                  <label style={{ color: "#555", fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: 8 }}>Name</label>
                  <input type="text" required className="form-input" placeholder="Your name"
                    value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                </div>
                <div>
                  <label style={{ color: "#555", fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: 8 }}>Email</label>
                  <input type="email" required className="form-input" placeholder="you@company.com"
                    value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                </div>
              </div>
              <div>
                <label style={{ color: "#555", fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: 8 }}>Subject</label>
                <input type="text" className="form-input" placeholder="Job opportunity / Collaboration"
                  value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} />
              </div>
              <div>
                <label style={{ color: "#555", fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: 8 }}>Message</label>
                <textarea required className="form-input" rows={5}
                  placeholder="Hi Mallika, I'd love to discuss..."
                  value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{ resize: "vertical" }} />
              </div>
              <motion.button
                type="submit"
                whileHover={{ y: -2, opacity: 0.9 }}
                whileTap={{ scale: 0.97 }}
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%", background: "#fff", color: "#000", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "14px", borderRadius: 8, marginTop: 4, border: "none", cursor: "pointer" }}
              >
                {sent
                  ? <><CheckCircle size={16} /> Opening email client...</>
                  : <><Send size={16} /> Send Message</>
                }
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){ .contact-grid{grid-template-columns:1fr!important} }
        @media(max-width:500px){ .form-row{grid-template-columns:1fr!important} }
      `}</style>
    </section>
  );
}
