"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { fadeUpD, staggerContainer } from "@/lib/motion";

const groups = [
  {
    icon: "mdi:monitor-screenshot",
    title: "Frontend",
    skills: [
      { name: "React.js",          pct: 92 },
      { name: "JavaScript (ES6+)", pct: 90 },
      { name: "Tailwind CSS",      pct: 88 },
      { name: "Redux",             pct: 85 },
      { name: "HTML5 / CSS3",      pct: 93 },
    ],
  },
  {
    icon: "mdi:cellphone",
    title: "Mobile",
    skills: [
      { name: "Flutter",           pct: 88 },
      { name: "Dart",              pct: 85 },
      { name: "GetX / Provider",   pct: 83 },
      { name: "Firebase",          pct: 80 },
      { name: "Google Play Store", pct: 78 },
    ],
  },
  {
    icon: "mdi:database-outline",
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
    icon: "mdi:tools",
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
  "React.js","Flutter","Redux","GetX","Node.js","Express.js","MongoDB",
  "Firebase","JWT","Tailwind CSS","Bootstrap","Framer Motion","Dart",
  "JavaScript","TypeScript","HTML5","CSS3","REST API","Figma","Git",
  "Postman","Agile","Google Play Store","Firebase Auth","Firestore",
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#f4f4f4] py-24 px-8">
      <div className="max-w-[1180px] mx-auto">

        {/* Heading */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-14"
        >
          <motion.div variants={fadeUpD(0)}>
            <p className="section-label mb-3">Technical Skills</p>
            <h2
              className="text-[clamp(1.9rem,4vw,2.8rem)] font-black tracking-[-0.03em] text-[#111] leading-[1.08]"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              My Tech Stack.
            </h2>
          </motion.div>
          <motion.p variants={fadeUpD(0.1)} className="text-[#888] text-[0.9rem] leading-[1.75] max-w-xs">
            Tools and technologies I use to build production-ready products.
          </motion.p>
        </motion.div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: gi * 0.1 }}
              whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.09)" }}
              className="bg-white border border-[#e8e8e8] rounded-xl p-7"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-[#111] flex items-center justify-center">
                  <Icon icon={g.icon} width={18} color="#fff" />
                </div>
                <h3
                  className="font-bold text-[#111] text-[0.9rem]"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {g.title}
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                {g.skills.map(s => (
                  <div key={s.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-[#444] text-[0.8rem] font-medium">{s.name}</span>
                      <span className="text-[#aaa] text-[0.75rem]">{s.pct}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: gi * 0.05 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tags cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-[#e8e8e8] rounded-xl p-8"
        >
          <p className="text-[#aaa] text-[0.7rem] font-bold tracking-[0.12em] uppercase mb-5">
            All Technologies
          </p>
          <div className="flex flex-wrap gap-2.5">
            {allTags.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                className="tag"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
