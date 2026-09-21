import useReveal from "../hooks/useReveal.js";

const POINTS = [
  "Pursuing a Bachelor of Computer Applications (BCA) at Maharishi Dayanand University, Rohtak, from 2025 to 2028.",
  "Building programming fundamentals in C and Python, and getting comfortable with core web technologies — HTML and CSS.",
  "Learning MySQL and starting to explore how databases connect to real applications.",
  "Interested in web development now, with backend development next on my learning path.",
  "Planning to explore AI/ML once my fundamentals are solid.",
  "Enjoy solving programming problems and steadily improving my technical skills, one concept at a time.",
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="border-t border-line py-24">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <h2 className="font-display text-3xl text-ink sm:text-4xl">
              About me
            </h2>
            <p className="mt-4 text-inkSoft leading-relaxed">
              A short, honest introduction — where I am today, and where
              I&apos;m headed.
            </p>
          </div>

          <div ref={ref} className="reveal">
            <ul className="space-y-4">
              {POINTS.map((point, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-[1.02rem] leading-relaxed text-inkSoft"
                >
                  <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
