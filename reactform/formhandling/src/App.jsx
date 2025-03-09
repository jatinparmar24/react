
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Form from './Component/Form'

import Oneusestate from './Component/OneuseState'
import Login from './Component/Login'





function App() {
  

  return (
    <>
    <Routes>
       <Route index element={<Oneusestate/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/form' element={<Form/>}/>
       


    </Routes>
    
    
   
    </>
  )
}

export default App
