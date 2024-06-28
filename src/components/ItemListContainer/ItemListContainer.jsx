//importe todo lo nesesario 
import './ItemListContainer.css';
import React, { useEffect, useState } from 'react';
import {ItemCard} from '../ItemCard/ItemCard'; // Importar el componente ItemCard
import "./ItemListContainer.css"
import { collection } from 'firebase/firestore';
import { db } from '../../firebase/config'
import { getDocs } from 'firebase/firestore';

// funcion de renderizado
export function ItemListContainer() {
  const [productos, setProductos]= useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(()=>{
    const productosRef = collection(db, "productos");
    getDocs(productosRef)
    .then((resp)=>{
      setProductos(
        resp.docs.map((doc)=>{
          return {...doc.data(), id: doc.id};
        })
      )
      setLoading(false)
    });
    
  }, [])

  if(loading){
    return <div className="loader-container">
    <svg viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
    </svg>
  </div>;;
  }
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