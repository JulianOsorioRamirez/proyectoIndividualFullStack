import React, { useState,useEffect } from "react";
import {useParams} from 'react-router-dom'


function BtnsR (props) {
    // const [sendIdUser, setDataIdUser] = useState("");

    const[talla, setDatatalla] = useState("")
    
    useEffect(() => {
       console.log(talla)
    },[talla])
    // useEffect(() => {
    //    let idUser = JSON.parse(localStorage.getItem("idUser"));
    //     // console.log(idUser)
    // }, []);

    function ShopCar () {
        let idUser = JSON.parse(localStorage.getItem("idUser"));
      
        // let car = JSON.parse(localStorage.getItem("carrito"))
        let idProduc =  props.tarjetas[props.id].id
        let producPrice = props.tarjetas[props.id].Precio
        let car = JSON.parse(localStorage.getItem("Carrito"));
        //  let car = []
        //aqui
  
        console.log(idProduc)
        console.log(producPrice)
        if (car == null) {
            car = [];
            console.log(car)
            car.push(idUser[talla, idProduc, producPrice]);
            localStorage.setItem("Carrito", JSON.stringify(car));
        } else {
  
                //   car.push([talla, idProduc,producPrice])
                  var encontrado = false;
                  let i = 0;
                  while (i < car.length && !encontrado) {
                      console.log(car[i])
                      encontrado = encontrado || idUser == car[i][0];
                      i++;
                  }
                  if (encontrado) {
                      car[i][1] = car[i][1] + 1;
                      console.log(car)
                      car.splice(i, 1, car[i])
                      localStorage.setItem("Carrito", JSON.stringify(car));
                  } else {
                      car.push([talla, idProduc, producPrice]);
                      localStorage.setItem("Carrito", JSON.stringify(car))
                  }
                  console.log(car)

                }
    }


  
    return(
        <div className   ="buttonsTalla">
            <button className="btn" onClick={() => setDatatalla("S")}> S </button>
            <button className = "btn" onClick={() => setDatatalla("M")}> M </button>
            <button className = "btn" onClick={() => setDatatalla("L")}> L </button>
            <button className = "btn" onClick={() => setDatatalla("XL")}> XL </button>
            <button className = "btnA" id ={props.id} onClick={(e) => ShopCar(e.target.id)} > Añadir al carrito </button>
            </div>
    )
}

export default BtnsR