const skills = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Authentication Basics"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "Mongoose", "SQL Basics", "File Persistence"],
  },
  {
    title: "Programming",
    items: ["C++", "Python", "JavaScript", "Problem Solving"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "npm"],
  },
  {
    title: "AI/ML",
    items: ["ML Basics", "NLP Basics", "Data Preprocessing", "Model Training"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <p className="text-cyan-400 font-medium mb-3">Technical Skills</p>

        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Tools & Technologies I Work With
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:-translate-y-1 hover:border-cyan-400 transition"
            >
              <h3 className="text-xl font-semibold mb-5">
                {skill.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm bg-slate-950 border border-slate-800 text-slate-300 px-3 py-1.5 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;