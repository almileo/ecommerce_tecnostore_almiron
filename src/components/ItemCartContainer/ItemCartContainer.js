import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/fontawesome-free-solid'
import ReactTooltip from 'react-tooltip';

import ItemCartList from "../ItemCartList/ItemCartList";
import './ItemCartContainer.css';
import CartContext from '../../context/CartContext';


const ItemCartContainer = () => {
    const { cart, clearCart, getTotal } = useContext(CartContext);

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
                      <div className='checkout'>
                        <div className='total'>Total: $ { getTotal() }</div>
                        <div>
                          <Link to={'/checkout'} className='button-50'>Checkout</Link>
                        </div>
                      </div>
                    </div> 

        }
    </div>
  )
}

export default ItemCartContainer