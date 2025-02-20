
import { Route , Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'

function App() {
 

  return (
    <>
      
      <Routes>

        <Route  index element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Services' element={<Services/>}/>
        


      </Routes>

     
    </>
  )
}

export default App
