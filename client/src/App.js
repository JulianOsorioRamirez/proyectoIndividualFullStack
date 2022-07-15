
import './App.css';
// import React, { useState } from "react";
// import Home from './componentes/Home';
// import Producs from './componentes/Producs';
import { BrowserRouter ,Link } from "react-router-dom";
import MainComponent from "./componentes/Main";
import { useContext, useState } from 'react';
import PrendasContext from './context/context';



// import Nav from "./Nav"
// import Welcome from './Welcome';

function App() {

const state = useContext(PrendasContext)
const[name, setName] = useState(state)
let objetoData = {
   name, 
   setName
}
 return (
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
