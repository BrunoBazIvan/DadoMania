//importe todo lo nesesario 
import './ItemListContainer.css';
import React, { useEffect, useState } from 'react';
import {ItemCard} from '../ItemCard'; // Importar el componente ItemCard
import "./ItemListContainer.css"
// funcion de renderizado
export function ItemListContainer() {

  // defino el useState para ayudarme a definir un estado del componente
  const [productos, setProductos] = useState([]);

  // Utlilizo para cambiar el estado del producto
  useEffect(() => {
    fetch("../../json/recursos.json")
      .then(response => response.json())
      .then(data => setProductos(data.productos))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  //renderizo el componente
  return (
    <>
      <h1 className='d-flex justify-content-center mt-5'>Dado Mania</h1>
      <div className='d-flex align-content-around flex-wrap container mt-5'>
      {
        productos.length > 0 && 
        productos.map((producto, index) => (
          <ItemCard key={index} producto={producto} />
        ))
      }
      </div>

    </>
  );
}