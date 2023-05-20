//Creando función para salto de linea
function saltoLinea() {

    document.write("<br>");
    document.write("<br>");
  }

  //Creando función imprimir datos
  function imprimir(frase) {

    document.write(frase);
    saltoLinea();
  }
  /*
  var respuesta = ""; // todavía no hay respuesta

  while (true) {
    respuesta = prompt("¿Cuál es tu nombre?");
  }

  imprimir("FIN");
*/
  //SOLUCION con while

  var respuesta = ""; // todavía no hay respuesta

  while (true) {
    respuesta = prompt("¿Cuál es tu nombre?");
    if (respuesta == "SALIR") {
      break;
    }
  }

  imprimir("FIN");