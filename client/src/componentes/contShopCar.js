import { useEffect, useState } from "react";

function ContShopCar(props) {
    const[carrito,setDataCar] = useState("");
    const[price,setDataPrice] = useState("");
    const[dataProducs, setDataProducs] = useState("");


    useEffect(()=>{
       
       const car = JSON.parse(localStorage.getItem("Carrito"));
    //    for(let i = 0; i <= car.length; i++){
    //        let idProducs = []
    //        let id = car[i][i]
    //     //    idProducs.push(id)
    //        console.log(id)
    //    }
       
       console.log(car[1])
       for (let i = 0; i < car.length; i++) {
        const idProducs = []

        const element = car[i][1];
        idProducs.push(element)
        
       
        setDataProducs(idProducs)

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({id: dataProducs,
                                  })
          };
      
          fetch("carShop", requestOptions)
            .then((response) => response.json())
            .then((res)=> console.log(setDataProducs(res)))
            
        
       }
       console.log(dataProducs)
        
       
      
       
       let id = car[1][1]
       setDataCar(car)
       console.log(carrito)
    
       
    },[])
    return(
        <div>
         {carrito ? carrito.map((producto,i)=> <div className="productos" key={i}>
           
          <div className ="producto">
            <div className = "producto_img">
              
            <img src={producto.img} alt=""/>
              
            </div>
            <div className="producto_footer">
                {/* <h1 className="producName" id={i}>{producto[3]}</h1> */}
               
                <p className="price">{producto}</p>
            </div>
            
            </div>
        </div> ) : ""}

        </div>
        
    );
    
}

export default ContShopCar