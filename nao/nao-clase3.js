// EJERCICIO 1 /////////////////////////////////

/* Proceso esBisiesto

	Escribir "Dime el Año:"
	Leer year
	
	Si year % 4 = 0 & year % 100 <> 0 Entonces
		Escribir "Amigo, el año " year " es bisiesto!"
	Sino
		Si year % 400 = 0 & year % 100 = 0 Entonces
			Escribir "Amigo, el año " year " es bisiesto!"
		Sino
			Escribir "Amigo, el año " year " NO es bisiesto!"
		Fin Si
	Fin Si
	
FinProceso
}*/

function esBisiesto () {
//Comprobará si es bisiesto
//console.log ("Dime el Año:");
var year = prompt("Dime el año");

if (year % 4 == 0 && year % 100 != 0) {
	console.log ("Amigo, el año " + year + " es bisiesto!");
} else {

	if (year % 400 == 0 && year % 100 == 0) {
		console.log ("Amigo, el año " + year + " es bisiesto!");
	} else {
		console.log ("Amigo, el año " + year + " NO es bisiesto!");
	}
}
}

esBisiesto ();

// EJERCICIO 2 //////////////////////////////////////

/*	Proceso contadorPositivo

	controlador = 1
	
	Escribir "Empieza la cuenta!"
	
	Mientras controlador <= 100 Hacer
		Escribir controlador
		controlador = controlador +1
	Fin Mientras
	
	Escribir "Terminó la cuenta mágica..."
	
FinProceso
*/
function contadorPositivo () {
var i = 1;
console.log("Empieza la cuenta!");

for (var i = 0; i <= 100; i++) {
console.log(i);
}

}

contadorPositivo ();

// EJERCICIO 3 ///////////////////////////////////////

/*
Proceso contadorNegativo

	controlador = 100
	
	Escribir "Empieza la cuenta!"
	
	Mientras controlador >= 0 Hacer
		Escribir controlador
		controlador = controlador -1
	Fin Mientras
	
	Escribir "Terminó la cuenta mágica..."
	
FinProceso
*/

function contadorNegativo () {
var i = 100;
console.log("Empieza la cuenta!");

for (var i = 100; i >= 1; i--) {
	console.log(i);
}
}

contadorNegativo ();

// EJERCICIO 4 ///////////////////////////////////////

/*
Proceso contadorPares
		
		controlador = 2
		
		Escribir "Empieza la cuenta!"
		
		Mientras controlador <= 100 Hacer
			Escribir controlador
			controlador = controlador +2
		Fin Mientras
		
		Escribir "Terminó la cuenta mágica..."
		
	FinProceso
*/

function contadorPares ()  {
	var i = 0;
	console.log("Empieza la cuenta!");

	for (var i = 0; i <= 100; i + 2){
		console.log(i);
		i = i + 2;
	}

	console.log("Terminó la cuenta mágica");
}

contadorPares ();

// EJERCICIO 5 ///////////////////////////////////////

/*

	solucion con error de +1 en limite:
	
	function showOdds (number){
	if(number % 2 != 0){
		var limit = number + 50;
		for(number;number<=limit;number=number+2){
			console.log(number);
		}
	}	
	else{
		number++;
		showOdds(number);	
		
	}
}
*/

function contadorImpar50 (number) {
	var number = prompt("numero");
	if (number % 2 !== 0) {
		var limit = number + 50;
		for (var i = 0; i <= limit; i + 2;) {
			console.log(i);
		}
	}
};


contadorImpar50 ();

// EJERCICIO 7 //////////////////////////////////////////

/*Proceso contadorEspecial
 		Escribir "Dame un número:"
 		Leer numero
 		
 		controlador = 1
 		Totalimpares = 0
 		totalImpares = 0
 		
 		Escribir "Empieza la cuenta!"
 		
 		Mientras controlador <= 50 Hacer
 			
 			Si numero % 2 = 0 Entonces
 				controlador <- controlador + 1
 				totalPares<- totalPares + numero
 				numero <- numero + 1
 			Sino
 				totalImpares<- totalImpares + 1
 				numero <- numero + 1
 			Fin Si
 			
 		Fin Mientras
 		
 		Escribir "Total de suma de pares ", totalPares
 		Escribir "Total de impares ", totalImpares
 		Escribir "Terminó la cuenta mágica..."
 		
 	FinProceso*/

 	function contadorEspecial () {
 		var number = prompt("Dame un número");
 		console.log(number);

 		var i = 0;
 		var Totalimpares = 0;
 		var totalPares = 0;

 		console.log("Empieza la cuenta!")

 		for (var i = 0; i <= 50; ) {
 			if (number % 2 == 0) {
 				i <= i + 1;
 				totalPares <= totalPares + 1; 
 				number <= number + 1; 

 			}
 			else {
 				totalImpares<= totalImpares + 1;
 				numero <= numero + 1;
 			}

 		}
 	}

 	contadorEspecial ();