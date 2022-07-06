import React, { useState,useEffect } from "react";

import IMG from "../componentes/images/tyler.jpg"
import IMG2 from "../componentes/images/chulosykinkis.jpg"
import IMG3 from "../componentes/images/classicKinkis.jpg"
import IMG4 from "../componentes/images/Laker.jpg"
import IMG5 from "../componentes/images/sudaderaMadriz.jpg"
import IMG6 from "../componentes/images/champions.jpg"
import IMG7 from "../componentes/images/amorDeBarrio.jpg"
import IMG8 from "../componentes/images/kinkisGraf.jpg"
import IMG9 from "../componentes/images/pantalonKinkis.jpg"
import logo from "../componentes/images/dobermanLOGO.jpg"
import {Link} from "react-router-dom"




function Producs () {
  

  const [sendEmailLog, setDataToEmailLog] = useState("");
  const [sendPassLog, setDataToPassLog] = useState("");
  // const [sendIdUser, setDataIdUser] = useState("");
  const[sendIdProduc, setDataToIdProduc] = useState("");

  const addProduct = (t) => {
    let producName = document.getElementsByClassName("producName")[t].innerText
    console.log(producName)

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({nameProduc : producName})
    };
    
    fetch("serchIdProduc", requestOptions)
      .then((response) => response.json())
      .then((res)=> setDataToIdProduc(res))
      
  }

  useEffect(() => {
    let infoLocal = JSON.parse(localStorage.getItem("CarritoDeCompra"))
    console.log(infoLocal)
    console.log(sendIdProduc)
    infoLocal[0].Producto = sendIdProduc.productId
    infoLocal[0].Precio = sendIdProduc.productPrice
    localStorage.setItem("CarritoDeCompra",JSON.stringify(infoLocal))
}, [sendIdProduc]);
 
 
    
 
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
        <nav className="nav">
          <div className="divLogo">
          <img className="logo"src = {logo} alt=""/>
          </div>
          <div>
          <button id="homeBtn"> <Link to={"/"}>Home</Link></button>
          </div>
        <div className="divLogin">
                <input className="log"  id="log" onClick={() => accesCont()} type="submit"  value="Acceder" />
                <input className="sing" id="sing" type="submit" value="Carrito" />
            </div>
        </nav>
        <section className="contLog2" id="contLog2">
        <div className="contLogBox">
            <div className="logBox">
                <h1 className="logHTex">Acceder</h1>
            </div>
            <div className="inpBu" action="/login" method="post">
            <input className="userLog" id="userLog" onChange={(e) => setDataToEmailLog(e.target.value)}  type="text" name="userLog" placeholder="Introduce tu Email" required="" />
            <input className="passLog"  id="passLog" onChange={(e) => setDataToPassLog(e.target.value)} type="password" name="passLog" placeholder="Introduce tu contraseña" required="" />
            <input className="botonLog"  id="botonLog" onClick={() => LogData()} type="submit" value="Acceder" />
            </div>
        </div>
    </section>
        <h1 className="title">Prendas de Ropa</h1>
        <button id="homeBtn"> <Link to={"/bisuteria"}>Bisuteria</Link></button>
        <div className="allProductsCont">
        <div className="productos">
          <div className ="producto">
            <div className = "producto_img">
              <img src={IMG} alt=""/>
            </div>
            <div className="producto_footer">
                <h1 className="producName">Tyler T shirt</h1>
               
                <p className="price">17€</p>
            </div>
            <div className ="buttonsTalla">
            <button className = "btn">
                   S
               </button><button className = "btn">
                   M
               </button><button className = "btn">
                  L
               </button>
               <button className = "btn">
                  XL
               </button>
              </div>
            <div className="button">
               <button id ="0" onClick={(e) => addProduct(e.target.id)}className = "btn">
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
                <h1 className="producName">chulos y castizos</h1>
                
                <p className="price">17€</p>
            </div>
            <div className ="buttonsTalla">
            <button className = "btn">
                   S
               </button><button className = "btn">
                   M
               </button><button className = "btn">
                  L
               </button>
               <button className = "btn">
                  XL
               </button>
               
               
               
              </div>
            <div className="button">
               <button id  ="1" onClick={(e) => addProduct(e.target.id)} className = "btn">
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
                <h1 className="producName" >kinkis Clasic</h1>
                
                <p className="price">17€</p>
            </div>
            <div className ="buttonsTalla">
            <button className = "btn">
                   S
               </button><button className = "btn">
                   M
               </button><button className = "btn">
                  L
               </button>
               <button className = "btn">
                  XL
               </button>
               
               
               
              </div>
            <div className="button">
               <button id ="2" onClick={(e) => addProduct(e.target.id)} className = "btn">
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
                <h1 className="producName">Kinkis Lakers</h1>
                
                <p className="price">17€</p>
            </div>
            <div className ="buttonsTalla">
            <button className = "btn">
                   S
               </button><button className = "btn">
                   M
               </button><button className = "btn">
                  L
               </button>
               <button className = "btn">
                  XL
               </button>
               
               
               
              </div>
            <div className="button">
               <button  id ="3" onClick={(e) => addProduct(e.target.id)}className = "btn">
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
                <h1 className="producName">Sudadera Madriz</h1>
               
                <p className="price">17€</p>
            </div>
            <div className ="buttonsTalla">
            <button className = "btn">
                   S
               </button><button className = "btn">
                   M
               </button><button className = "btn">
                  L
               </button>
               <button className = "btn">
                  XL
               </button>
               
               
               
              </div>
            <div className="button">
               <button id ="4" onClick={(e) => addProduct(e.target.id)} className = "btn">
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
                <h1 className="producName">Champions T shirt</h1>
                
                <p className="price">17€</p>
            </div>
            <div className ="buttonsTalla">
            <button className = "btn">
                   S
               </button><button className = "btn">
                   M
               </button><button className = "btn">
                  L
               </button>
               <button className = "btn">
                  XL
               </button>
               
               
               
              </div>
            <div className="button">
               <button id ="5" onClick={(e) => addProduct(e.target.id)} className = "btn">
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
                <h1 className="producName">Amor De Barrio</h1>
                
                <p className="price">17€</p>
            </div>
            <div className ="buttonsTalla">
            <button className = "btn">
                   S
               </button><button className = "btn">
                   M
               </button><button className = "btn">
                  L
               </button>
               <button className = "btn">
                  XL
               </button>
               
               
               
              </div>
            <div className="button">
               <button id ="6" onClick={(e) => addProduct(e.target.id)} className = "btn">
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
                <h1 className="producName">Kinkis Graff</h1>
                
                <p className="price">17€</p>
            </div>
            <div className ="buttonsTalla">
            <button className = "btn">
                   S
               </button><button className = "btn">
                   M
               </button><button className = "btn">
                  L
               </button>
               <button className = "btn">
                  XL
               </button>
               
               
               
              </div>
            <div className="button">
               <button id ="7" onClick={(e) => addProduct(e.target.id)} className = "btn">
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
                <h1 className="producName">Bañador Madriz</h1>
                
                <p className="price">15€</p>
            </div>
            <div className ="buttonsTalla">
            <button className = "btn">
                   S
               </button><button className = "btn">
                   M
               </button><button className = "btn">
                  L
               </button>
               <button className = "btn">
                  XL
               </button>
               
               
               
              </div>
            <div className="button">
               <button id ="8" onClick={(e) => addProduct(e.target.id)} className = "btn">
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
    );
}
export default Producs