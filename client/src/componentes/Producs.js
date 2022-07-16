import React, { useState, useEffect } from "react";
import BtnsR from "./ComponenteBtnR";
import NavProducts from "./NavProducs";
import TaskPrendas from "./TaskPrendas";
import BtnPrenda from "./BtnPrendas";
import TittlePrendas from "./tittlePrendas"
import ContShopCar from "./contShopCar";
import ShopCarView from "./shopCarView";
import producstState from "../context/context";

import { Link } from "react-router-dom";

function Producs() {
  // const [sendEmailLog, setDataToEmailLog] = useState("");
  // const [sendPassLog, setDataToPassLog] = useState("");
  // // const [sendIdUser, setDataIdUser] = useState("");
  // const [sendIdProduc, setDataToIdProduc] = useState("");
  

 
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
  
    useEffect(() => {
      console.log(localStorage)
      if(localStorage.length == 0){
        let car = []
        localStorage.setItem("Carrito", JSON.stringify(car));
      }
      
  }, []);

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

  const[state, setState] = useState("Prendas")
  
  
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
