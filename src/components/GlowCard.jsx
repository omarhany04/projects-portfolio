import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const GlowCard = ({
  children,
  className = "",
  glowColor = "rgba(108, 99, 255, 0.3)",
  ...props
}) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event) => {
    if (!cardRef.current) {
      return;
    }

    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden rounded-2xl ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {isHovered ? (
        <div
          className="pointer-events-none absolute z-0 transition-opacity duration-300"
          style={{
            left: mousePos.x - 150,
            top: mousePos.y - 150,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${glowColor}, transparent 70%)`,
            opacity: 1
          }}
        />
      ) : null}

      <div
        className="pointer-events-none absolute inset-0 z-0 rounded-2xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor.replace(
            "0.3",
            "0.06"
          )}, transparent 40%)`
        }}
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlowCard;
