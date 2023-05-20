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

  //Creando linea de 10 asteriscos con doble for
  for (var lineas = 1; lineas <= 10; lineas++) {
    for (var columnas = 1; columnas <= 10; columnas++) {
      document.write("*");
    }
    saltoLinea();
  }
  imprimir("FIN");