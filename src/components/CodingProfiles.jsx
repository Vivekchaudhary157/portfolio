import { Github, Linkedin, Code2, ArrowUpRight } from "lucide-react";
import useReveal from "../hooks/useReveal.js";

const PROFILES = [
  {
    label: "GitHub",
    username: "Vivekchaudhary157",
    href: "https://github.com/Vivekchaudhary157",
    icon: Github,
    note: "Where my code and practice repositories live.",
  },
  {
    label: "LeetCode",
    username: "Vivek_923402",
    href: "https://leetcode.com/u/Vivek_923402/",
    icon: Code2,
    note: "Practicing problem-solving and data structures.",
  },
  {
    label: "LinkedIn",
    username: "Vivek Kumar",
    href: "https://www.linkedin.com/in/vivek-kumar-6312033ab?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: Linkedin,
    note: "Professional updates and networking.",
  },
];

export default function CodingProfiles() {
  const ref = useReveal();

  return (
    <section id="profiles" className="border-t border-line py-24">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">
          Let&apos;s connect &amp; code
        </h2>
        <p className="mt-3 max-w-xl text-inkSoft leading-relaxed">
          Find my work and progress across these platforms.
        </p>

        <div ref={ref} className="reveal mt-12 grid gap-6 sm:grid-cols-3">
          {PROFILES.map(({ label, username, href, icon: Icon, note }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-lg border border-line bg-paper p-6 transition-all hover:-translate-y-1 hover:border-accent"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accentSoft text-accentDeep">
                  <Icon size={20} />
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-inkSoft/50 transition-colors group-hover:text-accent"
                />
              </div>
              <h3 className="mt-4 font-display text-lg text-ink">{label}</h3>
              <p className="mt-1 font-mono text-sm text-inkSoft">
                {username}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-inkSoft">
                {note}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
