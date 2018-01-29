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
	si no
		mostrar "C es el mayor"
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

si @mes == "diciembre" || @mes == "enero" || @mes == "febrero"
	si @diaSemana == "lunes" || "martes" || "miercoles" || "jueves"
		mostrar "Tienes un descuento del 25%"
		mostrar "Tu precio final es" + @precioFinal
	si no
		mostrar "No tienes descuento; ven en fin de semana"
		mostrar "Tu precio final es " + @precio
si no
mostrar "Ven en invierno"

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


repetir 3
	pedir @palabraClave
	si @palabraClave == "Fictizia mola mucho"
		mostrar "correcto, puedes entrar"
	si no
		mostrar "No puedes entrar"


// EJERCICIO 10 /////////////////////////////////////

pedir @dia
pedir @mes
pedir @anyo

@valido = "si"

si @dia > 31
	@valido = "no"
	mostrar "Día inválido"
si @mes > 12
	@valido = "no"
	mostrar "Mes inválido"

//Meses de menos de 31 días
si @valido == "si"
	si @mes == 2 && @dia > 27
		@valido = "no"
		mostrar "Día inválido"
	si @mes == 4 || @mes == 6 || @mes == 9 || @mes == 11
	si @dia > 30
		@valido = "no"
		mostrar "Día inválido"
	si @valido == "si"
		si @dia < 10
			@dia = "0" + @dia
		si @mes < 10
			@mes = "0" + @mes
		si @anyo < 1000
			si @anyo < 100
				si @anyo < 10
					@anyo = "000" + @anyo
				si no
                	@anyo = "00" + @anyo
			si no
        	@anyo = "0" + @anyo
		mostrar @dia + '/' + @mes + '/' + @anyo
si no
	mostrar "No podemos validad tu fecha"

//Da error en el año, quitamos el año y ahora si que funciona el ejemplo

pedir @dia
pedir @mes
pedir @anyo

@valido = "si"

si @dia > 31
	@valido = "no"
	mostrar "Día inválido"
si @mes > 12
	@valido = "no"
	mostrar "Mes inválido"

//Meses de menos de 31 días
si @valido == "si"
	si @mes == 2 && @dia > 27
		@valido = "no"
		mostrar "Día inválido"
	si @mes == 4 || @mes == 6 || @mes == 9 || @mes == 11
	si @dia > 30
		@valido = "no"
		mostrar "Día inválido"
	si @valido == "si"
		si @dia < 10
			@dia = "0" + @dia
		si @mes < 10
			@mes = "0" + @mes
		
		mostrar @dia + '/' + @mes + '/' + @anyo
si no
	mostrar "No podemos validad tu fecha"





// EJERCICIO 11 /////////////////////////////////////

