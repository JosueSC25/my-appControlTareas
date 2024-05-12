import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './menu.scss';
import { useSelector, useDispatch } from 'react-redux';
import { changeOption } from '../../reducers/changeOptionSlice';

function Menu() {
  const option = useSelector((state)=> state.option.value);
  const dispatch = useDispatch();

  const changeOptionFunction = (e) =>{
    e.preventDefault();
      if(option === 'tasks')
        dispatch(changeOption('goals'));
      else
        dispatch(changeOption('tasks'))
  }

  return (
    <Navbar expand="lg" className="navbar navbar-dark bg-dark" id='barraMenu'>
      <Container>
        <Navbar.Brand href="#home">GALILEO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link eventKey='tasks' onClick={changeOptionFunction}>TASKS</Nav.Link>
            <Nav.Link eventKey='goals' onClick={changeOptionFunction}>GOALS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;