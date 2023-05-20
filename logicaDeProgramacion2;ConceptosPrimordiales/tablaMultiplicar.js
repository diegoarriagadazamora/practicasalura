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

  var multiplicador = 1

  imprimir("WHILE");
  while (multiplicador <= 10) {
    imprimir(5 * multiplicador);
    multiplicador++;
  }

  imprimir("FOR");
  for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
    imprimir(5 * multiplicador);
  }