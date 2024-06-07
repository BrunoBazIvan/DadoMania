//importe todo lo nesesario 
import './ItemListContainer.css';
import React, { useEffect, useState } from 'react';
import {ItemCard} from '../ItemCard/ItemCard'; // Importar el componente ItemCard
import "./ItemListContainer.css"
import { PedirDatos } from '../PedirDatos';
// funcion de renderizado
export function ItemListContainer() {


  const productos = PedirDatos();
  
  return (
    <>
      <h1 className='d-flex justify-content-center mt-5'>Dado Mania</h1>
      <div className='d-flex align-content-around flex-wrap container mt-5'>
      {
        productos.length > 0 && 
        productos.map((producto, index) => (
          <ItemCard key={index} producto={producto} />
        ))
      }
      </div>

    </>
  );
}