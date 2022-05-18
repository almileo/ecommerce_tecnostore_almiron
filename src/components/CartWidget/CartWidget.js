import './CartWidget.css';

const CartWidget = ({cartItems}) => {
    return(
        <div className='cart'>
            <img className='icon' src="./img/cart.png" alt="cart"/>
            <span>{ cartItems }</span>
        </div>
    )
}

export default CartWidget;