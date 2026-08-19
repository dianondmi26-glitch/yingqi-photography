const items = document.querySelectorAll(
  ".intro, .chapter-heading, .spread, .triptych, .quote-section blockquote, .diptych, .body-copy, .project-list a, .info-grid"
);

items.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

items.forEach((el) => observer.observe(el));
