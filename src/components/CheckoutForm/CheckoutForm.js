import React, { useContext } from 'react';
import { Form, TextField, NumberField, SubmitField } from 'react-components-form';
import Schema from 'form-schema-validation';

import { db } from '../../services/firebase';
import { addDoc, collection } from 'firebase/firestore';

import './CheckoutForm.css';
import CartContext from '../../context/CartContext';

const CheckoutForm = () => {

    const { cart, getTotal } = useContext(CartContext);

    const ErrorMessages = {
        validateRequired(label) { return `El campo '${label}' es Requerido`; }
    }

    const orderSchema = new Schema({
        name: {
            type: String,
            required: true,
            label: 'Nombre'
        },
        lastName: {
            type: String,
            required: true,
            label: 'Apellido'
        },
        email: {
            type: String,
            required: true,
            format: 'email',
            label: 'Email'
        },
        phone: {
            type: Number,
            required: true,
            label: 'Telefono'
        },
        address: {
            type: String,
            required: true,
            label: 'Direccion'
        }
    }, ErrorMessages);

    const generateOrder = (buyer) => {
        const error = orderSchema.validate(buyer);
        if(Object.keys(error).length > 0) {
            return alert('Hay algun error con el formulario');
        } else {
            const order = {
                buyer: buyer,
                items: cart,
                total: getTotal()
            }

            const collectionRef = collection(db, 'orders');

            addDoc(collectionRef, order).then(({ id }) => {
                alert(`Se creo su orden con la identificacion ${id}`)
            }).catch(error => console.log('error: ', error));

        }
    }

  return (
    <div>
        <Form 
            schema={orderSchema}
            onSubmit={(buyer) => generateOrder(buyer)}
        >
            <TextField name="name" label="Nombre" type="text" />
            <TextField name="lastName" label="Apellido" type="text"/>
            <TextField name="email" label="Email" type="email"/>
            <NumberField name="phone" label="Telefono" type="number"/>
            <TextField name="address" label="Direccion" type="text"/>
            <SubmitField value="Generar Orden" className='button-50 order-button'/>
        </Form>
    </div>
  )
}

export default CheckoutForm; 