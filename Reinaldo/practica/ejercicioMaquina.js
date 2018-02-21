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
    {nombre: "chocolate", precio: 20, stock: 2 },
    {nombre: "cocacola", precio: 30, stock: 0 },
    {nombre: "agua", precio: 10, stock: 1 },
    {nombre: "pepsi", precio: 10, stock: 1 },
    {nombre: "galletas", precio: 10, stock: 1 }
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
    // var encontrado = clientes.indexOf(cliente);
    // if (encontrado > -1){
    //   console.log("cliente existe");
    //   return false;
    // }
    if (cliente.hasOwnProperty("nombre") === true
    && cliente.hasOwnProperty("usuario") === true
    && cliente.hasOwnProperty("password") === true
    && cliente.hasOwnProperty("tipo") === true
    && cliente.hasOwnProperty("presupuesto") === true
    && cliente.hasOwnProperty("productos") === true) {
        this.clientes.push(cliente);
        console.log("cliente agregado" , cliente);
    } else {
      console.log("cliente no valido");
    }

  },
  // metodo para quitar cliente
  quitarCliente: function(password, cliente) {
    if (this.isAdmin(password) === false )  {
      console.log("no eres admin");
      return false;
    }
    var encontrado = this.clientes.indexOf(cliente);
    // -1 es lo que devuelve la función cuando no encuentra el objeto en el array
    if (encontrado > -1){
      this.clientes.splice(encontrado, 1);
      console.log("cliente ha sido eliminado");
    } else {
      console.log("cliente no existe");
    }
    return encontrado;
  },
  // metodo login
  login: function(login, clave){
    for (var i = 0; i < this.clientes.length; i++) {
      var cliente = this.clientes[i];
      console.log(this.clientes);
      if(cliente.usuario === login && cliente.password === clave){
        return cliente;
      }
    }
    return false;
  },
  consumirProducto: function(usuario, clave, producto) {
    var cliente = this.login(usuario, clave);
    if (cliente === false )  {
      console.log("no eres un usuario válido");
      return false;
    }
    for (var i = 0; i < this.productos.length; i++) {
      var esteProducto = this.productos[i];
      if(esteProducto.nombre === producto && esteProducto.stock > 0 && cliente.presupuesto >= esteProducto.precio){
        //this.actualizarStock(esteProducto);
        cliente.presupuesto -= esteProducto.precio;
        cliente.productos.push(esteProducto);
        esteProducto.stock -=1;
        console.log("El producto " + producto + " ha sido actualizado");
        return producto;
      }
    }
    return "-1";
  },
  agregarProducto: function(password, producto) {
    // si el password es falso no puede
    if (this.isAdmin(password) === false )  {
      console.log("no eres admin");
      return false;
    }
    // var encontrado = clientes.indexOf(cliente);
    // if (encontrado > -1){
    //   console.log("cliente existe");
    //   return false;
    // }
    if (producto.hasOwnProperty("nombre") === true
    && producto.hasOwnProperty("precio") === true
    && producto.hasOwnProperty("stock") === true) {
        this.productos.push(producto);
        console.log("producto agregado" , producto);
    } else {
    console.log("producto no valido");
    }
  },
  //   actualizarStock: function(producto){
  //     var encontrado = this.productos.indexOf(producto);
  //       if (encontrado > -1){
  //         this.productos[encontrado].stock -= 1;
  //         console.log( "actualizarStock", producto.stock);
  //       }
  //       return encontrado;
  // },
  // método Consultar Saldo
  consultarSaldo: function(cliente){
    var encontrado = this.clientes.indexOf(cliente);
    if (encontrado > -1){
      console.log( "Saldo", cliente.presupuesto);
    }
    return encontrado;
  },
  // método Consultar gastos
  consultarGastos: function(cliente){
    var encontrado = this.clientes.indexOf(cliente);
    if (encontrado > -1){
      console.log( "Gastos", cliente.productos);
    }
    return encontrado;
  }
}

// Paso 2 - Creamos los primeros perfiles en el Array de clientes:

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

maquina.agregarCliente(adminPassword, cliente1);
maquina.agregarCliente(adminPassword, cliente2);
maquina.quitarCliente(adminPassword, cliente2);
maquina.consumirProducto("Pedrito", "1234", "chocolate");
maquina.agregarProducto(adminPassword, {nombre: "zumo", precio: 15, stock: 30 });
maquina.consumirProducto("Pedrito", "1234", "zumo");


var cliente = maquina.login("Pedrito", "1234");
if (cliente !== false ) {
    maquina.consultarSaldo(cliente);
    maquina.consultarGastos(cliente);
}
