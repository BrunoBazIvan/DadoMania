import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./ProductoExtendido.css"
import { PedirDatos } from '../PedirDatos';
import { CarritoContext } from '../../Context/CarritoContext';


export const ProductoExtendido = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const productos = PedirDatos();
    const {carrito, agregarAlCarrito} = useContext(CarritoContext)
    console.log (carrito)
    const [cantidad, setCantidad] = useState(0)

    useEffect(() => { 
        if (productos.length > 0) {
            const producto = productos.find(p => p.id === id);
            setItem(producto);
        }
    }, [id, productos]);

    if (!item) {
        return <div>Cargando...</div>;
    }
       
    const sumar = () =>{
        setCantidad(cantidad + 1)
    } 
    const restar = () => {
        if(cantidad > 0){
            setCantidad(cantidad - 1) 
        }
    } 

    return (
        <div className='container mt-5'>
            <div className='d-flex descripton'>
                <CardImg src={item.img} className='img-fluid w-50' />
                <div className="container">
                    <h2>{item.name}</h2>
                    <span className="price">${item.price}</span>
                    <CardText>{item.description}</CardText>
                </div>
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, saepe modi molestias autem similique architecto eaque ratione. Modi omnis itaque recusandae, vero deserunt hic, iure sint quidem quia consequatur dicta.</p>
                    <div className='d-flex mb-3 mt-3 '>
                        <Button onClick={restar}>-</Button>
                        <div className='numerCantidad'>{cantidad}</div>
                        <Button onClick={sumar}>+</Button>
                    </div>
                    <Button variant='primary' onClick={() => {agregarAlCarrito(item, cantidad)}}>Comprar</Button>
                </div>
            </div>
        </div>
    );
}
