import React from "react";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import { certificationTracks, certifications } from "../data/portfolioData";
import AnimatedText from "./AnimatedText";
import GlowCard from "./GlowCard";

const Competitive = () => {
  return (
    <section id="certifications" className="relative overflow-hidden py-28">
      <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute -left-24 top-16 h-[320px] w-[320px] rounded-full bg-neon-blue/5 blur-[110px]" />
      <div className="absolute -right-24 bottom-16 h-[320px] w-[320px] rounded-full bg-neon-purple/5 blur-[110px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <motion.p
            className="mb-4 font-mono text-sm uppercase tracking-widest text-accent"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            05 - Certifications
          </motion.p>
          <AnimatedText
            text="Courses And Credentials That Strengthened My AI Practice"
            className="font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl"
          />
          <motion.p
            className="mt-4 max-w-3xl text-lg text-white/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A mix of generative AI, deep learning, machine learning, Python, and workflow-focused
            programs that reinforced both theory and practical delivery.
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            className="space-y-5 lg:col-span-2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {certificationTracks.map((track, index) => {
              const Icon = track.icon;

              return (
                <motion.div
                  key={track.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlowCard className="glass rounded-2xl p-6" glowColor={`${track.color}30`}>
                    <div className="mb-4 flex items-center gap-4">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-xl"
                        style={{ backgroundColor: `${track.color}15` }}
                      >
                        <Icon style={{ color: track.color }} className="text-xl" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-white">{track.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-white/55">{track.description}</p>
                  </GlowCard>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
            >
              <GlowCard className="glass rounded-2xl p-6" glowColor="rgba(108, 99, 255, 0.2)">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                    <FaCertificate className="text-accent" />
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold text-white">12 Certifications</p>
                    <p className="text-sm text-white/45">Earned across IBM, NVIDIA, AWS, Atlassian, and DeepLearning.AI</p>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid gap-4 sm:grid-cols-2 lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {certifications.map((credential, index) => (
              <motion.div
                key={`${credential.title}-${credential.issued}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
              >
                <GlowCard className="glass h-full rounded-2xl p-5" glowColor={`${credential.color}25`}>
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <span
                      className="rounded-full px-3 py-1 font-mono text-[11px]"
                      style={{ backgroundColor: `${credential.color}15`, color: credential.color }}
                    >
                      {credential.issued}
                    </span>
                    <FaCertificate style={{ color: credential.color }} className="mt-1 flex-shrink-0" />
                  </div>
                  <h4 className="mb-2 text-sm font-semibold leading-relaxed text-white">{credential.title}</h4>
                  <p className="mb-2 text-xs font-mono uppercase tracking-[0.18em] text-white/35">
                    {credential.issuer}
                  </p>
                  <p className="text-sm leading-relaxed text-white/55">{credential.highlight}</p>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Competitive;
