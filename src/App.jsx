import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { NavBarr } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductoExtendido } from './components/ProductoExtendido/ProductoExtendido';
import { Categorias } from './components/Categorias/categorias';
import { Similares } from './components/Similares/Similares';
import {CarritoContext} from './Context/CarritoContext'
import { useState } from 'react';

function App() {
const [carrito , setCarrito] = useState([]);

  return (
    <CarritoContext.Provider value={{carrito, setCarrito}}>
      <BrowserRouter>
        <NavBarr />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/producto/:id" element={<ProductoSimilaresContainer />} />
          <Route path="/category/:category" element={<Categorias />} />
        </Routes>
      </BrowserRouter>
    </CarritoContext.Provider>
  )
}

function ProductoSimilaresContainer() {
  return (
    <div>
      <ProductoExtendido />
      <Similares />
    </div>
  );
}

export default App;
