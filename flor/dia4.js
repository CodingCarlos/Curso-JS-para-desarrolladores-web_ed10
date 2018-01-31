var inicio = Number(prompt("número"));

imprimeImpares(inicio);

function imprimeImpares(inicio){
var final = inicio + 50;

for (var i = inicio; i < final;i++){
    if (i  % 2 !== 0){
        console.log(i);
    }
    
}

}






var nombre = String("Mi nombre es Flor");
console.warn(nombre);



var nombre = "Hola, yo soy Carlos Hernandez";
	console.time("presentación");
	console.log("%c %s", "background: black; color: #FFF; font-size:20px;" ,nombre);
	console.info("%c %s", "background: #3EBDFF; color: #FFF; font-size:20px;" ,nombre);
	console.warn("%c %s", "background: #FFAA00; color: #FFF; font-size:22px;" ,nombre);
	console.timeEnd("presentación");


    var alumnos = [
	     { nombre: "Bea", puesto: 1 },
	     { nombre: "Nao", puesto: 2 },
	     { nombre: "Flor", puesto: 3 },
	     { nombre: "Ury", puesto: 4 },
         { nombre: "Chico", puesto: 5 }
	 ];
	 
	 console.table(alumnos);




// 1 //



var nombre = String(prompt("Dime tu nombre"));

var comprobar = confirm("Deseas comprobar " + nombre + " lo rápido que va tu navegaor?");

function afirmativo(){
    if (comprobar == true){
       console.time("presentación");
	   console.log("%c %s", "background: black; color: #FFF; font-size:20px;" ,nombre);
	   console.info("%c %s", "background: #3EBDFF; color: #FFF; font-size:20px;" ,nombre);
	   console.warn("%c %s", "background: #FFAA00; color: #FFF; font-size:22px;" ,nombre);
	   console.timeEnd("presentación");
    
    }

}

afirmativo();



// 2 //


var numero1 = Number(prompt("Número 1"));
var numero2 = Number(prompt("Número 2"));

console.log(numero1 += numero2);
console.log(numero1 -= numero2);
console.log(numero1 *= numero2);
console.log(numero1 %= numero2);




