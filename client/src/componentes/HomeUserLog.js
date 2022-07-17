import React, { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import logo from "../images/dobermanLOGO.jpg"
import TextHome from "./SectionTextHome";
import NavUserLog from "./navUserLog";
// import Producs from "./Producs";



function HomeUserLog() {
  

  return (
    <div className="Home">
      
    
    <NavUserLog/> 
    
    <TextHome/>
    
    </div>
  );
}

export default HomeUserLog;