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

  //función calculo de IMC
  function calcularImc(peso, altura) {

    return (peso / (altura + altura));
  }

  nombre = prompt("Indique su nombre");
  pesoInformado = parseInt(prompt(nombre + " Indique su peso"));
  alturaInformada = parseInt(prompt(nombre + " Indique su altura"));

  imcCalculado = calcularImc(pesoInformado, alturaInformada);

  imprimir(nombre + " su imc calculado es; " + imcCalculado);

  if (imcCalculado < 18.5) {

    imprimir("IMC abajo de lo recomendado");
  }

  if (imcCalculado >= 18.5) {

    if (imcCalculado < 25) {

      imprimir("IMC está dentro del intervalo normal");

    }

  }

  if (imcCalculado >= 25) {

    if (imcCalculado < 30) {

      imprimir("IMC considerado como sobrepeso");

    }

  }

  if (imcCalculado >= 30) {
    imprimir("IMC considerado como obesidad");
  }