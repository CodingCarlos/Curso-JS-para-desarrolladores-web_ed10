/*
1. Diseña un programa que nos confirme si un año es bisiesto o no.

Caracteristicas de un año bisiesto:
Tiene que ser divisible entre 4 y no tiene que ser divisible entre 100
O puede ser divisble entre 100 y entre 400
*/

var year = prompt("Dime el año:");

function esBisiesto() {
	if (year % 4 == 0 && year % 100 != 0){
		console.log("Amigo, el año " + year + " es bisiesto");
	} else if (year % 400 == 0 && year % 100 == 0) {
		console.log("Amigo, el año " + year + " es bisiesto");
	} else {
		console.log("Amigo, el año " + year +  "no es bisiesto");
	}
}
esBisiesto();

//2. Diseña un programa que imprima los numeros del 1 al 100.
function contadorPositivo() {
	console.log("Empieza la cuenta");
	for (var i = 1; i <= 100; i++) {
		console.log(i);
	};
	console.log("Termino la cuenta");
}
contadorPositivo();


//3. Diseña un programa que imprima los numeros del 100 al 0.
function contadorNegativo() {
	console.log("Empieza la cuenta");
	for (var i = 100; i >= 0; i--) {
		console.log(i);
	};
}
contadorNegativo();


//4. Diseña un programa que imprima los numeros pares entre 0 y 100.
function contadorPares() {
	console.log("Empieza la cuenta");
	for (var i = 0; i <= 100; i++) {
		console.log(i++);
	};
	console.log("Termino la cuenta");
}
contadorPares();

//Ejercicio5
var numero = prompt("Dime el año:");

function showImpares (numero){

}

//5 Diseña un programa que imprima los números impares entre un número dado por el usuario y los siguientes 50 números.

var inicio = Number(prompt("Dime un número"));

function muestraImpares(inicio){
	var limit = inicio + 50;
		//Bucle
	for (inicio; inicio <= limit ; inicio++) {
		if (inicio % 2 != 0) {
			console.log(inicio);
		}
	}
} 
muestraImpares(inicio);
	






