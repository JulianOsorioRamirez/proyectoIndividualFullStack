import React, { useState,useEffect } from "react";



function BtnsB (props) {
    const[color, setDataColor] = useState("")
    useEffect(()=>{
     console.log(color)
    },[color])
    function ShopCar (here) {
      
        
        // let idUser = JSON.parse(localStorage.getItem("idUser"));
        
        // let idProduc =  props.tarjetas[props.id].id
        // let producPrice =  props.tarjetas[props.id].Precio
        // console.log(producPrice)
        // let car = localStorage.getItem("carrito")

        // if (car == null) {
        //     car = [];
        //     car.push(idUser[color, idProduc, producPrice]);
        //     localStorage.setItem("Carrito", JSON.stringify(car));
        // } else {
  
        //         //   car.push([talla, idProduc,producPrice])
        //           var encontrado = false;
        //           let i = 0;
        //           while (i < car.length && !encontrado) {
        //               console.log(car[i])
        //               encontrado = encontrado || idUser == car[i][0];
        //               i++;
        //           }
        //           if (encontrado) {
        //               car[i][1] = car[i][1] + 1;
        //               console.log(car)
        //               car.splice(i, 1, car[i])
        //               localStorage.setItem("Carrito", JSON.stringify(car));
        //           } else {
        //               car.push([color, idProduc, producPrice]);
        //               localStorage.setItem("Carrito", JSON.stringify(car))
        //           }
        //           console.log(car)

        //         }

  
        
        
  
        
      }
    return(
        <div className ="buttonsColor">
        <button className = "btn" onClick={() => setDataColor("Dorado")}>
               Dorado
           </button><button className = "btn" onClick={() => setDataColor("Plata")}>
               Plata
           </button>
           <button  className = "btnAb" id ={props.id} onClick={(e) => ShopCar(e.target.id)}>
                Añadir al carrito
            </button>
        </div>
    )
}

export default BtnsB