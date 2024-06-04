import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { NavBarr } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductoExtendido } from './components/ProductoExtendido/ProductoExtendido';
import { Categorias } from './components/Categorias/categorias';
import { Similares } from './components/Similares/Similares';

function App() {
  return (
    <BrowserRouter>
      <NavBarr />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/producto/:id" element={<ProductoSimilaresContainer />} />
        <Route path="/category/:category" element={<Categorias />} />
      </Routes>
    </BrowserRouter>
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
