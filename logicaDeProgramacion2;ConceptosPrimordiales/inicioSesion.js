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

  var inicioDeSesionRegistrado = "alura";
  var contrasenhaRegistrada = "alura321";

  var maximoIntentos = 3;
  var intentoActual = 1;

  while (intentoActual <= maximoIntentos) {
    var inicioDeSesionIngresado = prompt("Ingrese su usuario");
    var contrasenhaIngresada = prompt("Ingrese su contraseña");

    if (inicioDeSesionRegistrado == inicioDeSesionIngresado && contrasenhaRegistrada == contrasenhaIngresada) {
      alert("Bienvenido al sistema" + inicioDeSesionIngresado);
      intentoActual = maximoIntentos; // Lo hice bien, así que paso todos los intentos que falten y salgo del loop. Allá abajo aumentará +1!
    } else {
      if (intentoActual == 3) {
        alert("Agotaste el número permitido de intentos!");
      } else {
        alert("Inicio de sesión inválido. Favor intente de nuevo");
      }
    }

    // vaya al próximo intento
    intentoActual = intentoActual + 1
  }