import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './ItemListContainer.css';

import ItemList from '../ItemList/ItemList';
import { getProducts, getProductsByCategory } from '../../services/productDataMock';
import { BounceLoader } from 'react-spinners';

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  console.log('category: ', category);
  console.log('products: ', products.length);

  useEffect(() => {
    setProducts([]);
    if(!category) {
       getProducts().then((res) => {
        setProducts(res)
      });
    } else {
      getProductsByCategory(category).then(res => {
        setProducts(res)
        console.log('productsByCategory: ', products);
      });
    }
   
  }, [category]);


    return (
      <div className='wrapper'>
        { products.length == 0 ? <BounceLoader size={100} color='#541690' /> : <ItemList products={products} /> }
      </div>
    )
    
}

export default ItemListContainer;