import './CartWidget.css';

const CartWidget = () => {
    return(
        <div className='cart'>
            <img className='icon' src="./img/cart.png" alt="cart"/>
            <span>{ 0 }</span>
        </div>
    )
}

export default CartWidget;