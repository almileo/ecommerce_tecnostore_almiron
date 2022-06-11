import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/fontawesome-free-solid'
import ReactTooltip from 'react-tooltip';

import ItemCartList from "../ItemCartList/ItemCartList";
import './ItemCartContainer.css';
import CartContext from '../../context/CartContext';


const ItemCartContainer = () => {
    const { cart, clearCart } = useContext(CartContext);
    console.log('cart: ', cart);

    let total = 0;
    cart.forEach((item) => {
      total += item.quantity * item.price
    });

    console.log('total:', total);    

  return (
    <div>
        <div>
            <ItemCartList />
        </div>
        { cart.length > 0 && 
                    <div>
                      <div data-tip data-for='emptyCart'>
                        <FontAwesomeIcon onClick={() => clearCart()} className='remove-icon' icon={faTrashAlt} />
                        <ReactTooltip id='emptyCart' place='bottom' effect='solid' globalEventOff='click'>Empty cart</ReactTooltip>
                      </div>
                        <div className='total'>Total: $ { total }</div>
                    </div> 

        }
    </div>
  )
}

export default ItemCartContainer