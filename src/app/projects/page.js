import ProjectCard from "@/components/ProjectCard";
import ProjectsPageHero from "@/components/ProjectsPageHero";
import { projectsData } from "@/data/projects";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <section className="bg-black min-h-screen">
      <ProjectsPageHero />

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData
            .sort((a, b) => a.order - b.order)
            .map((project, index) => (
              <div
                key={project.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="bg-linear-to-r from-blue-950/30 to-purple-950/30 border border-white/10 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-gray-400 mb-6 text-lg">
            I build production-ready web applications, dashboards, and systems
            that scale. Let us discuss your project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://www.linkedin.com/in/asogwa-mark-okechukwu/"
              className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105"
            >
              Connect on LinkedIn
            </Link>
            <a
              href="mailto:asogwaoke@gmail.com"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 rounded-lg font-semibold transition-all"
            >
              Send an Email
            </a>

            <a
              href="https://wa.me/2348141996503"
              className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105"
            >
              WhatsApp Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
