import { Github, Linkedin, Code2, ArrowDown } from "lucide-react";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/Vivekchaudhary157",
    icon: Github,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/Vivek_923402/",
    icon: Code2,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vivek-kumar-6312033ab?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: Linkedin,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_20%,black,transparent)]" />

      <div className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-accentSoft blur-3xl" />

      <div className="relative mx-auto w-full max-w-content px-5 sm:px-8">

        <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row">

          {/* LEFT SIDE */}
          <div className="flex-1">

            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-paper/80 px-3.5 py-1.5 text-sm text-inkSoft">
              <span className="h-2 w-2 rounded-full bg-accent" />
              BCA Student, Maharishi Dayanand University, Rohtak
            </p>

            <h1 className="font-display text-[2.6rem] leading-[1.05] text-ink sm:text-6xl md:text-7xl">
              Hi, I&apos;m Vivek Kumar
            </h1>

            <p className="mt-3 font-display text-2xl text-accentDeep sm:text-3xl">
              BCA student &amp; beginner developer
            </p>

            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-inkSoft">
              I&apos;m currently pursuing my Bachelor of Computer Applications
              (2025–2028) and building my programming foundations one project
              at a time — learning web development, backend basics, databases
              and Python as I go.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-md bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-accent"
              >
                View my projects
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-md border border-ink px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Contact me
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-inkSoft transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  <Icon size={19} />
                </a>
              ))}
            </div>

          </div>

          {/* RIGHT SIDE - PHOTO */}
          <div className="flex flex-1 justify-center md:justify-end">

            <div className="rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1.5 shadow-2xl">

              <img
                src="/profile.jpg"
                alt="Vivek Kumar"
                className="h-64 w-64 rounded-full border-4 border-white object-cover sm:h-72 sm:w-72"
              />

            </div>

          </div>

        </div>
      </div>

      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-inkSoft animate-bounce"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}