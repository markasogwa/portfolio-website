import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  stack,
  live,
  github,
  image,
}) {
  const stackArray = stack.split(", ");

  return (
    <div className="group border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/30 transition-all card-hover bg-black">
      {/* Project Image */}
      {image ? (
        <div className="relative w-full aspect-video overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950">
          <Image
            src={image}
            alt={`Screenshot of ${title}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
            {live && live !== "#" && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo
              </a>
            )}
            {github && github !== "#" && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/10 border border-white/30 text-white rounded-lg font-medium hover:bg-white/20 transition"
                onClick={(e) => e.stopPropagation()}
              >
                View Code
              </a>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full aspect-video bg-gradient-to-br from-blue-950/30 to-purple-950/30 flex items-center justify-center border-b border-white/10">
          <span className="text-6xl opacity-30">💻</span>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {stackArray.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-blue-500/10 border border-blue-500/20 rounded text-gray-300 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links - Only show if not placeholder */}
        {((live && live !== "#") || (github && github !== "#")) && (
          <div className="flex gap-4 text-sm pt-4 border-t border-white/10">
            {live && live !== "#" && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${title}`}
                className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors group/link"
              >
                Live Demo
                <span className="group-hover/link:translate-x-0.5 transition-transform">
                  ↗
                </span>
              </a>
            )}
            {github && github !== "#" && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View source code of ${title}`}
                className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors group/link"
              >
                GitHub
                <span className="group-hover/link:translate-x-0.5 transition-transform">
                  ↗
                </span>
              </a>
            )}
          </div>
        )}

        {/* Coming Soon indicator */}
        {(!live || live === "#") && (!github || github === "#") && (
          <div className="text-xs text-gray-500 pt-4 border-t border-white/10">
            🚧 Links coming soon
          </div>
        )}
      </div>
    </div>
  );
}
