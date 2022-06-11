import React from 'react'
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div>
      <div> Su carrito esta vacio</div>
      <div> Aqui esta la pagina de <Link to={'/'}>Productos</Link> para ver nuestras ofertas</div>
    </div>
  )
}

export default EmptyCart