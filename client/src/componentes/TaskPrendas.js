import React, { useState,useEffect } from "react";
import BtnsR from "./ComponenteBtnR";

function TaskPrendas () {

    const[sendIdProduc, setDataToIdProduc] = useState("");

    useEffect(() => {
        fetch("serchIdProduc")
        .then((response) => response.json())
        .then((res)=> setDataToIdProduc(res))
    }, []);
    useEffect(()=>{
        if(sendIdProduc){
          console.log(sendIdProduc)
        }
    },[sendIdProduc]);

    return(
        <div className="allProductsCont">
        {sendIdProduc ? sendIdProduc.map((producto,i)=> <div className="productos" key={i}>
          <div className ="producto">
            <div className = "producto_img">
              <img src={producto.img} alt=""/>
              {/* <p>{producto.img}</p> */}
            </div>
            <div className="producto_footer">
                <h1 className="producName">{producto.Nombre}</h1>
               
                <p className="price">{producto.Precio}</p>
            </div>
            <BtnsR/>
            <div className="button">
               <button id ="0" className = "btn">
                   Añadir al carrito
               </button>
               
               <div>
                {/* <a href="#"></a> */}
               </div>
             </div>
            </div>
        </div> ):""} 
        </div>
    )
}

export default TaskPrendas;