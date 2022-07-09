// import {Link} from "react-router-dom"

import { useState, useEffect } from "react";


function BtnPrenda (props) {

    // props.name = "Bisuteria"
    const[name, setName] = useState("Prendas")
       
    

    return(
        <button className="btn" onClick={() => setName("Bisuteria")}  id="prenView">{name}</button>
    )
     
    
    
}

export default BtnPrenda;