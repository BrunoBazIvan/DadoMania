
import React, { useEffect, useState } from 'react';
import {ItemCard} from '../ItemCard'; // Importar el componente ItemCard
import { useParams } from 'react-router-dom';
// funcion de renderizado
export function Categorias() {

  // defino el useState para ayudarme a definir un estado del componente
  const [productos, setProductos] = useState([]);
  const { category } = useParams();
  // Utlilizo para cambiar el estado del producto
  useEffect(() => {
    fetch("../../json/recursos.json")
      .then(response => response.json())
      .then(
        data =>{
            const productosFiltrados = data.productos.filter(producto => producto.category === category);
        setProductos(productosFiltrados)
        }
      )
      .catch(error => console.error('Error fetching data:', error));
  }, [category]);
  //renderizo el componente
  return (
    <>
      <h1 className='d-flex justify-content-center mt-5'>Dado Mania</h1>
      <div className='d-flex align-content-around flex-wrap container mt-5'>
        {
          productos.length > 0 ? 
          productos.map((producto, index) => (
            <ItemCard key={index} producto={producto} />
          )) : 
          <p>No hay productos en esta categoría</p>
        }
      </div>
    </>
  );

}