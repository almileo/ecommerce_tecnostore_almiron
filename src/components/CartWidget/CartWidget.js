import './CartWidget.css';

const CartWidget = (props) => {
    return(
        <div className='cart'>
            <img className='icon' src="./img/cart.png" alt="cart"/>
            <span>{props.cartItems}</span>
        </div>
    )
}

export default CartWidget;