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
mostrar = @resultado 

procedimiento #resultadoDivision
@resultado = @a / @b
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