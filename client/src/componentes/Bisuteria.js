import React, { useState } from "react";

import IMG from "../componentes/images/aros trenzados.png"
import IMG2 from "../componentes/images/arosBrillantes.png"
import IMG3 from "../componentes/images/cadenas.png"
import IMG4 from "../componentes/images/corazones.png"
import IMG5 from "../componentes/images/cruz.png"
import IMG6 from "../componentes/images/guanteDeBox.png"
import IMG7 from "../componentes/images/manoDeFatima.png"
import IMG8 from "../componentes/images/selloAzteca.png"
import IMG9 from "../componentes/images/selloManoDeFatima.png"
import logo from "../componentes/images/dobermanLOGO.jpg"
import {Link} from "react-router-dom"
// import React, { useState } from "react";

function Bisuteria() {
  const [sendEmailLog, setDataToEmailLog] = useState("");
  const [sendPassLog, setDataToPassLog] = useState("");
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
  };
  function accesCont() {
    let test = document.getElementById('contLog2');
    if (test.style.display == 'block') {
      test.style.display = 'none';
    } else {
      test.style.display = 'block'
    }
  }
    return (
        <div className="ProdIndex">
      
        <link rel="stylesheet" href="/style.css" />
        <title>Pug </title>
        <nav class="nav">
          <div className="divLogo">
          <img className="logo"src = {logo} alt=""/>
          </div>
          <div>
          <button id="homeBtn"> <Link to={"/"}>Home</Link></button>
          </div>
        <div class="divLogin">
                <input class="log"  id="log" onClick={() => accesCont()} type="submit"  value="Acceder" />
                <input class="sing" id="sing" type="submit" value="Carrito" />
            </div>
        </nav>
        <section class="contLog2" id="contLog2">
        <div class="contLogBox">
            <div class="logBox">
                <h1 class="logHTex">Acceder</h1>
            </div>
            <div class="inpBu" action="/login" method="post">
            <input class="userLog" id="userLog" onChange={(e) => setDataToEmailLog(e.target.value)}  type="text" name="userLog" placeholder="Introduce tu Email" required="" />
            <input class="passLog"  id="passLog" onChange={(e) => setDataToPassLog(e.target.value)} type="password" name="passLog" placeholder="Introduce tu contraseña" required="" />
            <input class="botonLog"  id="botonLog" onClick={() => LogData()} type="submit" value="Acceder" />
            </div>
        </div>
    </section>
        <h1 className="title">Bisuteria</h1>
        <button id="homeBtn"> <Link to={"/producs"}>Prendas</Link></button>
        <div className="allProductsCont">
        <div className="productos">
          <div className ="producto">
            <div className = "producto_img">
              <img src={IMG} alt=""/>
            </div>
            <div className="producto_footer">
                <h1>Aros Trenzados</h1>
               
                <p className="price">5€</p>
            </div>
            <div className ="buttonsColor">
            <button className = "btn">
                   Dorado
               </button><button className = "btn">
                   Plata
               </button>
            </div>
            <div className="button">
               <button id ="añadirBtnb"className = "btn">
                   Añadir al carrito
               </button>
               
               <div>
                {/* <a href="#"></a> */}
               </div>
             </div>
            </div>
        </div>
       
        <div className="productos">
          <div className ="producto">
            <div className = "producto_img">
              <img src={IMG2} alt=""/>
            </div>
            <div className="producto_footer">
                <h1>Aros brillantes</h1>
                
                <p className="price">3€</p>
            </div>
            <div className ="buttonsColor">
            <button className = "btn">
                   Dorado
               </button><button className = "btn">
                   Plata
               </button>
            </div>
            <div className="button">
               <button id ="añadirBtnb"className = "btn">
                   Añadir al carrito
               </button>
               
               <div>
                {/* <a href="#"></a> */}
               </div>

               
              </div>
            </div>
        </div>

        <div className="productos">
          <div className ="producto">
            <div className = "producto_img">
              <img src={IMG3} alt=""/>
            </div>
            <div className="producto_footer">
                <h1>Cadenas trenzadas</h1>
                
                <p className="price">5€</p>
            </div>
            <div className ="buttonsColor">
            <button className = "btn">
                   Dorado
               </button><button className = "btn">
                   Plata
               </button>
            </div>
            <div className="button">
               <button id ="añadirBtnb" className = "btn">
                   Añadir al carrito
               </button>
               
               <div>
                {/* <a href="#"></a> */}
               </div>

               
              </div>
            </div>
        </div>

        <div className="productos">
          <div className ="producto">
            <div className = "producto_img">
              <img src={IMG4} alt=""/>
            </div>
            <div className="producto_footer">
                <h1>Aros de corazon</h1>
                
                <p className="price">5€</p>
            </div>
            <div className ="buttonsColor">
            <button className = "btn">
                   Dorado
               </button><button className = "btn">
                   Plata
               </button>
            </div>
            <div className="button">
               <button  id ="añadirBtnb"className = "btn">
                   Añadir al carrito
               </button>
               
               <div>
                {/* <a href="#"></a> */}
               </div>
             </div>
            </div>
        </div><div className="productos">
          <div className ="producto">
            <div className = "producto_img">
              <img src={IMG5} alt=""/>
            </div>
            <div className="producto_footer">
                <h1>Colgante de cruz</h1>
               
                <p className="price">3€</p>
            </div>
            <div className ="buttonsColor">
            <button className = "btn">
                   Dorado
               </button><button className = "btn">
                   Plata
               </button>
            </div>
            <div className="button">
               <button id ="añadirBtnb" className = "btn">
                   Añadir al carrito
               </button>
               
               <div>
                {/* <a href="#"></a> */}
               </div>
             </div>
            </div>
        </div>
        <div className="productos">
          <div className ="producto">
            <div className = "producto_img">
              <img src={IMG6} alt=""/>
            </div>
            <div className="producto_footer">
                <h1>Colgante guante de box</h1>
                
                <p className="price">3€</p>
            </div>
            <div className ="buttonsColor">
            <button className = "btn">
                   Dorado
               </button><button className = "btn">
                   Plata
               </button>
            </div>
            <div className="button">
               <button id ="añadirBtnb" className = "btn">
                   Añadir al carrito
               </button>
               
               <div>
                {/* <a href="#"></a> */}
               </div>
             </div>
            </div>
        </div>

        <div className="productos">
          <div className ="producto">
            <div className = "producto_img">
              <img src={IMG7} alt=""/>
            </div>
            <div className="producto_footer">
                <h1>Colgante Mano de Fatima</h1>
                
                <p className="price">5€</p>
            </div>
            <div className ="buttonsColor">
            <button className = "btn">
                   Dorado
               </button><button className = "btn">
                   Plata
               </button>
            </div>
            <div className="button">
               <button id ="añadirBtnb" className = "btn">
                   Añadir al carrito
               </button>
               
               <div>
                {/* <a href="#"></a> */}
               </div>
             </div>
            </div>
        </div>
        <div className="productos">
          <div className ="producto">
            <div className = "producto_img">
              <img src={IMG8} alt=""/>
            </div>
            <div className="producto_footer">
                <h1>Sello Azteca</h1>
                
                <p className="price">7€</p>
            </div>
            <div className ="buttonsColor">
            <button className = "btn">
                   Dorado
               </button><button className = "btn">
                   Plata
               </button>
            </div>
            <div className="button">
               <button id ="añadirBtnb" className = "btn">
                   Añadir al carrito
               </button>
               
               <div>
                {/* <a href="#"></a> */}
               </div>
             </div>
            </div>
        </div>
        <div className="productos">
          <div className ="producto">
            <div className = "producto_img">
              <img src={IMG9} alt=""/>
            </div>
            <div className="producto_footer">
                <h1>Sello Mano de Fatima</h1>
                
                <p className="price">7€</p>
            </div>
            <div className ="buttonsColor">
            <button className = "btn">
                   Dorado
               </button><button className = "btn">
                   Plata
               </button>
            </div>
            <div className="button">
               <button id ="añadirBtnb" className = "btn">
                   Añadir al carrito
               </button>
               
               <div>
                {/* <a href="#"></a> */}
               </div>
             </div>
            </div>
        </div>
        </div>
      </div>
    )
}

export default Bisuteria