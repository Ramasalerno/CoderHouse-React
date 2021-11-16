import './App.css';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import { NavBar } from './componentes/NavBar/NavBar';


function App() {
  return (
    <div className="App">
     <NavBar/>
     <ItemListContainer greeting="React JS - CoderHouse"/>
    </div>
  );
}

export default App;
