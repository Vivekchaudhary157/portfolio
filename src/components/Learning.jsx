import useReveal from "../hooks/useReveal.js";

const JOURNEY = [
  { emoji: "🐍", label: "Python", note: "Deepening core language skills." },
  { emoji: "⚙️", label: "Backend Development", note: "Just getting started." },
  { emoji: "🗄️", label: "MySQL & Databases", note: "Learning queries and schema design." },
  { emoji: "🌐", label: "Web Development", note: "Practicing HTML, CSS and layout." },
  { emoji: "🤖", label: "AI/ML Fundamentals", note: "On the horizon, after the basics." },
];

export default function Learning() {
  const ref = useReveal();

  return (
    <section className="border-t border-line bg-paperDim/40 py-24">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">
          Currently learning
        </h2>
        <p className="mt-3 max-w-xl text-inkSoft leading-relaxed">
          A snapshot of what I&apos;m actively working through right now.
        </p>

        <div ref={ref} className="reveal mt-12">
          <ol className="relative space-y-8 border-l-2 border-line pl-8 sm:space-y-10">
            {JOURNEY.map((item, i) => (
              <li key={item.label} className="relative">
                <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full border-2 border-accent bg-paper text-sm">
                  {item.emoji}
                </span>
                <p className="font-medium text-ink">
                  {i + 1}. {item.label}
                </p>
                <p className="mt-1 text-sm text-inkSoft">{item.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
