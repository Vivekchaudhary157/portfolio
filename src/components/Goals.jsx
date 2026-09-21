import useReveal from "../hooks/useReveal.js";

const GOALS = [
  "Strengthen my programming fundamentals",
  "Build real-world projects",
  "Improve problem-solving skills",
  "Learn backend development",
  "Work with databases",
  "Explore AI/ML",
  "Build a strong developer portfolio",
];

export default function Goals() {
  const ref = useReveal();

  return (
    <section className="border-t border-line py-24">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">
          My goals
        </h2>
        <p className="mt-3 max-w-xl text-inkSoft leading-relaxed">
          Where I&apos;m aiming next — realistic, and one step at a time.
        </p>

        <div ref={ref} className="reveal mt-10 flex flex-wrap gap-3">
          {GOALS.map((goal) => (
            <span
              key={goal}
              className="rounded-full border border-line bg-paper px-4 py-2.5 text-sm font-medium text-inkSoft transition-colors hover:border-accent hover:text-accentDeep"
            >
              {goal}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
