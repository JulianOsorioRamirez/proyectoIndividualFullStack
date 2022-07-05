
import React, { useState } from "react";
import {Link} from "react-router-dom"
import logo from "../componentes/images/dobermanLOGO.jpg"
// import Producs from "./Producs";



function Home() {
  // const [message, setMessage] = useState("");
  
  const [sendName, setDataToName] = useState("");
  const [sendUnName, setDataToUname] = useState("");
  const [sendDni, setDataToDni] = useState("");
  const [sendEmail, setDataToEmail] = useState("");
  const [sendPass, setDataToPass] = useState("");
  const [sendPassConf, setDataToConfPass] = useState("");
  const [sendNumber, setDataToNumber] = useState("");
  const [sendEmailLog, setDataToEmailLog] = useState("");
  const [sendPassLog, setDataToPassLog] = useState("");
  
  

  


 
  
  
  const mostrar = () => {
    let test = document.getElementById('contenedorRegis');
    if (test.style.display == 'block') {
      test.style.display = 'none';
    } else {
      test.style.display = 'block'
    }
  }

  function mostrar1() {
    let test = document.getElementById('contLog');
    if (test.style.display == 'block') {
      test.style.display = 'none';
    } else {
      test.style.display = 'block'
    }
  }
  




  const sendData = () => {
    
  
    console.log(sendName);
    console.log(sendUnName);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({name: sendName,
                            unName: sendUnName,
                            dni: sendDni,
                            email: sendEmail,
                            pass: sendPass,
                            passConf: sendPassConf,
                            number: sendNumber})
    };

    fetch("registro", requestOptions)
      .then((response) => response.json())
      

      
  };

  const LogData = () => {
    console.log(sendEmailLog);
    console.log(sendPassLog);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({userLog: sendEmailLog,
                            passLog: sendPassLog})
    };

    fetch("login", requestOptions)
      .then((response) => response.json())

    //   if (test.style.display == 'inline') {
    //     test.style.display = 'none';
    //   } else {
    //     test.style.display = 'inline'
    //   }
    
      
  };

  return (
    <div className="Home">
      
    <link rel="stylesheet" href="/style.css" />
    <title>Pug </title>
    <nav class="nav">
    <div className="divShop">
        <button id="shopBtn"> <Link to={"/producs"}>Tienda</Link></button>
    {/* <input class="log"  id="log"  type="submit"  value="Tienda"/> */}
    </div>
  <div class="login">
             <div class="barra">
             <input class="log" onClick={() => mostrar1()} id="log"  type="submit"  value="Acceder" />
            <input class="sing" onClick={() => mostrar()} id="sing" type="submit" value="Registrarse" />
            </div>
        </div>
    </nav>
    <div class="contenedorRegis" id="contenedorRegis">
        <div class="acountCreate">
            <div class="acountBox">
                <div class="acountContenedor">
                    <div class="acountHead">
                        <h1 class="acountTextHead">Crea una cuenta</h1>
                    </div>
                    <form class="acout" action="/registro" method="post">
                        <div class="nameSurnameBox">
                            <div class="nameBox">
                                <p class="nameText"> Nombre</p><input class="name" id="name" onChange={(e) => setDataToName(e.target.value)} type="text" name="name" required="" />
                            </div>
                            <div class="surnameBox">
                                <p class="surnameText">Apellido</p><input class="surname" id="surname"  onChange={(e) => setDataToUname(e.target.value)} type="text" name="surname" required="" />
                            </div>
                        </div>
                        <div class="dniPhoneBox">
                            <div class="dniBox">
                                <p class="dniText">D.N.I</p><input class="dni" id="dni" onChange={(e) => setDataToDni (e.target.value)} type="text" name="dni" required="" />
                            </div>
                            <div class="phoneBox">
                                <p class="phoneText">Telefono</p><input class="phone" id="phone" onChange={(e) => setDataToNumber (e.target.value)} type="text" name="phone" required="" />
                            </div>
                        </div>
                        <div class="emailBox">
                            <p class="emailText">Email de Acceso</p><input class="email" id="email" onChange={(e) => setDataToEmail (e.target.value)} type="email" name="email" required="" />
                        </div>
                        <div class="passConfBox">
                            <div class="passBox" name="passText">
                                <p class="passText">Contraseña</p><input class="pass" id="pass"  onChange={(e) => setDataToPass (e.target.value)} type="password" name="pass" required="" />
                            </div>
                            <div class="confBox">
                                <p class="confPassText">Confirma tu contraseña</p><input class="passConf" id="passConf" onChange={(e) => setDataToConfPass (e.target.value)} type="password" name="passConf" required="" />
                            </div>
                        </div>
                        <div class="moreText">
                            <p class="textVali">La contraseña necesita un minimo de 8 caracteres, una letra masyuscula, un numero y un caracter especial</p>
                            <div class="chec"><input class="checkPass" id="checkPass" type="checkbox" name="checkPass" />
                                <p class="checText">Ver contraseña</p>
                            </div>
                        </div>
                        <div class="botonFormReg"><input class="botonReg" type="submit" onClick={() => sendData()} value="Crear Cuenta" /></div>
                    </form>
                </div>
            </div>
            
        </div>
    </div>
    <section class="contLog" id="contLog">
        <div class="contLogBox">
            <div class="logBox">
                <h1 class="logHTex">Acceder</h1>
                
                {/* <p class="logPText">Full access to in any of our products</p> */}
            </div>
            <div class="inpBu" action="/login" method="post">
            <input class="userLog" id="userLog" onChange={(e) => setDataToEmailLog(e.target.value)}  type="text" name="userLog" placeholder="Introduce tu Email" required="" />
            <input class="passLog" onChange={(e) => setDataToPassLog(e.target.value)} id="passLog" type="password" name="passLog" placeholder="Introduce tu contraseña" required="" /><input class="botonLog" onClick={() => LogData()} id="botonLog" type="submit" value="Acceder" />
            </div>
        </div>
    </section>
    <section class="textCentral">
        <h1 class="travel"> DOBERMAN VINTAGE</h1>
        <p class="travelp">Es un sitio de encuentro <br /> En pleno centro de madrid<br /> donde podras comprar la mejor ropa<br /> al puro estilo de la CAPITAL!!</p>
    </section>
    <section>
    <img className="logoHome"src = {logo} alt=""/>
    </section>
    
   

     {/* <form id="form">
            <div class="contenedor1">
                <div class="izquierda">
                 <h1>{message ? message : "registro"}</h1>
                    <label for="">Nombre<input id="name" onChange={(e) => setDataToName(e.target.value)} name="name" type="name" placeholder="Inserte su nombre aquí" 
                        required />
                        <span>*</span> </label>
                    <p id="parrafoNombre"> </p>
                    <label for="">apellido<input name="unName" onChange={(e) => setDataToUname(e.target.value)} id="apellido" type="name"
                            placeholder="Inserte su primer apellido aquí" required /><span>*</span></label>
                    <p id="parrafo1Apellido"></p>
                    <label for="">DNI<input type="text" id="dni" onChange={(e) => setDataToDni (e.target.value)} placeholder="Inserte su DNI con letra"
                            required /><span>*</span></label>
                    <p id="parrafoDni"> </p>
                    <label for="">Email<input type="email" id="email" onChange={(e) => setDataToEmail (e.target.value)} pattern=".+@tutsplus.com|.+@envato.com" placeholder="Inserte su dirección de email aquí"
                            required /><span>*</span> </label>
                    <p id="parrafoEmail"> </p>
                    <label for="">Password<input type="password" onChange={(e) => setDataToPass (e.target.value)}id="passFr" placeholder="Inserte su contraseña aquí"
                            required /><span>*</span> </label>
                    <p id="parrafoPassword"> </p>
                    <label for="">Password<input type="password" onChange={(e) => setDataToConfPass (e.target.value)} id="passConf" placeholder="Inserte su contraseña aquí"
                        required /><span>*</span> </label>
                    <p id="parrafoPassword"> </p>
                    <label for="">Telefono<input type="number" onChange={(e) => setDataToNumber (e.target.value)} id="telefono" placeholder="Inserte su telefono aquí"
                        required /><span>*</span> </label>
                    <p id="parrafoPassword"> </p>
                    </div>
                    <div>
                    <label for="">email<input id="name" onChange={(e) => setDataToEmailLog(e.target.value)} name="name" type="name" placeholder="Inserte su email aquí" 
                        required />
                        <span>*</span> </label>
                        <label for="">password<input id="name" onChange={(e) => setDataToPassLog(e.target.value)} name="name" type="name" placeholder="Inserte su contraseña aquí" 
                        required />
                        <span>*</span> </label>
                    </div>
                
               </div>
        </form>
        
        
        <button id="registrarUser" onClick={() => sendData()} class="submitBtn" type="submit">Registrarse</button>
        <button id="LogUser" onClick={() => LogData()} class="submitBtn" type="submit">Log in</button>  */}

    </div>
  );
}

export default Home;