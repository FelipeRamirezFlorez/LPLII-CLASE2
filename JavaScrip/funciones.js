//Funciones
function sumar(numeroUno, numeroDos) { //Normalmente los nombre de las funciones deben ir en infinitivo
    return numeroUno + numeroDos;
}

let sumarVersionDos = function (numeroUno, numeroDos){
    return numeroUno + numeroDos;
}; //A traves de funcion anonima

let sumarVersionTres = (numeroUno,numeroDos) => numeroUno + numeroDos; //Arrow function / Tambien en funcion anonima

console.log(sumar(5,8));
console.log(sumar("hola","mundo"));
console.log(sumarVersionDos(10,20));
console.log(sumarVersionTres(40,56,8));


