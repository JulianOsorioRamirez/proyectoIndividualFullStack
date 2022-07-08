import React, { useState,useEffect,useNavigate } from "react";

function ContRegis () {
        //  const navigate = useNavigate()
        const [sendName, setDataToName] = useState("");
        const [sendUnName, setDataToUname] = useState("");
        const [sendDni, setDataToDni] = useState("");
        const [sendEmail, setDataToEmail] = useState("");
        const [sendPass, setDataToPass] = useState("");
        const [sendPassConf, setDataToConfPass] = useState("");
        const [sendNumber, setDataToNumber] = useState("");
        // const[sendIdProduc, setDataToIdProduc] = useState("");
        const[messageError, setMessegeError] = useState("");
        
        

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
    return(
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
    )
}

export default ContRegis;