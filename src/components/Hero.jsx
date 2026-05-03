import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { personalInfo } from "../data/portfolioData";

const Hero = () => {
  const nameParts = personalInfo.name.split(" ");
  const firstLine = nameParts.length > 2 ? nameParts.slice(0, 2).join(" ") : nameParts[0];
  const secondLine = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="orb orb-1 -left-40 -top-40" />
      <div className="orb orb-2 -bottom-40 -right-40" />
      <div className="orb orb-3 right-1/4 top-1/3" />

      <motion.div
        className="absolute left-10 top-20 h-32 w-[1px] bg-gradient-to-b from-transparent via-accent/30 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 2, duration: 1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 h-32 w-[1px] bg-gradient-to-b from-transparent via-neon-blue/30 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.p
          className="mb-4 font-mono text-lg text-accent md:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.6 }}
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          className="mb-6 font-display text-5xl font-bold uppercase leading-tight sm:text-6xl md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8, type: "spring" }}
        >
          <span className="gradient-text text-shadow-glow">{firstLine}</span>
          {secondLine ? (
            <>
              <br />
              <span className="text-white">{secondLine}</span>
            </>
          ) : null}
        </motion.h1>

        <motion.div
          className="mb-8 h-[40px] text-xl font-light text-white/70 md:h-[48px] md:text-2xl lg:text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3 }}
        >
          <TypeAnimation
            sequence={personalInfo.heroRoles.flatMap((role) => [role, 1800])}
            wrapper="span"
            speed={42}
            repeat={Infinity}
            className="font-accent"
          />
        </motion.div>

        <motion.p
          className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-white/50 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.6 }}
        >
          {personalInfo.description}
        </motion.p>

      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
      >
        <span className="text-xs uppercase tracking-[0.35em] text-white/30">Scroll</span>
        <motion.div
          className="flex h-8 w-5 items-start justify-center rounded-full border border-white/20 p-1"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <motion.div
            className="h-2 w-1 rounded-full bg-accent"
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
