import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import  { NavBarr } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductoExtendido } from './components/ProductoExtendido/ProductoExtendido';

function App() {
  return (
    <BrowserRouter>
      <NavBarr />
      <Routes>
        <Route  path="/" element= {<ItemListContainer/>} />
        <Route path="/producto/:id" element={<ProductoExtendido/> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
