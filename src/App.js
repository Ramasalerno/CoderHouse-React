import './App.css';
import { NavBar } from './componentes/NavBar/NavBar';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {CartProvider } from './componentes/context/CartContext';
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import { CartView } from './componentes/CartView/CartView';
import { Checkout } from './componentes/Checkout/Checkout';

function App() {
  return (

    <div className="App">

      <CartProvider>

        <BrowserRouter>
        <NavBar/>  
        <Routes> {/* espacio que irá cambiando, segun las rutas */}
            <Route path="/" element= {<ItemListContainer greeting="React JS - CoderHouse"/>}/>
            <Route path="/productos/:catId" element= {<ItemListContainer/>}/>
            <Route path="/detail/:itemId" element = { <ItemDetailContainer/>}/>
            <Route path= "*" element= {<Navigate to="/" />}/> 
            <Route path= "/checkout" element= {<Checkout/>}/>
            <Route path="/cart" element= {<CartView/>}/>        
        </Routes> 
        </BrowserRouter>

      </CartProvider>

    </div>
  );
}

export default App;
