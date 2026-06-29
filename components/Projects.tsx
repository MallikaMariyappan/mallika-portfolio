"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const projects = [
  {
    num: "01",
    title: "IELTSGenAI",
    subtitle: "Web & Mobile",
    desc: "Full-stack EdTech product — React.js web app + Flutter mobile app for AI-powered IELTS exam preparation with JWT auth, Redux state management, and content delivery.",
    tags: ["Flutter", "React.js", "Redux", "Node.js", "JWT Auth"],
    platforms: ["Web", "Play Store"],
    highlight: "AI-Powered",
    hBg: "#eff6ff", hColor: "#1d4ed8",
  },
  {
    num: "02",
    title: "ESL English Learning",
    subtitle: "Flutter Mobile App",
    desc: "Flutter app with audio lessons, interactive exercises, and a 5-level curriculum. Firebase Firestore for real-time content — 50+ active Play Store users on launch.",
    tags: ["Flutter", "Dart", "Firebase", "Firestore"],
    platforms: ["Play Store"],
    highlight: "50+ Users",
    hBg: "#f0fdf4", hColor: "#16a34a",
  },
  {
    num: "03",
    title: "NEET / JEE Platform",
    subtitle: "Web & Mobile",
    desc: "Competitive exam prep platform — Flutter app + React.js portal with subject-wise practice tests, real-time progress tracking, and performance analytics.",
    tags: ["Flutter", "React.js", "Redux", "MongoDB", "Node.js"],
    platforms: ["Web", "Play Store"],
    highlight: "Full-Stack",
    hBg: "#fff7ed", hColor: "#c2410c",
  },
  {
    num: "04",
    title: "AI Admin Dashboard",
    subtitle: "Student Management",
    desc: "Comprehensive admin panel for managing IELTS/PTE students with AI-driven performance insights. Built from scratch with RBAC access control for 3+ client accounts.",
    tags: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
    platforms: ["Web"],
    highlight: "RBAC",
    hBg: "#faf5ff", hColor: "#7e22ce",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#f4f4f4] py-24 px-8">
      <div className="max-w-[1180px] mx-auto">

        {/* Heading */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-14"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
            <p className="section-label mb-3">Key Projects</p>
            <h2 className="text-[clamp(1.9rem,4vw,2.8rem)] font-black tracking-[-0.03em] text-[#111] leading-[1.08]"
              style={{ fontFamily: "var(--font-syne)" }}>
              Things I&apos;ve Built.
            </h2>
          </motion.div>
          <motion.a
            href="https://github.com/MallikaMariyappan"
            target="_blank" rel="noopener noreferrer"
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.5, delay: 0.1 } } }}
            whileHover={{ y: -2 }}
            className="inline-flex items-center gap-2 text-[#111] font-bold text-[0.82rem] tracking-[0.04em] uppercase px-5 py-3 rounded-lg border-[1.5px] border-[#ccc] hover:border-[#111] hover:bg-[#111] hover:text-white transition-all"
            style={{ textDecoration: "none", alignSelf: "flex-start" }}
          >
            <Icon icon="mdi:github" width={17} /> GitHub Profile
            <Icon icon="mdi:arrow-top-right" width={15} />
          </motion.a>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -5, boxShadow: "0 20px 48px rgba(0,0,0,0.1)" }}
              className="bg-white border border-[#e8e8e8] rounded-xl p-8 relative overflow-hidden cursor-default"
            >
              {/* Big number watermark */}
              <span className="absolute top-4 right-5 text-[4rem] font-black text-[#f5f5f5] leading-none select-none"
                style={{ fontFamily: "var(--font-syne)" }}>
                {p.num}
              </span>

              {/* Badges row */}
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="text-[0.7rem] font-bold px-3 py-1 rounded-full"
                  style={{ background: p.hBg, color: p.hColor }}>{p.highlight}</span>
                {p.platforms.map(pl => (
                  <span key={pl} className="text-[0.68rem] font-medium px-2.5 py-1 rounded-full bg-[#f5f5f5] text-[#888] border border-[#e8e8e8]">
                    {pl}
                  </span>
                ))}
              </div>

              <h3 className="text-[#111] font-bold text-[1rem] mb-1" style={{ fontFamily: "var(--font-syne)" }}>
                {p.title}
              </h3>
              <p className="text-[#888] text-[0.78rem] font-medium mb-3">{p.subtitle}</p>
              <p className="text-[#666] text-[0.85rem] leading-[1.72] mb-5">{p.desc}</p>

              <div className="flex flex-wrap gap-2">
                {p.tags.map(t => <span key={t} className="tag text-[0.7rem]">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
