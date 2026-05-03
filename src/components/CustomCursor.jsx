import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const isMobile = useMediaQuery("(max-width: 768px)");
  const pointerX = useMotionValue(-100);
  const pointerY = useMotionValue(-100);
  const ringX = useSpring(pointerX, { stiffness: 700, damping: 40, mass: 0.12 });
  const ringY = useSpring(pointerY, { stiffness: 700, damping: 40, mass: 0.12 });

  useEffect(() => {
    if (isMobile) {
      return undefined;
    }

    const handlePointerMove = (event) => {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
    };

    const handlePointerLeave = () => {
      pointerX.set(-100);
      pointerY.set(-100);
    };

    const handleMouseOver = (event) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      const interactiveTarget =
        event.target.closest("a") ||
        event.target.closest("button") ||
        event.target.closest('[data-cursor="pointer"]');

      if (interactiveTarget) {
        setIsHovering(true);
        setCursorText(interactiveTarget.getAttribute("data-cursor-text") || "");
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
      setCursorText("");
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isMobile, pointerX, pointerY]);

  if (isMobile) {
    return null;
  }

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] mix-blend-difference"
        style={{ x: pointerX, y: pointerY, translateX: -5, translateY: -5 }}
        animate={{ scale: isClicking ? 0.6 : 1 }}
        transition={{ type: "spring", stiffness: 1200, damping: 55, mass: 0.08 }}
      >
        <div className="h-[10px] w-[10px] rounded-full bg-white" />
      </motion.div>

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9997]"
        style={{
          x: ringX,
          y: ringY,
          translateX: isHovering ? -30 : -20,
          translateY: isHovering ? -30 : -20
        }}
        animate={{
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
          opacity: isHovering ? 1 : 0.5
        }}
        transition={{ type: "spring", stiffness: 500, damping: 35, mass: 0.15 }}
      >
        <div
          className={`flex h-full w-full items-center justify-center rounded-full border transition-colors duration-300 ${
            isHovering ? "border-accent bg-accent/10 backdrop-blur-sm" : "border-white/30"
          }`}
        >
          {cursorText ? (
            <span className="font-mono text-[8px] font-bold uppercase text-accent-light">
              {cursorText}
            </span>
          ) : null}
        </div>
      </motion.div>
    </>
  );
};

export default CustomCursor;
