import { Link } from 'react-router-dom';

import './NavBar.css';

import CartWidget from '../CartWidget/CartWidget';

const NavBar = ({cartItems}) => {
    
    return (
        <nav className='navbar'>
            <div className='logo'>
                <Link to='/'><img src='./img/tecnostore_logo-removebg.png' alt='logo'/></Link>
                
            </div>
            <div className='buttons'>
                <Link to='/products' className='button-50 menu'>Productos</Link> 
                <Link to='/products/asic-miner' className='button-50 menu'>Asics</Link> 
                <Link to='/products/hardware-wallet' className='button-50 menu'>Wallets</Link> 
                <Link to='/contact' className='button-50 menu'>Contacto</Link> 
            </div>
            <CartWidget cartItems={cartItems}></CartWidget>
            <div className='login'>
                <Link to='/login' className="button-50 menu">Login</Link>
            </div>
        </nav>

    )
}

export default NavBar;