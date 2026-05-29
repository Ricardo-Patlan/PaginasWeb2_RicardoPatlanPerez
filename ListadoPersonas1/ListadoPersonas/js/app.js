// Nuestra lista de personas, que es un arreglo de objetos de tipo Persona
const personas = [new Persona("Juan", "Pérez"), new Persona("Karla", "Lara")];

// Para mostrar a todas las personas que tenemos en el arreglo
function mostrarPersonas() {
  console.log("Mostrar personas");
  let text = "";

// Recorremos el arreglo de personas, y por cada persona, agregamos un elemento <li> a la variable text, con el nombre y apellido de esa persona
  for (let persona of personas) {
    console.log(persona);
    text += `<li>${persona.nombre} ${persona.apellido}</li>`;
  }

  document.getElementById("personas").innerHTML = text;
}

    // Para agregar una persona nueva al arreglo, con los datos que el usuario escribió en el formulario
function agregarPersona() {

  const forms = document.forms["formulario"];
  const nombre = forms["nombre"];
  const apellido = forms["apellido"];

  // Validamos: si no dejaron los campos en blanco, avanzamos
  if (nombre.value != "" && apellido.value != "") {
    const persona = new Persona(nombre.value, apellido.value);
    console.log(persona);

    personas.push(persona);
    mostrarPersonas();

    // Limpiamos los inputs para que no se quede el texto ahí trabado
    nombre.value = "";
    apellido.value = "";
  } else {
// Si dejaron algún campo en blanco, les mostramos un mensaje de alerta
    alert("No puedes ingresar datos vacios");
  }
}
