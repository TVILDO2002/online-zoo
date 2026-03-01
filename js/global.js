const burgerBtn = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenuBtn = document.getElementById("closeMenuBtn");

function openMenu() {
  mobileMenu.classList.add("is-open");
  document.body.classList.add("menu-open");
  burgerBtn.setAttribute("aria-expanded", "true");
  mobileMenu.setAttribute("aria-hidden", "false");
}

function closeMenu() {
  mobileMenu.classList.remove("is-open");
  document.body.classList.remove("menu-open");
  burgerBtn.setAttribute("aria-expanded", "false");
  mobileMenu.setAttribute("aria-hidden", "true");
}

burgerBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);

// close when clicking on overlay (outside panel)
mobileMenu.addEventListener("click", (e) => {
  if (e.target === mobileMenu) closeMenu();
});

// close on ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

// close when user clicks a link
mobileMenu.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", closeMenu);
});