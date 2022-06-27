import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, TextField, NumberField, SubmitField } from 'react-components-form';
import Schema from 'form-schema-validation';

import { db } from '../../services/firebase';
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore';

import './CheckoutForm.css';
import CartContext from '../../context/CartContext';

const CheckoutForm = () => {

    const { cart, getTotal, clearCart } = useContext(CartContext);
    const navigate = useNavigate();

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

            const batch = writeBatch(db);
            const ids = cart.map((prod) => prod.sku);
            const outOfStock = [];

            const collectionRefProd = collection(db, 'products');

            getDocs(query(collectionRefProd, where(documentId(), 'in', ids)))
                .then((res) => {
                    res.docs.forEach((doc) => {
                        const dataDoc = doc.data();
                        const productQty = cart.find((prod) => prod.sku === doc.id)?.quantity;
                        if(dataDoc.stock >= productQty) {
                            batch.update(doc.ref, { stock: dataDoc.stock - productQty });
                        } else {
                            outOfStock.push({ sku: doc.sku, ...dataDoc });
                        }
                    })
                }).then(() => {
                    if(outOfStock.length === 0) {
                        const collectionRef = collection(db, 'orders');

                        return addDoc(collectionRef, order);
                    } else {
                        return Promise.reject({ type: 'out_of_stock', products: outOfStock });
                    }
                }).then(({ id }) => {
                    batch.commit();
                    navigate('/');
                    clearCart();
                    alert(`Se creo su orden con la identificacion ${id}`);
                }).catch((error) => {
                    console.error(`El error fue: ${error}`);
                    if(error.type === 'out_of_stock') {
                        alert(`Los siguientes productos no tienen stock disponible ${outOfStock}`);
                    }
                });

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