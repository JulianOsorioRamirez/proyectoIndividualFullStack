import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Bisuteria from "./Bisuteria";
import Home from "./Home" 
import HomeUserLog from "./HomeUserLog";
import Producs from "./Producs" 



class Main extends Component {
    render() {
        return (
        <div>
            <Routes>
            <Route path="/" element={< Home/>} />
            <Route path="/producs" element={<Producs />} />
            <Route path="/bisuteria" element={<Bisuteria />} />
            <Route path="/homeUserLog" element={<HomeUserLog />} />

            </Routes>
        </div>
        );
    }
}
export default Main;


// function Main () {
//     return (
//         <div>
//             <Routes>
//                 <Route path="/" element={< Home/>} />
//                 <Route path="/producs" element={<Producs />} />
//                 <Route path="/bisuteria" element={<Bisuteria />} />

//             </Routes>
//         </div>
//         );
// }
// export default Main;
