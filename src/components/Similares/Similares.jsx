import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemCard } from "../ItemCard/ItemCard";
import "./Similares.css";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';

export function Similares() {
    const { id } = useParams(); // Obtiene el ID del producto desde la URL
    const [productos, setProductos] = useState([]); // Estado para almacenar los productos obtenidos de Firestore
    const [categoriaActual, setCategoriaActual] = useState(null); // Estado para almacenar la categoría del producto actual
    const [productosFiltrados, setProductosFiltrados] = useState([]); // Estado para almacenar los productos filtrados

    useEffect(() => {
        const productosRef = collection(db, 'productos'); // Referencia a la colección "productos" en Firestore
        getDocs(productosRef).then((resp) => {
            const productos = resp.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Mapea los documentos a objetos con `id` y datos
            setProductos(productos); // Establece los productos en el estado

            const productoActual = productos.find(producto => producto.id === id); // Encuentra el producto actual por ID
            if (productoActual) {
                setCategoriaActual(productoActual.category); // Establece la categoría del producto actual en el estado
            }
        });
    }, [id]); // Ejecuta el efecto cuando el ID cambia

    useEffect(() => {
        if (categoriaActual) { // Si la categoría del producto actual está establecida
            const productosFiltrados = productos.filter(producto => producto.category === categoriaActual && producto.id !== id); // Filtra los productos de la misma categoría, excluyendo el producto actual
            setProductosFiltrados(productosFiltrados); // Establece los productos filtrados en el estado
        }
    }, [categoriaActual, productos, id]); // Ejecuta el efecto cuando la categoría actual, los productos o el ID cambian
    
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
