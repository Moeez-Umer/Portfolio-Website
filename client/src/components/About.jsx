const About = () => {
  return (
    <section id="about" className="py-20 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-cyan-400 font-medium mb-3">About Me</p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            CS Student Building Real-World Software Projects
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed">
            I am a BSCS student focused on full-stack web development and
            AI/ML. I am currently learning the MERN stack while building
            practical projects that improve my skills in frontend, backend,
            databases, APIs, and software engineering.
          </p>

          <p className="text-slate-400 text-lg leading-relaxed mt-4">
            My goal is to become job-ready for internships, remote roles, and
            junior developer opportunities by creating strong portfolio projects
            with clean code and real-world use cases.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-5">
            Current Focus
          </h3>

          <div className="space-y-4">
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
              <h4 className="text-cyan-400 font-semibold">
                Full-Stack Development
              </h4>
              <p className="text-slate-400 text-sm mt-1">
                React, Tailwind CSS, Node.js, Express.js, MongoDB
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
              <h4 className="text-cyan-400 font-semibold">
                AI/ML Engineering
              </h4>
              <p className="text-slate-400 text-sm mt-1">
                Python, machine learning basics, NLP, data preprocessing
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
              <h4 className="text-cyan-400 font-semibold">
                Systems & Databases
              </h4>
              <p className="text-slate-400 text-sm mt-1">
                C++, vector database, search algorithms, persistence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;