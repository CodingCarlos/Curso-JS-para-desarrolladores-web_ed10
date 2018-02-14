/* 1 - Junta estos tres Arrays ["Oscar", ...], [9897667, ...], [false, ...] de tal forma que 
construyan un único Array anidado [["Oscar", 9897667, false], [etc...]]
"Oscar", "Pedro", "Marco", "Juana"
9897667, 81721623, 91823871, 71236123
false, true, true, false*/

// Declaro arrays
var array1 = ["Oscar", "Pedro", "Marco", "Juana"],
	array2 = [9897667, 81721623, 91823871, 71236123],
	array3 = [false, true, true, false];

// Declaro array vacía para meter otras arrays.
var arrayJuntas = [];

// Creo un bucle que mida el lenght del array y junte los datos
for (var i = 0; i < array1.length; i++) {
	// creo variable con todos los arrays para recorrerlos 
	//var grupo = [array1[i], array2[i], array3[i]];
	//Agrega elementos al array vacio
	arrayJuntas.push([array1[i], array2[i], array3[i]]);
};

console.log("El resultado es %0", arrayJuntas);


// Variante

var array1 = ["Oscar", "Pedro", "Marco", "Juana", true, 4, 12, 12],
	array2 = [9897667, 81721623, 91823871, 71236123],
	array3 = [false, true, true, false];

// Saber el valor máximo del array1

var maximo = Math.max(array1.length, array2.length, array3.length);


// No esta terminado


// 2 - Crea un Array con 100 numeros enteros al azar. Después crea un array para almacenar los números pares y otro array para los impares.

var arrayPares = [], 
	arrayImpares = [];

for (var i = 0; i <= 100; i++) {
	var random = Math.floor((Math.random() * 10) + 1);
	if(random % 2 !== 0){
			arrayImpares.push(random);
	} else {
			arrayPares.push(random);
	}
}

console.log("El resultado es %0", arrayPares);
console.log("El resultado es %0", arrayImpares);



/* 3 - Vamos a gestionar la lista de asistentes de un evento.

Características:

Cada asistente recibirá el identificador de su posición en el Array.
El identificador no puede cambiar una vez reservado el asiento.
Los asistentes pueden darse de baja, y el asiento que ocupaban queda libre.
Los nuevos asistentes seran asigandos primero a asientos desocupados.

*/

var lista = [];



