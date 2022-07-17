
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
  // const [message, setMessage] = useState("");
  
  // const [sendName, setDataToName] = useState("");
  // const [sendUnName, setDataToUname] = useState("");
  // const [sendDni, setDataToDni] = useState("");
  // const [sendEmail, setDataToEmail] = useState("");
  // const [sendPass, setDataToPass] = useState("");
  // const [sendPassConf, setDataToConfPass] = useState("");
  // const [sendNumber, setDataToNumber] = useState("");
  // const [sendEmailLog, setDataToEmailLog] = useState("");
  // const [sendPassLog, setDataToPassLog] = useState("");
  // const [sendIdUser, setDataIdUser] = useState("");
   
  
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