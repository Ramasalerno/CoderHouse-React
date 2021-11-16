import './App.css';
/* import { ItemCount } from './componentes/ItemCount/ItemCount'; */
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import { NavBar } from './componentes/NavBar/NavBar';
/* import { TarjetaProducto } from './componentes/TarjetaProduct/TarjetaProducto'; */


function App() {
  return (
    <div className="App">
     <NavBar/>
     <ItemListContainer greeting="React JS - CoderHouse"/>
    </div>
  );
}

export default App;
