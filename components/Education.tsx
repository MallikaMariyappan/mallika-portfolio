"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const certs = [
  { icon: "mdi:certificate-outline", title: "Full Stack Development",       org: "Infycle Technologies",   bg: "#eff6ff", color: "#1d4ed8" },
  { icon: "mdi:language-java",       title: "Complete Java Course",         org: "Besant Technologies",    bg: "#fff7ed", color: "#c2410c" },
  { icon: "mdi:cellphone-check",     title: "3 Apps on Google Play Store",  org: "Independent — 50+ users",bg: "#f0fdf4", color: "#16a34a" },
  { icon: "mdi:trending-up",         title: "Intern → Frontend Developer",  org: "Dataspark AI Solutions", bg: "#faf5ff", color: "#7e22ce" },
];

export default function Education() {
  return (
    <section id="education" className="bg-white py-24 px-8">
      <div className="max-w-[1180px] mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label mb-3">Education & Certifications</p>
          <h2 className="text-[clamp(1.9rem,4vw,2.8rem)] font-black tracking-[-0.03em] text-[#111] leading-[1.08]"
            style={{ fontFamily: "var(--font-syne)" }}>
            Learning &amp; Achievements.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">

          {/* Degree */}
          <motion.div
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65 }}
            whileHover={{ y: -4, boxShadow: "0 20px 48px rgba(0,0,0,0.18)" }}
            className="rounded-2xl p-9"
            style={{ background: "linear-gradient(135deg,#111 0%,#333 100%)" }}
          >
            <div className="w-13 h-13 rounded-xl mb-6 flex items-center justify-center"
              style={{ width: 52, height: 52, background: "rgba(255,255,255,0.12)" }}>
              <Icon icon="mdi:school-outline" width={26} color="#fff" />
            </div>
            <p className="text-[0.68rem] font-bold tracking-[0.14em] uppercase mb-2"
              style={{ color: "rgba(255,255,255,0.45)" }}>Degree</p>
            <h3 className="text-white font-black text-[1.2rem] mb-2 leading-tight"
              style={{ fontFamily: "var(--font-syne)" }}>
              Bachelor of Computer Applications
            </h3>
            <p className="text-[0.88rem] mb-1" style={{ color: "rgba(255,255,255,0.55)" }}>
              SFR College for Women, Tamil Nadu
            </p>
            <p className="text-[0.8rem]" style={{ color: "rgba(255,255,255,0.3)" }}>2019 – 2022</p>
          </motion.div>

          {/* Certs */}
          <div className="grid grid-cols-2 gap-4">
            {certs.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -3, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
                className="bg-white border border-[#e8e8e8] rounded-xl p-5"
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3 flex-shrink-0"
                  style={{ background: c.bg }}>
                  <Icon icon={c.icon} width={18} style={{ color: c.color }} />
                </div>
                <h4 className="text-[#111] font-bold text-[0.83rem] mb-1 leading-snug"
                  style={{ fontFamily: "var(--font-syne)" }}>{c.title}</h4>
                <p className="text-[#888] text-[0.73rem]">{c.org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
