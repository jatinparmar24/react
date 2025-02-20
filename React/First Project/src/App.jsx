
import About from "./About"
import Contact from "./Contact"
import Gallery  from "./Gallery"
import Help from "./Help"
import Home from "./Home"
import Services from "./services "
import {Try as Tree,Mobile} from "./Mobile"
// we can change the name if we want to change but with as


function App() {

  return (

    // can't leave return empty
    // have to place element in div,section , or an empty tags for multiple tags

  <div>

     <h1>Hello World</h1>
     <h1>Hiiii</h1>


     <About/>
     <Mobile/>
     <Contact/>
     <Gallery/>
     <Help/>
     <Home/>
     <Services/>
     <Tree/> 
     
     
  </div>

  )
  
}

export default App
