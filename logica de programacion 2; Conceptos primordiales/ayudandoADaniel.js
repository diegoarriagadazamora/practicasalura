// funciones omitidas saltarLinea, imprimir, sortearNumero

var numeroPensado = sortearNumero();

var numeroLanzado = parseInt(prompt("Ingrese un número entre 0-10: "));

if (numeroLanzado == numeroPensado) {

  imprimir("Uau! Vos acertaste, pues yo pensé en el número " + numeroPensado);
} else {
  var contador = 1;

  while (contador <= 10) {

    imprimir("¡Se acabó, vos erraste!");
    contador = contador + 1;
  }
}