import { CardText } from 'react-bootstrap';
import './ItemListContainer.css';
import React, { useEffect, useState } from 'react';


 export function ItemListContainer() {
  const [productos, setProductos] = useState ([]);

  useEffect(() => {
      fetch("")
      .then(response => response.json())
      .then(data => setProductos(data.productos.dados))
      .catch(error => console.error("error fetching data:", error))
  }, []);

    return (
      <div className="App">
        <h1>Lista de Productos</h1>
        <ul>
          {productos.map((producto, index) => {
            const key = Object.keys(producto)[0]; // Obtiene la clave del producto, por ejemplo, 'D1'
            const details = producto[key]; // Obtiene los detalles del producto usando la clave
    
            // Renderiza cada producto en un elemento <li>
            return (
              <li key={index}> {/* 'key' es una propiedad especial en React que ayuda a identificar elementos únicos */}
                <h2>{details.name}</h2>
                <p>Categoría: {details.category}</p>
                <p>Precio: {details.price}</p>
                <p>Fecha: {details.date}</p>
                <img src={details.img} alt={details.name} width="100" />
              </li>
            );
          })}
        </ul>
      </div>
    );
}
