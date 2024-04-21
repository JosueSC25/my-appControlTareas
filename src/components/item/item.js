import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './item.scss'

function Item() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Text className='fw-bold'>
        NAME:</Card.Text>
        <Card.Text>Realizar Proyecto</Card.Text>
        <Card.Text className='fw-bold'>
          DESCRIPTION:
        </Card.Text>
        <Card.Text>
          Elaborar proyecto del curso de DAW
        </Card.Text>
        <Card.Text className='fw-bold'>
          DUE DATE:
        </Card.Text>
        <Card.Text>
          20/04/2024
        </Card.Text>
        <div className="d-grid gap-2">
        <Button variant="warning" size="lg">Remove</Button>
        </div>
        </Card.Body>
    </Card>
  );
}

export default Item;