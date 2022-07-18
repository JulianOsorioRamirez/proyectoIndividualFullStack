import React, { useState,useEffect } from "react";
import {Link } from "react-router-dom"
import logo from "../images/dobermanLOGO.jpg"
import {useNavigate} from "react-router-dom"
import NavHome from "./NavHome";
import NavProducs from "./NavProducs";
import Form from 'react-bootstrap/Form';




function RecuperarPass () {
        const[sendMail, setEmail] = useState("")
        


        function sendData () {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({email: sendMail})
              };
          
              fetch("confirmuser", requestOptions)
                .then((response) => response.json())
        }
        
    return(
        <div className="RecuperarPass">
    
    <div className="navProducs">
        <nav className="nav">
          <div className="divLogo">
          <img className="logo"src = {logo} alt=""/>
          </div>
          <div>
          <button id="homeBtn"> <Link to={"/"}>Home</Link></button>
          </div>
        
                
          
                
            
        </nav>
    </div>
        <Form action="#" id="recPass" className='recPass'>
        <div className="itemsRecPass">
        <div className="textRecPass">
            <h1 className="recPassText">Introduce el Email</h1>
        </div>
        
            
            <div className="panel panel-default" >
                <div className="panel-heading">

                    <div className="row ">
                        <div className="col-md-12">
                            <Form.Control type="text" onChange={(e) => setEmail(e.target.value)}className="form-control" placeholder="Introduce un email registrado"  />
                        </div>
                    </div>
                    
                    
                    <div className="row ">
                        
                        <div className="col-md-6 col-sm-6 col-xs-6 pad-adjust">
                            <Form.Control type="button" className="botonLog" onClick={() => sendData()} value="Recuperar Contraseña"   />
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </Form>
        
        </div>
    )
}
export default RecuperarPass