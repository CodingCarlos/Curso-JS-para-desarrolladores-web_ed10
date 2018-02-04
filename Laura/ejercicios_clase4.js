// ejercicio 1

var num1 = Number(prompt("dime un numero"));
var num2 = Number(prompt("dime otro numero"));

function operaciones () {
  if(num1 && num2 != isNaN) {
      console.log(num1 + num2);
      console.log(num1 - num2);
      console.log(num1 / num2);
      console.log(num1 * num2);
    
  } else {
      alert("escribe un número!!");
  }
}

operaciones ();

// ejercicio 2

var mujeres = 40;
var hombres = 35;
var total = mujeres + hombres;

function porcentajeHombres(hombres) {
  console.log ((hombres * 100) / total);
}

function porcentajeMujeres(mujeres) {
   console.log ((mujeres * 100) / total);
}

porcentajeMujeres (mujeres);
porcentajeHombres (hombres);

// ejercicio 3

