window.addEventListener("load", () => {
  const img = document.querySelector(".fv-img");
  img.classList.add("is-loaded");
});

const targets = document.querySelectorAll(".img-fade");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  },
);

targets.forEach((el) => observer.observe(el));

if ("scrollRestoration" in history) {
  history.scrollRestoration = "auto";
}

const btn = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btn.classList.add("is-show");
  } else {
    btn.classList.remove("is-show");
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const hamburger = document.querySelector(".hamburger");
const spNav = document.querySelector(".sp-nav");

function toggleMenu() {
  hamburger.classList.toggle("active");
  spNav.classList.toggle("open");

  const isOpen = hamburger.classList.contains("active");
  hamburger.setAttribute("aria-expanded", isOpen);
}

hamburger.addEventListener("click", toggleMenu);

document.querySelectorAll(".sp-nav a").forEach((link) => {
  link.addEventListener("click", toggleMenu);
});
