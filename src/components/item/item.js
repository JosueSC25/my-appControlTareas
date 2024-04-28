import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './item.scss'
import { useDispatch } from 'react-redux';
import { removeGoal } from '../../reducers/goalsSlice';

function Item(props) {
  const dispatch=useDispatch();
  const handleRemoveGoal =()=>{
    dispatch(removeGoal({ name: props.name }));
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Text className='fw-bold'>
        NAME:</Card.Text>
        <Card.Text>{props.name}</Card.Text>
        <Card.Text className='fw-bold'>
          DESCRIPTION:
        </Card.Text>
        <Card.Text>
        {props.description}
        </Card.Text>
        <Card.Text className='fw-bold'>
          DUE DATE:
        </Card.Text>
        <Card.Text>
        {props.dueDate}
        </Card.Text>
        <div className="d-grid gap-2">
        <Button variant="warning" size="lg" onClick={handleRemoveGoal}>Remove</Button>
        </div>
        </Card.Body>
    </Card>
  );
}

export default Item;