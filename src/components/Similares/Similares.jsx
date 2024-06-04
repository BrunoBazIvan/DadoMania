import React from "react";
import { useParams } from "react-router-dom";
import { PedirDatos } from "../PedirDatos";
import { ItemCard } from "../ItemCard";
import "./Similares.css"
export function Similares() {
    const { id } = useParams();
    const productos = PedirDatos();

    // Obtener la categoría del producto actual
    const productoActual = productos.find(producto => producto.id === id);
    const categoriaActual = productoActual ? productoActual.category : null;

    // Filtrar los productos para incluir solo aquellos de la misma categoría, pero excluyendo el producto actual
    const productosFiltrados = productos.filter(producto => producto.category === categoriaActual && producto.id !== id);

    return (
        <div className="container mt-5">
            <h3>Productos relacionados</h3>
            <div className="similarProductsContainer mt-3 bg-light">
                {productosFiltrados.length > 0 ? (
                    productosFiltrados.map((producto, index) => (
                        <ItemCard key={index} producto={producto} />
                    ))
                ) : (
                    <p>No hay productos similares</p>
                )}
            </div>
        </div>
    );
}
