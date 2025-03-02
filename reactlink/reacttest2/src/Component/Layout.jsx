

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Outlet } from 'react-router-dom';

function Layout(){
    return(
        <>
               <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><li><Link to='/'>Home</Link></li></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <li> <Link to='About'>About</Link></li>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><li><Link to='Services'>Services</Link></li></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


       <nav>
        <ul> <h2>LOGO</h2></ul>
        <ul>
            {/* <li><Link to='/'>Home</Link></li>
            <li> <Link to='About'>About</Link></li>
            <li><Link to='Services'>Services</Link></li> */}
        </ul>
       </nav>
         
         <div>
            <Outlet/>
         </div>

         <div> 
          <h1>Footer</h1>
         </div>
        
        </>
    )
}

export default Layout