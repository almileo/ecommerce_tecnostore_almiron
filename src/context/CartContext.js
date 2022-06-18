import { useState, createContext } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    
    const addItemToCart = (itemToAdd) => {
        if (!isInCart(itemToAdd.sku)) {
            setCart([...cart, itemToAdd]);
            
        } else {
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

    const getTotal = () => {
        let total = 0;
        cart.forEach((item) => {
          total += item.quantity * item.price
        });
        return total;
    }

    
    return(
        <CartContext.Provider value={{ cart, getQuantity, addItemToCart, getProductInCart, removeProduct, clearCart, getTotal }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext;