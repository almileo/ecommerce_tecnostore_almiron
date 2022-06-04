import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCartContainer from './components/ItemCartContainer/ItemCartContainer';
import { CartContextProvider } from './context/CartContext';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <CartContextProvider>
          <BrowserRouter>
            <NavBar></NavBar>
              <Routes>
                <Route path='/' element={<ItemListContainer greeting="Muchas gracias por la buena onda!"/>}/>
                <Route path='/products' element={<ItemListContainer greeting="Muchas gracias por la buena onda!"/>}/>
                <Route path='item/:sku'element={<ItemDetailContainer />}/>
                <Route path='/products/:category'element={<ItemListContainer greeting="Muchas gracias por la buena onda!"/>}/>
                <Route path='/cart'element={<ItemCartContainer />}/>
                <Route path='contact'element={<h3>We are working on it, give us time</h3>}/>
                <Route path='login'element={<h3>We are working on it, give us time</h3>}/>
              </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </header>
    </div>
  );
}

export default App;
