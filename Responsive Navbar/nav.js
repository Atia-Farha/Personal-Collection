function toggleMenu() {
  const isOpen = document.body.classList.toggle("open");
  document.body.style.overflow = isOpen ? "hidden" : "";
}

document.addEventListener("click", function (event) {
  const menu = document.querySelector("nav");
  const menuToggle = document.querySelector(".menu-toggle");
  if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
    document.body.classList.remove("open");
    document.body.style.overflow = "";
  }
});
