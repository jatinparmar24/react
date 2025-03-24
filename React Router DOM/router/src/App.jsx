
import { Route , Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Layout from './Components/Layout'

function App() {
 

  return (
    <>
      {/* <Navbar/>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route  index element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Services' element={<Services/>}/>
        </Route>

      </Routes>

      <Footer/>

      <Layout/> */}

      <Routes>

        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        </Route>

        <Route path='/About' element={<About/>}/>
        <Route path='/Services' element={<Services/>}/>
        {/* <Route path='/Navbar' element={<Navbar/>}/> */}
        {/* <Route path='/Footer' element={<Footer/>}/> */}

      </Routes>

     
    </>
  )
}

export default App
