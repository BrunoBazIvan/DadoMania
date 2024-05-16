import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import  { NavBarr } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
    <NavBarr />
    <ItemListContainer
    Categoria1={'Paquetes'}
    Categoria2={'Dies caras'}
    Categoria3={'Todos'}
    />
    </>
  )
}

export default App
