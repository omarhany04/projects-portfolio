import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaGithub, FaLinkedinIn, FaTimes } from "react-icons/fa";
import { navLinks, personalInfo } from "../data/portfolioData";
import BrandLogo from "./BrandLogo";
import MagneticButton from "./MagneticButton";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (let index = sections.length - 1; index >= 0; index -= 1) {
        const section = document.getElementById(sections[index]);
        if (!section) {
          continue;
        }

        if (section.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[index]);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed left-0 right-0 top-0 z-[990] transition-all duration-500 ${
          isScrolled ? "glass-strong py-3 shadow-lg shadow-black/20" : "bg-transparent py-5"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <MagneticButton strength={15}>
            <a
              href="#home"
              onClick={(event) => {
                event.preventDefault();
                handleNavClick("#home");
              }}
              className="group relative"
              data-cursor="pointer"
              data-cursor-text="Home"
            >
              <BrandLogo size="sm" subtitle={personalInfo.tagline} />
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-accent to-neon-blue transition-all duration-300 group-hover:w-full" />
            </a>
          </MagneticButton>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavClick(link.href);
                  }}
                  data-cursor="pointer"
                  className={`group relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-accent" : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive ? (
                    <motion.div
                      className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent"
                      layoutId="activeNav"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  ) : null}
                  <span className="absolute inset-0 rounded-lg bg-accent/0 transition-colors duration-300 group-hover:bg-accent/5" />
                </a>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <MagneticButton strength={10}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                data-cursor="pointer"
                data-cursor-text="GitHub"
                className="glass flex h-9 w-9 items-center justify-center rounded-lg text-white/60 transition-all duration-300 hover:border-accent/30 hover:text-white"
              >
                <FaGithub className="text-sm" />
              </a>
            </MagneticButton>
            <MagneticButton strength={10}>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                data-cursor="pointer"
                data-cursor-text="LinkedIn"
                className="glass flex h-9 w-9 items-center justify-center rounded-lg text-white/60 transition-all duration-300 hover:border-accent/30 hover:text-white"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
            </MagneticButton>
            <MagneticButton strength={10}>
              <a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  handleNavClick("#contact");
                }}
                data-cursor="pointer"
                className="btn-ripple rounded-lg bg-gradient-to-r from-accent to-neon-purple px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:shadow-glow"
              >
                Let's Talk
              </a>
            </MagneticButton>
          </div>

          <button
            type="button"
            className="glass flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
            onClick={() => setIsMobileOpen((current) => !current)}
          >
            {isMobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileOpen ? (
          <motion.div
            className="fixed inset-0 z-[980] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              className="glass-strong absolute right-0 top-0 flex h-full w-[280px] flex-col gap-2 p-8 pt-24"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`rounded-xl px-4 py-3 text-lg font-medium transition-all duration-300 ${
                    activeSection === link.href.replace("#", "")
                      ? "bg-accent/10 text-accent"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <span className="mr-2 font-mono text-xs text-accent/50">0{index + 1}.</span>
                  {link.name}
                </motion.a>
              ))}

              <div className="mt-auto border-t border-white/10 pt-8">
                <div className="flex gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="glass flex h-10 w-10 items-center justify-center rounded-lg text-white/60"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="glass flex h-10 w-10 items-center justify-center rounded-lg text-white/60"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
