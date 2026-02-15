"use client";

import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully! I'll get back to you soon.");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus(
          "❌ Something went wrong. Please try again or email me directly.",
        );
      }
    } catch (error) {
      console.error(error);
      setStatus(
        "❌ Something went wrong. Please try again or email me directly.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-32 pb-20 bg-black min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you. Send me a message or reach out through any of the
            platforms below.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <a
            href="mailto:mark.asogwa@gmail.com"
            className="flex flex-col items-center gap-3 p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/30 hover:bg-white/10 transition-all group"
          >
            <FaEnvelope className="text-3xl text-blue-400 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">Email</span>
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/30 hover:bg-white/10 transition-all group"
          >
            <FaGithub className="text-3xl text-blue-400 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/30 hover:bg-white/10 transition-all group"
          >
            <FaLinkedin className="text-3xl text-blue-400 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>

          <a
            href="https://wa.me/234xxxxxxxxxx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/30 hover:bg-white/10 transition-all group"
          >
            <FaWhatsapp className="text-3xl text-blue-400 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">WhatsApp</span>
          </a>
        </div>

        {/* Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10">
            <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  placeholder="Tell me about your project or how I can help..."
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-4 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50 text-white rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>

            {status && (
              <div
                className={`mt-6 p-4 rounded-lg text-center ${
                  status.includes("✅")
                    ? "bg-green-500/10 border border-green-500/20 text-green-400"
                    : status.includes("❌")
                      ? "bg-red-500/10 border border-red-500/20 text-red-400"
                      : "bg-blue-500/10 border border-blue-500/20 text-blue-400"
                }`}
              >
                {status}
              </div>
            )}
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center text-gray-400 text-sm">
            <p>
              Prefer email? Reach me directly at{" "}
              <a
                href="mailto:mark.asogwa@gmail.com"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                mark.asogwa@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
