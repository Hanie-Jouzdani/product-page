//oppening and closing responsive navbar
const openBtn = document.getElementById("icon-menu");
const closeBtn = document.getElementById("closed-icon-menu");
const sideNav = document.getElementById("side-nav");

openBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

function openMenu() {
    sideNav.style.display = "block";
}

function closeMenu() {
    sideNav.style.display = "none"
}
