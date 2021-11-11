import './App.css';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import { NavBar } from './componentes/NavBar/NavBar';


function App() {
  return (
    <div className="App">
     <NavBar/>
     <ItemListContainer greeting="Bienvenidos a la 3ra entrega Coder House"/>
    </div>
  );
}

export default App;
