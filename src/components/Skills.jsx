import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skillCategories, skills } from "../data/portfolioData";
import AnimatedText from "./AnimatedText";
import GlowCard from "./GlowCard";

const SkillIcon = ({ skill, index }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.5, y: -20 }}
      transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
    >
      <GlowCard className="glass hover-lift cursor-default rounded-xl p-4 md:p-5" glowColor={`${skill.color}40`}>
        <div className="flex flex-col items-center gap-3">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 md:h-14 md:w-14"
            style={{ backgroundColor: `${skill.color}15` }}
          >
            <Icon className="text-2xl transition-all duration-300 md:text-3xl" style={{ color: skill.color }} />
          </div>
          <span className="text-center text-xs font-medium text-white/70 transition-colors group-hover:text-white md:text-sm">
            {skill.name}
          </span>
        </div>
      </GlowCard>
    </motion.div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].key);
  const skillCount = Object.values(skills).flat().length;

  return (
    <section id="skills" className="relative overflow-hidden py-32">
      <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="dot-pattern absolute inset-0 opacity-10" />
      <div className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <motion.p
            className="mb-4 font-mono text-sm uppercase tracking-widest text-accent"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            04 - Skills
          </motion.p>
          <AnimatedText
            text="AI, Vision, NLP, And Engineering Tools"
            className="font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl"
          />
        </div>

        <motion.div
          className="mb-12 flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <button
              key={category.key}
              type="button"
              onClick={() => setActiveCategory(category.key)}
              data-cursor="pointer"
              className={`relative rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeCategory === category.key ? "text-white" : "glass text-white/50 hover:text-white/80"
              }`}
            >
              {activeCategory === category.key ? (
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: `linear-gradient(135deg, ${category.color}30, ${category.color}10)`,
                    border: `1px solid ${category.color}40`
                  }}
                  layoutId="activeSkillTab"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              ) : null}
              <span className="relative z-10">{category.label}</span>
            </button>
          ))}
        </motion.div>

        <div className="min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {skills[activeCategory]?.map((skill, index) => (
                <SkillIcon key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          className="mt-20 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="mb-6 text-center font-mono text-sm text-white/30">
            {skillCount} focused skills across ML, CV, NLP, optimization, data, and workflow
          </p>
          <div className="relative">
            <div className="absolute bottom-0 left-0 top-0 z-10 w-32 bg-gradient-to-r from-[var(--color-bg-primary)] to-transparent" />
            <div className="absolute bottom-0 right-0 top-0 z-10 w-32 bg-gradient-to-l from-[var(--color-bg-primary)] to-transparent" />
            <div className="flex animate-marquee">
              {[...Object.values(skills).flat(), ...Object.values(skills).flat()].map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={`${skill.name}-${index}`}
                    className="glass-light mx-2 flex whitespace-nowrap rounded-lg px-6 py-3"
                  >
                    <div className="flex items-center gap-2">
                      <Icon style={{ color: skill.color }} />
                      <span className="text-sm text-white/50">{skill.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
