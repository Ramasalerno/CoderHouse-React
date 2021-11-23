import './App.css';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import { NavBar } from './componentes/NavBar/NavBar';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <NavBar/>
        
          <Routes> {/* espacio que irá cambiando, segun las rutas */}
            <Route path="/" element= {<ItemListContainer greeting="React JS - CoderHouse"/>}/>
            <Route path="/productos/:catId" element= {<ItemListContainer/>}/>
            <Route path="/detail/:itemId" element = { <ItemDetailContainer/>}/>   
            <Route path= "*" element= {<Navigate to="/" />}/>         
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
