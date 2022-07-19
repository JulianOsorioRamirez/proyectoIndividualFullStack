import React, { useState, useEffect } from "react";
import BtnsR from "./ComponenteBtnR";
import NavProducts from "./NavProducs";
import TaskPrendas from "./TaskPrendas";
import BtnPrenda from "./BtnPrendas";
import TittlePrendas from "./tittlePrendas"
import ContShopCar from "./contShopCar";
import producstState from "../context/context";

import { Link } from "react-router-dom";

function Producs() {
 
   useEffect(() => {
      console.log(localStorage)
      if(localStorage.length == 0){
        let car = []
        localStorage.setItem("Carrito", JSON.stringify(car));
      }
      
  }, []);

  const[state, setState] = useState("Prendas")
  
  
  return (
    <div className="ProdIndex">
      
      <NavProducts/>
      
      <TittlePrendas/>
      <BtnPrenda/>
      <TaskPrendas/> 
      
      
      </div>
  );
}
export default Producs;
