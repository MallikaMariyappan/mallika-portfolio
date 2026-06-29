"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { fadeUpD, staggerContainer } from "@/lib/motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#f4f4f4]"
      style={{ paddingTop: 80 }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #c8c8c8 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          opacity: 0.55,
        }}
      />

      <div className="max-w-[1180px] mx-auto w-full px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-end min-h-[calc(100vh-80px)]">

          {/* ── LEFT: photo ── */}
          <motion.div
            className="relative flex items-end justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Rotating badge */}
            <div className="absolute bottom-10 left-4 z-20">
              <a href="mailto:mmallika2121@gmail.com" aria-label="Hire Me" className="relative block w-[100px] h-[100px]">
                <svg viewBox="0 0 100 100" className="rotate-badge w-full h-full">
                  <defs>
                    <path id="cp" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
                  </defs>
                  <circle cx="50" cy="50" r="46" fill="#111" />
                  <text fill="#fff" fontSize="9" fontWeight="600" letterSpacing="2.5">
                    <textPath href="#cp">FRONTEND DEV • FLUTTER DEV • </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-white font-black text-[0.58rem] tracking-wider text-center leading-tight">
                    HIRE<br />ME
                  </span>
                </div>
              </a>
            </div>

            {/* Photo */}
            <motion.div
              className="relative w-full max-w-[420px]"
              style={{ height: 560 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Ink blobs */}
              <svg className="absolute top-8 left-6 opacity-[0.06] pointer-events-none" width="180" height="180" viewBox="0 0 180 180">
                <ellipse cx="90" cy="70" rx="75" ry="55" fill="#111" />
                <ellipse cx="50" cy="110" rx="38" ry="28" fill="#111" transform="rotate(-18 50 110)" />
                <ellipse cx="140" cy="95" rx="32" ry="22" fill="#111" transform="rotate(14 140 95)" />
              </svg>
              <svg className="absolute bottom-16 right-4 opacity-[0.04] pointer-events-none" width="130" height="130" viewBox="0 0 130 130">
                <ellipse cx="65" cy="65" rx="55" ry="42" fill="#111" />
                <ellipse cx="35" cy="95" rx="28" ry="18" fill="#111" transform="rotate(22 35 95)" />
              </svg>

              <div
                className="absolute bottom-0 left-1/2 overflow-hidden"
                style={{ transform: "translateX(-50%)", width: 320, height: 460, borderRadius: "160px 160px 0 0" }}
              >
                <Image
                  src="/profile.jpeg"
                  alt="Mallika M"
                  fill priority
                  sizes="320px"
                  className="object-cover object-top"
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: text ── */}
          <motion.div
            className="flex flex-col justify-center pb-16 lg:pl-10"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {/* Status */}
            <motion.div variants={fadeUpD(0)} className="flex items-center gap-2 mb-7">
              <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
              <span className="text-[0.72rem] font-semibold text-[#888] tracking-[0.14em] uppercase">
                Open to Opportunities
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUpD(0.08)}
              className="text-[clamp(2.4rem,5.5vw,4.2rem)] font-black leading-[1.08] tracking-[-0.03em] text-[#111] mb-5"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Turning Vision<br />
              Into Reality With<br />
              <span className="text-[#777]">Code &amp; Design.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p variants={fadeUpD(0.16)} className="text-[#666] text-[0.95rem] leading-[1.8] max-w-[400px] mb-9">
              Frontend Developer &amp; Flutter Mobile App Developer with{" "}
              <span className="text-[#111] font-semibold">1.9 years</span> of production experience.
              Shipped 3 Play Store apps with{" "}
              <span className="text-[#111] font-semibold">50+ active users</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUpD(0.22)} className="flex gap-3 flex-wrap mb-10">
              <motion.a
                href="#projects"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-[#111] text-white font-bold text-[0.85rem] tracking-[0.04em] uppercase px-7 py-3.5 rounded-md"
                style={{ textDecoration: "none" }}
              >
                View Projects <Icon icon="mdi:arrow-top-right" width={16} />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-transparent text-[#111] font-bold text-[0.85rem] tracking-[0.04em] uppercase px-7 py-3.5 rounded-md border-[1.5px] border-[#bbb] hover:border-[#111] hover:bg-[#111] hover:text-white transition-all"
                style={{ textDecoration: "none" }}
              >
                Contact <Icon icon="mdi:email-outline" width={16} />
              </motion.a>
            </motion.div>

            {/* Tags */}
            <motion.div
              variants={fadeUpD(0.28)}
              className="flex gap-2 flex-wrap pt-7 border-t border-[#e4e4e4]"
            >
              {["React.js", "Flutter", "Node.js", "TypeScript", "Firebase", "Redux"].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </motion.div>

            {/* Meta */}
            <motion.div variants={fadeUpD(0.33)} className="flex items-center gap-5 mt-5 flex-wrap">
              <span className="flex items-center gap-1.5 text-[#aaa] text-[0.78rem]">
                <Icon icon="mdi:map-marker-outline" width={14} /> Chennai, Tamil Nadu
              </span>
              <span className="flex items-center gap-1.5 text-[#aaa] text-[0.78rem]">
                <Icon icon="mdi:clock-outline" width={14} /> 15 Days Notice Period
              </span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
