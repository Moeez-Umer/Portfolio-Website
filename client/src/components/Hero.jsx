import { motion } from "framer-motion";
import { profile } from "../data/profile";
import profilePic from "../assets/images/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 pt-28 pb-16"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-cyan-400 font-medium mb-4">
            Hi, I&apos;m {profile.name}
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            BSCS Student & MERN Stack Developer
          </h1>

          <p className="mt-6 text-slate-400 text-lg max-w-xl">
            I build full-stack web applications and AI-powered projects while
            learning modern software engineering, databases, and machine learning.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="bg-cyan-400 text-slate-950 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition text-center"
            >
              View Projects
            </a>

            <a
              href={profile.resume}
              download
              className="border border-slate-700 px-6 py-3 rounded-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 transition text-center"
            >
              Download Resume
            </a>

            <a
              href={profile.github}
              target="_blank"
              className="border border-slate-700 px-6 py-3 rounded-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 transition text-center"
            >
              GitHub
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
              <h3 className="text-2xl font-bold text-cyan-400">4+</h3>
              <p className="text-slate-400 text-sm">Projects</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
              <h3 className="text-2xl font-bold text-cyan-400">MERN</h3>
              <p className="text-slate-400 text-sm">Stack</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
              <h3 className="text-2xl font-bold text-cyan-400">AI/ML</h3>
              <p className="text-slate-400 text-sm">Focus</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
              <h3 className="text-2xl font-bold text-cyan-400">C++</h3>
              <p className="text-slate-400 text-sm">Systems</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400 rounded-full blur-3xl opacity-20"></div>

            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-cyan-400/40 overflow-hidden bg-slate-900">
              <img
                src={profilePic}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;