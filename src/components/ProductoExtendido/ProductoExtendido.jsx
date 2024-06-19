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
     
    const handleAgregar = () => {
        const itemAgregado = { ...productoEncontrado }
        const estaEnCarrito = carrito.find((productoEncontrado)=> productoEncontrado.id === itemAgregado.id)

        if(estaEnCarrito){
            console.log('esta en el carrito bro')
        }else{
            console.log('no esta bro')
        }

        setCarrito(prevCarrito => ([...prevCarrito, itemAgregado]));
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
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, saepe modi molestias autem similique architecto eaque ratione. Modi omnis itaque recusandae, vero deserunt hic, iure sint quidem quia consequatur dicta.</p>
                    <div className='d-flex mb-3 mt-3'>
                        <Button >-</Button>
                        <p>numerito</p>
                        <Button>+</Button>
                    </div>
                    <Button variant='primary' onClick={handleAgregar}>Comprar</Button>
                </div>
            </div>
        </div>
    );
}
