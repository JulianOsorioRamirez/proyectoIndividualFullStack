
import './App.css';
// import React, { useState } from "react";
import Home from './componentes/Home';
import Producs from './componentes/Producs';
import { BrowserRouter ,Link } from "react-router-dom";
import MainComponent from "./componentes/Main";

// import Nav from "./Nav"
// import Welcome from './Welcome';

function App() {
  

 return (
    <div className="App">
    <BrowserRouter>
     
          {/* <Producs/> */}
          {/* <Home/> */}
       <MainComponent />
      
    </BrowserRouter>
    </div>
  );
}

export default App;
