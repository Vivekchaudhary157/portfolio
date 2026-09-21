import { Github, Linkedin, Code2 } from "lucide-react";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Vivekchaudhary157", icon: Github },
  { label: "LeetCode", href: "https://leetcode.com/u/Vivek_923402/", icon: Code2 },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vivek-kumar-6312033ab?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: Linkedin,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-content flex-col items-center gap-4 px-5 text-center sm:flex-row sm:justify-between sm:text-left sm:px-8">
        <p className="text-sm text-inkSoft">
          © {new Date().getFullYear()} Vivek Kumar. Built while learning.
        </p>
        <div className="flex gap-3">
          {SOCIALS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-inkSoft transition-colors hover:border-accent hover:text-accent"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
