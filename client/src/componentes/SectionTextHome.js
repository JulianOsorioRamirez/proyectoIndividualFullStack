import logo from "../images/dobermanLOGO.jpg"

function TextHome () {
    return(
        <div>
            <section className="textCentral">
        <h1 className="travel"> DOBERMAN VINTAGE</h1>
        <p className="travelp">Es un sitio de encuentro <br /> En pleno centro de madrid<br /> donde podras comprar la mejor ropa<br /> al puro estilo de la CAPITAL!!!</p>
    </section>
    <section>
    <img className="logoHome"src = {logo} alt=""/>
    </section>
        </div>
    )
}

export default TextHome;