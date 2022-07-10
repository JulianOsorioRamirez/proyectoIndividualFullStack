// import {Link} from "react-router-dom"

import { useState, useEffect } from "react";
import React from "react";


function BtnPrenda () {

    // props.name = "Bisuteria"
    const[name, setName] = useState("Prendas")
    

       
   
    
    
            
        
    // name == 'bisuteria' ? <button onclick= setName={('prendas')}></button> : <button onclick= setName={('bisuteria')}></button>
    return(
    name == "Bisuteria" ? <button className="btn" onClick={() => setName("Prendas")}  id="prenView">{name}</button> : <button className="btn" onClick={() => setName("Bisuteria")}  id="prenView">{name}</button>
    )
}
export default BtnPrenda;


// class BtnPrenda extends React.Component {

    
   
//     constructor(props){
//         super(props)
//         this.state = {
//             name : "Prendas",
//             name2 : "Bisuteria"
//         }
//     }
    
    
    
    
//     render() {
//         return (
//             <button className="btn" id="prenView">{this.props.name}</button>
//         )
//     }
// }

// export default BtnPrenda;

