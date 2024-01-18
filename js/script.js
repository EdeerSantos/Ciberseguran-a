const hamburger = document.querySelector(".hamburger");
const nav__header = document.querySelector(".nav__header");

hamburger.addEventListener("click", () => nav__header.classList.toggle("active"));
