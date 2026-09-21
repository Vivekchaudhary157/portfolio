import { Github, ExternalLink } from "lucide-react";
import useReveal from "../hooks/useReveal.js";

const PROJECTS = [
  {
    title: "Python Calculator",
    status: "Project Concept",
    description:
      "A beginner-friendly calculator application created to practice Python fundamentals — operators, functions and simple input handling.",
    tech: ["Python"],
    githubUrl: null,
    liveUrl: null,
  },
  {
    title: "Student Management System",
    status: "Coming Soon",
    description:
      "A database-oriented project concept for managing student records, built around Python and MySQL to practice CRUD operations.",
    tech: ["Python", "MySQL"],
    githubUrl: null,
    liveUrl: null,
  },
  {
    title: "Personal Portfolio",
    status: "In Progress",
    description:
      "This responsive portfolio website itself — showcasing my skills, education and coding profiles as I build it out.",
    tech: ["React", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/Vivekchaudhary157",
    liveUrl: null,
  },
  {
    title: "Web Development Practice",
    status: "Project Concept",
    description:
      "A collection of small HTML and CSS layout exercises to sharpen my front-end fundamentals before moving into frameworks.",
    tech: ["HTML", "CSS"],
    githubUrl: null,
    liveUrl: null,
  },
];

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" className="border-t border-line bg-paperDim/40 py-24">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">
          Projects
        </h2>
        <p className="mt-3 max-w-xl text-inkSoft leading-relaxed">
          I&apos;m early in my journey, so a few of these are concepts I&apos;m
          actively working towards rather than finished builds — each is
          labelled clearly.
        </p>

        <div ref={ref} className="reveal mt-12 grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="flex flex-col rounded-lg border border-line bg-paper p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg text-ink">
                  {project.title}
                </h3>
                <span className="whitespace-nowrap rounded-full bg-amberSoft px-2.5 py-1 text-xs font-semibold text-amber">
                  {project.status}
                </span>
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-inkSoft">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-paperDim px-2.5 py-1 font-mono text-xs text-inkSoft"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-line px-3 py-2 text-xs font-semibold text-ink hover:border-accent hover:text-accent transition-colors"
                  >
                    <Github size={14} /> GitHub
                  </a>
                )}
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-ink px-3 py-2 text-xs font-semibold text-paper hover:bg-accent transition-colors"
                  >
                    <ExternalLink size={14} /> Live demo
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-paperDim px-3 py-2 text-xs font-medium text-inkSoft/70">
                    Live demo unavailable yet
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
