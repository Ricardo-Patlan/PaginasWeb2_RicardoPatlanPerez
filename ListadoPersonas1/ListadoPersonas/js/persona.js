class Persona {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }
  // Getters y setters para poder acceder a los datos de cada persona
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get apellido() {
    return this._apellido;
  }
  set apellido(apellido) {
    this._apellido = apellido;
  }
}
