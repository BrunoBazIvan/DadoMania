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
const agregarAlCarrito = (item, cantidad) => {
  const itemAgregado = { ...item, cantidad }
  const nuevoCarrito = [...carrito ];
  const index = nuevoCarrito.findIndex((productoEncontrado) => productoEncontrado.id === itemAgregado.id);

    if (index !== -1) {
      nuevoCarrito[index].cantidad += cantidad;
    } else {
      nuevoCarrito.push(itemAgregado);
    }
    setCarrito(nuevoCarrito); // Actualiza el estado del carrito con la estructura correcta
  };

  const cantidadCarrito = () => {
    return carrito.reduce((acc, item) => acc + item.cantidad, 0); // Calculo de cantidad total
  };

  const totalCarrito = () =>{
    return carrito.reduce((acc, item)=> acc + item.price * item.cantidad, 0 )
  }
  return (
    <CarritoContext.Provider value={{carrito, agregarAlCarrito, cantidadCarrito, totalCarrito}}>
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
