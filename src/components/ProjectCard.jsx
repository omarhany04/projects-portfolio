import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectMark = ({ project, large = false, isHovered = false }) => (
  <motion.div
    className={`flex items-center justify-center overflow-hidden rounded-2xl font-display font-bold ${
      large ? "h-16 w-16 md:h-20 md:w-20" : "h-12 w-12"
    }`}
    style={{
      backgroundColor: `${project.color}15`,
      border: `1px solid ${project.color}25`,
      color: project.color
    }}
    animate={large ? { transform: isHovered ? "translateZ(30px)" : "translateZ(0px)" } : undefined}
    transition={{ type: "spring", stiffness: 200 }}
  >
    <span className={large ? "text-2xl md:text-3xl" : "text-lg"}>{project.mark}</span>
  </motion.div>
);

const ProjectCard = ({ project, index, isFeatured = false }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event) => {
    if (!cardRef.current) {
      return;
    }

    const rect = cardRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  const rotateX = isHovered ? (mousePos.y - 0.5) * -10 : 0;
  const rotateY = isHovered ? (mousePos.x - 0.5) * 10 : 0;

  if (isFeatured) {
    return (
      <motion.div
        ref={cardRef}
        className="group relative"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
        style={{ perspective: "1000px" }}
      >
        <motion.div
          className="glass relative overflow-hidden rounded-3xl"
          animate={{ rotateX, rotateY }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

          {isHovered ? (
            <div
              className="pointer-events-none absolute z-0"
              style={{
                left: `${mousePos.x * 100}%`,
                top: `${mousePos.y * 100}%`,
                width: "400px",
                height: "400px",
                transform: "translate(-50%, -50%)",
                background: `radial-gradient(circle, ${project.color}15, transparent 70%)`
              }}
            />
          ) : null}

          <div className="relative z-10 p-8 md:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-start">
              <ProjectMark project={project} large isHovered={isHovered} />

              <div className="flex-1">
                <div className="mb-3 flex items-center gap-3">
                  <span
                    className="rounded-full px-3 py-1 font-mono text-xs"
                    style={{ backgroundColor: `${project.color}15`, color: project.color }}
                  >
                    {project.category}
                  </span>
                  <span className="font-mono text-xs text-white/30">Featured Project</span>
                </div>

                <h3
                  className="mb-1 font-display text-2xl font-bold transition-colors duration-300 md:text-3xl"
                  style={{ color: isHovered ? project.color : "#f0f0ff" }}
                >
                  {project.title}
                </h3>
                <p className="mb-4 text-sm font-medium text-white/40">{project.subtitle}</p>

                <p className="mb-6 max-w-2xl leading-relaxed text-white/60">{project.description}</p>

                <div className="mb-8 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="glass-light rounded-lg px-3 py-1.5 font-mono text-xs text-white/60 transition-colors duration-200 hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="pointer"
                      data-cursor-text="Visit"
                      className="group/link flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${project.color}30, ${project.color}10)`,
                        border: `1px solid ${project.color}30`
                      }}
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Live Demo
                      <FaArrowRight className="text-xs transition-transform group-hover/link:translate-x-1" />
                    </a>
                  ) : null}
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="pointer"
                      data-cursor-text="Code"
                      className="glass flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-white/70 transition-all duration-300 hover:border-white/20 hover:text-white"
                    >
                      <FaGithub />
                      Source Code
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      className="group relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="glass relative h-full overflow-hidden rounded-2xl"
        animate={{
          rotateX: isHovered ? (mousePos.y - 0.5) * -8 : 0,
          rotateY: isHovered ? (mousePos.x - 0.5) * 8 : 0
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className={`h-[3px] w-full bg-gradient-to-r ${project.gradient}`} />

        {isHovered ? (
          <div
            className="pointer-events-none absolute z-0"
            style={{
              left: `${mousePos.x * 100}%`,
              top: `${mousePos.y * 100}%`,
              width: "300px",
              height: "300px",
              transform: "translate(-50%, -50%)",
              background: `radial-gradient(circle, ${project.color}10, transparent 70%)`
            }}
          />
        ) : null}

        <div className="relative z-10 flex h-full flex-col p-6">
          <div className="mb-4 flex items-start justify-between">
            <ProjectMark project={project} />
            <span
              className="rounded-full px-2 py-1 font-mono text-[10px]"
              style={{ backgroundColor: `${project.color}15`, color: project.color }}
            >
              {project.category}
            </span>
          </div>

          <h3
            className="mb-1 font-display text-lg font-bold transition-colors duration-300"
            style={{ color: isHovered ? project.color : "#f0f0ff" }}
          >
            {project.title}
          </h3>
          <p className="mb-3 text-xs text-white/40">{project.subtitle}</p>

          <p className="line-clamp-3 mb-5 flex-grow text-sm leading-relaxed text-white/50">
            {project.description}
          </p>

          <div className="mb-5 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((tech) => (
              <span key={tech} className="glass-light rounded-md px-2 py-1 font-mono text-[10px] text-white/50">
                {tech}
              </span>
            ))}
            {project.tech.length > 4 ? (
              <span className="glass-light rounded-md px-2 py-1 font-mono text-[10px] text-accent/60">
                +{project.tech.length - 4}
              </span>
            ) : null}
          </div>

          <div className="mt-auto flex items-center gap-3 border-t border-white/5 pt-4">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="pointer"
                className="flex items-center gap-1.5 text-xs font-medium text-white/60 transition-colors hover:text-accent"
              >
                <FaExternalLinkAlt className="text-[10px]" />
                Live Demo
              </a>
            ) : null}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="pointer"
                className="flex items-center gap-1.5 text-xs font-medium text-white/60 transition-colors hover:text-white"
              >
                <FaGithub className="text-xs" />
                Code
              </a>
            ) : null}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
