import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Bisuteria from "./Bisuteria";
import Home from "./Home" 
import HomeUserLog from "./HomeUserLog";
import Producs from "./Producs" 
import ShopCarView from "./shopCarView";
import  Checkout  from "./checkout";
import RecuperarPass from "./recuperarPass";
import RecuperarPassB from "./recuperarPass2";
import Historial from "./Historial";



class Main extends Component {
    render() {
        return (
        <div>
            <Routes>
            <Route path="/" element={< Home/>} />
            <Route path="/producs" element={<Producs />} />
            {/* <Route path="/bisuteria" element={<Bisuteria />} /> */}
            <Route path="/homeUserLog" element={<HomeUserLog />} />
            <Route path="/shopCarView" element={<ShopCarView />} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/recPass" element={<RecuperarPass/>}/>
            <Route path='/recoveryReset/:email/:token' element={<RecuperarPassB/>}/>
            <Route path='/historial' element={<Historial/>}/>


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
