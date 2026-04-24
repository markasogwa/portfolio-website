import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  stack,
  live,
  github,
  image,
  videoId,
}) {
  const stackArray = stack.split(", ");

  return (
    <div className="group border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/30 transition-all card-hover bg-black">
      {videoId ? (
        <div className="relative w-full aspect-video bg-gray-900">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?controls=1&modestbranding=0&rel=0&playsinline=1`}
            title={title}
            frameBorder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : image ? (
        <div className="relative w-full aspect-video bg-gray-900">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ) : (
        <div className="w-full aspect-video bg-blue-950/30 flex items-center justify-center">
          <span className="text-6xl opacity-30">💻</span>
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {stackArray.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-blue-500/10 border border-blue-500/20 rounded text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 text-sm pt-4 border-t border-white/10">
          {live && live !== "#" && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              Live Demo
            </a>
          )}
          {github && github !== "#" && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              GitHub
            </a>
          )}
          {(!live || live === "#") && (!github || github === "#") && (
            <span className="text-gray-500 text-xs">Links coming soon</span>
          )}
        </div>
      </div>
    </div>
  );
}
