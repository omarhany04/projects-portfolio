import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../data/portfolioData";
import AnimatedText from "./AnimatedText";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filterCategories = [
    "All",
    ...new Set(projects.filter((project) => !project.featured).map((project) => project.category))
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const filteredProjects =
    activeFilter === "All"
      ? projects.filter((project) => !project.featured)
      : projects.filter((project) => project.category === activeFilter && !project.featured);

  return (
    <section id="projects" className="relative overflow-hidden py-32">
      <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="grid-pattern absolute inset-0 opacity-10" />
      <div className="absolute -right-32 top-1/3 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />
      <div className="absolute -left-32 bottom-1/4 h-[400px] w-[400px] rounded-full bg-neon-purple/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20">
          <motion.p
            className="mb-4 font-mono text-sm uppercase tracking-widest text-accent"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            03 - Projects
          </motion.p>
          <AnimatedText
            text="Things I've Built"
            className="font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl"
          />
          <motion.p
            className="mt-4 max-w-2xl text-lg text-white/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            A selection of AI, computer vision, machine learning, and systems projects built
            through internships, coursework, and independent experimentation.
          </motion.p>
        </div>

        <div className="mb-20">
          <motion.div
            className="mb-8 flex items-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            <h3 className="font-display text-lg font-semibold text-white/80">Featured Projects</h3>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-accent/20 to-transparent" />
          </motion.div>

          <div className="space-y-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} isFeatured />
            ))}
          </div>
        </div>

        <div>
          <motion.div
            className="mb-8 flex items-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="h-2 w-2 animate-pulse rounded-full bg-neon-purple" />
            <h3 className="font-display text-lg font-semibold text-white/80">Other Noteworthy Projects</h3>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-neon-purple/20 to-transparent" />
          </motion.div>

          <motion.div
            className="mb-10 flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {filterCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                data-cursor="pointer"
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "text-white"
                    : "glass-light text-white/40 hover:text-white/70"
                }`}
              >
                {activeFilter === category ? (
                  <motion.div
                    className="absolute inset-0 rounded-lg border border-accent/25 bg-accent/15"
                    layoutId="activeProjectFilter"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                ) : null}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 ? (
            <motion.div
              className="py-20 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="font-mono text-white/40">No projects in this category</p>
            </motion.div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Projects;
