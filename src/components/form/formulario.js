import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './formulario.scss'
import { useDispatch, useSelector } from 'react-redux';
import { addGoal } from '../../reducers/goalsSlice';
import { useRef } from 'react';
import { addTask } from '../../reducers/tasksSlice';
import { changeOption } from '../../reducers/changeOptionSlice';

function Formulario(props) {

  const inputRefName =useRef();
  const inputRefDescription =useRef();
  const inputRefdueDate =useRef();

  const option = useSelector((state)=> state.option.value);
  const dispatch = useDispatch();

  const addItem = (e) => {
    e.preventDefault();
    
    if (option === "Tasks") {
      dispatch(changeOption('goals'));  
      dispatch(addGoal({
        'name': inputRefName.current.value,
        'description': inputRefDescription.current.value,
        'dueDate': inputRefdueDate.current.value
      }));
    } else {
      dispatch(changeOption('tasks'));
      dispatch(addTask({
        'name': inputRefName.current.value,
        'description': inputRefDescription.current.value,
        'dueDate': inputRefdueDate.current.value
      }));
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="nameform">
        <Form.Label>NAME</Form.Label>
        <Form.Control type="text" ref={inputRefName}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="descriptionform">
        <Form.Label >DESCRIPTION</Form.Label>
        <Form.Control type="text" ref={inputRefDescription} />
        <Form.Text className="text-muted">
          Ingresa una breve descripcion sobre la tarea
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="dateform">
        <Form.Label>DUE DATE</Form.Label>
        <Form.Control type="date" placeholder="dd/mm/aaaa" ref={inputRefdueDate} />
      </Form.Group>

      <Button variant="outline-success" type="submit" onClick={addItem}>
        ADD
      </Button>
    </Form>
  );
}

export default Formulario;