import React, { useState, useEffect } from "react";
import logo from "../componentes/images/dobermanLOGO.jpg"
import {Link} from "react-router-dom"

function NavProducts () {

    function shopCarView (){
        let test = document.getElementById("contShopCar");
        if (test.style.display == "none") {
          test.style.display = "inline";
        } else {
          test.style.display = "none";
        }
      }
    
   
    return(

        <div className="navProducs">
        <nav className="nav">
          <div className="divLogo">
          <img className="logo"src = {logo} alt=""/>
          </div>
          <div>
          <button id="homeBtn"> <Link to={"/"}>Home</Link></button>
          </div>
        <div className="divLogin">
                
                <input className="sing" id="sing" type="submit" onClick={() => shopCarView()} value="Carrito" />
            </div>
        </nav>
    </div>
        
    )
}

export default NavProducts;