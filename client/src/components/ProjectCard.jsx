import { motion } from "framer-motion";
const ProjectCard = ({ project }) => {
  return (
    <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-400 transition flex flex-col"
>
      <div className="h-44 bg-linear-to-br from-slate-800 to-slate-950 flex items-center justify-center border-b border-slate-800">
        <div className="text-center px-4">
          <p className="text-cyan-400 text-sm font-semibold mb-2">
            {project.category}
          </p>
          <h3 className="text-xl font-bold text-white">
            {project.title}
          </h3>
        </div>
      </div>

      <div className="p-6 flex flex-col grow">
        <p className="text-slate-400 leading-relaxed grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {project.tech.map((item) => (
            <span
              key={item}
              className="text-xs bg-slate-800 text-cyan-400 px-3 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-6">
          <a
            href={project.github}
            target="_blank"
            className="flex-1 text-center bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-400 hover:text-slate-950 transition"
          >
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            className="flex-1 text-center border border-slate-700 px-4 py-2 rounded-lg text-sm font-semibold hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;