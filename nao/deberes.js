// EJERCICIO 1 /////////////////////////////////////////////

pedir @a
pedir @b

// procedimiento

procedimiento #resultadoSuma
@resultado = @a + @b
mostrar @resultado

procedimiento #resultadoResta
@resultado = @a - @b
mostrar @resultado

procedimiento #resultadoProducto
@resultado = @a * @b
mostrar @resultado

// EJERCICIO 2 /////////////////////////////////////////////

pedir @chicas
pedir @chicos

@total = @chicas + @chicos

//

procedimiento #porcentajeMujeres
@resultado = @chicas / @total * 100
mostrar @resultado

procedimiento #porcentajeHombres
@resultado = @chicos / @total * 100
mostrar @resultado


// EJERCICIO 3 //////////////////////////////////////////

pedir @a
pedir @b

si @a > @b
	mostrar "A es mayor"
pero si @a < @b
	mostrar "B es mayor"
si no
	mostrar "Son iguales"


// EJERCICIO 4 //////////////////////////////////////////

pedir @a
pedir @b
pedir @c

si @a > @b
	si @a > @c
	mostrar "A es el mayor"
pero si @b > @c
	mostrar "B es el mayor"
si no
	mostrar "C es el mayor"


// EJERCICIO 5 //////////////////////////////////////

//Pedir por teclado tres números.
pedir @a
pedir @b
pedir @c

//Si el primero es negativo, debe sumar los otros dos
si @a < 0
	mostrar @b + @c
pero si @a > 0
	mostrar @a * @b * @c

//Si no multiplicará los tres numeros
//Mostrar el resultado final incluyendo una referencia a la operación realizada.

// EJERCICIO 6 //////////////////////////////////////

pedir @precio
pedir @mes
pedir @diaSemana

//--------------

@descuento = @precio*0.25
@precioFinal = @precio - @descuento

//------------

si @mes == "diciembre" o @mes == "enero" o @mes == "febrero"
	si @diaSemana == "lunes" o "martes" o "miercoles" o "jueves"
		mostrar "Tienes un descuento del 25%"
		mostrar @precioFinal
	si no 
    	mostrar "No tienes descuento; ven en fin de semana" 
		mostrar @precio

// EJERCICIO 7 //////////////////////////////////////

pedir @numero

//-----------

si @numero > 0
	mostrar @numero
	mostrar "es positivo"
si no
	mostrar "es negativo"



// EJERCICIO 8 /////////////////////////////////////

pedir @numero


//-----------

si @numero % 2 == 0
	mostrar "par"
si no
	mostrar "impar"



// EJERCICIO 9 ///////////////////////////////////

pedir @palabraClave

//------------

si @palabraClave == "Fictizia mola mucho"
	mostrar "correcto, puedes entrar"
si no
	mostrar "No puedes entrar"



// EJERCICIO 10 /////////////////////////////////////

pedir @dia
pedir @mes
pedir @anyo

//--------------

si @dia <= 31
si @mes <= 12
si @mes == 1
si @mes == 2
	mostrar "febrero"
si @mes == 3
	mostrar "marzo"


// EJERCICIO 11 /////////////////////////////////////

