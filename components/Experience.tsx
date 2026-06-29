"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { fadeUpD, staggerContainer } from "@/lib/motion";

const experiences = [
  {
    icon: "mdi:trending-up",
    role: "Frontend Developer & Mobile App Developer",
    company: "Dataspark AI Solutions",
    period: "Dec 2024 – Present",
    type: "Full-time",
    badge: "Current",
    badgeBg: "#e8f5e9",
    badgeColor: "#2e7d32",
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
    icon: "mdi:briefcase-outline",
    role: "Frontend Developer Intern",
    company: "Dataspark AI Solutions",
    period: "Sep 2024 – Dec 2024",
    type: "Full-time",
    badge: "Promoted ↑",
    badgeBg: "#e8eaf6",
    badgeColor: "#3949ab",
    points: [
      "Built responsive React.js UI components from Figma designs and integrated REST APIs in live client projects from day one.",
      "Gained production experience in component architecture, API integration, and cross-browser testing within first month.",
      "Promoted from Intern → Frontend Developer; took on full project ownership for a live client product.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-24 px-8">
      <div className="max-w-[1180px] mx-auto">

        {/* Heading */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-14"
        >
          <motion.div variants={fadeUpD(0)}>
            <p className="section-label mb-3">Work Experience</p>
            <h2
              className="text-[clamp(1.9rem,4vw,2.8rem)] font-black tracking-[-0.03em] text-[#111] leading-[1.08]"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Where I&apos;ve Worked.
            </h2>
          </motion.div>
          <motion.p variants={fadeUpD(0.1)} className="text-[#888] text-[0.9rem] max-w-[240px] leading-[1.7]">
            1.9 years of full-time production experience.
          </motion.p>
        </motion.div>

        <div className="h-px bg-[#ebebeb] mb-14" />

        {/* Timeline */}
        <div className="relative">
          <div
            className="absolute left-[19px] top-0 bottom-0 w-[1.5px]"
            style={{ background: "linear-gradient(to bottom, #111 0%, #e8e8e8 100%)" }}
          />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex gap-10 pl-2.5"
              >
                {/* Dot */}
                <div className="mt-7 relative z-10 flex-shrink-0">
                  <div className="tl-dot" />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -3, boxShadow: "0 16px 40px rgba(0,0,0,0.09)" }}
                  transition={{ duration: 0.2 }}
                  className="bg-white border border-[#e8e8e8] rounded-xl p-8 flex-1"
                >
                  {/* Header */}
                  <div className="flex flex-wrap justify-between gap-3 mb-3">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-lg bg-[#f5f5f5] border border-[#e8e8e8] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon icon={exp.icon} width={18} className="text-[#444]" />
                      </div>
                      <div>
                        <h3
                          className="text-[#111] font-bold text-[0.98rem] mb-1"
                          style={{ fontFamily: "var(--font-syne)" }}
                        >
                          {exp.role}
                        </h3>
                        <p className="text-[#666] text-[0.84rem] font-medium">
                          {exp.company} · {exp.type}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className="text-[0.7rem] font-bold px-3 py-1 rounded-full"
                        style={{ background: exp.badgeBg, color: exp.badgeColor }}
                      >
                        {exp.badge}
                      </span>
                      <span className="text-[#aaa] text-[0.78rem] font-medium">{exp.period}</span>
                    </div>
                  </div>

                  <div className="h-px bg-[#f0f0f0] my-4" />

                  <ul className="flex flex-col gap-2.5">
                    {exp.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-[#555] text-[0.86rem] leading-[1.65]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ccc] flex-shrink-0 mt-[7px]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
