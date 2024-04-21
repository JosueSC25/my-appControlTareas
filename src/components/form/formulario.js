import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './formulario.scss'


function Formulario() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="nameform">
        <Form.Label>NAME</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="descriptionform">
        <Form.Label >DESCRIPTION</Form.Label>
        <Form.Control type="text" />
        <Form.Text className="text-muted">
          Ingresa una breve descripcion sobre la tarea
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="dateform">
        <Form.Label>DUE DATE</Form.Label>
        <Form.Control type="text" placeholder="dd/mm/aaaa" />
      </Form.Group>

      <Button variant="outline-success" type="submit">
        ADD GOAL
      </Button>
    </Form>
  );
}

export default Formulario;