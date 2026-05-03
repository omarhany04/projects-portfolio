import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import BrandLogo from "./BrandLogo";

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((previous) => {
        if (previous >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsExiting(true), 280);
          setTimeout(() => onComplete(), 1150);
          return 100;
        }

        return Math.min(previous + Math.random() * 15 + 6, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "var(--color-bg-primary)" }}
          exit={{
            clipPath: "circle(0% at 50% 50%)",
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] }
          }}
        >
          <div className="absolute inset-0 grid-pattern opacity-30" />

          <motion.div
            className="absolute h-[300px] w-[300px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(108, 99, 255, 0.3), transparent 70%)",
              filter: "blur(60px)"
            }}
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -80, 50, 0],
              scale: [1, 1.2, 0.8, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="relative z-10 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <BrandLogo size="lg" subtitle={personalInfo.tagline} />
          </motion.div>

          <div className="relative z-10 w-64 md:w-80">
            <div className="mb-3 flex justify-between">
              <motion.span
                className="font-mono text-sm text-accent-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Loading
              </motion.span>
              <motion.span
                className="font-mono text-sm text-accent-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {Math.round(progress)}%
              </motion.span>
            </div>
            <div className="h-[2px] overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #6c63ff, #00d4ff, #a855f7)",
                  backgroundSize: "200% 100%"
                }}
                initial={{ width: "0%" }}
                animate={{
                  width: `${Math.round(progress)}%`,
                  backgroundPosition: ["0% 50%", "100% 50%"]
                }}
                transition={{
                  width: { duration: 0.3 },
                  backgroundPosition: { duration: 2, repeat: Infinity, ease: "linear" }
                }}
              />
            </div>
          </div>

          <motion.p
            className="absolute bottom-8 font-mono text-sm text-white/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {personalInfo.preloaderText}
          </motion.p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Preloader;
