//for
for (let i = 0; i<10; i++) {
    console.log(i);
}

let variable = 0;
//console.log(variable++);
//console.log(++variable);

//while
//Pregunto desde un inicio
variable = 0;
while(variable <= 2){
    variable++;
    console.log("Estoy en el while");
}

//do/while
//Haho y despues pregunto
do{
    console.log("Estoy en el do/while")
} while(variable == 0);

//for in
//Se utiliza para recorrer objetos
let persona = {
    nombre: "Felipe",
    apellido: "Ramirez",
    edad: 15
}

for (key in persona) {
    console.log(key + "->" + persona[key]);
}