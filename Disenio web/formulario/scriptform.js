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

// console.log("activo");
// document.querySelector("#botonsito").addEventListener("submit", traerDatos);

// function traerDatos() {
//   console.log("hola");
// }
// console.log(typeof traerDatos);

// Una forma de llamar la instancia, la voy a dejar escrita en el codigo pero no la voy a llamar, a partir de esta instancia creare el formulario
window.addEventListener(
  "load",
  function () {
    class Telefono {
      constructor(marca) {
        this._marca = marca;
      }
      get marca() {
        return this._marca;
      }
      set marca(mar) {
        this._marca = mar;
      }
    }
    let miTelefono = new Telefono("IOS");
    miTelefono.marca = "iPhone";
  },
  true
);
