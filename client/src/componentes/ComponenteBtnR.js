import React, { useState,useEffect } from "react";



function BtnsR () {
    // const [sendIdUser, setDataIdUser] = useState("");

    const[tallaM, setDatatallaM] = useState("M")
    const[tallaS, setDatatallaS] = useState("S")
    const[tallaL, setDatatallaL] = useState("L")
    const[tallaXL, setDatatallaXL] = useState("XL")
    
    useEffect(() => {

        let idUser = JSON.parse(localStorage.getItem("idUser"));
        console.log(idUser)
        

        // fetch("serchIdProduc")
        // .then((response) => response.json())
        // .then((res)=> setDataToIdProduc(res))
    }, []);

    function shopCar () {
        let nameProduct = document.getElementById("producName")
        console.log(nameProduct)
    }

  
    return(
        <div className   ="buttonsTalla">
            <button className="btn"> {tallaS} </button>
            <button className = "btn"> {tallaM} </button>
            <button className = "btn"> {tallaL} </button>
            <button className = "btn"> {tallaXL}</button>
            <button id ="btnA" onClick={() => shopCar()} className = "btn"> Añadir al carrito </button>
            </div>
    )
}

export default BtnsR