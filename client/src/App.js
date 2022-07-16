
import './App.css';
// import React, { useState } from "react";
// import Home from './componentes/Home';
// import Producs from './componentes/Producs';
import { BrowserRouter ,Link } from "react-router-dom";
import MainComponent from "./componentes/Main";
import { useContext, useState } from 'react';
import PrendasContext from './context/context';


function App() {

const state = useContext(PrendasContext)// creo que contexto global para toda la app y creo un estado que 
                                       //que espera el context eso se lo proveemos a toda la app con provider
const[name, setName] = useState(state)
let objetoData = {                     
   name, 
   setName
}
 return (                   //aqui se lo pasamos en el value
    <div className="App">
    <BrowserRouter>                
    <PrendasContext.Provider value = {objetoData}> 
    
          
       <MainComponent />
   </PrendasContext.Provider>
    </BrowserRouter>
    </div>
  );
}

export default App;
