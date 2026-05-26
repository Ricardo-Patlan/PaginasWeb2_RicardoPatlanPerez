// Obtenemos los elementos del formulario del html 
const inputCorreo = document.getElementById("CorreoElectronico");
const errorCorreo = document.getElementById("errorCorreo");
const inputComentario = document.getElementById("Comentario");
// Validación de correo electrónico
inputCorreo.addEventListener("focus", function () {
  inputCorreo.style.backgroundColor = "#fffbcc";
  errorCorreo.innerText = "";
});
// Validación
inputCorreo.addEventListener("blur", function () {
  inputCorreo.style.backgroundColor = "#fff";
  inputCorreo.style.borderColor = "#ced4da";
});
// Validación de comentario
inputComentario.addEventListener("focus", function () {
  inputComentario.style.backgroundColor = "#e8f0fe";
});

inputComentario.addEventListener("blur", function () {
  inputComentario.style.backgroundColor = "#fff";
});
//funcion que mande desdel html para recibir en js
function Enviar() {
  //Recibimos las variables del html
  const correo = document.getElementById("CorreoElectronico").value;
  const comentario = document.getElementById("Comentario").value;
  //Mostramos los datos en la consola
  console.log("Datos registrados en la consola con exito ");
  //Mostramos el correo y el comentario en la consola
  console.log("Correo Electrónico que se envio ", correo);
  console.log("Comentario que recibimos ", comentario);

  //Mostramos un mensaje de éxito como alerta
  alert("datos enviados con éxito! Revisa la consola para ver la información");
}
