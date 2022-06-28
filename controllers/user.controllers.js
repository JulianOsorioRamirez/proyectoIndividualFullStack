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
    }
}

module.exports = user;
