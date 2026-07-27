import { getLenis } from "../lib/lenis";

export function scrollToSection(id) {
  requestAnimationFrame(() => {
    setTimeout(() => {
      const el = document.getElementById(id);
      const lenis = getLenis();

      if (el && lenis) {
        lenis.scrollTo(el, { offset: 0, duration: 1.2 });
      } else if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 50);
  });
}