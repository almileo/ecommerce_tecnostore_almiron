import './ItemList.css';
import Item from '../Item/Item';


const ItemList = ({products}) => {
    console.log(products);

    return(
        <>
            { products.map((prod) => <Item key={prod.id} {...prod}/>) }
        </>
    )
}

export default ItemList;