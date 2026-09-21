import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import useActiveSection from "../hooks/useActiveSection.js";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "profiles", label: "Coding Profiles" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(LINKS.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavigate = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-paper/70 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavigate("home");
          }}
          className="font-display text-lg font-semibold tracking-tight text-ink"
        >
          Vivek Kumar
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigate(link.id);
                }}
                className={`text-sm font-medium transition-colors ${
                  active === link.id
                    ? "text-accent"
                    : "text-inkSoft hover:text-ink"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-[64px] bottom-0 bg-paper/95 backdrop-blur-md transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-8">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigate(link.id);
                }}
                className={`block rounded-md px-3 py-3 text-base font-medium ${
                  active === link.id
                    ? "text-accent"
                    : "text-ink hover:bg-paperDim"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
