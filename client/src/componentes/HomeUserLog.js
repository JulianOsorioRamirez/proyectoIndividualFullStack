import React, { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import logo from "../componentes/images/dobermanLOGO.jpg"
// import Producs from "./Producs";



function HomeUserLog() {
  

  return (
    <div className="Home">
      
    <link rel="stylesheet" href="/style.css" />
    <title>Pug </title>
    <nav className="nav">
    <div className="divShop">
        <button id="shopBtn"> <Link to={"/producs"}>Tienda</Link></button>
    </div>
    <div className="divLogOut">
    <button id="logOutBtn"> <Link to={"/"}>logOut</Link></button>
    </div>
  
    </nav>
    
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

export default HomeUserLog;