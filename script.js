function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Ensure scroll is at top on reload
window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});
