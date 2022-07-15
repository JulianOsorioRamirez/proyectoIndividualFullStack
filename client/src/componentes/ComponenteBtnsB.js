import React, { useState,useEffect } from "react";



function BtnsB (props) {
    function ShopCar (here) {
      
        let car = localStorage.getItem("carrito")
  
        let nameProduct =  props.tarjetas[props.id].id
  
        car.push(nameProduct)
        console.log(nameProduct)
  
        
      }
    return(
        <div className ="buttonsColor">
        <button className = "btn">
               Dorado
           </button><button className = "btn">
               Plata
           </button>
           <button  className = "btnAb" id ={props.id} onClick={(e) => ShopCar(e.target.id)}>
                   Añadir al carrito
            </button>
        </div>
    )
}

export default BtnsB