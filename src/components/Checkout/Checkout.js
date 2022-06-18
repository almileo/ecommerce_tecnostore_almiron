import React from 'react';
import './Checkout.css';

import CheckoutForm from '../CheckoutForm/CheckoutForm';

function Checkout() {
  return (
    <div>
        <h2>Completa el siguiente formualario para terminar de generar la orden.</h2>
        <div>
            <CheckoutForm />
        </div>
    </div>
  )
}

export default Checkout;