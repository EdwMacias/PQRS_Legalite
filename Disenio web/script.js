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

//
//JQUERY PARA LLAMAR LOS JSON - NO FUNCIONA
$(function () {
  var table;
  $.getJSON("pqrs.json", function (data) {
    table = data.table;
    iniciando(0);
  });
  function iniciando() {
    $("TablaLegalite").empty();
    jQuery.each(table.rows, function (i, row) {
      var r = "";
      $.each(row, function (index, valor) {
        r = r + "<tr><td>" + valor + "</td>";
      });
      r += "</tr>";
      $("TablaLegalite").append(r);
    });
  }
});
const JsonData = JSON.parse(pqrs);
console.log(JsonData);

const Peticion = JsonData.filter((JsonData) => "peticion");
