class Persona {
    #nombre;
    #apellido;
    #age;
    constructor(nombre, apellido){
        this.#nombre = nombre;
        this.#apellido = apellido;
    }

get nombre(){
    return this.#nombre;
}

set nombre(nombre) {
    this.#nombre = nombre + "Modificado";
}
}

let persona = new Persona("Felipe","Ramirez");
//persona.nombre = "Andres";  
//persona.apellido = "Montoya";
persona = new Persona("Andres","Montoya");
persona.nombre = "Cualquiera";
console.log(persona.nombre);
