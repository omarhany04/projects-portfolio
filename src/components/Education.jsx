import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaGraduationCap, FaUniversity } from "react-icons/fa";
import { education, educationHighlights } from "../data/portfolioData";
import AnimatedText from "./AnimatedText";
import GlowCard from "./GlowCard";

const Education = () => {
  return (
    <section id="education" className="relative overflow-hidden py-28">
      <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute right-0 top-1/4 h-[320px] w-[320px] rounded-full bg-accent/5 blur-[110px]" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <motion.p
            className="mb-4 font-mono text-sm uppercase tracking-widest text-accent"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            06 - Education
          </motion.p>
          <AnimatedText
            text="Academic Foundation In Engineering And AI"
            className="font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl"
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {education.map((item, index) => (
            <motion.div
              key={`${item.institution}-${item.period}`}
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlowCard className="glass rounded-3xl p-8 md:p-10" glowColor={`${item.color}33`}>
                <div className="mb-6 flex items-center gap-3">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <FaGraduationCap style={{ color: item.color }} className="text-2xl" />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
                      University Education
                    </p>
                    <h3 className="font-display text-2xl font-bold text-white">{item.degree}</h3>
                  </div>
                </div>

                <div className="mb-6 flex flex-wrap items-center gap-4">
                  <span className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 font-mono text-xs text-white/70">
                    <FaUniversity className="text-[11px]" />
                    {item.institution}
                  </span>
                  <span className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 font-mono text-xs text-white/70">
                    <FaCalendarAlt className="text-[11px]" />
                    {item.period}
                  </span>
                </div>

                <p className="max-w-2xl leading-relaxed text-white/60">{item.description}</p>
              </GlowCard>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <GlowCard className="glass rounded-3xl p-6" glowColor="rgba(0, 212, 255, 0.25)">
              <p className="mb-4 font-mono text-sm text-white/50">Education Snapshot</p>
              <div className="space-y-4">
                {educationHighlights.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                    <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/35">
                      {item.label}
                    </p>
                    <p className="text-sm leading-relaxed text-white/75">{item.value}</p>
                  </div>
                ))}
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
