import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Bisuteria from "./Bisuteria";
import Home from "./Home" 
import Producs from "./Producs" 

function Main () {
    return (
        <div>
            <Routes>
                <Route path="/" element={< Home/>} />
                <Route path="/producs" element={<Producs />} />
                <Route path="/bisuteria" element={<Bisuteria />} />

            </Routes>
        </div>
        );
}
export default Main;
