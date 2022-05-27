import './Item.css';

const Item = ({sku, title, price, productImg, stock}) => {

    const goToDetails = () => {
        console.log('Redirect to the detail of the item');
    }

    return(
        <>
            <div className='card-product'>
                <div className='product-image'>
                    <img id='product' src={ productImg } alt='product image'/>
                    {/* <img id='product' src='./img/tecnostore_logo-removebg.png' alt='product image'/> */}
                </div>
                <div className='card-text'>
                    <span>{ title }</span>
                    <span>U$D { price }</span>
                    <span className='info'>SKU { sku } | Stock: { stock }</span>
                    <div>
                        <button className='button-50 small' onClick={goToDetails}><span className='label'>Ver más</span></button>
                    </div>
                </div>                
            </div>
        </>
    )
}

export default Item;