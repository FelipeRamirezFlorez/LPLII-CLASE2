const pantalla = document.querySelector(".pantalla");
let valorPrevio = "";

function agregarNumero(numero) {
    console.log ("sdsds");
    if(pantalla.textContent === '0'){
        pantalla.textContent=numero;
    }else {
        pantalla.textContent += numero;
    }
    
}

function limpiar(){
    console.log ("sdsds");
    pantalla.textContent = '0';

}

function borrarElemento(){
    console.log ("sdsds");
    if(pantalla.textContent !='0'){
    pantalla.textContent = pantalla.textContent.slice(0,-1);
    }
}

function mostrarResultado (){
    console.log ("sdsds");
    pantalla.textContent = eval (valorPrevio + pantalla);
}

function agregarOperacion(operacion) {
    console.log ("sdsds");
    if(operacion === '.' && !pantalla.textContent.includes(".")) {
        pantalla.textContent += operacion;
    } else {
            valorPrevio = pantalla.textContent + operacion;
            limpiar();
    }
}

export { agregarNumero, limpiar, borrarElemento, mostrarResultado, agregarOperacion};

