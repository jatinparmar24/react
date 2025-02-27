

import { Link } from "react-router-dom"

function Navbar(){
    return(
        <>
        <nav id='navbar'>
            <h1>LOGO</h1>
            <ul>
                <li><Link to='/' style={{textDecoration:'none' ,color:'white',fontSize:"25px"}}>Home</Link ></li>
                <li><Link to='about' style={{textDecoration:'none' ,color:'white',fontSize:"25px"}}>About</Link></li>
                <li><Link to='services' style={{textDecoration:'none' ,color:'white',fontSize:"25px"}}>Services</Link></li>
            </ul>
        </nav>
        
        </>
    )
}

export default Navbar