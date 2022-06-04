import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from "../../context/CartContext";

const PurchaseButton = () => {
  
  return(
    <div className="purchase-button">
      <Link to={'/cart'} className="button-50"> Finalizar compra </Link>
    </div>
  )
}

const ItemDetail = ({ title, sku, stock, productImg, price, description }) => {
  const [quantity, setQuantity] = useState(0);
  const { addItemToCart, getProductInCart } = useContext(CartContext);

  const initialCounter = getProductInCart(sku);
  console.log('initialCounter: ', initialCounter);
  
  const handleAddToCart = (quantity) => {
    setQuantity(quantity);
    addItemToCart({ sku, title, price, quantity });
  }

  return (
    <div className="detail-product">
      <div className="product-image">
        <img id="product" src={ productImg } alt="product image" />
      </div>
    
      <div className="detail-text center-column">
        <span>{ title }</span>
        <span className="description">{description}</span>
        <div>
            <span className="detail-price">U$D { price } - </span>
            <span className="detail-info">SKU { sku } | Stock: { stock }</span>
        </div>
        <div className="count-container">
          { quantity > 0 ? <PurchaseButton /> : <ItemCount stock={stock} initial={initialCounter == 0 ? 1 : initialCounter} addToCart={handleAddToCart}></ItemCount>  }
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
