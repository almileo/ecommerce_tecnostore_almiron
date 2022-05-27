import React from "react";
import './ItemDetail.css';

const ItemDetail = ({ title, sku, stock, productImg, price, description }) => {
  return (
    <div className="detail-product">
      <div className="product-image">
        <img id="product" src={productImg} alt="product image" />
        {/* <img id='product' src='./img/tecnostore_logo-removebg.png' alt='product image'/> */}
      </div>
    
      <div className="detail-text">
        <span>{title}</span>
        <span className="description">{description}</span>
        <div>
            <span className="detail-price">U$D {price} - </span>
            <span className="detail-info">SKU {sku} | Stock: {stock}</span>
        </div>
        
        {/* <div>
          <button className="button-50 small" onClick={goToDetails}>
            <span className="label">Ver más</span>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ItemDetail;
