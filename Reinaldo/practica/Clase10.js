setTimeout(function(){
	console.log('Hola');
}, 5000);

setInterval(function() {
	console.log('han pasado 5 segundos');
}, 5000);

var = miIntervale = setInterval(function(){
	console.log('han pasado 5 segundos');
}, 5000);

clearInterval(miInterval);



var nombre = prompt("Dime tu nombre:");

function felizSanValentin (){
	console.log("Feliz San Valentin" + nombre + ", te desea Reinaldin con el violín." );
}

felizSanValentin();