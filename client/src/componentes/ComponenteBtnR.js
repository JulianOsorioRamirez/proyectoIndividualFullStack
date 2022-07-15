import React, { useState,useEffect } from "react";
import {useParams} from 'react-router-dom'


function BtnsR (props) {
    // const [sendIdUser, setDataIdUser] = useState("");

    const[talla, setDatatalla] = useState("")
    
    useEffect(() => {
       console.log(talla)
    },[talla])
    useEffect(() => {
       let idUser = JSON.parse(localStorage.getItem("idUser"));
        console.log(idUser)
    }, []);

    function ShopCar (here) {
        
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