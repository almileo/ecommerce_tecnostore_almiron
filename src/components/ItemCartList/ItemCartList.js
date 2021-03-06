import React, { useContext } from "react";
import CartContext from "../../context/CartContext";

import ItemCart from "../ItemCart/ItemCart";
import EmptyCart from "../EmptyCart/EmptyCart";


const ItemCartList = () => {

  const { cart } = useContext(CartContext);

  return (
    <div>

        { cart.length > 0 ? cart.map((prod) => <ItemCart key={prod.sku} {...prod} />) : <EmptyCart /> }
        
    </div>
  )
}

export default ItemCartList