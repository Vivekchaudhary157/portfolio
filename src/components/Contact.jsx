import { useState } from "react";
import { Github, Linkedin, Code2, Send, CheckCircle2 } from "lucide-react";
import useReveal from "../hooks/useReveal.js";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Vivekchaudhary157", icon: Github },
  { label: "LeetCode", href: "https://leetcode.com/u/Vivek_923402/", icon: Code2 },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vivek-kumar-6312033ab?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: Linkedin,
  },
];

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...form }),
      });
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="border-t border-line bg-paperDim/40 py-24">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">
          Have an idea or want to connect?
        </h2>
        <p className="mt-3 max-w-xl text-inkSoft leading-relaxed">
          Send me a message and I&apos;ll get back to you as soon as I can.
        </p>

        <div ref={ref} className="reveal mt-12 grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          {status === "success" ? (
            <div className="flex flex-col items-start gap-3 rounded-lg border border-accent/30 bg-accentSoft/60 p-8">
              <CheckCircle2 className="text-accent" size={28} />
              <p className="font-display text-xl text-ink">
                Message sent, thank you.
              </p>
              <p className="text-sm text-inkSoft">
                I&apos;ll read it and reply as soon as I can.
              </p>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don&apos;t fill this out: <input name="bot-field" />
                </label>
              </p>

              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-md border border-line bg-paper px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-line bg-paper px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-md border border-line bg-paper px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
                  placeholder="What's on your mind?"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-accent disabled:opacity-60"
              >
                <Send size={15} />
                {status === "submitting" ? "Sending..." : "Send message"}
              </button>

              {status === "error" && (
                <p className="text-sm text-red-600">
                  Something went wrong sending your message. Please try again,
                  or reach me directly via the links alongside.
                </p>
              )}
            </form>
          )}

          <div className="flex flex-col justify-between rounded-lg border border-line bg-paper p-6">
            <div>
              <p className="text-sm font-medium text-ink">Email</p>
              <p className="mt-1 text-sm text-inkSoft">[Your Email]</p>
            </div>
            <div className="mt-6">
              <p className="text-sm font-medium text-ink">
                Find me elsewhere
              </p>
              <div className="mt-3 flex gap-3">
                {SOCIALS.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-inkSoft transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
