import React from "react";
import { motion } from "framer-motion";
import { FaArrowUp, FaEnvelope } from "react-icons/fa";
import { personalInfo, socialLinks } from "../data/portfolioData";
import BrandLogo from "./BrandLogo";
import MagneticButton from "./MagneticButton";

const Footer = () => {
  const [watermarkFirstName, ...watermarkRest] = personalInfo.name.toUpperCase().split(" ");
  const watermarkLastName = watermarkRest.join(" ");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden pb-8 pt-20">
      <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 px-6">
        <div className="mx-auto max-w-[92vw] text-center">
          <h2 className="select-none font-display text-[clamp(3.5rem,10vw,9rem)] font-bold leading-[0.82] tracking-[0.04em] text-white/[0.02]">
            <span className="block">{watermarkFirstName}</span>
            {watermarkLastName ? <span className="block">{watermarkLastName}</span> : null}
          </h2>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 font-display text-3xl font-bold text-white md:text-4xl">
            Want to build something intelligent?
          </h2>
          <p className="mx-auto mb-8 max-w-md text-white/50">
            {personalInfo.footerPitch}
          </p>
          <MagneticButton strength={15}>
            <a
              href={`mailto:${personalInfo.email}`}
              data-cursor="pointer"
              className="btn-ripple inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-neon-purple px-8 py-4 font-medium text-white shadow-glow transition-all duration-300 hover:shadow-glow-lg"
            >
              <FaEnvelope />
              Say Hello
            </a>
          </MagneticButton>
        </motion.div>

        <div className="mb-8 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center">
            <a href="#home">
              <BrandLogo size="sm" subtitle={personalInfo.tagline} />
            </a>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.slice(0, 3).map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  data-cursor="pointer"
                  className="glass flex h-9 w-9 items-center justify-center rounded-lg text-white/40 transition-colors duration-300 hover:text-accent"
                >
                  <Icon className="text-sm" />
                </a>
              );
            })}
            <div className="mx-1 h-6 w-[1px] bg-white/10" />
            <MagneticButton strength={15}>
              <button
                type="button"
                onClick={scrollToTop}
                data-cursor="pointer"
                data-cursor-text="Top"
                className="glass flex h-9 w-9 items-center justify-center rounded-lg text-white/40 transition-all duration-300 hover:border-accent/30 hover:text-accent"
              >
                <FaArrowUp className="text-sm" />
              </button>
            </MagneticButton>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-white/30">
          (c) {new Date().getFullYear()} {personalInfo.name}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
