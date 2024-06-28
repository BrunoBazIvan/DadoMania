import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import { Form, useParams } from 'react-router-dom';
import "./ProductoExtendido.css"
import { CarritoContext } from '../../Context/CarritoContext';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config'

export const ProductoExtendido = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const {carrito, agregarAlCarrito} = useContext(CarritoContext)
    console.log (carrito)
    const [cantidad, setCantidad] = useState(1);

    useEffect(() => {
        const productosRef = collection(db, 'productos');
        getDocs(productosRef).then((resp) => {
          const productos = resp.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          const productoEncontrado = productos.find(p => p.id === id);
          if (productoEncontrado) {
            setItem(productoEncontrado);
          }
        });
      }, [id]);

    useEffect(()=>{
        if (item && id !== item.id){
            resetCantidad()
        }
    },[id, item])

    if (!item) {
        return <div className="loader-container">
        <svg viewBox="25 25 50 50">
            <circle r="20" cy="50" cx="50"></circle>
        </svg>
    </div>;
    }

//funcion resetear Cantidad
    const resetCantidad =()=>{
        setCantidad(cantidad - cantidad + 1)
    }  
// Suma 1 a la cantidad del producto
    const sumar = () =>{
        setCantidad(cantidad + 1)
    } 
// Resta 1 a la cantidad de producto
    const restar = () => {
        if(cantidad > 1){
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
                    <Button variant='primary' onClick={() => {agregarAlCarrito(item, cantidad), resetCantidad() }}>Comprar</Button>
                </div>
            </div>
        </div>
    );
}