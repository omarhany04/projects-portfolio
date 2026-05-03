import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { experiences } from "../data/portfolioData";
import AnimatedText from "./AnimatedText";
import GlowCard from "./GlowCard";

const ExperienceCard = ({ experience, index, isLeft }) => (
  <motion.div
    className={`relative flex w-full flex-col items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
    initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
  >
    <div className={`w-full md:w-[calc(50%-30px)] ${isLeft ? "md:pr-0" : "md:pl-0"}`}>
      <GlowCard className="glass group hover-lift rounded-2xl p-6 md:p-8" glowColor={`${experience.color}30`}>
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span
            className="flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-xs"
            style={{ backgroundColor: `${experience.color}15`, color: experience.color }}
          >
            <FaCalendarAlt className="text-[10px]" />
            {experience.period}
          </span>
          {experience.location ? (
            <span className="flex items-center gap-1.5 text-xs text-white/40">
              <FaMapMarkerAlt className="text-[10px]" />
              {experience.location}
            </span>
          ) : null}
        </div>

        <h3 className="mb-1 font-display text-xl font-bold text-white transition-colors group-hover:text-accent">
          {experience.title}
        </h3>
        <p className="mb-4 text-sm font-medium" style={{ color: experience.color }}>
          {experience.company}
        </p>

        <ul className="mb-5 space-y-2">
          {experience.description.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-white/60">
              <span
                className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                style={{ backgroundColor: experience.color }}
              />
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {experience.tech.map((tech) => (
            <span key={tech} className="glass-light rounded-full px-3 py-1 font-mono text-xs text-white/60">
              {tech}
            </span>
          ))}
        </div>
      </GlowCard>
    </div>

    <div className="hidden w-[60px] flex-shrink-0 items-center justify-center md:flex">
      <motion.div
        className="relative z-10 h-4 w-4 rounded-full border-2"
        style={{ borderColor: experience.color, backgroundColor: `${experience.color}30` }}
        whileInView={{ scale: [0, 1.3, 1] }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 + 0.3 }}
      >
        <div
          className="absolute inset-0 rounded-full animate-ping opacity-30"
          style={{ backgroundColor: experience.color }}
        />
      </motion.div>
    </div>

    <div className="hidden md:block md:w-[calc(50%-30px)]" />
  </motion.div>
);

const Experience = () => {
  return (
    <section id="experience" className="relative overflow-hidden py-32">
      <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute -left-20 top-1/4 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[100px]" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-20">
          <motion.p
            className="mb-4 font-mono text-sm uppercase tracking-widest text-accent"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            02 - Experience
          </motion.p>
          <AnimatedText
            text="Where I've Worked"
            className="font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl"
          />
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-[1px] -translate-x-1/2 md:block">
            <motion.div
              className="h-full w-full bg-gradient-to-b from-accent/50 via-neon-blue/50 to-neon-purple/50"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              style={{ transformOrigin: "top" }}
            />
          </div>

          <div className="space-y-12 md:space-y-16">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`${experience.company}-${experience.period}`}
                experience={experience}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
