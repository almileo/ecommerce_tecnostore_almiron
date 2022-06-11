import { useState, createContext } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    
    const addItemToCart = (itemToAdd) => {
        console.log('isInCart: ', isInCart() );
        if (!isInCart(itemToAdd.sku)) {
            setCart([...cart, itemToAdd]);
            console.log('cart - en el if: ', cart);
            
        } else {
            console.log('entre al else');
            const cartCopy = cart.map((prod) => {
                if(prod.sku === itemToAdd.sku) {
                    const newItem = {
                        ...prod,
                        quantity: itemToAdd.quantity
                    }
                    return newItem;
                } else {
                    return prod;
                }
            });
            
            setCart(cartCopy);
            console.log('cart en el else: ', cart);
        }
    }

    const getQuantity = () => {
        let acc = 0;
        cart.forEach(item => {
            acc += item.quantity
        });

        return acc;
    }

    const getProductInCart = (sku) => {
        const prod = cart.find((prod) => prod.sku === sku);
        console.log('prod: ', prod);
        return prod ? prod.quantity : 0;
    }

    const isInCart = (sku) => {
        return cart.some((prod) => prod.sku === sku);
    }

    const removeProduct = (sku) => {
        const itemsToRemove = cart.filter((prod) => prod.sku !== sku);
        setCart(itemsToRemove);
    }

    const clearCart = () => {
        setCart([]);
    }

    
    return(
        <CartContext.Provider value={{ cart, getQuantity, addItemToCart, getProductInCart, removeProduct, clearCart }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext;