import './ItemListContainer.css';
import Form from 'react-bootstrap/Form';

export function ItemListContainer({Categoria1, Categoria2, Categoria3}) {
  return (
    <div className="ItemListContainer">
        <Form.Select aria-label="Categorias" size='lg' className="CategorySelect">
            <option value="1">{Categoria1}</option>
            <option value="2">{Categoria2}</option>
            <option value="3">{Categoria3}</option>
        </Form.Select>
    </div>

  );
}
