function saltarLinea() {
    document.write("<br>");
  }

  function imprimir(frase) {
    document.write(frase);
    saltarLinea();
  }

  var edad = parseInt(prompt("¿Cuál es tu edad?"));
  var licenciaConducir = prompt("¿Tienes licencia? Responde Sí o No");

  if (edad >= 18) {
    if (licenciaConducir == "Sí") {
      imprimir("Puedes conducir");
    }
  }

  if (edad < 18) {
    imprimir("No puedes conducir");
  }