import Card from "./Card"
import Child1 from "./Child"
import Navbar from "./navbar"


function App() {

  let para = {
    color:"green",fontSize:"50px"

  }
  return (
   <>
   
   <Navbar/>
   <Card/>
   <Child1 names="jatin parmar" age="23"/>

   </>
  )
}

export default App
