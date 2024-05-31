import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


 export function ItemCard({ producto }) {


  return (
    <div className='m-3'>
        <Card style={{ width: '18rem' }} >
        <CardImg variant="top" src={producto.img} />
        <CardBody>
            <CardTitle>{producto.name}</CardTitle>
            <CardText>{producto.price}</CardText>
            <Link to={`producto/${producto.id}`}><Button variant="primary">Ver Mas</Button></Link>
           
        </CardBody>
        </Card>
    </div>
  );
}

