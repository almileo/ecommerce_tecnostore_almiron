import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';

import './ItemDetailContainer.css';

import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductsBySku } from '../../services/productDataMock';

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState();
    const { sku } = useParams();

    useEffect(() => {
      getProductsBySku(sku).then(res => {
          setDetail(res);
      }).catch(err => console.log('error: ', err));
    }, [])
    
  return (
    <div>

      { detail ? <ItemDetail {...detail} /> : <BounceLoader size={100} color='#541690' /> }
    </div>
  )
}

export default ItemDetailContainer