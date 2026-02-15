import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="pt-32 pb-20 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-xl text-gray-400">
            Developer, problem solver, and continuous learner
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Image/Avatar Placeholder */}
          <div className="md:col-span-1">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-950/30 to-purple-950/30 border border-white/10 flex items-center justify-center">
              <span className="text-8xl">👨‍💻</span>
            </div>
          </div>

          {/* Story */}
          <div className="md:col-span-2 space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Hi, I'm{" "}
              <span className="text-white font-semibold">Mark Asogwa</span>, a
              fullstack developer passionate about building web applications
              that solve real problems and deliver exceptional user experiences.
            </p>

            <p>
              I specialize in modern JavaScript technologies, with expertise in
              <span className="text-blue-400"> Next.js</span>,
              <span className="text-blue-400"> React</span>, and
              <span className="text-blue-400"> Node.js</span>. I love working on
              the full stack—from designing intuitive user interfaces to
              building robust backend systems and databases.
            </p>

            <p>
              My journey in web development started with a curiosity about how
              websites work, and it has evolved into a deep passion for creating
              scalable, secure, and maintainable applications. I'm constantly
              learning new technologies and best practices to stay at the
              forefront of web development.
            </p>

            <p>
              When I'm not coding, I enjoy exploring new technologies,
              contributing to open-source projects, and sharing knowledge with
              the developer community. I believe in writing clean, maintainable
              code and building products that make a difference.
            </p>
          </div>
        </div>

        {/* What I Do */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">What I Do</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-all">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2">
                Frontend Development
              </h3>
              <p className="text-gray-400">
                Building responsive, interactive user interfaces with React,
                Next.js, and modern CSS frameworks like Tailwind.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-all">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold mb-2">
                Backend Development
              </h3>
              <p className="text-gray-400">
                Creating RESTful APIs, authentication systems, and server-side
                logic with Node.js, Express, and various databases.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-all">
              <div className="text-4xl mb-4">🗄️</div>
              <h3 className="text-xl font-semibold mb-2">Database Design</h3>
              <p className="text-gray-400">
                Designing efficient database schemas and working with both SQL
                (PostgreSQL) and NoSQL (MongoDB) databases.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-all">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-semibold mb-2">
                Authentication & Security
              </h3>
              <p className="text-gray-400">
                Implementing secure authentication, authorization, and data
                protection using JWT, OAuth, and industry best practices.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-all">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-xl font-semibold mb-2">
                Payment Integration
              </h3>
              <p className="text-gray-400">
                Integrating payment gateways like Paystack and Monnify for
                secure transaction processing.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-all">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">
                Deployment & DevOps
              </h3>
              <p className="text-gray-400">
                Deploying applications to production using Vercel, handling
                CI/CD, and ensuring optimal performance.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">My Approach</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="text-3xl">✨</div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Quality First</h3>
                <p className="text-gray-400">
                  I prioritize writing clean, maintainable code that follows
                  best practices and industry standards.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">🎯</div>
              <div>
                <h3 className="text-lg font-semibold mb-2">User-Centric</h3>
                <p className="text-gray-400">
                  Every decision is made with the end user in mind, ensuring
                  intuitive and delightful experiences.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">📚</div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Continuous Learning
                </h3>
                <p className="text-gray-400">
                  Technology evolves rapidly, and I'm committed to staying
                  current with the latest tools and techniques.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">🤝</div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Collaboration</h3>
                <p className="text-gray-400">
                  I believe great products are built through clear communication
                  and teamwork.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-950/30 to-purple-950/30 border border-white/10 rounded-2xl p-10">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-400 mb-6 text-lg">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
