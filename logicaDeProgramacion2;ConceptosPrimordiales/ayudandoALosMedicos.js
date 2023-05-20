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

  for (var contador = 1; contador <= 10; contador++) {
    alert("Contador actual: " + contador);
  }