function mostrarResultado(idElemento, mensajeConsola, valorResultado) {
  // Limpiamos los contenedores para que los resultados no se junten
  document.getElementById("resultadoSuma").innerHTML = "";
  document.getElementById("resultadoResta").innerHTML = "";
  document.getElementById("resultadoMultiplicacion").innerHTML = "";
  document.getElementById("resultadoDivision").innerHTML = "";

  // Ponemos el resultado final en el HTML
  document.getElementById(idElemento).innerHTML = valorResultado;

  // Lo mandamos a la consola
  console.log(`${mensajeConsola}:${valorResultado}`);
}

// Función principal para obtener y validar los números del formulario
function obtenerOperadores() {
  const formulario = document.getElementById("formularioOperaciones");
  let num1 = parseInt(formulario["Operador1"].value);
  let num2 = parseInt(formulario["Operador2"].value);

  // Si alguno no es un número, devolvemos null por que no se puede usar letras
  if (isNaN(num1) || isNaN(num2)) {
    return null;
  }

  return { num1, num2 };
}

//  Funciones de los botones una funcion par acada boton

function Sumar() {
  // Jalamos los valores de los inputs por su ID y los pasamos a número entero
  let num1 = parseInt(document.getElementById("Numero1").value);
  let num2 = parseInt(document.getElementById("Numero2").value);

  // Validamos que no estén vacíos o tengan letras
  if (isNaN(num1) || isNaN(num2)) {
    return mostrarResultado(
      "resultadoSuma",
      "Resultado suma",
      "Faltan números válidos",
    );
  }

  // se realiza operacion correspondiente
  let resultado = num1 + num2;
  mostrarResultado("resultadoSuma", "Resultado suma", resultado);
}

function Restar() {
  // Obtenemos los números de la pantalla
  let num1 = parseInt(document.getElementById("Numero1").value);
  let num2 = parseInt(document.getElementById("Numero2").value);

  // Revisamos que sean números correctos antes de seguir
  if (isNaN(num1) || isNaN(num2)) {
    return mostrarResultado(
      "resultadoResta",
      "Resultado resta",
      "Faltan números válidos",
    );
  }

  let resultado = num1 - num2;
  mostrarResultado("resultadoResta", "Resultado resta", resultado);
}

function Multiplicar() {
  // Traemos los datos del formulario
  let num1 = parseInt(document.getElementById("Numero1").value);
  let num2 = parseInt(document.getElementById("Numero2").value);

  // Si falta algún dato, mandamos el mensaje de error
  if (isNaN(num1) || isNaN(num2)) {
    return mostrarResultado(
      "resultadoMultiplicacion",
      "Resultado multiplicación",
      "Faltan números válidos",
    );
  }

  let resultado = num1 * num2;
  mostrarResultado(
    "resultadoMultiplicacion",
    "Resultado multiplicación",
    resultado,
  );
}

function Dividir() {
  // Obtenemos las variables de los inputs
  let num1 = parseInt(document.getElementById("Numero1").value);
  let num2 = parseInt(document.getElementById("Numero2").value);

  // Checamos que no metan texto en los cuadros
  if (isNaN(num1) || isNaN(num2)) {
    return mostrarResultado(
      "resultadoDivision",
      "Resultado división",
      "Faltan números válidos",
    );
  }

  // Validación rápida para no romper la matemática por un cero
  if (num2 == 0) {
    return mostrarResultado(
      "resultadoDivision",
      "Resultado división",
      "No se puede dividir entre 0",
    );
  }

  let resultado = num1 / num2;
  mostrarResultado("resultadoDivision", "Resultado división", resultado);
}
