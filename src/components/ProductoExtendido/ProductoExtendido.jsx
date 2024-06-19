import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./ProductoExtendido.css"
import { PedirDatos } from '../PedirDatos';
import { CarritoContext } from '../../Context/CarritoContext';


export const ProductoExtendido = () => {
    const { id } = useParams();
    const [productoEncontrado, setProductoEncotrado] = useState(null);
    const productos = PedirDatos();
    const {carrito, setCarrito} = useContext(CarritoContext)
    console.log (carrito)

    useEffect(() => { 
        if (productos.length > 0) {
            const producto = productos.find(p => p.id === id);
            setProductoEncotrado(producto);
        }
    }, [id, productos]);

    if (!productoEncontrado) {
        return <div>Cargando...</div>;
    }
     
    const PushearItemEncontrado = () => {
        carShop.push(productoEncontrado);
    }

    
    return (
        <div className='container mt-5'>
            <div className='d-flex descripton'>
                <CardImg src={productoEncontrado.img} className='img-fluid w-50' />
                <div className="container">
                    <h2>{productoEncontrado.name}</h2>
                    <span className="price">${productoEncontrado.price}</span>
                    <CardText>{productoEncontrado.description}</CardText>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In fugiat, iusto nemo, minima sapiente numquam ducimus dolorem dolores, culpa quisquam molestias accusantium recusandae atque? Quo neque modi ad qui velit?</p>
                    <Button variant='primary' onClick={PushearItemEncontrado}>Comprar</Button>
                </div>
            </div>
        </div>
    );
}
