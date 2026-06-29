"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
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
    <section id="contact" className="bg-[#f4f4f4] py-24 px-8">
      <div className="max-w-[1180px] mx-auto">

        {/* Heading */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-14"
        >
          <motion.div variants={fadeUpD(0)}>
            <p className="section-label mb-3">Get In Touch</p>
            <h2
              className="text-[clamp(1.9rem,4vw,2.8rem)] font-black tracking-[-0.03em] text-[#111] leading-[1.08]"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Let&apos;s Work<br />Together.
            </h2>
          </motion.div>
          <motion.p variants={fadeUpD(0.1)} className="text-[#888] text-[0.9rem] max-w-xs leading-[1.7]">
            Seeking Frontend / Flutter Developer roles in Chennai or Remote. 15 days notice period.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10">

          {/* Left — info */}
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col gap-6"
          >
            {[
              { icon: "mdi:email-outline",     label: "Email",    value: "mmallika2121@gmail.com", href: "mailto:mmallika2121@gmail.com" },
              { icon: "mdi:phone-outline",     label: "Phone",    value: "+91 7200309967",         href: "tel:+917200309967"             },
              { icon: "mdi:map-marker-outline",label: "Location", value: "Chennai, Tamil Nadu",    href: null                           },
            ].map((c, i) => (
              <motion.div key={c.label} variants={fadeUpD(i * 0.07)} className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white border border-[#e8e8e8] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Icon icon={c.icon} width={18} className="text-[#444]" />
                </div>
                <div>
                  <p className="text-[#aaa] text-[0.68rem] font-bold uppercase tracking-[0.1em] mb-0.5">{c.label}</p>
                  {c.href
                    ? <a href={c.href} className="text-[#333] text-[0.88rem] font-medium no-underline hover:text-[#111] transition-colors">{c.value}</a>
                    : <span className="text-[#333] text-[0.88rem] font-medium">{c.value}</span>
                  }
                </div>
              </motion.div>
            ))}

            {/* Socials */}
            <motion.div variants={fadeUpD(0.25)}>
              <p className="text-[#aaa] text-[0.68rem] font-bold uppercase tracking-[0.1em] mb-3">Find Me Online</p>
              <div className="flex gap-2.5">
                {[
                  { icon: "mdi:github",           href: "https://github.com/MallikaMariyappan",    label: "GitHub"   },
                  { icon: "mdi:linkedin",          href: "https://www.linkedin.com/in/mallika-mr/", label: "LinkedIn" },
                  { icon: "simple-icons:leetcode", href: "https://leetcode.com/u/AlpY7oW1gS/",     label: "LeetCode" },
                ].map(s => (
                  <motion.a
                    key={s.label} href={s.href}
                    target="_blank" rel="noopener noreferrer"
                    aria-label={s.label}
                    className="social-icon bg-white shadow-sm"
                    whileHover={{ y: -2 }}
                  >
                    <Icon icon={s.icon} width={16} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              variants={fadeUpD(0.3)}
              className="flex items-center gap-3 bg-[#111] rounded-xl px-5 py-4"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 flex-shrink-0" style={{ boxShadow: "0 0 8px #4ade80" }} />
              <div className="flex-1">
                <p className="text-white font-bold text-[0.85rem]">Available for hire</p>
                <p className="text-white/40 text-[0.75rem] mt-0.5">15 days notice · Chennai / Remote</p>
              </div>
              <Icon icon="mdi:arrow-top-right" width={16} className="text-white/25" />
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="bg-white border border-[#e8e8e8] rounded-xl p-9"
          >
            <h3 className="text-[#111] font-bold text-[1.05rem] mb-6" style={{ fontFamily: "var(--font-syne)" }}>
              Send a Message
            </h3>
            <form onSubmit={submit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[#888] text-[0.7rem] font-bold uppercase tracking-[0.08em] block mb-2">Name</label>
                  <input type="text" required className="form-input" placeholder="Your name"
                    value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                </div>
                <div>
                  <label className="text-[#888] text-[0.7rem] font-bold uppercase tracking-[0.08em] block mb-2">Email</label>
                  <input type="email" required className="form-input" placeholder="you@company.com"
                    value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                </div>
              </div>
              <div>
                <label className="text-[#888] text-[0.7rem] font-bold uppercase tracking-[0.08em] block mb-2">Subject</label>
                <input type="text" className="form-input" placeholder="Job opportunity / Collaboration"
                  value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} />
              </div>
              <div>
                <label className="text-[#888] text-[0.7rem] font-bold uppercase tracking-[0.08em] block mb-2">Message</label>
                <textarea required className="form-input" rows={5}
                  placeholder="Hi Mallika, I'd love to discuss..."
                  value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{ resize: "vertical" }} />
              </div>
              <motion.button
                type="submit"
                whileHover={{ y: -2, opacity: 0.9 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 w-full bg-[#111] text-white font-bold text-[0.85rem] tracking-[0.06em] uppercase py-3.5 rounded-lg mt-1 border-none cursor-pointer"
              >
                {sent
                  ? <><Icon icon="mdi:check-circle-outline" width={16} /> Opening email client...</>
                  : <><Icon icon="mdi:send-outline" width={16} /> Send Message</>
                }
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
