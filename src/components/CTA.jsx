import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-gradient-to-r from-blue-950/30 to-purple-950/30 border border-white/10 rounded-2xl p-12 sm:p-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            I'm currently available for freelance projects and full-time
            opportunities. Whether you need a complete web application or want
            to collaborate on something innovative, let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105"
            >
              Start a Conversation
            </Link>
            <a
              href="mailto:mark.asogwa@gmail.com"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 rounded-lg font-semibold transition-all"
            >
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
