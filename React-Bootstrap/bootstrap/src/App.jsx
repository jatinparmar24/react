
import './App.css'

import { Button,Col, Row } from 'react-bootstrap'
import {FaCar} from 'react-icons/fa'
import { FaCalculator } from 'react-icons/fa';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




function App() {


  return (
    <>

    <Container>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </Container>
      <h1>Welcome <FaCar style={{color:'lightskyblue', fontSize:150}}/></h1>
      <button>Click Here <FaCalculator style={{color:'crimson', fontSize:80}}/></button> <br /> <br />
      <Button>Bootstrap Button</Button>

      <Container>
        <h2>This is Container</h2>
      </Container>

      <Container fluid>
          <h2>This is Container Fluid</h2>
      </Container> <br /> <br />

      {/* <Container>
      
              <Col>
                 <h3>First column</h3>
              </Col>
      
              <Col>
                 <h3>Second column</h3>
              </Col>
      
      </Container>  <br />  <br /> */}
      

{/* responsive for all    lg for laptop , md for tablet , and sm for moblie */}

      <Container>
        <Row>
              <Col lg={6} md={6} sm={12} className='bg-primary text-white p-3'>
                 <h3>First column</h3>
                 
              </Col>
      
              <Col lg={6} md={6} sm={12} className='bg-danger text-white p-4'>
                 <h3>Second column</h3>
                 <Button variant='success'>Click Here</Button>
              </Col>
        </Row>
      </Container>

     


    </>
  )
}

export default App
