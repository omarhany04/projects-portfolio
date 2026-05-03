import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaBriefcase,
  FaCode,
  FaGraduationCap,
  FaEnvelope,
  FaHome,
  FaProjectDiagram,
  FaUser
} from "react-icons/fa";

const dockItems = [
  { icon: FaHome, label: "Home", href: "#home" },
  { icon: FaUser, label: "About", href: "#about" },
  { icon: FaBriefcase, label: "Experience", href: "#experience" },
  { icon: FaProjectDiagram, label: "Projects", href: "#projects" },
  { icon: FaCode, label: "Skills", href: "#skills" },
  { icon: FaGraduationCap, label: "Education", href: "#education" },
  { icon: FaEnvelope, label: "Contact", href: "#contact" }
];

const DockItem = ({ item, isHovered, onHover }) => {
  const Icon = item.icon;

  return (
    <motion.a
      href={item.href}
      className="relative flex items-center justify-center"
      onMouseEnter={() => onHover(item.label)}
      onMouseLeave={() => onHover(null)}
      whileTap={{ scale: 0.85 }}
    >
      <motion.div
        className="glass flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300 hover:bg-accent/20 md:h-12 md:w-12"
        animate={{ scale: isHovered ? 1.3 : 1, y: isHovered ? -8 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Icon
          className={`text-lg transition-colors duration-300 ${
            isHovered ? "text-accent" : "text-white/60"
          }`}
        />
      </motion.div>

      <AnimatePresence>
        {isHovered ? (
          <motion.span
            className="absolute -top-10 whitespace-nowrap rounded-md bg-accent px-2 py-1 font-mono text-xs text-white"
            initial={{ opacity: 0, y: 5, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.8 }}
            transition={{ duration: 0.15 }}
          >
            {item.label}
          </motion.span>
        ) : null}
      </AnimatePresence>
    </motion.a>
  );
};

const FloatingDock = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <motion.div
      className="fixed bottom-6 left-1/2 z-[999] hidden -translate-x-1/2 md:flex"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.8, type: "spring" }}
    >
      <div className="glass-strong flex items-end gap-2 rounded-2xl px-4 py-3 shadow-glow-lg">
        {dockItems.map((item) => (
          <DockItem
            key={item.label}
            item={item}
            isHovered={hoveredItem === item.label}
            onHover={setHoveredItem}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default FloatingDock;
