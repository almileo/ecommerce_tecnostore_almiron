import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/fontawesome-free-solid'
import ReactTooltip from 'react-tooltip';

import ItemCartList from "../ItemCartList/ItemCartList";

import CartContext from '../../context/CartContext';


const ItemCartContainer = () => {
    const { cart, clearCart } = useContext(CartContext);

  return (
    <div>
        <div>
            <ItemCartList />
        </div>
        { cart.length > 0 && 
                    <div data-tip data-for='emptyCart'>
                        <FontAwesomeIcon onClick={() => clearCart()} className='remove-icon' icon={faTrashAlt} />
                        <ReactTooltip id='emptyCart' place='bottom' effect='solid' globalEventOff='click'>Empty cart</ReactTooltip>
                    </div> }
    </div>
  )
}

export default ItemCartContainer