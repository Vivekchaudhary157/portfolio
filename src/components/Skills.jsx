import useReveal from "../hooks/useReveal.js";

const SKILL_GROUPS = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", note: "Structuring semantic, accessible pages." },
      { name: "CSS", note: "Styling layouts, responsiveness and detail." },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "C", note: "Learned core logic, loops and memory basics." },
      { name: "Python", note: "Practicing scripts, logic and problem-solving." },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", note: "Learning queries, tables and relationships." },
    ],
  },
];

const EXPLORING = ["Backend Development", "APIs", "AI/ML Fundamentals"];

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="border-t border-line bg-paperDim/40 py-24">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">Skills</h2>
        <p className="mt-3 max-w-xl text-inkSoft leading-relaxed">
          Technologies I currently work with, and what I use them for.
        </p>

        <div ref={ref} className="reveal mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              className="rounded-lg border border-line bg-paper p-6"
            >
              <h3 className="font-display text-lg text-accentDeep">
                {group.title}
              </h3>
              <div className="mt-4 space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <p className="font-medium text-ink">{skill.name}</p>
                    <p className="mt-1 text-sm text-inkSoft leading-relaxed">
                      {skill.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-dashed border-accent/50 bg-accentSoft/60 p-6">
          <h3 className="font-display text-lg text-accentDeep">
            Currently exploring
          </h3>
          <p className="mt-1 text-sm text-inkSoft">
            Not yet a current skill — actively learning these next.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {EXPLORING.map((item) => (
              <span
                key={item}
                className="rounded-full border border-accent/40 bg-paper px-3.5 py-1.5 text-sm font-medium text-accentDeep"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
