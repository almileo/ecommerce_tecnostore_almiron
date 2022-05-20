import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import Item from './components/Item/Item';
import { useState } from 'react';

function App() {
  const [itemsToCart, setItemsToCart] = useState(0);

  const getItemsCount = (itemCount) => {
    setItemsToCart(itemCount);
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar cartItems={itemsToCart}></NavBar>
        <ItemListContainer greeting="Muchas gracias por la buena onda!"></ItemListContainer>
        <ItemCount stock={20} initial={1} getItemsCount={getItemsCount}></ItemCount>
      </header>
    </div>
  );
}

export default App;
