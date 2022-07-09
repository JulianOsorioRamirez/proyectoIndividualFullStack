import React, { useState, useEffect } from "react";
import BtnsR from "./ComponenteBtnR";
import NavProducts from "./NavProducs";
import TaskPrendas from "./TaskPrendas";
import BtnPrenda from "./BtnPrendas";
import TittlePrendas from "./tittlePrendas"
import ContShopCar from "./contShopCar";

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

  // const LogData = () => {
  //   console.log(sendEmailLog);
  //   console.log(sendPassLog);
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ userLog: sendEmailLog, passLog: sendPassLog }),
  //   };

  //   fetch("login", requestOptions).then((response) => response.json());
  // };
  
  
  return (
    <div className="ProdIndex">
      <NavProducts/>
      <ContShopCar/>
      <TittlePrendas/>
      <BtnPrenda/>
      <TaskPrendas/>
      </div>
  );
}
export default Producs;
