import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import { db } from '../../services/firebase';
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore';

import './NavBar.css';

import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {

    const { getQuantity } = useContext(CartContext);
    const [categories, setCategories] = useState([]);

    const quantity = getQuantity();

    useEffect(() => {
        const collectionRef = collection(db, 'categories');

        getDocs(collectionRef, 'categories').then((res) => {
              const categories = res.docs.map((cat) => {
                return {id: cat.id, ...cat.data() };
              });
              setCategories(categories);
            })
            .catch(e => console.error(e));
    }, []);
        
    return (
        <>
        { categories.length > 0 &&  
            <nav className='navbar'>
                <div className='logo'>
                    <Link to='/'><img src='./img/tecnostore_logo-removebg.png' alt='logo'/></Link>
                </div>
                <div className='buttons'>
                    <Link to='/products' className='button-50 menu'>Productos</Link>
                    { categories.map((category) => <Link key={category.id} to={`/products/${category.path}`} className='button-50 menu'>{ category.label }</Link>) } 
                    <Link to='/contact' className='button-50 menu'>Contacto</Link> 
                </div>
                { quantity > 0 && <CartWidget></CartWidget> }
                <div className='login'>
                    <Link to='/login' className="button-50 menu">Login</Link>
                </div>
            </nav>
        }       
        </>

    )
}

export default NavBar;