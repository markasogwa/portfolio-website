import { projectsData } from "@/data/projects";
import Link from "next/link";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  // sort and filter Featured projects for homepage
  const featuredProjects = projectsData
    .filter((project) => project.featured === true)
    .sort((a, b) => a.order - b.order)
    .slice(0, 2);

  return (
    <section className="py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-3">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg">
              A selection of my recent work and side projects
            </p>
          </div>
          <Link
            href="/projects"
            className="hidden sm:flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group"
          >
            View all projects
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="sm:hidden text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            View all projects
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
