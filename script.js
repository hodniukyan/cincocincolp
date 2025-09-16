document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section-azul, .section-laranja");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("section-show");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  sections.forEach((section) => observer.observe(section));
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

[...document.querySelectorAll("*")]
  .filter((el) => el.offsetWidth > document.documentElement.clientWidth)
  .map((el) => ({ tag: el.tagName, cls: el.className, w: el.offsetWidth }));
