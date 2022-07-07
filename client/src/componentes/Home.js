
import React, { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import logo from "../componentes/images/dobermanLOGO.jpg"
import {useNavigate} from "react-router-dom"
// import Producs from "./Producs";



function Home() {
  // const [message, setMessage] = useState("");
  const navigate = useNavigate()
  const [sendName, setDataToName] = useState("");
  const [sendUnName, setDataToUname] = useState("");
  const [sendDni, setDataToDni] = useState("");
  const [sendEmail, setDataToEmail] = useState("");
  const [sendPass, setDataToPass] = useState("");
  const [sendPassConf, setDataToConfPass] = useState("");
  const [sendNumber, setDataToNumber] = useState("");
  const [sendEmailLog, setDataToEmailLog] = useState("");
  const [sendPassLog, setDataToPassLog] = useState("");
  const [sendIdUser, setDataIdUser] = useState("");
  const[sendIdProduc, setDataToIdProduc] = useState("");
  const[messageError, setMessegeError] = useState("");


  

  useEffect(() => {
    if (sendIdUser){
        let carritoDeCompra = [{
            "id": sendIdUser,
            "Producto": "",
            "Talla": "",
            "Precio": ""
        }]
        localStorage.setItem('CarritoDeCompra', JSON.stringify(carritoDeCompra));
    } 
}, [sendIdUser]);

  
useEffect(() => {
  let infoLocal = JSON.parse(localStorage.getItem("CarritoDeCompra"))
  console.log(infoLocal)
  console.log(sendIdProduc)
  infoLocal[0].Producto = sendIdProduc.productId
  infoLocal[0].Precio = sendIdProduc.productPrice
  localStorage.setItem("CarritoDeCompra",JSON.stringify(infoLocal))
}, [sendIdProduc]);

 
  
  
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
      .then((res) =>{
        console.log(res)
        if(res.messege == "ok"){
          let test = document.getElementById('contLog');
          test.style.display = 'none'
        }else{
          setMessegeError("correo ya registrado")
        }
      })
      


      
      
      

      
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
      .then((res)=> setDataIdUser(res.id))
      if(sendIdUser){
        navigate("/homeUserLog")
      }
      
  }  
      
      
      
      
      

      

    //   if (test.style.display == 'inline') {
    //     test.style.display = 'none';
    //   } else {
    //     test.style.display = 'inline'
    //   }
    
      
 

  return (
    <div className="Home">
      
    <link rel="stylesheet" href="/style.css" />
    <title>Pug </title>
    <nav className="nav">
    <div className="divShop">
        <button id="shopBtn"> <Link to={"/producs"}>Tienda</Link></button>
    {/* <input className="log"  id="log"  type="submit"  value="Tienda"/> */}
    </div>
  <div className="login">
             <div className="barra">
             <input className="log" onClick={() => mostrar1()} id="log"  type="submit"  value="Acceder" />
            <input className="sing" onClick={() => mostrar()} id="sing" type="submit" value="Registrarse" />
            </div>
        </div>
    </nav>
    <div className="contenedorRegis" id="contenedorRegis">
        <div className="acountCreate">
            <div className="acountBox">
                <div className="acountContenedor">
                    <div className="acountHead">
                        <h1 className="acountTextHead">Crea una cuenta</h1>
                    </div>
                    <form className="acout" action="/registro" method="post">
                        <div className="nameSurnameBox">
                            <div className="nameBox">
                              <p>{messageError}</p>
                                <p className="nameText"> Nombre</p><input className="name" id="name" onChange={(e) => setDataToName(e.target.value)} type="text" name="name" required="" />
                            </div>
                            <div className="surnameBox">
                                <p className="surnameText">Apellido</p><input className="surname" id="surname"  onChange={(e) => setDataToUname(e.target.value)} type="text" name="surname" required="" />
                            </div>
                        </div>
                        <div className="dniPhoneBox">
                            <div className="dniBox">
                                <p className="dniText">D.N.I</p><input className="dni" id="dni" onChange={(e) => setDataToDni (e.target.value)} type="text" name="dni" required="" />
                            </div>
                            <div className="phoneBox">
                                <p className="phoneText">Telefono</p><input className="phone" id="phone" onChange={(e) => setDataToNumber (e.target.value)} type="text" name="phone" required="" />
                            </div>
                        </div>
                        <div className="emailBox">
                            <p className="emailText">Email de Acceso</p><input className="email" id="email" onChange={(e) => setDataToEmail (e.target.value)} type="email" name="email" required="" />
                        </div>
                        <div className="passConfBox">
                            <div className="passBox" name="passText">
                                <p className="passText">Contraseña</p><input className="pass" id="pass"  onChange={(e) => setDataToPass (e.target.value)} type="password" name="pass" required="" />
                            </div>
                            <div className="confBox">
                                <p className="confPassText">Confirma tu contraseña</p><input className="passConf" id="passConf" onChange={(e) => setDataToConfPass (e.target.value)} type="password" name="passConf" required="" />
                            </div>
                        </div>
                        <div className="moreText">
                            <p className="textVali">La contraseña necesita un minimo de 8 caracteres, una letra masyuscula, un numero y un caracter especial</p>
                            <div className="chec"><input className="checkPass" id="checkPass" type="checkbox" name="checkPass" />
                                <p className="checText">Ver contraseña</p>
                            </div>
                        </div>
                        <div className="botonFormReg"><input className="botonReg" type="button" onClick={() => sendData()} value="Crear Cuenta" /></div>
                    </form>
                </div>
            </div>
            
        </div>
    </div>
    <section className="contLog" id="contLog">
        <div className="contLogBox">
            <div className="logBox">
                <h1 className="logHTex">Acceder</h1>
                
                {/* <p className="logPText">Full access to in any of our products</p> */}
            </div>
            <div className="inpBu" action="/login" method="post">
            <input className="userLog" id="userLog" onChange={(e) => setDataToEmailLog(e.target.value)}  type="text" name="userLog" placeholder="Introduce tu Email" required="" />
            <input className="passLog" onChange={(e) => setDataToPassLog(e.target.value)} id="passLog" type="password" name="passLog" placeholder="Introduce tu contraseña" required="" /><input className="botonLog" onClick={() => LogData()} id="botonLog" type="button" value="Acceder" />
            </div>
        </div>
    </section>
    <section className="textCentral">
        <h1 className="travel"> DOBERMAN VINTAGE</h1>
        <p className="travelp">Es un sitio de encuentro <br /> En pleno centro de madrid<br /> donde podras comprar la mejor ropa<br /> al puro estilo de la CAPITAL!!!</p>
    </section>
    <section>
    <img className="logoHome"src = {logo} alt=""/>
    </section>
    </div>
  );
}

export default Home;