/*Práctica 1 - Diseña un script para gestionar por consola una máquina expendedora

Características:

Solo los usuarios registrados pueden usar la máquina
El sistema funciona sin dinero real, en su lugar se usa un sistema de puntos
Los usuarios disponen de unos puntos para gastar en la máquina que el departamento de personal asigna.
La maquina no concederá creditos, solo trabaja en base a los puntos disponibles.
Para agilizar la reposición de lo consumido... la maquina debe controlar en stock
Paso 1 - Creamos los primeros objetos básicos:

Maquina Expendedora (Objeto)
Productos (Array)
Clientes (Array)*/

// Paso 1 - Creamos los primeros objetos básicos:

var maquina = {
  adminPassword: "ficticiaMola",
  productos: [
    {nombre: "chocolate", precio: 20 },
    {nombre: "cocacola", precio: 30 },
    {nombre: "agua", precio: 10 },
  ],
  clientes: [],
  // metodo para comprobar el password de admin
  isAdmin: function(password){
    return this.adminPassword === password;
  },
  // metodo para agregar cliente
  agregarCliente: function(password, cliente) {
    // si el password es falso no puede
    if (this.isAdmin(password) === false )  {
      console.log("no eres admin");
      return false;
    }
    var encontrado = clientes.indexOf(cliente);
    if (encontrado > -1){
      return false;
    }
    if (cliente.hasOwnProperty("nombre") === true
    && cliente.hasOwnProperty("usuario") === true
    && cliente.hasOwnProperty("password") === true
    && cliente.hasOwnProperty("tipo") === true
    && cliente.hasOwnProperty("presupuesto") === true
    && cliente.hasOwnProperty("productos") === true) {
        this.clientes.push(cliente);
    }
 return false;

  },
  quitarCliente: function(password, cliente) {
    if (this.isAdmin(password) === false )  {
      console.log("no eres admin");
      return false;
    }
    var encontrado = clientes.indexOf(cliente);
    if (encontrado > -1){
      this.clientes[encontrado] = undefined;
    }
    return encontrado;
  },
  login: function(login, clave){
    for (var i = 0; i < this.clientes.length; i++) {
      var cliente = this.clientes[i];
      if(cliente.usuario === login && cliente.password === clave){
        return cliente;
      }
    }
    return false;

  },
  consultarSaldo: function(cliente){
    var encontrado = clientes.indexOf(cliente);
    if (encontrado > -1){
      console.log( "Saldo", cliente.presupuesto);
    }
    return encontrado;
  },
  consultarGastos: function(cliente){
    var encontrado = clientes.indexOf(cliente);
    if (encontrado > -1){
      console.log( "Gastos", cliente.productos);
    }
    return encontrado;
  }
}

// Paso 2 - Creamos los primeros objetos básicos:

var cliente1 = {
    nombre: "Pedro",
    usuario: "Pedrito",
    password: "1234",
    tipo: "",
    presupuesto: 100,
    productos: [
      maquina.productos[0],
      maquina.productos[2]
    ]
}

var cliente2 = {
    nombre: "Carlos",
    usuario: "Carlitos",
    password: "1234",
    tipo: "",
    presupuesto: 200,
    productos: [
    ]
}

//Paso 3 - Creamos varios métodos para gestionar a los clientes y sus necesidades

var adminPassword = "ficticiaMola";

maquina.agregarCliente(cliente1);
maquina.agregarCliente(cliente2);

var cliente = maquina.login("Pedrito", "1234");
if (cliente !== false ) {
    maquina.consultarSaldo(cliente);
    maquina.consultarGastos(cliente);
}
