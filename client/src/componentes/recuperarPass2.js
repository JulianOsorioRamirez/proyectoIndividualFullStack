import React, { useState,useEffect } from "react";
import {Link, useParams} from "react-router-dom"
import logo from "../images/dobermanLOGO.jpg"
import {useNavigate} from "react-router-dom"
import NavHome from "./NavHome";
import NavProducs from "./NavProducs";
import Form from 'react-bootstrap/Form';



function RecuperarPassB () {
    const{email, token}= useParams()
    const[newPass, setNewPass] = useState("")
   
    function recPass () {

        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({pass : newPass,
                                  token: token,
                                  email: email})
          };
          console.log(requestOptions);
      
          fetch("/confirmuserCheck", requestOptions)
            .then((response) => response.json())
            .then((res) => console.log(res))
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
            <h1 className="recPassText">Introduce Nueva Contraseña</h1>
        </div>
        
            
            <div className="panel panel-default" >
                <div className="panel-heading">

                    <div className="row ">
                        <div className="col-md-12">
                            <Form.Control type="password" className="form-control" onChange={(e) => setNewPass(e.target.value)}placeholder="Introduce una nueva contraseña"  />
                        </div>
                    </div>
                    
                    
                    <div className="row ">
                        
                        <div className="col-md-6 col-sm-6 col-xs-6 pad-adjust">
                            <Form.Control type="button" className="botonLog" onClick={() => recPass()} value="Cambiar Contraseña"   />
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </Form>
        
        </div>
    )
}
export default RecuperarPassB