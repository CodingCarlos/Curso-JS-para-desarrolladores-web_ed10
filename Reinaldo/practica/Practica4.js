
var controlador = false;
console.assert(controlador,  "Hola, yo Reinaldo");


// 2 - Crea un script que nos permita calcular el tiempo que se necesita para realizar la siguientes acciones.
var nombre = "Hola, soy Reinaldo"
//var nombre = prompt("Dime tu nombre");
console.time("presentación");
console.log(nombre);
console.info(nombre);
console.warn(nombre);
console.timeEnd("presentación");


// 3 - Partiendo del ejercicio anterior mejora los estilos de cada mensaje usando estilos.
var nombre = "Hola, soy Reinaldo"
console.time("inicio");
console.log("%c %s", "background: black; color:#FFFFFF; font-size:20px;",nombre);
console.info("%c %s", "background: red; color:#FFFFFF; font-size:20px;",nombre);
console.warn("%c %s", "background: yellow; color:#000000; font-size:20px;",nombre);
console.timeEnd("inicio");

//4 - Agrupa cada tipo de mensaje y añade un contador de tiempo por cada grupo.
var nombre = "Soy Reinaldo";
console.time("presentacion");

//console.log
console.group("grupo console.log");
console.time("tiempo grupo console.log");
console.log("%c %s", "background: #000000; color:#FFFFFF;" ,nombre);
console.timeEnd("tiempo grupo console.log");
console.groupEnd();

//console.info
console.group("grupo console.log");
console.time("info grupo console.log");
console.log("%c %s", "background: red; color:#FFFFFF;" ,nombre);
console.timeEnd("info grupo console.log");
console.groupEnd();

//console.warn
console.group("grupo console.log");
console.time("warn grupo console.log");
console.log("%c %s", "background: yellow; color:black;" ,nombre);
console.timeEnd("warn grupo console.log");
console.groupEnd();

console.timeEnd("presentacion");
