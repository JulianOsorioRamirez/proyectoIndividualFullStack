import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home" 
import Producs from "./Producs" 

function Main () {
    return (
        <div>
            <Routes>
                <Route path="/" element={< Home/>} />
                <Route path="/producs" element={<Producs />} />
            </Routes>
        </div>
        );
}
export default Main;
