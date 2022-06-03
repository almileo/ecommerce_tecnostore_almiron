import './ItemList.css';
import Item from '../Item/Item';


const ItemList = ({products}) => {
    return(
        <>
            { products.map((prod) => <Item key={prod.sku} {...prod}/>) }
        </>
    )
}

export default ItemList;