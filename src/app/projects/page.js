import ProjectCard from "@/components/ProjectCard";
import ProjectsPageHero from "@/components/ProjectsPageHero";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Mini POS / Airtime Recharge Platform",
      description:
        "Wallet-based web app allowing users to fund wallets, recharge airtime, and track transactions in real-time. Secure, reliable, and scalable.",
      stack:
        "Next.js, Node.js, MongoDB, Paystack, Monnify, VTPass, Tailwind CSS",
      live: "#",
      github: "#",
      image: "/projects/pos.png",
    },
    {
      title: "Movie Discovery & Favorites App",
      description:
        "Responsive web app for searching, saving, and managing favorite movies. Features profile management and search history.",
      stack: "React, Next.js, PostgreSQL, Tailwind CSS",
      live: "#",
      github: "#",
      image: "/projects/movies.png",
    },
    {
      title: "Authentication & Role-Based Dashboards",
      description:
        "Full authentication system with role-based access, secure sessions, and protected dashboards. Includes reusable components and API protection.",
      stack: "Next.js, Node.js, Express, MongoDB, JWT, Tailwind CSS",
      live: "#",
      github: "#",
      image: "/projects/auth.png",
    },
    {
      title: "Client Business Website",
      description:
        "Modern, responsive, SEO-friendly website delivered for a client. Optimized for performance, usability, and maintainability.",
      stack: "Next.js, Tailwind CSS, React",
      live: "#",
      github: "#",
      image: "/projects/client.png",
    },
  ];

  return (
    <section className="bg-black min-h-screen">
      <ProjectsPageHero />

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
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
        <div className="bg-gradient-to-r from-blue-950/30 to-purple-950/30 border border-white/10 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-gray-400 mb-6 text-lg">
            I build production-ready web applications, dashboards, and systems
            that scale. Let's discuss your project.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
