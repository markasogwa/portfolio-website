"use client";

import Link from "next/link";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-20 pb-16">
        <div className="text-center space-y-8">
          {/* Greeting */}
          <div className="inline-block">
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400 font-medium">
              👋 Available for hire
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight animate-fade-in-up">
            Hi, I'm <span className="text-gradient glow">Mark Asogwa</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Fullstack Developer building{" "}
            <span className="text-white font-medium">scalable</span>,{" "}
            <span className="text-white font-medium">secure</span>, and{" "}
            <span className="text-white font-medium">user-friendly</span> web
            applications
          </p>

          {/* Tech Stack Highlight */}
          <div
            className="flex flex-wrap justify-center gap-3 text-sm text-gray-400 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">
              Next.js
            </span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">
              React
            </span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">
              Node.js
            </span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">
              MongoDB
            </span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">
              PostgreSQL
            </span>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap justify-center gap-4 pt-4 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Link
              href="/projects"
              className="group px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105"
            >
              View My Work
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 rounded-lg font-semibold transition-all"
            >
              Get In Touch
            </Link>
          </div>

          {/* Social Links */}
          <div
            className="flex justify-center gap-6 pt-8 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-2xl hover:scale-110 transform duration-200"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-2xl hover:scale-110 transform duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <FaArrowDown className="text-gray-600 text-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
