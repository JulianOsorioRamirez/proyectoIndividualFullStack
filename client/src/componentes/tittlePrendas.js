import PrendasContext from "../context/context";


import { useContext,useEffect } from "react";
function TittlePrendas (props) {
    const title = useContext(PrendasContext)
    // console.log(title.name)          //aqui recogemos el context global y lo usamos en tittle, como name 
                                    // vale lo que le pasamos con los props desde btnPrendas sabe que name 
                                    //es el estado de prendas o bisuteria y se cambiara el titulo dependiendo de
                                    // ese estado
    
    useEffect(() => {
    title.setName("Prendas")        // el estado inicial va a ser Prendas pero cambiara
    })
    

    return(
    
          <h1 className="title">{title.name}</h1>
        )
}

export default TittlePrendas;