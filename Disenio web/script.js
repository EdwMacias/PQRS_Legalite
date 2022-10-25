const pqrs = `[
  {
    "asunto": "Peticion",
    "cliente": "Pintusuelas",
    "descripcion": "RUT 2022"
  },
  {
    "asunto": "Peticion",
    "cliente": "sufi",
    "descripcion": "Declaracion de renta 2020"
  },
  {
    "asunto": "Queja",
    "cliente": "Bancolombia",
    "descripcion": "Declaracion de robos 2005"
  }
]`;

// const JsonData = JSON.parse(pqrs);
// console.log(JsonData);

// const Peticion = JsonData.filter((JsonData) => "peticion");

const menudesplegable = document.querySelector(".menu_desplegable");
const navMenu = document.querySelector(".menu");

menudesplegable.addEventListener("click", () => {
  menudesplegable.classList.toggle("active");
  navMenu.classList.toggle("active");
}); //menu desplegable

document.querySelectorAll(".link").forEach((n) =>
  n.addEventListener("click", () => {
    menudesplegable.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
