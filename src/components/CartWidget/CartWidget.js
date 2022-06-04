import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid'

import './CartWidget.css';

import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext);

    const quantity = getQuantity();

    return(
        <div>
            <Link className='cart' to={'/cart'}>
                <FontAwesomeIcon className='icon' icon={faShoppingCart} />
                <span>{ quantity }</span>
            </Link>
        </div>
    )
}

export default CartWidget;