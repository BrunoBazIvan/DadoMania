import { useState, useContext} from "react"
import { useForm } from "react-hook-form"
import Form from 'react-bootstrap/Form';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { CarritoContext } from '../../Context/CarritoContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config'

export const Compra = () => {
    const [phone, setPhone] = useState('');
    const {carrito, vaciarCarrito, totalCarrito} = useContext(CarritoContext);
    const {register, handleSubmit, setValue } = useForm();

    const comprar = (data) =>{
      const pedido ={
        cliente: data,
        productos: carrito,
        total: totalCarrito()
      }
      console.log(pedido)

      const pedidosRef = collection(db, "pedidos");

      addDoc(pedidosRef, pedido)
        .then((doc)=>{
          vaciarCarrito()
        })
    }

  return (
    <div className="container">
      <Form className="formulario" onSubmit={handleSubmit(comprar)}>
        <Form.Group className="mb-3 w-75" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" {...register("email")}/>
        </Form.Group>
        <Form.Group className="mb-3 w-75" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="pepe" {...register("nombre")}/>
        </Form.Group>
        <Form.Group className="mb-3 w-75" controlId="exampleForm.ControlInput1">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Altos de la laguna calle 1 y 2" {...register("dirrección")}/>
        </Form.Group>
        <Form.Group className="mb-3 w-75" controlId="exampleForm.ControlInput1" >
          <Form.Label>phone</Form.Label>
          <PhoneInput
              defaultCountry="uy"
              value={phone}
              onChange={(phone) => {
                  setPhone(phone);
                  setValue('telefono', phone); // Aquí se actualiza el valor del teléfono en el useForm
              }}
          />
        </Form.Group>
        <button className="enviar" type="submite">Comprar</button>
      </Form>


    </div>
  );
}