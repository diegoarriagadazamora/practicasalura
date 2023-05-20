//Función salto de linea
function saltoLinea() {
    document.write("<br>");
    document.write("<br>");
  }

  //función imprimir datos
  function imprimir(frase) {
    document.write(frase);
    saltoLinea();
  }

  var victorias = parseInt(prompt("Ingrese victorias"));
  var empates = parseInt(prompt("ingrese empates"));

  puntosTotales = (victorias * 3) + empates;

  imprimir("El total e puntos del equipo es: " + puntosTotales);

  if (puntosTotales > 30) {
    imprimir("El equipo está mejor que el año pasado");
  }
  if (puntosTotales < 30) {
    imprimir("el equipo está peor que el año pasado");
  }
  if (puntosTotales == 30) {
    imprimir("El equipo está igual que el año pasado");
  }