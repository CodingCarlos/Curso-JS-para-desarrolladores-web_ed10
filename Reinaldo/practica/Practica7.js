//1 - Diseña un algoritmo que simula el lanzamiento de una moneda al aire e imprimir si ha salido cara o cruz.

function azar(){
	var valor = Math.floor(Math.random() * 2 + 1);

	if (valor === 1) {
		console.log("tu moneda es cara");
	} else {
		console.log("tu moneda es cruz");
	}

}

azar();

//2 - Diseña un algoritmo que simula cien tiradas de dos dados y contar las veces que entre los dos suman 10.

function algoritmoSuma(){

	var contador = 0;

	for (var i = 0; i < 100; i++) {
		var dado1 = Math.floor(Math.random() * 6 + 1);
		var dado2 = Math.floor(Math.random() * 6 + 1);
		var suma = dado1 + dado2;

		if (suma === 10) {
			contador++;
		};

	};

	console.log("las veces que los dos suman 10 son " + contador);

}

algoritmoSuma();


// 1 - Diseña un script que confirme si una fecha es valida y además devuelva la fecha en dos formatos diferentes.


function verificaFechas (day, month, year){

	//declara una variablen nuevo año con una fecha para validar
	var newYear = new Date("texto", 3, 2);

	if (newYear.getFullYear()){
		//crea un objeto fecha con clave: valor
		var opciones = { 
		    year: 'numeric', 
		    month: 'long', 
		    day: 'numeric'
		};
		
		//console.log("El mes: " + newYear.getMonth()); // 0 - 11
		//console.log("El mes: " + newYear.toLocaleString("es-ES", opciones)); // 0 - 11

		//concatena el día, mes y año
		var fechaCompleta = ("Día: " + newYear.getDate() + "de " + newYear.getMonth()-1) + "de " + newYear.getFullYear());
		
		//devuelve la fecha
		console.log("La fecha es", fechaCompleta);
		console.log ("la fecha es", newYear.toLocaleString("es-ES", opciones));

	} else {
			console.log("Los datos no son correctos");
	}

} verificaFechas();

