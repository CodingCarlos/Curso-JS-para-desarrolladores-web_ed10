// 1 - ¿Que fecha será dentro de 30 días?

var ahora = new Date();
console.log("Hoy es " + ahora.toLocaleString());
ahora.setDate(ahora.getDate() + 30);
console.log("En 30 días sera:" + ahora.toLocaleString());

// 2  ¿Cuantas horas han pasado desde que emepezó este curso? y... ¿en días?

var inicio = new Date(2018, 0, 25, 19, 0, 0);
console.log("Fecha de inicio: " + inicio.toLocaleString());
var ahora = new Date();
console.log("Fecha actual: " + ahora.toLocaleString());
var diferencia = ahora - inicio;

var segundos = Math.floor( diferencia / 1000);
var horas = Math.floor( diferencia / (60 * 60 * 1000) );
var minutos = Math.floor( diferencia / (60 * 1000) );
var dias = Math.floor( diferencia / (24 * 60 * 60 * 1000) );

console.log("Han pasado " + diferencia + " ms.");
console.log("Han pasado " + segundos +" segundos." );
console.log("Han pasado " + minutos +" minutos.");
console.log("Han pasado " + horas +" horas.");
console.log("Han pasado " + dias +" dias.");

// 3 - ¿Cuantos milisengundos quedan para terminar el curso? y... ¿en horas o días?

var fin = new Date(2018, 1, 9, 22, 0, 0);
console.log("Fecha fin: " + fin.toLocaleString());
var ahora = new Date();
console.log("Fecha actual:" + ahora.toLocaleString());
//console.log(diferencia);
var diferencia = fin - ahora;


var segundos = Math.floor(ahora / 1000);
var minutos = Math.floor( diferencia / (60 * 1000) );
var dias = Math.floor( diferencia / (24 * 60 * 60 * 1000) );
var horas = Math.floor( diferencia / (60 * 60 * 1000) );


console.log("Quedan:" + diferencia + " ms.");
console.log("Quedan: " + segundos + "segundos.");
console.log("Quedan: " + minutos + "minutos.");
console.log("Quedan: " + horas + "horas.");
console.log("Quedan: " + dias + "dias.");

// 4 - ¿Que fecha será dentro de un año y 10 horas más?


