import React from 'react';
import { ItemCard } from '../ItemCard';
import { PedirDatos } from '../PedirDatos';

export function Similares({ category }) {
    const productos = PedirDatos();

    const productosFiltrados = category
    ? productos.filter(producto => producto.category === category)
    : productos;

    return(
    <div>
        <div className='d-flex align-content-around flex-wrap container mt-5'>
                {
                    productosFiltrados.length > 0 ? 
                    productosFiltrados.map((producto, index) => (
                        <ItemCard key={index} producto={producto} />
                )) : 
            <p>No hay productos en esta categoría</p>
                }   
        </div>
    </div>
    )
}