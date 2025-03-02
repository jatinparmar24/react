import './App.css'

import Child1 from "./Component/Child1"

import { createContext } from 'react'

import Compo1 from './Comp/Compo1'
import Use1 from './UseContext/Use1'





let cdata=createContext()
let name="jatin Parmar"


function App() {
  

  return (
    <>
        <cdata.Provider value={name}>
          <Child1/>
        </cdata.Provider>


      
      <Compo1/>

      <Use1/>
      
    </>
  )
}

export default App
export {cdata}
