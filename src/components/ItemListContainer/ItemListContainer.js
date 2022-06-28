import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';

import './ItemListContainer.css';

import ItemList from '../ItemList/ItemList';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    setProducts([]);

    const collectionRef = category ? query(collection(db, 'products'), where('category', '==', category)) : collection(db, 'products');

    getDocs(collectionRef).then(res => {
      const products =  res.docs.map((doc) => {
        return { sku: doc.id, ...doc.data() }
      })
      setProducts(products);
    }).catch(e => console.error('error: ', e));
   
  }, [category]);


    return (
      <div className='wrapper'>
        { products.length === 0 ? <BounceLoader size={100} color='#541690' /> : <ItemList products={products} /> }
      </div>
    )
    
}

export default ItemListContainer;