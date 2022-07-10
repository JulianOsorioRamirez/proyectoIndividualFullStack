import React, { useState,useEffect } from "react";
import BtnsR from "./ComponenteBtnR";
import BtnsB from "./ComponenteBtnsB";

function TaskPrendas () {
    const[sendIdProducB, setDataToIdProducB] = useState("");

    const[sendIdProduc, setDataToIdProduc] = useState("");

    useEffect(() => {
        fetch("serchIdProduc")
        .then((response) => response.json())
        .then((res)=> setDataToIdProduc(res))
    }, []);
    useEffect(()=>{
        if(sendIdProduc){
          console.log(sendIdProduc.id)
        }
    },[sendIdProduc]);

    useEffect(() => {
        fetch("serchIdProducB")
        .then((response) => response.json())
        .then((res)=> setDataToIdProducB(res))
    }, []);
    useEffect(()=>{
        if(sendIdProducB){
          console.log(sendIdProducB)
        }
    },[sendIdProducB]);

    return(
        <div className="allProductsCont">
        {sendIdProduc ? sendIdProduc.map((producto,i)=> <div className="productos" key={i}>
          <div className ="producto">
            <div className = "producto_img">
              <img src={producto.img} alt=""/>
              {/* <p>{producto.img}</p> */}
            </div>
            <div className="producto_footer">
                <h1 id="producName">{producto.Nombre}</h1>
               
                <p className="price">{producto.Precio}</p>
            </div>
            <BtnsR/>
            </div>
        </div> ): ""} 
        </div>
    )
}

export default TaskPrendas;