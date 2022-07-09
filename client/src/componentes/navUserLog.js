import {Link} from "react-router-dom"
function NavUserLog () {
    return(
        <nav className="nav">
    <div className="divShop">
        <button id="shopBtn"> <Link to={"/producs"}>Tienda</Link></button>
    </div>
    <div className="divLogOut">
    <button id="logOutBtn"> <Link to={"/"}>logOut</Link></button>
    </div>
  
    </nav>
    )
}

export default NavUserLog;