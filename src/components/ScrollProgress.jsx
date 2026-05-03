import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[9990] h-[2px] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #6c63ff, #00d4ff, #a855f7, #ec4899)"
      }}
    />
  );
};

export default ScrollProgress;
