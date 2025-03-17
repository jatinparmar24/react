
import { Route , Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import User from './Component/User'


function App() {
  

  return (
    <>
     <Routes>
        <Route path='/' element={<Navbar/>}>
            <Route index element={<Hero/>}/>
            {/* <Route path='/user/:details?/:age?' element={<User/>}/> */}
            <Route path='/user' element={<User/>}>
            <Route path=':id' element={<User/>}/>
            </Route>
        </Route>
     </Routes>
    </>
  )
}

export default App
