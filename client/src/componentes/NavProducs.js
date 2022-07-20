import React, { useState, useEffect } from "react";
import logo from "../images/dobermanLOGO.jpg"
import {Link} from "react-router-dom"

function NavProducts () {

    
    
   
    return(

        <div className="navProducs">
        <nav className="nav">
          <div className="divLogo">
          <img className="logo"src = {logo} alt=""/>
          </div>
          <div>
          <button id="homeBtn"> <Link to={"/"}>Home</Link></button>
          </div>
        
                
          <button id="homeBtn"> <Link to={"/shopCarView"}>Carrito</Link></button>
                
            
        </nav>
    </div>
        
    )
}

export default NavProducts;