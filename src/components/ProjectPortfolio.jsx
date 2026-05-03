import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheck,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedinIn,
  FaPlayCircle,
  FaSearch,
  FaTimes
} from "react-icons/fa";
import { owner, projects } from "../data/projectsData";

const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];
const featuredProjectOrder = [
  "litebite",
  "booky",
  "shipstack",
  "nasa-center",
  "wanderlust",
  "gesture-earth",
  "3arabety"
];

const linkButtonBase =
  "inline-flex h-10 items-center justify-center gap-2 rounded-lg border px-3 text-sm font-semibold transition";

const getInitialsBackground = (project) =>
  `linear-gradient(135deg, ${project.color}24, rgba(255,255,255,0.04)), radial-gradient(circle at 20% 20%, ${project.color}44, transparent 28%)`;

const ActionLink = ({ href, children, icon: Icon, onClick, variant = "primary" }) => {
  if (!href) {
    return null;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      data-cursor="pointer"
      onClick={onClick}
      className={
        variant === "primary"
          ? `${linkButtonBase} border-transparent bg-white text-slate-950 hover:bg-teal-100`
          : `${linkButtonBase} border-white/12 bg-white/[0.03] text-white/75 hover:border-white/25 hover:text-white`
      }
    >
      <Icon className="text-xs" />
      <span>{children}</span>
    </a>
  );
};

const ViewedBadge = () => (
  <div
    className="absolute bottom-3 right-3 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-emerald-300/40 bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20"
    title="Viewed"
    aria-label="Viewed project"
  >
    <FaCheck className="text-sm" />
  </div>
);

const ProjectVisual = ({ project, compact = false, stretch = false }) => (
  <div
    className={`flex flex-col overflow-hidden rounded-lg border border-white/10 ${
      compact ? "h-36" : stretch ? "h-56 md:h-full md:self-stretch" : "h-52 md:h-56"
    }`}
    style={{ background: getInitialsBackground(project) }}
  >
    <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden">
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className={`h-full w-full object-contain ${compact ? "p-3" : "p-5"}`}
          loading="lazy"
        />
      ) : (
        <div className="flex h-full items-center justify-center">
          <span
            className="font-display text-4xl font-bold text-white md:text-5xl"
            style={{ textShadow: `0 0 34px ${project.color}80` }}
          >
            {project.mark}
          </span>
        </div>
      )}
    </div>
    <div className="flex shrink-0 items-center justify-between bg-slate-950/82 px-4 py-2.5 backdrop-blur">
      <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 font-mono text-[10px] uppercase text-white/70">
        {project.category}
      </span>
      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: project.color }} />
    </div>
  </div>
);

const FeaturedProject = ({ project, index, isViewed, onProjectAction }) => (
  <motion.article
    className="relative grid items-stretch gap-5 rounded-lg border border-white/10 bg-white/[0.035] p-3 shadow-2xl shadow-black/20 backdrop-blur md:grid-cols-[320px_1fr] md:p-4 lg:grid-cols-[360px_1fr]"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ delay: index * 0.06, duration: 0.45 }}
  >
    <ProjectVisual project={project} stretch />
    <div className="flex h-full flex-col gap-4">
      <div>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span
            className="rounded-md px-2.5 py-1 font-mono text-xs font-semibold uppercase"
            style={{ backgroundColor: `${project.color}1f`, color: project.color }}
          >
            Featured
          </span>
          <span className="font-mono text-xs text-white/35">{project.subtitle}</span>
        </div>
        <h2 className="font-display text-2xl font-bold text-white">{project.title}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/62">
          {project.description}
        </p>
        <ul className="mt-4 space-y-1.5">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 text-sm leading-5 text-white/58">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: project.color }} />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto">
        <div className="mb-3 flex flex-wrap gap-2">
          {project.tech.slice(0, 8).map((tech) => (
            <span key={tech} className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-white/56">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <ActionLink
            href={project.demoUrl}
            icon={project.demoLabel === "Demo Video" ? FaPlayCircle : FaExternalLinkAlt}
            onClick={onProjectAction}
          >
            {project.demoLabel}
          </ActionLink>
          <ActionLink href={project.githubUrl} icon={FaGithub} onClick={onProjectAction} variant="secondary">
            GitHub
          </ActionLink>
        </div>
      </div>
    </div>
    {isViewed ? <ViewedBadge /> : null}
  </motion.article>
);

const ProjectCard = ({ project, index, isViewed, onProjectAction }) => (
  <motion.article
    className="relative flex h-full flex-col rounded-lg border border-white/10 bg-white/[0.032] p-4 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.055]"
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ delay: Math.min(index * 0.035, 0.24), duration: 0.35 }}
  >
    <div className="flex flex-1 flex-col">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-xl font-bold text-white">{project.title}</h3>
          <p className="mt-1 text-sm text-white/42">{project.subtitle}</p>
        </div>
        <span
          className="rounded-md px-2 py-1 font-mono text-[10px] font-semibold uppercase"
          style={{ backgroundColor: `${project.color}1f`, color: project.color }}
        >
          {project.mark}
        </span>
      </div>
      <p className="line-clamp-3 text-sm leading-6 text-white/56">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.slice(0, 5).map((tech) => (
          <span key={tech} className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-[11px] text-white/50">
            {tech}
          </span>
        ))}
        {project.tech.length > 5 ? (
          <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-[11px] text-white/42">
            +{project.tech.length - 5}
          </span>
        ) : null}
      </div>
      <div className="mt-auto flex flex-wrap gap-3 pt-6">
        <ActionLink
          href={project.demoUrl}
          icon={project.demoLabel === "Demo Video" ? FaPlayCircle : FaExternalLinkAlt}
          onClick={onProjectAction}
        >
          {project.demoLabel}
        </ActionLink>
        <ActionLink href={project.githubUrl} icon={FaGithub} onClick={onProjectAction} variant="secondary">
          GitHub
        </ActionLink>
      </div>
    </div>
    {isViewed ? <ViewedBadge /> : null}
  </motion.article>
);

const ProjectPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [viewedProjectIds, setViewedProjectIds] = useState(() => {
    if (typeof window === "undefined") {
      return [];
    }

    try {
      return JSON.parse(window.localStorage.getItem("viewedProjectIds") || "[]");
    } catch {
      return [];
    }
  });

  const featuredProjects = projects
    .filter((project) => project.featured)
    .sort((firstProject, secondProject) => {
      return featuredProjectOrder.indexOf(firstProject.id) - featuredProjectOrder.indexOf(secondProject.id);
    });
  const liveCount = projects.filter((project) => project.demoUrl).length;
  const githubCount = projects.filter((project) => project.githubUrl).length;

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory = activeCategory === "All" || project.category === activeCategory;
      const haystack = [
        project.title,
        project.subtitle,
        project.category,
        project.description,
        project.tech.join(" "),
        project.highlights.join(" ")
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && (!normalizedQuery || haystack.includes(normalizedQuery));
    });
  }, [activeCategory, query]);

  const markProjectViewed = (projectId) => {
    setViewedProjectIds((currentIds) => {
      if (currentIds.includes(projectId)) {
        return currentIds;
      }

      const nextIds = [...currentIds, projectId];
      window.localStorage.setItem("viewedProjectIds", JSON.stringify(nextIds));
      return nextIds;
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/82 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-6">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-400 text-sm font-black text-slate-950">
              OH
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-sm font-semibold text-white">{owner.name}</span>
              <span className="block truncate text-xs text-white/42">Projects Portfolio</span>
            </span>
          </a>
          <div className="flex items-center gap-2">
            <a
              href={owner.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/64 transition hover:border-white/25 hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href={owner.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/64 transition hover:border-white/25 hover:text-white"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="grid-pattern absolute inset-0 opacity-[0.08]" />
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-20">
            <motion.div
              className="max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <p className="font-mono text-sm font-semibold uppercase text-teal-300">CV Project Index</p>
              <h1 className="mt-4 font-display text-4xl font-black text-white sm:text-5xl md:text-6xl">
                Omar Hany Projects
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/62">
                A focused portfolio of shipped web apps, AI products, backend systems, data projects, security work,
                and embedded prototypes.
              </p>
            </motion.div>

            <motion.div
              className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.4 }}
            >
              {[
                { label: "Projects", value: projects.length },
                { label: "Live demos", value: liveCount },
                { label: "GitHub links", value: githubCount },
                { label: "Categories", value: categories.length - 1 }
              ].map((stat) => (
                <div key={stat.label} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                  <div className="font-display text-3xl font-bold text-white">{stat.value}</div>
                  <div className="mt-1 text-sm text-white/46">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="border-b border-white/10 py-12">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mb-7 flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-xs font-semibold uppercase text-teal-300">Selected Work</p>
                <h2 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">Featured Projects</h2>
              </div>
              <a
                href="#directory"
                className="hidden h-10 items-center gap-2 rounded-lg border border-white/10 px-3 text-sm font-semibold text-white/70 transition hover:border-white/25 hover:text-white sm:inline-flex"
              >
                Directory
                <FaArrowRight className="text-xs" />
              </a>
            </div>
            <div className="space-y-5">
              {featuredProjects.map((project, index) => (
                <FeaturedProject
                  key={project.id}
                  project={project}
                  index={index}
                  isViewed={viewedProjectIds.includes(project.id)}
                  onProjectAction={() => markProjectViewed(project.id)}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="directory" className="py-12">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mb-7 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="font-mono text-xs font-semibold uppercase text-teal-300">Project Directory</p>
                <h2 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">All Projects</h2>
              </div>
              <label className="relative block w-full lg:w-[360px]">
                <span className="sr-only">Search projects</span>
                <FaSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-white/35" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search by name, tech, or category"
                  className="h-11 w-full rounded-lg border border-white/10 bg-white/[0.035] pl-10 pr-10 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-teal-300/50"
                />
                {query ? (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    aria-label="Clear search"
                    className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-white/45 transition hover:bg-white/10 hover:text-white"
                  >
                    <FaTimes className="text-xs" />
                  </button>
                ) : null}
              </label>
            </div>

            <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`h-10 shrink-0 rounded-lg border px-3 text-sm font-semibold transition ${
                    activeCategory === category
                      ? "border-teal-300 bg-teal-300 text-slate-950"
                      : "border-white/10 bg-white/[0.03] text-white/58 hover:border-white/25 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="mb-5 text-sm text-white/42">
              {filteredProjects.length} project{filteredProjects.length === 1 ? "" : "s"}
            </div>

            {filteredProjects.length ? (
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    isViewed={viewedProjectIds.includes(project.id)}
                    onProjectAction={() => markProjectViewed(project.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-8 text-center text-white/50">
                No matching projects.
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-sm text-white/42 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>{owner.name} Projects Portfolio</span>
          <a href={`mailto:${owner.email}`} className="transition hover:text-white">
            {owner.email}
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ProjectPortfolio;
