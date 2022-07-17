import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
// import Cards from 'react-credit-cards'
// import 'react-credit-cards/es/styles-compiled.css'


function CreditCar () {
    
    return(
  <div>
    <form>
	<div className="form-group">
		<label htmlFor="number">Número de la tarjeta</label>
		<input
			type="text"
			name="number"
			id="number"
			maxLength="16"
			className="form-control"
			
		/>
	</div>
	<div className="form-group">
		<label htmlFor="name">Nombre</label>
		<input
			type="text"
			name="name"
			id="name"
			maxLength="30"
			className="form-control"
			
		/>
	</div>
	<div className="form-row">
		<div className="form-group col-md-6">
			<label htmlFor="expiry">Fecha de expiración</label>
			<input
				type="text"
				name="expiry"
				id="expiry"
				maxLength="4"
				className="form-control"
				
			/>
		</div>
		<div className="form-group col-md-6">
			<label htmlFor="cvc">CVC</label>
			<input
				type="text"
				name="cvc"
				id="cvc"
				maxLength="4"
				className="form-control"
				
			/>
		</div>
	</div>
	<button  type="button" className="btn btn-success btn-block btn-lg">Pagar</button>
</form>
  </div>
    );
}

export default CreditCar