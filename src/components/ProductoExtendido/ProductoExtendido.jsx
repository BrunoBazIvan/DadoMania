import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./ProductoExtendido.css"

export const ProductoExtendido = () => {

    const [producto, setProducto] = useState(null);
    const { id } = useParams();

    useEffect(() => {
      fetch("../../json/recursos.json")
        .then(response => response.json())
        .then(data => {
             // Encuentra el producto por su ID
          const productoEncontrado = data.productos.find(p => p.id === id);
          // Asigna el producto encontrado al estado
          setProducto(productoEncontrado);}
        )
        .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    if (!producto) {
      return <div>Cargando...</div>;
    }

    return (
        <div className='container mt-5'>
            <div className='d-flex descripton'>
                <CardImg src={producto.img} className='img-fluid w-50'/>
                <div className="container">
                    <h2>{producto.name}</h2>
                    <spam className="price">${producto.price}</spam>
                    <CardText>{producto.description}</CardText>
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