import React, { useState, useEffect } from "react";
import BtnsR from "./ComponenteBtnR";
import NavProducts from "./NavProducs";
import TaskPrendas from "./TaskPrendas";
import BtnPrenda from "./BtnPrendas";
import TittlePrendas from "./tittlePrendas"

// import IMG0 from "../componentes/images/tyler.jpg"
// import IMG1 from "../componentes/images/chulosykinkis.jpg"
// import IMG2 from "../componentes/images/classicKinkis.jpg"
// import IMG3 from "../componentes/images/Laker.jpg"
// import IMG4 from "../componentes/images/sudaderaMadriz.jpg"
// import IMG5 from "../componentes/images/champions.jpg"
// import IMG6 from "../componentes/images/amorDeBarrio.jpg"
// import IMG7 from "../componentes/images/kinkisGraf.jpg"
// import IMG8 from "../componentes/images/pantalonKinkis.jpg"
// import logo from "../componentes/images/dobermanLOGO.jpg"
import { Link } from "react-router-dom";

function Producs() {
  const [sendEmailLog, setDataToEmailLog] = useState("");
  const [sendPassLog, setDataToPassLog] = useState("");
  // const [sendIdUser, setDataIdUser] = useState("");
  const [sendIdProduc, setDataToIdProduc] = useState("");

  useEffect(() => {
    fetch("serchIdProduc")
      .then((response) => response.json())
      .then((res) => setDataToIdProduc(res));
  }, []);
  useEffect(() => {
    if (sendIdProduc) {
      console.log(sendIdProduc);
    }
  }, [sendIdProduc]);

  // const addProduct = (t) => {
  //   let producName = document.getElementsByClassName("producName")[t].innerText
  //   console.log(producName)

  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({nameProduc : producName})
  //   };

  //   fetch("serchIdProduc", requestOptions)
  //     .then((response) => response.json())
  //     .then((res)=> setDataToIdProduc(res))

  // }

  //   useEffect(() => {
  //     let infoLocal = JSON.parse(localStorage.getItem("CarritoDeCompra"))
  //     console.log(infoLocal)
  //     console.log(sendIdProduc)
  //     infoLocal[0].Producto = sendIdProduc.productId
  //     infoLocal[0].Precio = sendIdProduc.productPrice
  //     localStorage.setItem("CarritoDeCompra",JSON.stringify(infoLocal))
  // }, [sendIdProduc]);

  const LogData = () => {
    console.log(sendEmailLog);
    console.log(sendPassLog);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userLog: sendEmailLog, passLog: sendPassLog }),
    };

    fetch("login", requestOptions).then((response) => response.json());
  };
  function accesCont() {
    let test = document.getElementById("contLog2");
    if (test.style.display == "block") {
      test.style.display = "none";
    } else {
      test.style.display = "block";
    }
  }

  return (
    <div className="ProdIndex">
      <NavProducts />
      <TittlePrendas/>
      <BtnPrenda />
      <TaskPrendas />
      </div>
  );
}
export default Producs;
