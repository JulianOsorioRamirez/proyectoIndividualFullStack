import './App.css';
// import React, { useState } from "react";

function nav() {
    return (
        <nav className="nav">
        <p className="home">home</p>
        <p className="home">Tienda</p>
        <div className="login">
             <div className="barra">
             {/* <input className="log" id="log"  type="submit"  value="Acceder" /> */}
            <input className="sing" id="sing" type="submit" value="Carrito de la compra"/>
            </div>
        </div>
    </nav>
    )
}

export default nav