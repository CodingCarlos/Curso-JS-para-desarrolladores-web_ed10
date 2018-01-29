var numeroUsuario = prompt("Dime un numero de 1 a 6");
numeroUsuario = Number(numeroUsuario) + 50;

for (var i=0;i<= numeroUsuario;i++) {
	if(i %2 != 0) {
		console.log("Numero" + i);
	}
}