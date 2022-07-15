import PrendasContext from "../context/context";


import { useContext,useEffect } from "react";
function TittlePrendas (props) {
    const title = useContext(PrendasContext)
    console.log(title.name)
    
    useEffect(() => {
    title.setName("Prendas")
    })
    

    return(
    
          <h1 className="title">{title.name}</h1>
        )
}

export default TittlePrendas;