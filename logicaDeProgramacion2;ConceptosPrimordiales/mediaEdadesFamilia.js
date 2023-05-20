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

  var numeroMiembros = parseInt(prompt("Ingrese la cantidad de miembros de su familia"));
  var contador = 1;
  var totalEdades = 0;

  while (contador <= numeroMiembros) {
    edad = parseInt(prompt("Ingrese la edad del familiar"));
    totalEdades = totalEdades + edad;
    contador++;
  }
  mediaEdades = totalEdades / numeroMiembros;
  imprimir("La media de las edades de la familia es: " + mediaEdades);
  imprimir("Fin");