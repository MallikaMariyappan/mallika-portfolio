"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { fadeUpD, staggerContainer } from "@/lib/motion";

const facts = [
  { icon: "mdi:school-outline",          label: "Education",     value: "BCA — SFR College, Tamil Nadu (2019–2022)" },
  { icon: "mdi:office-building-outline", label: "Company",       value: "Dataspark AI Solutions (Full-time)"        },
  { icon: "mdi:map-marker-outline",      label: "Location",      value: "Chennai, Tamil Nadu"                       },
  { icon: "mdi:clock-fast",              label: "Notice Period",  value: "15 Days"                                   },
  { icon: "mdi:target",                  label: "Seeking",        value: "Frontend / Flutter Developer Roles"        },
];

const whatIDo = [
  "Build pixel-perfect React.js web apps from Figma designs",
  "Develop cross-platform Flutter mobile apps for Android",
  "Integrate REST APIs with JWT authentication end-to-end",
  "Manage state with Redux (web) and GetX / Provider (mobile)",
  "Deploy and publish apps to Google Play Store independently",
  "Build role-based admin dashboards with RBAC access control",
  "Lead client demos, sprint planning, and delivery",
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24 px-8">
      <div className="max-w-[1180px] mx-auto">

        {/* Heading */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-14"
        >
          <motion.div variants={fadeUpD(0)}>
            <p className="section-label mb-3">About Me</p>
            <h2
              className="text-[clamp(1.9rem,4vw,2.8rem)] font-black tracking-[-0.03em] text-[#111] leading-[1.08]"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              The Person Behind<br />the Code.
            </h2>
          </motion.div>
          <motion.p variants={fadeUpD(0.1)} className="text-[#888] text-[0.9rem] leading-[1.75] max-w-sm">
            Promoted from Intern to Frontend Developer — I own end-to-end
            delivery across web and mobile for live EdTech clients.
          </motion.p>
        </motion.div>

        <div className="h-px bg-[#ebebeb] mb-14" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left */}
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpD(0)} className="flex gap-4 mb-9">
              <div className="w-11 h-11 rounded-xl bg-[#111] flex items-center justify-center flex-shrink-0">
                <Icon icon="mdi:account-outline" width={20} color="#fff" />
              </div>
              <div>
                <h3
                  className="text-[#111] font-bold text-[0.95rem] mb-2"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  My Story
                </h3>
                <p className="text-[#666] text-[0.88rem] leading-[1.8]">
                  I&apos;m a Frontend &amp; Flutter Developer with 1.9 years of production
                  experience at Dataspark AI Solutions. Starting as an intern, I was promoted
                  to Frontend Developer within 3 months and owned full delivery of 3
                  dual-platform EdTech apps simultaneously.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUpD(0.05)}>
              <h3
                className="text-[#111] font-bold text-[0.78rem] tracking-[0.1em] uppercase mb-4"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                What I Do
              </h3>
              <ul className="flex flex-col gap-2.5">
                {whatIDo.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUpD(0.05 * i)}
                    className="flex items-start gap-3 text-[#555] text-[0.87rem]"
                  >
                    <Icon icon="mdi:circle-small" width={20} className="text-[#111] flex-shrink-0 mt-0.5" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }}
            variants={staggerContainer}
          >
            <h3
              className="text-[#111] font-bold text-[0.78rem] tracking-[0.1em] uppercase mb-5"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Quick Facts
            </h3>
            <div className="flex flex-col">
              {facts.map((f, i) => (
                <motion.div
                  key={f.label}
                  variants={fadeUpD(0.06 * i)}
                  className={`flex items-center gap-4 py-4 ${i < facts.length - 1 ? "border-b border-[#f0f0f0]" : ""}`}
                >
                  <div className="w-9 h-9 rounded-lg bg-[#f5f5f5] border border-[#e8e8e8] flex items-center justify-center flex-shrink-0">
                    <Icon icon={f.icon} width={17} className="text-[#444]" />
                  </div>
                  <div>
                    <p className="text-[#aaa] text-[0.7rem] font-semibold uppercase tracking-[0.08em] mb-0.5">
                      {f.label}
                    </p>
                    <p className="text-[#333] text-[0.87rem] font-medium">{f.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-7">
              {[
                { v: "1.9+", l: "Years Exp" },
                { v: "3",    l: "Apps Live"  },
                { v: "50+",  l: "Users"      },
              ].map((s, i) => (
                <motion.div
                  key={s.l}
                  variants={fadeUpD(0.1 + i * 0.06)}
                  className="text-center py-5 px-2 bg-[#f8f8f8] rounded-xl border border-[#efefef]"
                >
                  <div
                    className="text-[1.9rem] font-black text-[#111] tracking-[-0.04em]"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {s.v}
                  </div>
                  <div className="text-[#888] text-[0.7rem] mt-1 font-medium">{s.l}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
