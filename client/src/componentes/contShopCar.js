import { useEffect, useState } from "react";

function ContShopCar(props) {
    const[carrito,setDataCar] = useState("");
    const[price,setDataPrice] = useState("");
    const[dataProducs, setDataProducs] = useState("");
    const idProducs = []
   
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
        console.log(idProducs)
        

    }
    
    let result = idProducs.filter((item,index)=>{
        return idProducs.indexOf(item) === index;
      })
      console.log(result); //[1,2,6,5,9,'33']

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({id: result,
                              })
      };
  
      fetch("carShop", requestOptions)
        .then((response) => response.json())
        .then((res)=> setDataProducs(res))

     },[])
    return(
        <div>
          <h1 className="title">Carrito De Compras</h1>

         {dataProducs ? dataProducs.map((producto,i)=> <div className="contCarShop" key={i}>
           
          <div className ="productoCar">
            <div className = "producto_imgCar">
              
            <img src={producto.img} alt=""/>
              
            </div>
            <div className="producto_footer">
                <h1 className="producName" id={i}>{producto.Nombre}</h1>
               
                <p className="price">{producto.Precio}</p>
            </div>
            
            </div>
        </div> ) : ""}

        </div>
        
    );
    
}

export default ContShopCar