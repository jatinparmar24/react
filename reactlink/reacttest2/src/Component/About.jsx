import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"


function About(){
    return(
        <>
         <h1>About Section</h1>

         <Button style={{backgroundColor:'red',fontSize:"30px"}}><Link to='/services'>To Services</Link></Button>
        
        
        </>
    )
}

export default About