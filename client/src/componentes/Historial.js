import NavHome from "./NavHome"
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";

function Historial () {
    const[historial, setHistorial] = useState("")


    useEffect(()=> {
    const idUser = JSON.parse(localStorage.getItem('idUser'));

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({id: idUser,
                                  })
          };
      
          fetch("productsHistory", requestOptions)
            .then((response) => response.json())
            .then((res)=> setHistorial(res))
            
    },[])
    useEffect(()=>{
        if(historial){
          console.log(historial)
        }
    },[historial]);

    return(
     
     <div>
      <NavHome/>
      {historial ? historial.map((producto, i) => <div className="productos" >
          <div className ="producto">
            
             <h1 className="titleH"> Detalles del pedido:</h1>
           
               <div className="producto_footerH">

                <h2 className="producName" id={i}>numero de pedido : {producto.numPedido}</h2> 
                {producto.idProducs ? producto.idProducs.map((id) =><p> producto :{id} </p>) : ""}
                 
                <p className="priceH"> Precio total: {producto.cuentaTotal + "€"}</p>
                <p className="date">{producto.FechaDePedido}</p>

            </div>
            
            </div>
        </div>) : ""}
     </div>
     
    )
}
export default Historial;