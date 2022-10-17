const menudesplegable = document.querySelector(".menu_desplegable");
const navMenu = document.querySelector(".menu");

menudesplegable.addEventListener("click", () => {
  menudesplegable.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".link").forEach((n) =>
  n.addEventListener("click", () => {
    menudesplegable.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
