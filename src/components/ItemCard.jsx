import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'react-bootstrap';

 export function ItemCard({ producto }) {
  return (
    <Card style={{ width: '18rem' }}>
      <CardImg variant="top" src={producto.img} />
      <CardBody>
        <CardTitle>{producto.name}</CardTitle>
        <CardText>{producto.price}</CardText>
        <Button variant="primary">Añadir al carrito</Button>
      </CardBody>
    </Card>
  );
}

