import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import  { NavBarr } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBarr />
      <Routes>
        <Route  path="/" element= {<ItemListContainer/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
