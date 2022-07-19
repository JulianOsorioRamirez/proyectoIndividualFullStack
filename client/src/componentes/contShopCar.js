import { useEffect, useState } from "react";
import {Link} from "react-router-dom"


function ContShopCar(props) {
    const[carrito,setDataCar] = useState("");
    const[price,setDataPrice] = useState("");
    const[dataProducs, setDataProducs] = useState("");
    const[checkout, setDatacheckout] = useState("");

    const idProducs = []
    const typeProducs = []
    function deleteProduc (i) {
      const car = JSON.parse(localStorage.getItem("Carrito"));
      console.log(car)
      car.splice(i + 1, 1)
      console.log(car)
      // let idUser = JSON.parse(localStorage.getItem("idUser"));
      
      localStorage.setItem("Carrito", JSON.stringify(car));
      window.location.reload()
    }
   
    useEffect(()=>{
        if(dataProducs){
          console.log(dataProducs)
        }
    },[dataProducs]);

    useEffect(()=>{
       
       const car = JSON.parse(localStorage.getItem("Carrito"));
    
       
       
       for (let i = 1; i < car.length; i++) {
        
        
        const element = car[i][1];
        idProducs.push(element)
        console.log(props.id)
        
    
    }
    
    
    for (let i = 1; i < car.length; i++) {
        
        
      const element = car[i][0];
      typeProducs.push(element)
      console.log(typeProducs)
      
  
  }
  let result = typeProducs.filter((item,index)=>{
    return typeProducs.indexOf(item) === index;
  })
  setDataProducs(result); //[1,2,6,5,9,'33']

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({id: idProducs,
                              })
      };
  
      fetch("carShop", requestOptions)
        .then((response) => response.json())
        .then((res)=> setDataProducs(res))

     },[])
    return(
        <div>
          <h1 className="titleCarShop">Carrito De Compras</h1>
          

<div className="allProductsContCar">
{dataProducs ? dataProducs.map((producto,i)=> <div className="contCarShop" key={i}>
           
          <div className ="productoCar">
            <div className = "producto_imgCar">
              
            <img src={producto.img} alt=""/>
              
            </div>
            <div className="producto_footer">
                <h1 className="producName" id={i}>{producto.Nombre}</h1>
                {/* <p className="producName" id={i}></p> */}

                
                <p className="price">{producto.Precio}</p>
                <button  className = "btn" onClick={() => deleteProduc(i)} id = {i}>
                Eliminar del carrito
            </button>
            </div>
            
            </div>
        </div> ) : ""}
    </div>
    <div className="btnsCarCredit">
            <button className="botonCarShop" ><Link to={"/producs"}>Seguir Comprando</Link></button>
            <button className = "botonCarShop" ><Link to={"/checkout"}>Finalizar Compra</Link></button>
    </div>
</div>
       
      );
    
}

export default ContShopCar