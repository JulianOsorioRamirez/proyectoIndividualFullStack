import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
function NavHome () {
    const mostrar = () => {
        let test = document.getElementById('contenedorRegis');
        if (test.style.display == 'block') {
          test.style.display = 'none';
        } else {
          test.style.display = 'block'
        }
      }
    
      function mostrar1() {
        let test = document.getElementById('contLog');
        if (test.style.display == 'block') {
          test.style.display = 'none';
        } else {
          test.style.display = 'block'
        }
      }
      function LogOut () {
        localStorage.removeItem('idUser');
        // const navigate = useNavigate()
        // navigate('/');
        window.location.reload()
        
      }
      
      return(
        <nav className="nav">
        <div className="divShop">
            <button id="shopBtn"> <Link to={"/producs"}>Tienda</Link></button>
        {/* <input className="log"  id="log"  type="submit"  value="Tienda"/> */}
        </div>
      <div className="login">
                 <div className="barra">
                 {localStorage.getItem('idUser') ? "" : <input className="log" onClick={() => mostrar1()} id="log"  type="submit"  value="Acceder" />}
                 {localStorage.getItem('idUser') ? <button id="logOutBtn" onClick={() => LogOut()}>logOut</button> : <input className="sing" onClick={() => mostrar()} id="sing" type="submit" value="Registrarse" />}
                </div>
            </div>
        </nav>
      )
    
}

export default NavHome;