import React from "react";

import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
const ItemDetail = ({ title, sku, stock, productImg, price, description }) => {
  console.log('productImg: ', productImg);
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
          <ItemCount stock={stock} initial={1}></ItemCount>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
