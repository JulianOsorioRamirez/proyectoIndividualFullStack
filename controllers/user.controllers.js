const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const url = "mongodb://127.0.0.1:27017/";
const mongoose = require("mongoose");
const UserModel = require("../models/userModels");

const PDFDocument = require('pdfkit');

const connection = require("../database/sqlDataBase");
const mysql = require("mysql");
const { propfind } = require("moongose/routes");
const bcrypt = require("bcrypt");
let userId
const user = {
    registrer : (req, res) => {
    let nombre = req.body.name;
    let apellidos = req.body.surname;
    let email = req.body.email;
    let contrasena = req.body.pass;
    let contrasenaConf = req.body.passConf;
    let telefono = req.body.phone;
    let dni = req.body.dni;
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
        console.log("campos incorrectos"); //renderizar una pagina de campos incorrectos
        res.send("todo mal")
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
              console.log(data);
              res.send("ok")
            });
          }
  
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
      try {
        
        let nameCorrect = `SELECT email,contrasena FROM Usuarios where email = '${loginEmail}'`;

        if(nameCorrect != null){
          connection.query(nameCorrect, (err, rows) => {
            if (err) throw err;
      
            console.log('Usuario: \n', rows);
            bcrypt.compare(passLog, rows[0].contrasena).then(function (result) {
              // result == true
              
              if (result && rows[0].email == loginEmail) {
                console.log("Usuario correcto");
                console.log(result)
                let selectQuery = "SELECT * FROM ?? WHERE ?? = ?";
                // //`SELECT * FROM Usuarios WHERE email = ${loginEmail}`
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
              } else if(contrasena == undefined){
                res.send("email incorrecto")
              }
            });
          });
        }else{
          console.log("datos incorrectos")
        }
      } catch (error) {
        res.send("email o contraseña incorrectos")
      }
      
  
    },
    logOut: (req, res) => {
      // res.render('index');
      res.send("Vuelta a el index")
    },
    insertShopCar: (req, res) => {
      loginEmail = req.body.userLog 
      let nameCorrect = `SELECT id FROM Usuarios where email = '${loginEmail}'`;

      connection.query(nameCorrect, (err, rows) => {
        if (err) throw err;
        userId = rows[0].id
        console.log(userId)
      
      
      numPedido = "N33344555"
      total = 15

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

     MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        const mydb = "Productos";
        const coleccion = "PrendasDeRopa";
        var dbo = db.db(mydb);
        var query = { "Nombre": pants };
        dbo.collection(coleccion).find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result._id);
        res.send(result)
        db.close();
        });
    });
    }
    
}

module.exports = user;
