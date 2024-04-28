import logo from './logo.svg';
import './App.scss';
//import 'bootstrap/dist/scss/bootstrap.min.scss';
import Item from './components/item/item';
import Menu from './components/menu/menu';
import Formulario from './components/form/formulario';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';

const tareas = [{
  name:'Terminar proyecto de curso',
  description:'Realizar todas las actividades',
  dueDate:'25/04/2024'
},
{
  name:'Terminar proyecto de curso2',
  description:'Realizar todas las actividades2',
  dueDate:'26/04/2024'
},
{
  name:'Terminar proyecto de curso3',
  description:'Realizar todas las actividades3',
  dueDate:'27/04/2024'
}]

function App() {
  const goals = useSelector((state)=>state.goals.value);
  const tasks = useSelector((state)=>state.tasks.value);
  return (
    <div className="App">
      <Menu></Menu>
      <Container>
      <Row>
        <Col xs={0} md={0} className='d-none d-sm-block d-sm-none d-md-block '><Formulario></Formulario>
        </Col>
        <Col xs={0} sm={0}>
          <Row>
            <div className='scrolling'>
              {goals.map((tarea, index)=>(
               <Item key= {index} name={tarea.name} description={tarea.description}
                  dueDate={tarea.dueDate}/>
          ))}
         </div>
          </Row>
        </Col> 
      </Row>
    </Container>
    </div>
  );
}

export default App;
