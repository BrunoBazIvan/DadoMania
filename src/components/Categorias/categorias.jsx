import React, { useEffect, useState } from 'react';
import { ItemCard } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';
import "./categorias.css"

export function Categorias() {
  const { category } = useParams(); // Obtener la categoría de la URL
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para manejar la carga de datos

  useEffect(() => {
    const fetchProductos = async () => {
      // Crear una consulta a Firebase para obtener productos de una categoría específica
      const q = query(collection(db, 'productos'), where('category', '==', category));
      const querySnapshot = await getDocs(q); // Obtener los documentos que cumplen con la consulta

      // Mapear los documentos a objetos que contienen los datos del producto
      const productos = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setProductosFiltrados(productos); // Actualizar el estado con los productos filtrados
      setLoading(false); // Cambiar el estado de carga a falso
    };

    fetchProductos(); // Llamar a la función para obtener los productos
  }, [category]); // Ejecutar este efecto cuando cambia la categoría

  if (loading) {
    return <div className="loader-container">
    <svg viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
    </svg>
  </div>;;
  }

  return (
    <>
      <h1 className='d-flex justify-content-center mt-5'>Dado Mania</h1>
      <div className='d-flex align-content-around flex-wrap container mt-5'>
        {
          productosFiltrados.length > 0 ?
            productosFiltrados.map((producto) => (
              <ItemCard key={producto.id} producto={producto} />
            )) :
            <p>No hay productos en esta categoría</p>
        }
      </div>
    </>
  );
}
