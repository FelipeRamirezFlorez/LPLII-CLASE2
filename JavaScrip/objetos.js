let persona = {
    nombre: "Felipe",
    id: 1234,
    apellido: "Ramirez",
    esProfesor: true,
    estudiantes: [
        {
            id: 1,
            nombre: "Camilo"
        },
        {
            id:2,
            nombre: "Sebastian"
        }
    ]
} //JSON JavaScript Object Notation

/* console.log(persona);
console.log(persona.estudiantes[0]);
console.log(persona.estudiantes[1]);
console.log(persona.apellido);
let personaAsString = JSON.stringify(persona); */

//Funcion constructor
function persona(nombre,apellido,esProfesor) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.esProfesor = esProfesor;
}

let personaDos = new persona("Felipe","Ramirez",true);
personaDos.id = 1234; //Agregar atributo
delete personaDos.id; //Eliminar atributo
console.log(personaDos);