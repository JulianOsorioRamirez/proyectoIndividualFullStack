import NavHome from "./NavHome"
import ContShopCar from "./contShopCar";
import { useEffect,useContext,useState } from "react";
import NavProducts from "./NavProducs";
import CreditCar from "./contCreditCar";

function Checkout () {
    
    return(
     <div>
      <NavHome/>
      
      <CreditCar/>
     </div>
     
    )
}

export default Checkout;