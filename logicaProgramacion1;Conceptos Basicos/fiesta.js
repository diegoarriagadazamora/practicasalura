function saltarLinea() {
    document.write("<br>");
  }

  function imprimir(frase) {
    document.write(frase);
    saltarLinea();
  }

  var invitados = parseInt(prompt("Número de invitados"));
  var vips = parseInt(prompt("Número de invitados VIP's"));

  var total = invitados + vips;

  imprimir("El total de invitados es " + total);