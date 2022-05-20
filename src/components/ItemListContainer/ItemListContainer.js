import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { getProducts } from '../../services/productDataMock';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res)
    })
  }, []);


    return (
      <div className='wrapper'>
        <ItemList products={products} />
      </div>
    )
    
}

export default ItemListContainer;