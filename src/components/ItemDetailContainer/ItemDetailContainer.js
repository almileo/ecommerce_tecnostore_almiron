import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';

import './ItemDetailContainer.css';

import ItemDetail from '../ItemDetail/ItemDetail';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState();
    const { sku } = useParams();

    useEffect(() => {
      setDetail();
      getDoc(doc(db, 'products', sku)).then(res => {
        const product = { sku: res.id, ...res.data() };
        setDetail(product);
      }).catch(e => console.error('error: ', e));

    }, [sku])
    
  return (
    <div>

      { detail ? <ItemDetail {...detail} /> : <BounceLoader size={100} color='#541690' /> }
    </div>
  )
}

export default ItemDetailContainer

938233