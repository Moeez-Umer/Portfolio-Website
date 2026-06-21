const learningItems = [
  {
    title: "MERN Stack Development",
    description:
      "Building full-stack applications using MongoDB, Express.js, React, Node.js, and Tailwind CSS.",
  },
  {
    title: "AI/ML Fundamentals",
    description:
      "Learning machine learning basics, NLP concepts, data preprocessing, and model training workflows.",
  },
  {
    title: "Software Engineering",
    description:
      "Practicing Git/GitHub, clean code, APIs, database design, debugging, and project documentation.",
  },
  {
    title: "Data Structures & Algorithms",
    description:
      "Improving problem-solving skills using C++, arrays, strings, trees, graphs, and searching algorithms.",
  },
];

const Learning = () => {
  return (
    <section id="learning" className="py-20 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Learning <span className="text-cyan-400">Journey</span>
        </h2>

        <p className="text-slate-400 mb-10 max-w-2xl">
          My current focus is to become job-ready by building real-world
          full-stack and AI-powered projects.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {learningItems.map((item, index) => (
            <div
              key={item.title}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-400 transition"
            >
              <p className="text-cyan-400 font-bold mb-2">
                0{index + 1}
              </p>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Learning;