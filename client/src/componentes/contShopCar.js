import { useEffect, useState } from "react";

function ContShopCar(props) {
    const[carrito,setDataCar] = useState("");
    useEffect(()=>{
       
       const car = JSON.parse(localStorage.getItem("Carrito"));
       console.log(car)
       setDataCar(car)
       console.log(carrito)
       
       
    },[])
    return(
        <div>
         

        </div>
        
    );
    
}

export default ContShopCar