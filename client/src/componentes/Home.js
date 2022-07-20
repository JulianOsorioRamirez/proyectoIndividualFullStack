
import React, { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import logo from "../images/dobermanLOGO.jpg"
import {useNavigate} from "react-router-dom"
import NavHome from "./NavHome";
import ContRegis from "./ContRegis";
import ContLog from "./ContLog";
import TextHome from "./SectionTextHome";
// import Producs from "./Producs";



function Home() {
  
   return (
    <div className="Home">
    
    <NavHome/>
    <ContRegis/>
    <ContLog/>
    <TextHome/>
    </div>
  );
}

export default Home;