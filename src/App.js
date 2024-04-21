import logo from './logo.svg';
import './App.scss';
//import 'bootstrap/dist/scss/bootstrap.min.scss';
import Item from './components/item/item';
import Menu from './components/menu/menu';
import Formulario from './components/form/formulario';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Container>
      <Row>
        <Col><Formulario></Formulario></Col>
        <Col><Item></Item>
              <Item></Item>
              <Item></Item>
        </Col>
      </Row>
    </Container>

    </div>
  );
}

export default App;
