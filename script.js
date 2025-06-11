function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: "smooth" });
}

function toggleTheme() {
  console.log("Theme toggle clicked");
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme === "light" ? "dark" : "light";
  console.log("Current theme:", html.dataset.theme);
  const themeToggleIcon = document.querySelector(".theme-toggle i");
  if (html.dataset.theme === "light") {
    themeToggleIcon.classList.remove("fa-moon");
    themeToggleIcon.classList.add("fa-sun");
  } else {
    themeToggleIcon.classList.remove("fa-sun");
    themeToggleIcon.classList.add("fa-moon");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const typed = new Typed("#typing", {
    strings: ["Hi, I'm Rachit Ahlawat"],
    typeSpeed: 80,
    backSpeed: 40,
    loop: true,
    showCursor: true,
  });
});

AOS.init();
