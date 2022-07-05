const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const url = "mongodb://127.0.0.1:27017/";
const mongoose = require("mongoose");
const UserModel = require("../models/userModels");
var productID;
const PDFDocument = require('pdfkit');

const connection = require("../database/sqlDataBase");
const mysql = require("mysql");
const { propfind } = require("moongose/routes");
const bcrypt = require("bcrypt");
let userId
const user = {
    registrer : (req, res) => {
      nombre = req.body.name
      console.log(nombre)
      apellidos = req.body.unName
      console.log(req.body.unName)
      dni = req.body.dni
      console.log(dni)
      email = req.body.email
      console.log(email)
      contrasena = req.body.pass
      console.log(contrasena)
      contrasenaConf = req.body.passConf
      console.log(contrasenaConf)
      telefono = req.body.number
      console.log(telefono)
      
    // let nombre = req.body.name;
    // let apellidos = req.body.surname;
    // let email = req.body.email;
    // let contrasena = req.body.pass;
    // let contrasenaConf = req.body.passConf;
    // let telefono = req.body.phone;
    // let dni = req.body.dni;
    const emailExp = new RegExp(/^([\d\w_\.-]+)@([\d\w\.-]+)\.([\w\.]{3})$/);
    const nameExp = new RegExp(/^([A-Za-z]{1,15})$/);
    const unNameExp = new RegExp(/^([A-Za-z]{1,15})$/);
    const telfExp = new RegExp(/^\d{9}$/);
    const dniExp = new RegExp(/^\d{8}[a-zA-Z]$/);
    const passExp = new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/
    );

    if (
        !emailExp.test(email) ||
        !nameExp.test(nombre) ||
        !unNameExp.test(apellidos) ||
        !dniExp.test(dni) ||
        !passExp.test(contrasena) ||
        contrasena != contrasenaConf ||
        !telfExp.test(telefono)
      ) {
        
        
      } else {
  
        bcrypt.hash(contrasena, 10, (err, palabraSecretaEncriptada) => {
          if (err) {
            console.log("Error hasheando:", err);
          } else {
            console.log("Y hasheada es: " + palabraSecretaEncriptada);
            palabraEncriptada = palabraSecretaEncriptada;
            let insertQuery = `INSERT INTO Usuarios
         (
             nombre, apellidos, dni ,email, telefono, contrasena 
         )
         VALUES
         (
             ?, ?, ?, ?, ?, ?
         )`;
  
  
            let query = mysql.format(insertQuery, [
              nombre,
              apellidos,
              dni,
              email,
              telefono,
              palabraEncriptada
            ]);
            connection.query(query, (err, data) => {
              if (err) throw err;
              // console.log(data); 
              
            });
          }
          res.json({
            estado: true
        });
  
        });
  
        
      /**
       * Una vez esta registrado, volvemos a el index, y el usuario tiene que volver a logearse.
      */
    }
    },
    login: (req, res) => {

      /**
       * Guardamos en variables los inputs del login
       */
    
      loginEmail = req.body.userLog;
      console.log(loginEmail)
      passLog = req.body.passLog;
      var userId;
      
      

  
      /**
       * Comparamos las variables con el email y contraseña del administrador para que pueda modificar.
       */
  
  
      // if (loginEmail == "admin@admin.com" && passLog == "Admin123*") {
      //   res.render("admin");
      // }
  
  
      /**
       * Aqui comparamos si los datos introducidos por el usuario en el login se encuentran en la base de datos
       * para poder logearse.
       */
     
        
        let nameCorrect = `SELECT email,contrasena FROM Usuarios where email = '${loginEmail}'`;

        
          connection.query(nameCorrect, (err, rows) => {
            if (err) throw err;
      
            console.log('Usuario: \n', rows);
            bcrypt.compare(passLog, rows[0].contrasena).then(function (result) {
              // result == true
              
              if (result && rows[0].email == loginEmail) {
                console.log("Usuario correcto");
                console.log(result)
                let selectQuery = "SELECT * FROM ?? WHERE ?? = ?";
                
                let query3 = mysql.format(selectQuery, [
                  "Usuarios",
                  "email",
                  loginEmail,
                ]);
                console.log("selectQuery" + selectQuery);
                console.log("query3" + query3);
                res.send("Usuario y contraseña correcta")
                connection.query(query3, (err, data) => {
                  if (err) throw err;
                  // console.log(data);
                  var userId = data[0].id
                  logNombre = data[0].nombre;
                  logApellido = data[0].apellido;
                  logDni = data[0].dni;
                  logEmail = data[0].email;
                  logTelefono = data[0].telefono;
                  console.log(userId)
                });
                }else{
                  res.json({
                    message: "Campos incorrectos"
                });
               }
            });
          });
        
      },
    logOut: (req, res) => {
      // res.render('index');
      res.send("Vuelta a el index")
    },
    shopView: (req, res) => {
      // res.render('index');
      res.send("ir a tienda")
    },
    insertShopCar: (req, res) => {
      loginEmail = req.body.userLog;
      numPedido = "";
      console.log(loginEmail)
      let nameCorrect = `SELECT id FROM Usuarios where email = '${loginEmail}'`;

      function generateRandomIdTask(num) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < num; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        // return result;
        numPedido = result
        
        
    }
    generateRandomIdTask(7);
    

      connection.query(nameCorrect, (err, rows) => {
        if (err) throw err;
        userId = rows[0].id
        console.log(userId)

      total = 30

      let insertQuery = `INSERT INTO CarritosDeCompra
         (
          nPedido, fk_id_usuario, total
         )
         VALUES
         (
             ?, ?, ?
         )`;
         let query = mysql.format(insertQuery, [
          numPedido,
          userId,
          total
          ]);

          connection.query(query, (err, data) => {
            if (err) throw err;
            console.log(data);
            res.send("ok")
          });
      
        })

    },
    insertShopProducs: (req, res) => {
      pants = req.body.pants1
      userId = 2
      cantidad = 3
      
      let nameCorrect = `SELECT id FROM CarritosDeCompra where fk_id_usuario = '${userId}'`;

      connection.query(nameCorrect, (err, rows) => {
        if (err) throw err;
        carId = rows[0].id
        console.log(carId)
      })

     MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        const mydb = "Productos";
        const coleccion = "PrendasDeRopa";
        var dbo = db.db(mydb);
        var query = { "Nombre": pants };
        dbo.collection(coleccion).find(query).toArray(function(err, result) {
        if (err) throw err;
        // console.log(result[0].Marca);
        console.log(result[0].id)
        productID = result[0].id
        // res.send(result[0].Tallas[0].talla)
        let insertQuery = `INSERT INTO Carritos_Productos
         (
          fk_id_carrito, fk_id_producto_mongo, cantidad
         )
         VALUES
         (
             ?, ?, ?
         )`;
         let query2 = mysql.format(insertQuery, [
          carId,
          productID,
          cantidad
          ]);

          connection.query(query2, (err, data) => {
            if (err) throw err;
            console.log(data);
            res.send("ok")
          });
        db.close();
        });
    });
  },
  productsHistory : (req, res) => {

       
    var dbName = "Pedidos"
    var dbColection = "Historial De Pedidos"
    var idUser = req.param('idUser')
    var idProductos = ["PD16", "PD14"]
    var numPedido = req.param('numPedido')
    console.log(idUser);
    console.log(numPedido);


 

    var dbDates = { 
      "idUser" : idUser,
      "idProductos": idProductos,
      "FechaDePedido": "12-06-2022",
      "numPedido": numPedido,
      "Cantidad": "5",
      "cuentaTotal" : "30€"
    };

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db(dbName);
      
      dbo.collection(dbColection).insertOne(dbDates, function(err, res) {
          if (err) throw err;
          console.log("Documento insertado");
          db.close();
      });
  });
  }
}


module.exports = user;
