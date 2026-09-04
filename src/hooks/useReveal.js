import { useEffect } from "react";

/**
 * Reveal-on-scroll, ported from the original vanilla RevealOnScroll.
 * Observes every `.section` in the document and, when one enters the
 * viewport, staggers the `.visible` class onto its `.reveal` children.
 *
 * Pass a dependency (e.g. the route/member id) so it re-initialises when
 * the page content changes.
 */
export function useReveal(dep, options = {}) {
  const {
    sectionSelector = ".section",
    staggerDelay = 100,
    visibleClass = "visible",
    // threshold 0 = fire as soon as any pixel of the section is visible.
    // A fractional threshold (e.g. 0.15) never triggers on mobile, where a
    // single-column section is far taller than the viewport, so 15% of it can
    // never be on screen at once — which left pages blank until scrolled.
    threshold = 0,
    rootMargin = "0px 0px -40px 0px",
  } = options;

  useEffect(() => {
    const sections = document.querySelectorAll(sectionSelector);
    if (!sections.length) return;

    const revealWithDelay = (section) => {
      const reveals = section.querySelectorAll(".reveal");
      reveals.forEach((el, index) => {
        setTimeout(() => el.classList.add(visibleClass), index * staggerDelay);
      });
    };

    if (!("IntersectionObserver" in window)) {
      sections.forEach(revealWithDelay);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealWithDelay(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dep]);
}
