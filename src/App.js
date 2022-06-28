import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCartContainer from './components/ItemCartContainer/ItemCartContainer';
import Checkout from './components/Checkout/Checkout';
import LoginContainer from './components/LoginCointainer/LoginContainer';
import { CartContextProvider } from './context/CartContext';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <CartContextProvider>
          <BrowserRouter>
            <NavBar></NavBar>
              <Routes>
                <Route path='/' element={<ItemListContainer />}/>
                <Route path='/products' element={<ItemListContainer />}/>
                <Route path='item/:sku'element={<ItemDetailContainer />}/>
                <Route path='/products/:category'element={<ItemListContainer />}/>
                <Route path='/cart'element={<ItemCartContainer />}/>
                <Route path='/checkout'element={<Checkout />}/>
                <Route path='contact'element={<h3>Estamos trabajando en eso, muchas gracias por elegirnos</h3>}/>
                <Route path='login'element={<LoginContainer />}/>
              </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </header>
    </div>
  );
}

export default App;
