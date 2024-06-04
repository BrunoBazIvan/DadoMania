
import React, { useEffect, useState } from 'react';
import {ItemCard} from '../ItemCard'; // Importar el componente ItemCard
import { useParams } from 'react-router-dom';
import { PedirDatos } from '../PedirDatos';

// funcion de renderizado
export function Categorias() {

  const [productosFiltrados, setProductosFiltrados] = useState([]);
  // Obtener todos los productos usando la función PedirDatos
  const productos = PedirDatos();
    // Obtener el parámetro de la categoría desde la URL
  const { category } = useParams();
  // Estado para manejar la carga de datos
  const [loading, setLoading] = useState(true); 


    // useEffect para filtrar los productos cuando cambian la categoría o los productos
  useEffect(() => {
    if (productos.length > 0) {
      const filtrados = productos.filter(producto => producto.category === category);
      setProductosFiltrados(filtrados);
      setLoading(false); // Datos cargados
    } else {
      setLoading(true); // Aún cargando datos
    }
  }, [category, productos]);


  if (loading) {
    return <p className='d-flex justify-content-center mt-5'>Cargando productos...</p>;
  }


  return (
    <>
      <h1 className='d-flex justify-content-center mt-5'>Dado Mania</h1>
      <div className='d-flex align-content-around flex-wrap container mt-5'>
        {
          productosFiltrados.length > 0 ? 
          productosFiltrados.map((producto, index) => (
            <ItemCard key={index} producto={producto} />
          )) : 
          <p>No hay productos en esta categoría</p>
        }
      </div>
    </>
  );

}