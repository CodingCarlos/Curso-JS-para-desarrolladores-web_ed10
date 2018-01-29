var anio = prompt("Introduce un año");

if (anio %4 && anio %100 != 0) {
	console.log("El año es bisiesto");
}
else if(anio %100 && anio %400){
	console.log("El año es bisiesto");
}
else {
	console.log("El año no es bisiesto");
}