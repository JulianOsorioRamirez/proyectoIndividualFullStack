import NavHome from "./NavHome"
import ContShopCar from "./contShopCar";
import { useEffect,useContext,useState } from "react";
import NavProducts from "./NavProducs";
function ShopCarView () {
    
    return(
     <div>
      <NavHome/>
      
      <ContShopCar/>
     </div>
     
    )
}

export default ShopCarView;