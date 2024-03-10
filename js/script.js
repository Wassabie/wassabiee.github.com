// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika burger menu di klik
document.querySelector("#Burger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav

const burger = document.querySelector("#Burger-menu");

document.addEventListener("click", function (e) {
  if (!burger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
