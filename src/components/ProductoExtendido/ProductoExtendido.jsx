import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./ProductoExtendido.css"
import { PedirDatos } from '../PedirDatos';


export const ProductoExtendido = () => {

    const [productoEncontrado, setProductoEncotrado] = useState(null);
    const productos = PedirDatos();
    const { id } = useParams();

    useEffect(() => { 
        if (productos.length > 0) {
            const producto = productos.find(p => p.id === id);
            setProductoEncotrado(producto);
        }
    }, [id, productos]);

    if (!productoEncontrado) {
        return <div>Cargando...</div>;
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
                    <Button variant='primary'>Comprar</Button>
                </div>
            </div>
            <div>Carusel similares</div>
        </div>
    );
}