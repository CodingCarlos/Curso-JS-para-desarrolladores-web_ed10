// Aqui los tests

QUnit.module("Funcion sumar", function () {

	QUnit.test("sumar(1, 1)", function( assert ) {
		var resultado = sumar(1, 1);
		assert.strictEqual(resultado, 2, "1 + 1 = 2" );
	});

	QUnit.test("sumar(-1, 1)", function( assert ) {
		var resultado = sumar(-1, 1);
		assert.strictEqual(resultado, 0, "-1 + 1 = 0" );
	});

	QUnit.test("sumar(-1, -1)", function( assert ) {
		var resultado = sumar(-1, -1);
		assert.strictEqual(resultado, -2, "-1 + -1 = -2" );
	});

	QUnit.test("sumar(\"-1\", -1)", function( assert ) {
		var resultado = sumar("-1", -1);
		assert.strictEqual(resultado, -2, "'-1' + -1 = -2" );
	});

	QUnit.test("sumar(\"asd\", -1)", function( assert ) {
		var resultado = sumar("asd", -1);
		assert.deepEqual(resultado, NaN, "'asd' + -1 = NaN" );
	});

	QUnit.test("sumar(sumar, -1)", function( assert ) {
		var resultado = sumar(sumar, NaN);
		assert.deepEqual(resultado, NaN, "'-1' + -1 = NaN" );
	});

});