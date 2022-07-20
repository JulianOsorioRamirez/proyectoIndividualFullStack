import React, { useState,useEffect } from "react";
import BtnsB from "./ComponenteBtnsB" 
import logo from "../images/dobermanLOGO.jpg"
import {Link} from "react-router-dom"
// import React, { useState } from "react";

function Bisuteria() {
  const [sendEmailLog, setDataToEmailLog] = useState("");
  const [sendPassLog, setDataToPassLog] = useState("");
  const[sendIdProducB, setDataToIdProducB] = useState("");
  
  
  useEffect(() => {
    fetch("serchIdProducB")
    .then((response) => response.json())
    .then((res)=> setDataToIdProducB(res))
}, []);
useEffect(()=>{
    if(sendIdProducB){
      console.log(sendIdProducB)
    }
},[sendIdProducB]);
 
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
        <h1 className="title">Bisuteria</h1>
        <button id="homeBtn"> <Link to={"/producs"}>Prendas</Link></button>
        <div className="allProductsCont">
        {sendIdProducB ? sendIdProducB.map((producto,i)=> <div className="productos" key={i}>
          <div className ="producto">
            <div className = "producto_img">
              <img src={producto.img} alt=""/>
              {/* <p>{producto.img}</p> */}
            </div>
            <div className="producto_footer">
                <h1 className="producName">{producto.Nombre}</h1>
               
                <p className="price">{producto.Precio}</p>
            </div>
            <BtnsB/>
            <div className="button">
               <button id ="0" className = "btn">
                   Añadir al carrito
               </button>
               
               <div>
               </div>
             </div>
            </div>
        </div> ):""} 
       
        
        </div>
      </div>
    )
}

export default Bisuteria