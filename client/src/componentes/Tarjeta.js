import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import TarjetaC from '../images/chip-tarjeta.png'
import { useNavigate,useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { remove } from 'moongose/models/user_model';

function Tarjeta() {
    const navigate = useNavigate();
    const params = useParams();
    console.log(params);
    const [nTarjetaSend, setNTarjeta] = useState('');
    const [MonthSend, setMonth] = useState('');
    const [YearSend, setYear] = useState('');
    const [CCVSend, setCCV] = useState('');
    const [nameTarjetaSend, setTarjeta] = useState('');
    const [totalPrice, setDataPrice] = useState('');
    const [resState, setDataState] = useState('');


    const idUser = JSON.parse(localStorage.getItem('idUser'));
    console.log(idUser)
    const total = []
    // const prueba = JSON.parse(localStorage.getItem('prueba')).prueba;
    // console.log(prueba)
    
    useEffect(()=>{
      console.log(nTarjetaSend)
    },[nTarjetaSend])

    useEffect(() => {
        const car = JSON.parse(localStorage.getItem("Carrito"))
    
       
       
        for (let i = 1; i < car.length; i++) {
         
         
         const element = parseInt(car[i][2].replace('€' , ''));
         ;
         total.push(element)
         console.log(total)
         }
    },[])

    useEffect(()=>{
        // let result = total.filter((item,index)=>{
        //     return total.indexOf(item) === index;
        //   })
        //   console.log(result);
           
         let finalPrice = total.reduce((a, b) => a + b, 0);
         setDataPrice(finalPrice / 2)

        console.log(finalPrice);
        
    },[])
    

    const sendData = () => {
        
        const car = JSON.parse(localStorage.getItem("Carrito"))
        
        const reaquestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
               
                idUser,
                nTarjeta: nTarjetaSend,
                Month: MonthSend,
                Year: YearSend,
                CCV: CCVSend,
                nameTarjeta: nameTarjetaSend,
                totalPrice : totalPrice,
                car: car
            })
        };
       
        fetch("insertShopCar", reaquestOptions)
            .then(res => res.json())
            .then(res => {
                setDataState(res);
            }).catch(err => {
                console.log(err)
            }
            );
            if(resState === true){
                
                
                console.log("a borrar")
                localStorage.removeItem("Carrito")
                let carrito = []
                localStorage.setItem("Carrito", JSON.stringify(carrito));
                
                // window.location.reload()
            }
            // navigate("/ComRealizada");
           console.log(resState)
    };


    return (
        <div>
          {resState === true ? <h1 className="titleCarCredit">Compra Finalizada</h1> : <h1 className="titleCarCredit">Finalizar Compra</h1>}
          {resState === false ? <h2 className="titleCarCredit2">Datos de tarjeta incorrectos</h2> : <h2 className="titleCarCredit2">Total: {totalPrice + "€"}</h2>}

          <div className="btnsCarShop2">
            <button className="botonCarShop" ><Link to={"/producs"}>Seguir Comprando</Link></button>
            <button className="botonCarShop" ><Link to={"/shopCarView"}>Ver carrito</Link></button>
        </div>
          <Form action="#" id="creditContCard" className='credit-card-div'>
            <div className="panel panel-default" >
                <div className="panel-heading">

                    <div className="row ">
                        <div className="col-md-12">
                            <Form.Control type="text" className="form-control" placeholder="Enter Card Number" onChange={(e) => setNTarjeta(e.target.value)} />
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-3 col-sm-3 col-xs-3">
                            {/* <span class="help-block text-muted small-font" > Expiry Month</span> */}
                            <Form.Control type="text" className="form-control" placeholder="MM" onChange={(e) => setMonth(e.target.value)} />
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-3">
                            {/* <span className="help-block text-muted small-font" >  Expiry Year</span> */}
                            <Form.Control type="text" className="form-control" placeholder="YY" onChange={(e) => setYear(e.target.value)} />
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-3">
                            {/* <span className="help-block text-muted small-font" >  CCV</span> */}
                            <Form.Control type="password" className="form-control" placeholder="CCV" onChange={(e) => setCCV(e.target.value)} />
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-3">
                            <img src={TarjetaC} className="img-rounded" />
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-12 pad-adjust">

                            <Form.Control type="text" className="form-control" placeholder="Name On The Card" onChange={(e) => setTarjeta(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        
                    </div>
                    <div className="row ">
                        
                        <div className="col-md-6 col-sm-6 col-xs-6 pad-adjust">
                            <Form.Control type="button" className="btn btn-warning btn-block" value="PAY NOW" onClick={() => sendData()}  />
                        </div>
                    </div>

                </div>
            </div>
        </Form>
        
        </div>

        
    );
}

export default Tarjeta;