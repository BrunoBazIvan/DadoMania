import { useEffect, useState } from "react";

export const PedirDatos = () =>{
    const [productos , setProductos] = useState([]);

    useEffect(()=>{
        fetch("../json/recursos.json")
        .then(respose => respose.json())
        .then (data => setProductos(data.productos))
        .catch(error => console.error('Error fetching data:', error));

    }, []);

    return productos;

}