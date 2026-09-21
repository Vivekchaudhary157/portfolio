import useReveal from "../hooks/useReveal.js";

export default function Education() {
  const ref = useReveal();

  return (
    <section id="education" className="border-t border-line py-24">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">
          Education
        </h2>

        <div ref={ref} className="reveal mt-10 max-w-2xl">
          <div className="relative border-l-2 border-accent/30 pl-8">
            <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-paper" />
            <span className="inline-block rounded-full bg-accentSoft px-3 py-1 text-xs font-semibold text-accentDeep">
              Currently pursuing
            </span>
            <h3 className="mt-3 font-display text-xl text-ink">
              Bachelor of Computer Applications (BCA)
            </h3>
            <p className="mt-1 font-medium text-inkSoft">
              Maharishi Dayanand University, Rohtak
            </p>
            <p className="mt-1 text-sm text-inkSoft">2025 – 2027</p>
            <p className="mt-4 leading-relaxed text-inkSoft">
              Building a foundation in programming, databases, software
              development and computer applications — the coursework that
              underpins everything I&apos;m learning on my own alongside it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
