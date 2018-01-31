// Ejercicio 1
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

// Ejercicio 2
function contadorPositivo() {
	console.log("Empieza la cuenta");
	for (var i = 1; i <= 100; i++) {
		console.log(i);
	};
	console.log("Termino la cuenta");
}
contadorPositivo();


// Ejercicio3
function contadorNegativo() {
	console.log("Empieza la cuenta");
	for (var i = 100; i >= 0; i--) {
		console.log(i);
	};
}
contadorNegativo();


// Ejercicio 4
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

//Ejercicio 5 Diseña un programa que imprima los números impares entre un número dado por el usuario y los siguientes 50 números.




imprimeImpares(inicio);


function imprimeImpares(inicio) {
		//El número inicial
	var inicio = 1;
		//El número final
	var cierre = inicio + 50;
		//Bucle
	for (var i = inicio; i < cierre ; i++) {
		
		if (i % 2 !== 0) {
			console.log(i);
		}

	} 

}












