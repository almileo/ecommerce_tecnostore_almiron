import { useState } from 'react';

import './ItemCount.css';

const ItemCount = ({ stock, initial, addToCart }) => {
    const [itemCount, setItemCount] = useState(initial);

    const addItemCount = () => {
        if(itemCount < stock) {
            setItemCount(itemCount + 1);
        }
    }

    const removeItemCount = () => {
        if(itemCount > 0) {
            setItemCount(itemCount - 1);
        }
    }

    const addCart = () => {
        addToCart(itemCount)
    }


    return (
        <>
            <div className='card-count'>
                <div className='center'>
                    <button className='button substract' onClick={removeItemCount} style={stock === 0 || itemCount !== 0? {cursor: 'pointer'} : {cursor: 'default'}} disabled={stock === 0 || itemCount <= 1}> - </button>
                    <span>{ itemCount }</span>
                    <button className='button add' onClick={addItemCount} style={stock === 0 || itemCount === stock ? {cursor: 'default'} : {cursor: 'pointer'}} disabled={stock === 0 || itemCount === stock}> + </button>
                </div>
                <div className='add-cart button-50' onClick={addCart}>Agregar al carrito</div>
            </div>
        </>

    )
}

export default ItemCount;