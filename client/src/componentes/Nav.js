import './App.css';
// import React, { useState } from "react";

function nav() {
    return (
        <nav class="nav">
        <p class="home">home</p>
        <p class="home">Tienda</p>
        <div class="login">
             <div class="barra">
             {/* <input class="log" id="log"  type="submit"  value="Acceder" /> */}
            <input class="sing" id="sing" type="submit" value="Carrito de la compra"/>
            </div>
        </div>
    </nav>
    )
}

export default nav