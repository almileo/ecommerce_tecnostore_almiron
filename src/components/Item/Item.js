import { Link } from "react-router-dom";

import './Item.css';

const Item = ({sku, title, price, productImg, stock}) => {

    return(
        <>
            <div className='card-product'>
                <div className='product-image'>
                    <img id='product' src={ productImg } alt='product image'/>
                </div>
                <div className='card-text'>
                    <span>{ title }</span>
                    <span className="description">U$D { price }</span>
                    <div>
                        <Link className='button-50 small' to={`/item/${sku}`}><span className='label'>Ver más</span></Link>
                    </div>
                </div>                
            </div>
        </>
    )
}

export default Item;