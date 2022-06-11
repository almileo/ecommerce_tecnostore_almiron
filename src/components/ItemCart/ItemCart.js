import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faTrashAlt, faTrash } from '@fortawesome/fontawesome-free-solid'

import './ItemCart.css';

import CartContext from '../../context/CartContext';

const ItemCart = ({ sku, price, quantity, title }) => {

    const { removeProduct } = useContext(CartContext);

  return (
    <div className='cart-item'>
        <div>
            <span>Qty: { quantity }</span>
        </div>
        <div>
            <Link to={'/'}>{ title } </Link>
        </div>
        <div>
            <span>  Unit price ${ price }</span>
        </div>
        <div>
            <span>  Subtotal ${ price * quantity }</span>
        </div>
        
        <div>
            <FontAwesomeIcon onClick={() => removeProduct(sku)} className='remove-icon' icon={faMinusCircle}/>
        </div>
    </div>
  )
}

export default ItemCart