
import './App.css';
// import React, { useState } from "react";
import Home from './componentes/Home';
import Producs  from './componentes/Producs';

// import Nav from "./Nav"
// import Welcome from './Welcome';

function App() {
  


 

  





 

  return (
    <div className="App">
    {/* <Home/> */}
    <Producs/>
    
   

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
        <button id="LogUser" onClick={() => LogData()} class="submitBtn" type="submit">Log in</button>   */}

    </div>
  );
}

export default App;
