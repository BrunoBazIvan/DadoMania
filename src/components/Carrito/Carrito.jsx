import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function Carrito() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNNyAyMnEtLjgyNSAwLTEuNDEyLS41ODdUNSAyMHQuNTg4LTEuNDEyVDcgMTh0MS40MTMuNTg4VDkgMjB0LS41ODcgMS40MTNUNyAyMm0xMCAwcS0uODI1IDAtMS40MTItLjU4N1QxNSAyMHQuNTg4LTEuNDEyVDE3IDE4dDEuNDEzLjU4OFQxOSAyMHQtLjU4NyAxLjQxM1QxNyAyMk01LjIgNGgxNC43NXEuNTc1IDAgLjg3NS41MTN0LjAyNSAxLjAzN2wtMy41NSA2LjRxLS4yNzUuNS0uNzM3Ljc3NVQxNS41NSAxM0g4LjFMNyAxNWgxMXEuNDI1IDAgLjcxMy4yODhUMTkgMTZ0LS4yODguNzEzVDE4IDE3SDdxLTEuMTI1IDAtMS43LS45ODd0LS4wNS0xLjk2M0w2LjYgMTEuNkwzIDRIMnEtLjQyNSAwLS43MTItLjI4OFQxIDN0LjI4OC0uNzEyVDIgMmgxLjYyNXEuMjc1IDAgLjUyNS4xNXQuMzc1LjQyNXoiLz48L3N2Zz4=" alt="Carrito compras" />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}