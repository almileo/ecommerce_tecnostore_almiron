import React, { useEffect, useState } from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductsBySku } from '../../services/productDataMock';

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState();

    useEffect(() => {
      getProductsBySku('1').then(res => {
          setDetail(res);
          console.log('detail: ', detail);
      }).catch(err => console.log('error: ', err));
    }, [])
    
  return (
    <div>
        <ItemDetail {...detail} />
    </div>
  )
}

export default ItemDetailContainer