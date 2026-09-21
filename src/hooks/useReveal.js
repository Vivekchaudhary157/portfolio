import { useEffect, useRef } from "react";

/**
 * Adds a "reveal" fade/slide-in animation to an element the first time
 * it scrolls into view. Respects prefers-reduced-motion via CSS.
 */
export default function useReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
