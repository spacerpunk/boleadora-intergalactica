class RevealOnScroll {
  constructor(sectionSelector, options = {}) {
    this.sectionSelector = sectionSelector;
    this.staggerDelay = options.staggerDelay || 120;
    this.visibleClass = options.visibleClass || "visible";
    this.threshold = options.threshold || 0.25;
    this.rootMargin = options.rootMargin || "0px";
    this._observer = null;
    this.sections = null;
  }

  init() {
    this.sections = document.querySelectorAll(this.sectionSelector);

    if (!("IntersectionObserver" in window)) {
      this._revealAll();
      return;
    }

    this._observer = new IntersectionObserver(this._onIntersect.bind(this), {
      threshold: this.threshold,
      rootMargin: this.rootMargin,
    });

    this.sections.forEach((section) => this._observer.observe(section));
  }

  _revealAll() {
    this.sections.forEach((section) => {
      const reveals = section.querySelectorAll(".reveal");
      reveals.forEach((el) => el.classList.add(this.visibleClass));
    });
  }

  _onIntersect(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this._revealWithDelay(entry.target);
        this._observer.unobserve(entry.target);
      }
    });
  }

  _revealWithDelay(section) {
    const reveals = section.querySelectorAll(".reveal");

    reveals.forEach((sectionElement, index) => {
      setTimeout(() => {
        sectionElement.classList.add(this.visibleClass);
      }, index * this.staggerDelay);
    });
  }
}

// Reusable initializer — pages call this after their content is rendered.
function initReveal() {
  const revealSections = new RevealOnScroll(".section", {
    staggerDelay: 100,
    visibleClass: "visible",
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px",
  });
  revealSections.init();
}
