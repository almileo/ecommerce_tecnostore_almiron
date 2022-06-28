import React from 'react';

import { Form, TextField, NumberField, SubmitField } from 'react-components-form';
import Schema from 'form-schema-validation';

function Login() {
    const ErrorMessages = {
        validateRequired(label) { return `El campo '${label}' es Requerido`; }
    }

    const loginSchema = new Schema({
        email: {
            type: String,
            required: true,
            format: 'email',
            label: 'Email'
        },
        password: {
            type: String,
            required: true,
            label: 'Contraseña'
        }
    }, ErrorMessages);
  return (
    <div>
        <Form 
            schema={loginSchema}
            onSubmit={(user) => console.log(`hago login con user: ${user}`)}
        >
            <TextField name="email" label="Email" type="email"/>
            <TextField name="password" label="Contraseña" type="text"/>
            <SubmitField value="Login" className='button-50 order-button'/>
        </Form>
    </div>
  )
}

export default Login