const menu = document.getElementById("menuBtn");
const navbarSmall = document.getElementById("nav-links");
const closeBtn = document.getElementById("closeBtn");

menu.addEventListener("click", function () {
  navbarSmall.classList.add("is-visible");
  closeBtn.classList.add("is-visible");
});

closeBtn.addEventListener("click", function () {
  navbarSmall.classList.remove("is-visible");
  closeBtn.classList.add("is-visible");
});
