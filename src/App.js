import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
        <ItemListContainer greeting="Muchas gracias por al buena onda!"></ItemListContainer>
      </header>
    </div>
  );
}

export default App;
