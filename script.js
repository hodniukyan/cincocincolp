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

/* SCRIPTS CONTRAST */
document.addEventListener("DOMContentLoaded", () => {
  // Seleciona todos os botões de contraste
  const contrastButtons = document.querySelectorAll(".contrast-toggle");
  const body = document.body;

  const toggleContrast = () => {
    // Alterna a classe no body
    body.classList.toggle("contrast-mode");

    // Alterna imagens com data-contrast
    const images = document.querySelectorAll("img[data-contrast]");
    images.forEach((img) => {
      const currentSrc = img.getAttribute("src");
      const contrastSrc = img.getAttribute("data-contrast");
      img.setAttribute("src", contrastSrc);
      img.setAttribute("data-contrast", currentSrc);
    });
  };

  contrastButtons.forEach((btn) =>
    btn.addEventListener("click", toggleContrast)
  );
});

/* SCRIPT PRA NAO QUEBRAR A PAGINA */
[...document.querySelectorAll("*")]
  .filter((el) => el.offsetWidth > document.documentElement.clientWidth)
  .map((el) => ({ tag: el.tagName, cls: el.className, w: el.offsetWidth }));
