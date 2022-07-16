import React, { useState,useEffect,useContext  } from "react";

import BtnsR from "./ComponenteBtnR";
import BtnsB from "./ComponenteBtnsB";
import PrendasContext from "../context/context";


function TaskPrendas (id) {
    const[sendIdProducB, setDataToIdProducB] = useState("");
    // console.log(id)

    const[sendIdProduc, setDataToIdProduc] = useState("");

    const EstadoPrendas = useContext(PrendasContext)
    // useEffect(() =>{
    //   // console.log(EstadoPrendas.name)
    // })

    useEffect(() => {
        fetch("serchIdProduc")
        .then((response) => response.json())
        .then((res)=> setDataToIdProduc(res))
    }, []);
    // useEffect(()=>{
    //     if(sendIdProduc){
    //       console.log(sendIdProduc.id)
    //     }
    // },[sendIdProduc]);

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
          
        {EstadoPrendas.name == "Prendas" && sendIdProduc ? sendIdProduc.map((producto,i)=> <div className="productos" key={i}>
          <div className ="producto">
            <div className = "producto_img">
              <img src={producto.img} alt=""/>
              {/* <p>{producto.img}</p> */}
            </div>
            <div className="producto_footer">
                <h1 className="producName" id={i}>{producto.Nombre}</h1>
               
                <p className="price">{producto.Precio}</p>
            </div>
            <BtnsR id={i} tarjetas = {sendIdProduc}/>
            </div>
        </div> ) : sendIdProducB ? sendIdProducB.map((producto,i)=> <div className="productos" key={i}>
          <div className ="producto">
            <div className = "producto_img">
              <img src={producto.img} alt=""/>
              {/* <p>{producto.img}</p> */}
            </div>
            <div className="producto_footer">
                <h1 className="producName">{producto.Nombre}</h1>
               
                <p className="price">{producto.Precio}</p>
            </div>
            <BtnsB id={i}  tarjetas = {sendIdProducB}/>
            <div className="button">

               
               <div>
                {/* <a href="#"></a> */}
               </div>
             </div>
            </div>
        </div> ) : ""} 

        


        </div>
    )
}

export default TaskPrendas;