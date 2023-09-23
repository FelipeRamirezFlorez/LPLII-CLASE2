//Tipos de datos primitivos de JS
//Number (Integers and Floats). Example: 10   -   10.5   -   200
let numero = 10;
let numeroDePuertas = 4;
let numeroPi = 3.14;
let valorMatricula = 2_000_000;
let numeroObjeto = new Number (20.25);

//String (Cadenas de Caracteres). Example:  "hola"  -   'chao' 
let  saludo = "hola";
let despido ='chao';
let stringComoObjeto = new String("Hola");

//Boolean -> true or false
let esCierto = false;
let esFeo = true;
let booleanComoObjeto = new Boolean(true);

//Object -> { } -> new object()
let persona = {
    nombre: "Felipe",
    apellido: "Ramirez"
};
let empleado = {
    id: 1,
    nombre:"Fulano"
};

//Array -> [ ]
let arregloObjetos = [persona,empleado];

//BigInt (Valores numericos MUY grandes). Example: 100n  -> new BigInt(10)
let numeroGrande = 100;
let numeroGrandeComoObjeto = new BigInt(100);

//undefined -> (Valor por defecto que tienen las variables si no son asignadas)
let vairableUndefined;
let variabelUndefined2 = undefined;

//null -> (Se asigna cuando quiero especificar que una variable está vacía)
let variableNula = null;

//Symbol -> (Se utiliza para crear valores uncicos)
let simbolo= new Symbol ("simbolo uno");