import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import  { NavBarr } from './components/NavBar/NavBar'
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
        <Route  path="/" element= {<ItemListContainer/>} />
        <Route  path="/producto/:id" element={<ProductoExtendido/> }/>
        <Route path="/category/:category/producto/:id" element={<ProductoExtendido />} />
        <Route path="/category/:category/producto/:id"element={ <Similares/>} />
        <Route path="/category/:category" element={<Categorias />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
