import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"


function Services(){
    return(
        <>

        <h1>Services Section</h1>

        <Button style={{backgroundColor:'red',fontSize:"30px"}}><Link to='/gallery'>To Gallery</Link></Button>
        
        </>
    )
}

export default Services