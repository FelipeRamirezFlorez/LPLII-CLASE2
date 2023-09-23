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
}

console.log(persona);
console.log(persona.estudiantes[0]);
console.log(persona.estudiantes[1]);