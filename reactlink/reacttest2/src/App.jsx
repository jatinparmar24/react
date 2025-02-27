
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './App.css'
import Layout from './Component/Layout';
import Home from './Component/Home';
import About from './Component/About';
import Services from './Component/Services';
import { Route, Routes } from 'react-router-dom';
import Gallery from './Component/Gallery';


function App() {

  return (
  
     <>
     <Routes>

      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={ <Services/>}/>
      <Route path='/gallery' element={<Gallery/>}/>

      </Route>


     </Routes>
      
     
     </>
  )
}

export default App
