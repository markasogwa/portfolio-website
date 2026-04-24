"use client";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "HTML/CSS",
    ],
    icon: "🎨",
  },
  {
    category: "Backend",
    skills: ["Node.js", "Next.js", "Express", "REST APIs", "Authentication", "JWT"],
    icon: "⚙️",
  },
  {
    category: "CMS & E-commerce",
    skills: ["WordPress", "WooCommerce", "Custom Plugins", "Elementor", "REST API"],
    icon: "🛒",
  },
  {
    category: "Database",
    skills: ["MongoDB", "PostgreSQL", "Prisma", "MySQL"],
    icon: "🗄️",
  },
  {
    category: "Tools & Others",
    skills: ["Git & GitHub", "Vercel", "Postman", "VS Code", "CI/CD Pipeline"],
    icon: "🛠️",
  },
];

export default function Skills() {
  return (
    <section className="py-24 border-t border-white/10 bg-linear-to-b from-transparent to-blue-950/10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Technologies I work with to build modern web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={category.category}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 hover:bg-white/10 transition-all card-hover animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-white">
                  {category.category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-gray-300 hover:text-white hover:border-blue-500/40 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Always learning and exploring new technologies to build better
            solutions
          </p>
        </div>
      </div>
    </section>
  );
}
