//Creando función para salto de linea
function saltoLinea() {
    document.write("<br>");
    document.write("<br>");
  }

  //Creando función para imprimir frases y cambiando br a función
  function imprimir(edades) {
    document.write(edades);
    saltoLinea();
  }

  //función diferencia de edades
  function diferencia(edad) {
    document.write(edad);
    saltoLinea();
  }

  var anho = 2023;
  var miEdad = 38;
  var edadHermano = 28;

  //calculando cuantos anhos tiene
  //mostrando en la web con función imprimir y con document.write + salto de línea
  imprimir("Juanito tiene " + (anho - 2000) + " años.");

  document.write("Joselito tiene " + (anho - 1995) + " Años.");
  saltoLinea();

  //Calculando diferencia de edad con mi hermano
  diferencia("La diferencia de edad entre mi hermano y yo es; " + (miEdad - edadHermano));