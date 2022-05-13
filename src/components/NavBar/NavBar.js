import './NavBar.css'

const NavBar = () => {
    return (
        <nav className='navbar'>
            <div className='logo'>
                <img src='./img/tecnostore_logo-removebg.png' alt='logo'/>
            </div>
            <div className='buttons'>
                <button className='button-50 menu'>Productos</button>
                <button className='button-50 menu'>Ofertas</button>
                <button className='button-50 menu'>Quienes somos</button>
                <button className='button-50 menu'>Contacto</button>
            </div>
            <div className='login'>
                <button class="button-50 menu">Login</button>
            </div>
        </nav>

    )
}

export default NavBar;