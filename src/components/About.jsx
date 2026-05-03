import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaArrowRight } from "react-icons/fa";
import { aboutCards, focusPoints, personalInfo, stats } from "../data/portfolioData";
import AnimatedText from "./AnimatedText";
import GlowCard from "./GlowCard";

const About = () => {
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="about" className="relative overflow-hidden py-32">
      <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="dot-pattern absolute inset-0 opacity-10" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20">
          <motion.p
            className="mb-4 font-mono text-sm uppercase tracking-widest text-accent"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            01 - About Me
          </motion.p>
          <AnimatedText
            text="Building Practical AI Systems"
            className="font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl"
          />
        </div>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <motion.div
            className="space-y-6 lg:col-span-3"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg leading-relaxed text-white/70">{personalInfo.description}</p>
            <p className="text-lg leading-relaxed text-white/70">
              I like turning <span className="font-medium text-accent">research ideas</span> into
              <span className="font-medium text-neon-blue"> measurable, usable systems</span> that
              are easy to iterate on and grounded in clear engineering trade-offs.
            </p>
            <p className="text-lg leading-relaxed text-white/70">
              My work spans computer vision, deep learning, NLP, RAG, and optimization, alongside
              the data and software workflows needed to deliver dependable AI experiences.
            </p>

            <div className="grid gap-4 pt-6 sm:grid-cols-2">
              {aboutCards.map((card) => {
                const Icon = card.icon;

                return (
                  <GlowCard key={card.label} className="glass rounded-xl p-5" glowColor={`${card.color}33`}>
                    <div className="flex items-start gap-4">
                      <div
                        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg"
                        style={{ backgroundColor: `${card.color}15` }}
                      >
                        <Icon style={{ color: card.color }} />
                      </div>
                      <div>
                        <p className="mb-1 text-sm text-white/50">{card.label}</p>
                        <p className="text-sm font-medium text-white">{card.value}</p>
                        <p className="mt-1 text-sm text-white/55">{card.detail}</p>
                      </div>
                    </div>
                  </GlowCard>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            ref={statsRef}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4 lg:sticky lg:top-32">
              {stats.map((stat, index) => (
                <GlowCard
                  key={stat.label}
                  className="glass hover-lift rounded-2xl p-6 text-center"
                  glowColor={
                    index === 0
                      ? "rgba(108, 99, 255, 0.3)"
                      : index === 1
                        ? "rgba(0, 212, 255, 0.3)"
                        : index === 2
                          ? "rgba(168, 85, 247, 0.3)"
                          : "rgba(236, 72, 153, 0.3)"
                  }
                >
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, type: "spring" }}
                  >
                    <div className="mb-2 font-display text-3xl font-bold gradient-text md:text-4xl">
                      {statsInView ? (
                        <CountUp
                          end={stat.value}
                          duration={2.5}
                          decimals={stat.decimals || 0}
                          suffix={stat.suffix}
                        />
                      ) : (
                        `0${stat.suffix}`
                      )}
                    </div>
                    <p className="font-mono text-sm text-white/50">{stat.label}</p>
                  </motion.div>
                </GlowCard>
              ))}

              <GlowCard className="glass col-span-2 rounded-2xl p-6" glowColor="rgba(108, 99, 255, 0.2)">
                <p className="mb-3 font-mono text-sm text-white/50">Current Focus</p>
                <div className="space-y-3">
                  {focusPoints.map((point) => (
                    <div key={point} className="flex items-start gap-2">
                      <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      <p className="text-xs leading-relaxed text-white/70">{point}</p>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 pt-1 font-mono text-xs text-accent">
                    <FaArrowRight className="text-[10px]" />
                    Practical AI first
                  </div>
                </div>
              </GlowCard>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
